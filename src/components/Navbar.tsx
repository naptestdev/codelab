import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="px-[3vw] h-14 border-b border-gray-600 flex items-center">
      <Link href="/">
        <a className="text-2xl">Codelab</a>
      </Link>
    </div>
  );
};

export default Navbar;
