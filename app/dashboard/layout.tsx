



export default function RootLayout({
  children,
  notifications,
  users
}: Readonly<{
  children: React.ReactNode;
  notifications : React.ReactNode
  users : React.ReactNode

}>) {
  return (
    <html lang="en">
      <body >{children}{users}{notifications}</body>
    </html>
  );
}
