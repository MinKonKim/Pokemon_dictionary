import axios from "axios";
import { NextResponse } from "next/server";

const TOTAL_POKEMON = 151;

export const GET = async (request: Request) => {
  try {
    const BATCH_SIZE = 36; // 한 번에 가져올 포켓몬 개수
    const { searchParams } = new URL(request.url);
    const startIndex = parseInt(searchParams.get("startIndex") || "1", 10);
    const endIndex = startIndex + BATCH_SIZE - 1;
    const batchPokemonPromises = Array.from(
      { length: endIndex - startIndex + 1 },
      (_, index) => {
        const id = startIndex + index;
        return Promise.all([
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
          axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
        ]);
      }
    );

    const batchPokemonResponses = await Promise.all(batchPokemonPromises);

    const batchPokemonData = batchPokemonResponses.map(
      ([response, speciesResponse], index) => {
        const koreanName = speciesResponse.data.names.find(
          (name: any) => name.language.name === "ko"
        );
        return { ...response.data, korean_name: koreanName?.name || null };
      }
    );

    return NextResponse.json(batchPokemonData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};
