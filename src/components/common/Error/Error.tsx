const Error = ({ message = "오류가 발생했습니다." }: { message?: string }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-red-500">
      <p className="text-xl">{message}</p>
    </div>
  );
};

export default Error;
