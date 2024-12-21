export interface PokemonType {
  name: string;
  color: string;
  korean_name?: string;
}

const pokemonTypes: PokemonType[] = [
  { name: "fire", color: "#ff6b6b", korean_name: "불" },
  { name: "water", color: "#4dabf7", korean_name: "물" },
  { name: "electric", color: "#ffd43b", korean_name: "전기" },
  { name: "grass", color: "#69db7c", korean_name: "풀" },
  { name: "ice", color: "#90e0ef", korean_name: "얼음" },
  { name: "fighting", color: "#e03131", korean_name: "격투" },
  { name: "poison", color: "#9b2226", korean_name: "독" },
  { name: "ground", color: "#e9c46a", korean_name: "땅" },
  { name: "flying", color: "#a0c4ff", korean_name: "비행" },
  { name: "psychic", color: "#ba94d1", korean_name: "에스퍼" },
  { name: "bug", color: "#6c757d", korean_name: "곤충" },
  { name: "rock", color: "#e9c46a", korean_name: "암석" },
  { name: "ghost", color: "#7048e8", korean_name: "유령" },
  { name: "dragon", color: "#4d194d", korean_name: "드래곤" },
  { name: "dark", color: "#343a40", korean_name: "어둠" },
  { name: "steel", color: "#adb5bd", korean_name: "강철" },
  { name: "fairy", color: "#f06595", korean_name: "페어리" },
  { name: "normal", color: "#292626", korean_name: "노말" },
  { name: "default", color: "#46e74b" },
];

const pokemonTypeMap = new Map<string, PokemonType>();

pokemonTypes.forEach((type) => {
  pokemonTypeMap.set(type.name, type); // name으로 매핑
});
export const getPokemonTypeByName = (name: string): PokemonType | undefined => {
  if (pokemonTypeMap.get(name)) return pokemonTypeMap.get(name);
  else return pokemonTypeMap.get("default");
};
