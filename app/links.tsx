"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import MyLink from "@/shared/MyLink";

export function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/dashboard" ? "active" : ""}`}
            href="/dashboard"
            prefetch={true}
          >
            Dashboard
          </Link>
        </li>
        <li>
        <MyLink href="/dashboard" title="Dashboard Prefetch" prefetch={true} />

        </li>
      </ul>
    </nav>
  );
}
