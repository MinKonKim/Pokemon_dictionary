import TypeLabel from "@/components/TypeLabel";
import { Pokemon } from "@/type/Pokemon";

const AbilitiesSection = ({
  abilities,
}: {
  abilities: Pokemon["abilities"];
}) => (
  <div>
    <div className="flex gap-2 items-center">
      특성:{" "}
      {abilities.map((a, index) => (
        <TypeLabel
          key={index}
          typeName={"default"}
          abilityName={a.ability.korean_name}
        />
      ))}
    </div>
  </div>
);

export default AbilitiesSection;
