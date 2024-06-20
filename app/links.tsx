"use client";

import { redirect, usePathname } from "next/navigation";
import Link from "next/link";

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
            
          >
            Dashboard
          </Link>
        </li>
        {/* <li>
        <MyLink href="/dashboard" title="Dashboard Prefetch" prefetch={true} />

        </li> */}
      </ul>
    </nav>
  );
}
