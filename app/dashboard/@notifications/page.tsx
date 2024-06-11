import Link from "next/link";

export default async function team() {
  await new Promise(resolve => setTimeout(resolve, 6000));

    return <div>
      <Link href="/dashboard/archived">Old Notifications</Link>
    </div>
  }