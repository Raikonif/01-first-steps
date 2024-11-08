import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "its about page",
  keywords: ["About", "Raikonif", "Information"],
};

function AboutPage() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-lg">Hola mundo</span>
      <h1 className="text-6xl">About Page</h1>
    </div>
  );
}

export default AboutPage;
