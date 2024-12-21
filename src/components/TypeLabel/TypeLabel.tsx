import { getPokemonTypeByName } from "@/type/PokemonAbilityType";
import { memo } from "react";

interface TypeLabelProps {
  typeName: string;
}

const TypeLabel = memo(({ typeName }: TypeLabelProps) => {
  const pokemonType = getPokemonTypeByName(typeName);

  return (
    <span
      className="px-2 py-1.5 rounded-md text-slate-100 font-bold"
      style={{ backgroundColor: pokemonType?.color }}
    >
      {pokemonType?.korean_name}
    </span>
  );
});

// 디스플레이 네임 설정 (디버깅 시 컴포넌트 이름 표시)
TypeLabel.displayName = "TypeLabel";

export default TypeLabel;
