"use client";

import PokemonCard from "@/components/PokemonCard";
import { useObserver } from "@/hooks/useObserver";
import { usePokemonInfiniteQuery } from "@/hooks/usePokemonInfiniteQuery";
import { Pokemon } from "@/type/Pokemon";
import { Spinner } from "@nextui-org/spinner";
import classNames from "classnames";
import throttle from "lodash/throttle";
import Link from "next/link";
import { useRef } from "react";

function PokemonList() {
  const bottom = useRef<HTMLDivElement>(null);
  const {
    data: pokemonList,
    fetchNextPage,
    status,
  } = usePokemonInfiniteQuery();

  const onIntersect = throttle(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) fetchNextPage();
  }, 300);

  useObserver({ target: bottom, onIntersect });

  const containerClass = classNames(
    "mx-0 bg-[#121212]",
    "text-slate-100 mx-auto grid grid-cols-1",
    "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1"
  );

  if (status === "pending") {
    return (
      <div className="flex justify-center items-center h-screen bg-[#121212]">
        <Spinner
          label="데이터를 불러오는 중입니다..."
          size="lg"
          color="primary"
        />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl text-red-500">
          데이터를 불러오는 데 실패했습니다.
        </p>
      </div>
    );
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
      <div className={containerClass}>
        {pokemonData.map((pokemon: Pokemon) => (
          <Link key={pokemon.id} href={`/pokemons/${pokemon.id}`}>
            <PokemonCard {...pokemon} />
          </Link>
        ))}
      </div>
      <div ref={bottom} />
    </div>
  );
}

export default PokemonList;
