import Link from 'next/link'
import React from 'react'

const pageNewTeam = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    <div><Link href="/dashboard">New Notifications</Link></div>
  )
}

export default pageNewTeam