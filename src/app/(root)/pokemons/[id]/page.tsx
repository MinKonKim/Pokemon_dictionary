import TypeLabel from "@/components/TypeLabel";
import { Pokemon } from "@/type/Pokemon";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const response = await axios.get(
    `http://localhost:3000/api/pokemons/${params.id}`
  );
  const { data } = await response;
  const {
    id,
    korean_name,
    sprites,
    height,
    weight,
    types,
    abilities,
    moves,
  }: Pokemon = data;

  if (!id) {
    return (
      <div className="font-semibold text-4xl flex justify-center items-center h-[100vh]">
        isLoading
      </div>
    );
  }
  return (
    <div className="bg-[#121212] h-[100vh] flex justify-center items-center overflow-hidden ">
      <div className="flex flex-col w-[50%] items-center border bg-slate-100 rounded-md  pb-10 ">
        <header className="bg-slate-400 w-full  p-5 mb-3 mx-0 drop-shadow-lg">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="font-semibold text-3xl">{korean_name}</h1>
            <p className="mt-1 p-1 font-semibold text-2xl">No.{id}</p>
          </div>
        </header>
        <Image
          src={sprites.front_default}
          alt={korean_name}
          width={150}
          height={150}
        />
        <div className="mb-3 flex flex-col gap-1 font-semibold text-xl">
          <p>
            이름 : <span>{korean_name}</span>{" "}
          </p>
          <div className="flex gap-3">
            <p>
              키 :<span>{height}</span>m
            </p>
            <p>
              무게 : <span>{weight}kg</span>
            </p>
          </div>
          <div>
            <p className="flex items-center">
              타입 :{" "}
              <span className="flex gap-2 mx-2">
                {types.map((t) => (
                  <TypeLabel key={t.type.name} typeName={t.type.name} />
                ))}
              </span>
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              특성 :{" "}
              {abilities.map((a, index) => (
                <TypeLabel
                  key={index}
                  typeName={"default"}
                  abilityName={a.ability.korean_name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-[25rem] border rounded p-3 border-[#121212]">
          {moves.map((m) => m.move.korean_name).join(", ")}
        </div>
        <Link href="/">
          <button className="p-3 m-2 bg-blue-500 rounded-lg font-semibold text-slate-100 hover:brightness-90 active:brightness-50">
            뒤로가기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
