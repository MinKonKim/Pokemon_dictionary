"use client";

import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import PokemonCard from "@/components/PokemonCard";
import { useObserver } from "@/hooks/useObserver";
import { usePokemonInfiniteQuery } from "@/hooks/usePokemonInfiniteQuery";
import { Pokemon } from "@/type/Pokemon";
import Link from "next/link";
import { useRef } from "react";

function PokemonList() {
  const bottom = useRef<HTMLDivElement>(null);
  const {
    data: pokemonList,
    fetchNextPage,
    status,
    hasNextPage,
  } = usePokemonInfiniteQuery();

  const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  };

  useObserver({ target: bottom, onIntersect });

  if (status === "pending") {
    return <Loading message="포켓몬 데이터를 가져오고 있습니다." />;
  }

  if (status === "error") {
    return <Error message="데이터를 가져오는 중 에러가 발생했습니다." />;
  }

  const pokemonData = pokemonList?.pages?.flatMap((page) => page) || [];

  return (
    <div className="mx-0 bg-[#121212]">
      <h1
        className="p-4 font-semibold text-3xl flex justify-center text-slate-100"
        aria-label="포켓몬 도감"
      >
        포켓몬 도감
      </h1>
      <div className="text-slate-100 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
        {pokemonData.map((pokemon: Pokemon) => (
          <Link key={pokemon.id} href={`/pokemons/${pokemon.id}`}>
            <PokemonCard {...pokemon} />
          </Link>
        ))}
      </div>
      <div ref={bottom} className="h-5" />
    </div>
  );
}

export default PokemonList;
