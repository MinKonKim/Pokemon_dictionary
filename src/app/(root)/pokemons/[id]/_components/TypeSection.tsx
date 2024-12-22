import TypeLabel from "@/components/TypeLabel";
import { Pokemon } from "@/type/Pokemon";

// Types Section Component
const TypesSection = ({ types }: { types: Pokemon["types"] }) => (
  <div className="flex items-center">
    <p className="font-bold">타입 :</p>
    <p className="flex gap-2 mx-2">
      {types.map((t) => (
        <TypeLabel key={t.type.name} typeName={t.type.name} />
      ))}
    </p>
  </div>
);

export default TypesSection;
