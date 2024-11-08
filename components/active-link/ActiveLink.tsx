"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

function ActiveLink({ path, text }: Props) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      href={path}
      className={`${
        path === pathname && "text-blue-500 underline-offset-auto"
      } text-white hover:text-blue-600`}
    >
      {text}
    </Link>
  );
}

export default ActiveLink;
