import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className="px-[3vw] h-14 border-b border-gray-300 flex items-center sticky top-0 left-0 bg-white">
      <Link href="/">
        <a className="text-2xl flex items-center gap-2">
          <img className="h-12 w-auto" src="/logo.png" alt="" />
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
