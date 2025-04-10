import Layout from "../components/Layout";
import Card from "../components/Card";
import img1 from "../assets/cardimg1.png";
import img2 from "../assets/cardimg2.png";
import img3 from "../assets/cardimg3.png";
import { GraduationCap, FileUser, Calendar, BellRing } from "lucide-react";

const hirek = [
  {
    src: img1,
    title: "Top 100!",
    description: "A technikumok TOP 100-as listáján a Pollák!",
    alt: "img1",
    href: "https://pollak.hu/hirek/post-10",
  },
  {
    src: img2,
    title: "Top Képzéseink 2025/2026-os tanévben",
    description: "Képzéseink 2025/2026-os tanévben",
    alt: "img2",
    href: "https://pollak.hu/hirek/post-9",
  },
  {
    src: img3,
    title: "Emelik az ösztöndíjat",
    description:
      "A 2025/2026-os tanévtől kezdve minden ösztöndíj 40%-os emelést kap",
    alt: "img3",
    href: "https://pollak.hu/hirek/post-8",
  },
];

function Home() {
  return (
    <>
      <Layout title={"Főoldal"}>
        <h2 className="pl-3 pb-2 sub-title font-medium">Hírek</h2>
        <div className="card">
          {hirek.slice(0, 3).map((hir) => (
            <Card
              imageSrc={hir.src}
              title={hir.title}
              description={hir.description}
              imageAlt={hir.alt}
            />
          ))}
        </div>
        <div className="flex flex-row justify-between mt-10">
          <div className="w-[60%]">
            <h2 className="pl-3 mb-2 sub-title font-medium">
              Előzőleg megnyitott oldalak
            </h2>
            <div className="card flex items-center justify-center gap-25">
              <div className="flex flex-col items-center justify-center">
                <GraduationCap size={96} color="#057352" strokeWidth={1} />
                <h3 className="text-lg mt-1">Tanulói jogviszony</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FileUser size={96} color="#057352" strokeWidth={1} />
                <h3 className="text-lg mt-1">Személyes adatok változása</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Calendar size={96} color="#057352" strokeWidth={1} />
                <h3 className="text-lg mt-1">Iskolai rendezvények</h3>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <h2 className="pl-3 mb-2 sub-title font-medium">Értesítés</h2>
            <div className="card flex flex-row items-center justify-center ">
              <BellRing
                size={96}
                color="#057352"
                strokeWidth={1}
                className="mr-4"
              />
              <div className="flex flex-col">
                <h3 className="text-xl mt-1">Személyes adatok</h3>
                <p className="text-md mt-2">
                  személyes adatait sikeresen megváltoztattuk!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
