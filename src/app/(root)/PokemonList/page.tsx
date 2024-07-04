"use client";

import PokemonCard from "@/components/PokemonCard";
import { useObserver } from "@/hooks/useObserver";
import { usePokemonInfiniteQuery } from "@/hooks/usePokemonInfiniteQuery";
import { Pokemon } from "@/type/Pokemon";
import { Spinner } from "@nextui-org/spinner";
import Link from "next/link";
import { useRef } from "react";

function PokemonList() {
  const bottom = useRef<HTMLDivElement>(null);
  const {
    data: pokemonList,
    fetchNextPage,
    status,
  } = usePokemonInfiniteQuery();

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
