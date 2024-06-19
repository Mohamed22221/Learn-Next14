
'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from "react";

export default function MyLink({
  href,
  title,
  prefetch,
}: {
  href: string;
  title: string;
  prefetch: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const style = {
    marginRight: 10,
    color: pathname === href ? "red" : "blue" ,
  };

  useEffect(() => {
    if (prefetch) router.prefetch(href);
  });

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Having fun with Next.js.");
    router.push(href);
  };

  return (
    <a style={style} href={href} onClick={handleClick}>
      {title}
    </a>
  );
}
