import TypeLabel from "@/components/TypeLabel";
import { Pokemon } from "@/type/Pokemon";

// Types Section Component
const TypesSection = ({ types }: { types: Pokemon["types"] }) => (
  <div>
    <p className="flex items-center">
      타입:{" "}
      <span className="flex gap-2 mx-2">
        {types.map((t) => (
          <TypeLabel key={t.type.name} typeName={t.type.name} />
        ))}
      </span>
    </p>
  </div>
);

export default TypesSection;
