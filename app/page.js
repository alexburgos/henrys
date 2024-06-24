import Image from "next/image";
import localFont from "next/font/local";

const LorraineScript = localFont({ src: "../public/fonts/LorraineScript.ttf" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className={`text-6xl font-bold ${LorraineScript.className} text-henrys-logo mb-4`}>Henry&apos;s Cocktail Bar</h1>
      <p className="text-xl text-henrys-type">A Brooklyn bar in Poblenou, Barcelona</p>
      {/* <Image src="/bar.jpg" width="800" height="600" alt="A bar in Barcelona" /> */}
    </main >
  );
}
