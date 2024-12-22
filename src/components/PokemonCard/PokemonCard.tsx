import TypesSection from "@/app/(root)/pokemons/[id]/_components/TypeSection";
import { Pokemon } from "@/type/Pokemon";
import { getPokemonTypeByName } from "@/type/PokemonAbilityType";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";

function PokemonCard({ id, sprites, korean_name, types }: Pokemon) {
  // 타입 색상 계산 (재사용 가능한 데이터 처리)
  const [primaryColor, secondaryColor] = (() => {
    const primaryType = types[0]?.type.name || "unknown";
    const secondaryType = types[1]?.type.name || "unknown";

    const primary = getPokemonTypeByName(primaryType)?.color || "#12121a";
    const secondary = getPokemonTypeByName(secondaryType)?.color || "#f1f2f2";

    return [primary, secondary];
  })();

  return (
    <Card
      style={{
        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
      }}
      className="rounded-xl p-3 m-2 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md hover:shadow-lg flex flex-col items-center"
    >
      {/* 이미지 섹션 */}
      <CardBody className="overflow-hidden p-0 bg-slate-50 bg-opacity-50 rounded-lg flex items-center">
        <Image
          src={sprites.front_default}
          alt={korean_name}
          width={120}
          height={120}
          loading="lazy" // Lazy 로딩
        />
      </CardBody>

      {/* 카드 하단 섹션 */}
      <CardFooter className="text-small flex flex-col items-start">
        <p className="mt-2 text-lg font-semibold text-white">{korean_name}</p>
        <TypesSection types={types} />
      </CardFooter>
    </Card>
  );
}

export default PokemonCard;
