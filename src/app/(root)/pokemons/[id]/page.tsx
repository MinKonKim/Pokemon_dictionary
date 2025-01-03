import Button from "@/components/Button";
import { Metadata } from "next";
import Image from "next/image";
import AbilitiesSection from "./_components/AbilitiesSection";
import Header from "./_components/Header";
import SkillSection from "./_components/SkillSection";
import StatsSection from "./_components/StatsSection";
import TypesSection from "./_components/TypeSection";
import fetchPokemonData from "./_utils/fetchPokemonData";

// Metadata 설정 (SEO 최적화)
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const pokemon = await fetchPokemonData(params.id);
  if (!pokemon)
    return {
      title: "포켓몬 백과사전",
      description: "포켓몬에 대해 알아보아요.",
    };
  return {
    title: `${pokemon.korean_name} - 포켓몬 백과사전`,
    description: `${pokemon.korean_name}, its type, stats, and more.`,
    openGraph: {
      title: `${pokemon.name} - 포켓몬 백과사전`,
      description: `${pokemon.name}의 상세 정보.`,
      images: [pokemon.sprites.front_default],
    },
  };
}

interface DetailPageProps {
  params: { id: string };
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = params;
  const pokemon = await fetchPokemonData(id);

  if (!pokemon) {
    return (
      <div className="font-semibold text-4xl flex justify-center items-center h-[100vh]">
        포켓몬 정보를 가져오는 데 실패했습니다.
      </div>
    );
  }

  const {
    id: pokemonId,
    korean_name,
    sprites,
    height,
    weight,
    types,
    abilities,
    moves,
  } = pokemon;

  return (
    <div className="bg-[#121212] h-[100vh] flex justify-center items-center">
      <div className="overflow-auto flex flex-col h-[90%] min-w-[600px] items-center border bg-slate-100 rounded-md pb-10">
        <Header id={pokemonId} koreanName={korean_name} />
        <Image
          src={sprites.front_default}
          alt={korean_name}
          width={150}
          height={150}
          loading="lazy"
        />
        <div className="flex flex-col gap-2">
          <StatsSection height={height} weight={weight} />
          <TypesSection types={types} />
          <AbilitiesSection abilities={abilities} />
          <SkillSection moves={moves} />
        </div>
        <Button href="/" title="뒤로가기" />
      </div>
    </div>
  );
};

export default DetailPage;
