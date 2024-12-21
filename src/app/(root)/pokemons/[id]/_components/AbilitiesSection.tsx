import AbilityLabel from "@/components/AbilityLabel/AbilityLabel";
import { Pokemon } from "@/type/Pokemon";

const AbilitiesSection = ({
  abilities,
}: {
  abilities: Pokemon["abilities"];
}) => (
  <div className="flex gap-2 items-center">
    <span className="font-bold">속성 :</span>
    {abilities.map((a, index) => (
      <AbilityLabel key={index} abilityName={a.ability.korean_name} />
    ))}
  </div>
);

export default AbilitiesSection;
