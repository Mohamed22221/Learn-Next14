import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Links } from "./links";

export default function Home() {
  return (
    <main className={styles.main}>
      <Links />
    </main>
  );
}
