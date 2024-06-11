



export default function RootLayout({
  children,
  notifications
}: Readonly<{
  children: React.ReactNode;
  notifications : React.ReactNode
}>) {
  return (
    <html lang="en">
      <body >{children}{notifications}</body>
    </html>
  );
}
