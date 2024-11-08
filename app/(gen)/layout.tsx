import { Navbar } from "@/components/navbar/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en">
      <Navbar />
      {children}
    </main>
  );
}
