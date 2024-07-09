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
          <Link className={`link ${pathname === "/_about" ? "active" : ""}`} href="/_about">
            About
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === "/photos" ? "active" : ""}`} href="/photos">
            Photos
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/dashboard" || pathname === "/dashboard/archived"
                ? "active"
                : ""
            }`}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/success" ? "active" : ""}`}
            href="/success"
          >
            Success
          </Link>
        </li>
        {/* <li>
        <MyLink href="/dashboard" title="Dashboard Prefetch" prefetch={true} />

        </li> */}
      </ul>
    </nav>
  );
}
