interface SkillSectionProps {
  moves: {
    move: {
      name: string;
      korean_name: string;
    };
  }[];
}

const SkillSection = ({ moves }: SkillSectionProps) => {
  return (
    <div className="w-[25rem] border rounded p-3 border-[#121212]">
      {moves.map((m) => m.move.korean_name).join(", ")}
    </div>
  );
};

export default SkillSection;
