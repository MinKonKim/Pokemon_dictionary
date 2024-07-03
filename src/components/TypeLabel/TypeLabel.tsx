"use client";

import { useEffect, useState } from "react";

interface PokemonType {
  name: string;
  color: string;
  korean_name?: string;
}

interface TypeLabelProps {
  typeName: string;
  abilityName?: string;
}

const pokemonTypes: PokemonType[] = [
  { name: "fire", color: "bg-[#ff6b6b]", korean_name: "불" },
  { name: "water", color: "bg-[#4dabf7]", korean_name: "물" },
  { name: "electric", color: "bg-[#ffd43b]", korean_name: "전기" },
  { name: "grass", color: "bg-[#69db7c]", korean_name: "풀" },
  { name: "ice", color: "bg-[#90e0ef]", korean_name: "얼음" },
  { name: "fighting", color: "bg-[#e03131]", korean_name: "격투" },
  { name: "poison", color: "bg-[#9b2226]", korean_name: "독" },
  { name: "ground", color: "bg-[#e9c46a]", korean_name: "땅" },
  { name: "flying", color: "bg-[#a0c4ff]", korean_name: "비행" },
  { name: "psychic", color: "bg-[#ba94d1]", korean_name: "에스퍼" },
  { name: "bug", color: "bg-[#6c757d]", korean_name: "곤충" },
  { name: "rock", color: "bg-[#e9c46a]", korean_name: "암석" },
  { name: "ghost", color: "bg-[#7048e8]", korean_name: "유령" },
  { name: "dragon", color: "bg-[#4d194d]", korean_name: "드래곤" },
  { name: "dark", color: "bg-[#343a40]", korean_name: "어둠" },
  { name: "steel", color: "bg-[#adb5bd]", korean_name: "강철" },
  { name: "fairy", color: "bg-[#f06595]", korean_name: "페어리" },
  { name: "normal", color: "bg-[#292626]", korean_name: "노말" },
  { name: "default", color: "bg-[#46e74b]" },
];

function TypeLabel({ typeName, abilityName }: TypeLabelProps) {
  const [label, setLabel] = useState<PokemonType>({
    name: "",
    color: "",
    korean_name: "",
  });

  useEffect(() => {
    setLabel(
      pokemonTypes.find(
        (t) => t.name === typeName || t.korean_name === typeName
      ) as PokemonType
    );
  }, [typeName]);

  return (
    <div
      className={`${label.color} px-2 py-1.5 rounded-md text-slate-100 font-bold flex items-center justify-center`}
    >
      <p>{abilityName ? abilityName : label.korean_name}</p>
    </div>
  );
}

export default TypeLabel;
