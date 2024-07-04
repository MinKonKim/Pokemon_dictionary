import Link from "next/link";

interface ButtonProps {
  href: string;
  title: string;
}

function Button({ href, title }: ButtonProps) {
  return (
    <Link href={href}>
      <button className="p-3 m-2 bg-blue-500 rounded-lg font-semibold text-slate-100 hover:brightness-90 active:brightness-50">
        {title}
      </button>
    </Link>
  );
}

export default Button;
