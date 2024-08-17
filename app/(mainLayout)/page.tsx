
import Image from "next/image";
import styles from "../page.module.css";
import { DeployRefreshManager } from "../deployRefresh";



export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{position : "relative" , width: '100vw', height: '600px'}} >
      <Image  style={{objectFit : "cover"}} src={"/images/image.jpg"} alt="image.jpg"  fill={true}/>
      </div>
   
    </main>
  );
}
