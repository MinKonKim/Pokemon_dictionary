import Button from "@/components/Button";
import TypeLabel from "@/components/TypeLabel";
import { Pokemon } from "@/type/Pokemon";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import TypesSection from "./_components/TypeSection";
import AbilitiesSection from "./_components/AbilitiesSection";
import StatsSection from "./_components/StatsSection";
import Header from "./_components/Header";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const URL_BASE =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const { data } = await axios.get(
          `${URL_BASE}/api/pokemons/${params.id}`
        );
        setPokemon(data);
      } catch (err) {
        setError("포켓몬 정보를 가져오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="font-semibold text-4xl flex justify-center items-center h-[100vh]">
        로딩 중...
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-semibold text-4xl flex justify-center items-center h-[100vh]">
        {error}
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="font-semibold text-4xl flex justify-center items-center h-[100vh]">
        포켓몬 정보가 없습니다.
      </div>
    );
  }

  const { id, korean_name, sprites, height, weight, types, abilities, moves } =
    pokemon;

  return (
    <div className="bg-[#121212] h-[100vh] flex justify-center items-center">
      <div className="overflow-auto flex flex-col h-[90%] min-w-[600px] items-center border bg-slate-100 rounded-md pb-10">
        <Header id={id} koreanName={korean_name} />

        <Image
          src={sprites.front_default}
          alt={korean_name}
          width={150}
          height={150}
        />

        <StatsSection height={height} weight={weight} />

        <TypesSection types={types} />

        <AbilitiesSection abilities={abilities} />

        <div className="w-[25rem] border rounded p-3 border-[#121212]">
          {moves.map((m) => m.move.korean_name).join(", ")}
        </div>

        {/* Back Button */}
        <Button href="/" title="뒤로가기" />
      </div>
    </div>
  );
};

export default DetailPage;
