"use client";

import PokemonCard from "@/components/PokemonCard";
import { Pokemon } from "@/type/Pokemon";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

// 포켓몬 리스트 받아오기
const fetchPokemonList = async () => {
  try {
    const response = await axios.get<Pokemon[]>("/api/pokemons");
    return response.data;
  } catch (error) {
    console.error("포켓몬 리스트 받아오는 중 에러 발생 ", error);
    throw error;
  }
};

function PokemonList() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonList();
      setPokemonList(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-0 bg-[#121212]">
      <h1 className="p-4 font-semibold text-3xl flex justify-center text-slate-100">
        포켓몬 도감
      </h1>
      <div className="text-slate-100 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
        {pokemonList.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokemons/${pokemon.id}`}>
            <PokemonCard {...pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
