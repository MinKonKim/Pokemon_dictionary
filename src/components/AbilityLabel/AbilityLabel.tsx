import { memo } from "react";

interface AbilityLabelProps {
  abilityName: string;
}

const AbilityLabel = memo(({ abilityName }: AbilityLabelProps) => {
  return (
    <p className="px-2 py-1 rounded-md font-bold border-2 border-solid border-black">
      {abilityName}
    </p>
  );
});

AbilityLabel.displayName = "AbilityLabel";
export default AbilityLabel;
