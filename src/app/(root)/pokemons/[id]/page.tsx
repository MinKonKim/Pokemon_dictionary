import Button from "@/components/Button";
import TypeLabel from "@/components/TypeLabel";
import { Pokemon } from "@/type/Pokemon";
import axios from "axios";
import Image from "next/image";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const URL_BASE = "http://localhost:3000";
  const { data } = await axios.get(`${URL_BASE}/api/pokemons/${params.id}`);
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
    <div className="bg-[#121212] h-[100vh] flex justify-center items-center ">
      <div className=" overflow-auto flex flex-col h-[90%] min-w-[600px] items-center border bg-slate-100 rounded-md  pb-10 ">
        <header className="bg-slate-400 w-full p-5 mx-0 drop-shadow-lg">
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
          <div>
            <p>이름</p> : <span>{korean_name}</span>{" "}
          </div>
          <div className="flex gap-3">
            <div>키:{height / 10}m</div>
            <div>
              무게 : <span>{weight}kg</span>
            </div>
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
        <Button href="/" title="뒤로가기" />
      </div>
    </div>
  );
};

export default DetailPage;
