import { Pokemon } from "@/type/Pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePokemonInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: async ({ pageParam }) => {
      const response = await axios.get<Pokemon[]>(
        `/api/pokemons?startIndex=${pageParam}`
      );
      return response.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (!lastPage || lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 14;
    },
  });
};
