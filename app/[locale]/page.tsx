import { getTranslations, setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import RevealText from "@/components/RevealText";
import Story from "@/components/Story";
import EventsList from "@/components/EventsList";
import TechStack from "@/components/TechStack";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const resolvedParams = await params;
  setRequestLocale(resolvedParams.locale);
  const tPhrases = await getTranslations("Phrases");
  const tTraits = await getTranslations("Traits");

  return (
    <main className="min-h-screen bg-[--color-bg] text-[--color-text] overflow-x-clip">
      <Nav />
      <Hero />
      <WorkGrid />
      <RevealText phrase={tPhrases("build")} />
      <Story />
      <TechStack />
      <EventsList />
      
      <div className="py-24 flex flex-col items-center">
        <RevealText phrase={tPhrases("working")} />
        <div className="w-full max-w-3xl mx-auto px-6 mt-12 md:mt-16 flex justify-center">
          <ul className="space-y-6 text-base sm:text-lg md:text-xl text-[--color-text-muted] text-left">
            <li className="flex gap-4 items-start">
              <span className="text-[--color-accent] mt-1 font-bold">01</span>
              <span><strong className="text-[--color-text] font-semibold">{tTraits("t1.title")}</strong> - {tTraits("t1.desc")}</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--color-accent] mt-1 font-bold">02</span>
              <span><strong className="text-[--color-text] font-semibold">{tTraits("t2.title")}</strong> - {tTraits("t2.desc")}</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--color-accent] mt-1 font-bold">03</span>
              <span><strong className="text-[--color-text] font-semibold">{tTraits("t3.title")}</strong> - {tTraits("t3.desc")}</span>
            </li>
          </ul>
        </div>
      </div>

      <Connect />
      <Footer />
    </main>
  );
}
