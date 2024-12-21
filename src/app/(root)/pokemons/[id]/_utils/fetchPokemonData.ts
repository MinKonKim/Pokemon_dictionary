import { Pokemon } from "@/type/Pokemon";

// 서버에서 데이터 가져오기
const fetchPokemonData = async (id: string): Promise<Pokemon | null> => {
  try {
    const URL_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${URL_BASE}/api/pokemons/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch Pokemon data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return null;
  }
};

export default fetchPokemonData;
