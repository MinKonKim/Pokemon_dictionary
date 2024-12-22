import { Spinner } from "@nextui-org/spinner";

const Loading = ({ message = "Loading..." }: { message?: string }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#121212] text-slate-100">
      <Spinner size="lg" color="primary" />
      <p className="mt-2 text-lg">{message}</p>
    </div>
  );
};

export default Loading;
