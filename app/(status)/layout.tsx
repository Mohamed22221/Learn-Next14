export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section lang="en">

        <div className="status"> {children}</div>
       
 
    </section>
  );
}
