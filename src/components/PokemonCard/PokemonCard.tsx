"use client";
import { Pokemon } from "@/type/Pokemon";
import Image from "next/image";
import TypeLabel from "../TypeLabel";

function PokemonCard({ id, sprites, korean_name, types, ...props }: Pokemon) {
  return (
    <div className="border bg-[#12121a] rounded-xl p-3 m-2 hover:border-green-400 hover:brightness-90 active:brightness-50">
      <Image
        src={sprites.front_default}
        alt={korean_name}
        width={100}
        height={100}
        priority
      />
      <p className="mb-1 font-semibold font-display:swap">{korean_name}</p>
      <div className="flex gap-1">
        {types.map((t) => (
          <TypeLabel key={t.type.name} typeName={t.type.name} />
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
