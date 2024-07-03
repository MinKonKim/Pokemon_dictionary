"use client";

import PokemonCard from "@/components/PokemonCard";
import { Pokemon } from "@/type/Pokemon";
import { Spinner } from "@nextui-org/spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

function PokemonList() {
  const {
    data: pokemonList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: async () => {
      const response = await axios.get<Pokemon[]>("/api/pokemons");
      return response.data;
    },
  });
  if (isLoading) {
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
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        오류 입니다...
      </div>
    );
  }

  return (
    <div className="mx-0 bg-[#121212]">
      <h1 className="p-4 font-semibold text-3xl flex justify-center text-slate-100">
        포켓몬 도감
      </h1>
      <div className="text-slate-100 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
        {pokemonList?.map((pokemon: Pokemon) => (
          <Link key={pokemon.id} href={`/pokemons/${pokemon.id}`}>
            <PokemonCard {...pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
