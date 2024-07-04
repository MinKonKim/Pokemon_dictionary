"use client";

import PokemonCard from "@/components/PokemonCard";
import { useObserver } from "@/hooks/useObserver";
import { Pokemon } from "@/type/Pokemon";
import { Spinner } from "@nextui-org/spinner";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRef } from "react";

function PokemonList() {
  const bottom = useRef<HTMLDivElement>(null);
  const {
    data: pokemonList,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: async ({ pageParam }) => {
      const response = await axios.get<Pokemon[]>(
        `/api/pokemons?startIndex=` + pageParam
      );
      console.log(`/api/pokemons?startIndex=` + pageParam);
      console.log(response.data);
      return response.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 36;
    },
  });

  const onIntersect = ([entry]: IntersectionObserverEntry[]) =>
    entry.isIntersecting && fetchNextPage();
  useObserver({
    target: bottom,
    onIntersect,
  });

  if (status === "pending") {
    return (
      <div className="flex justify-center items-center h-screen bg-[#121212]">
        <Spinner
          label="Loading..."
          color="default"
          size="lg"
          labelColor="primary"
        />
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="flex justify-center items-center h-screen">
        오류 입니다...
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="mx-0 bg-[#121212]">
        <h1 className="p-4 font-semibold text-3xl flex justify-center text-slate-100">
          포켓몬 도감
        </h1>
        <div className="text-slate-100 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
          {pokemonList?.pages
            ?.flatMap((page) => page)
            .map((pokemon: Pokemon) => (
              <Link key={pokemon.id} href={`/pokemons/${pokemon.id}`}>
                <PokemonCard {...pokemon} />
              </Link>
            ))}
        </div>
        <div ref={bottom} />
      </div>
    );
  }
}

export default PokemonList;
