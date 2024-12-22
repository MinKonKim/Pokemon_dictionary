import TypesSection from "@/app/(root)/pokemons/[id]/_components/TypeSection";
import { Pokemon } from "@/type/Pokemon";
import { getPokemonTypeByName } from "@/type/PokemonAbilityType";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";

// TODO: Light House 로 체크하기
// TODO: 카드 선택시 , 일단 디테일 페이지로 넘어가기 구현 가능하면 ㄱ

function PokemonCard({ id, sprites, korean_name, types, ...props }: Pokemon) {
  const primaryType = types[0]?.type.name || "#12121a";
  const secondaryType = types[1]?.type.name || "#f1f2f2";

  const primaryColor = getPokemonTypeByName(primaryType)?.color;
  const secondaryColor = getPokemonTypeByName(secondaryType)?.color;

  return (
    <Card
      style={{
        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
      }}
      className="rounded-xl p-3 m-2 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md hover:shadow-lg flex flex-col items-center"
    >
      <CardBody className="overflow-hidden p-0 bg-slate-50 bg-opacity-50 rounded-lg flex items-center">
        <Image
          src={sprites.front_default}
          alt={korean_name}
          width={120}
          height={120}
        />
      </CardBody>
      <CardFooter className="text-small flex flex-col items-start">
        <p className="mt-2 text-lg font-semibold text-white">{korean_name}</p>
        <TypesSection types={types} />
      </CardFooter>
    </Card>
  );
}

export default PokemonCard;
