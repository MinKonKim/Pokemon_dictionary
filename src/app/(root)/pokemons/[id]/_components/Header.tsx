// Header Component
const Header = ({ id, koreanName }: { id: number; koreanName: string }) => (
  <header className="bg-slate-400 w-full p-5 mx-0 drop-shadow-lg">
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-3xl">{koreanName}</h1>
      <p className="mt-1 p-1 font-semibold text-2xl">No.{id}</p>
    </div>
  </header>
);

export default Header;
