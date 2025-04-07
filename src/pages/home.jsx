import Layout from "../components/Layout";
import Card from "../components/Card";
import img1 from "../assets/cardimg1.png";
import img2 from "../assets/cardimg2.png";
import img3 from "../assets/cardimg3.png";

function Home() {
  return (
    <>
      <Layout title={"Főoldal"}>
        <h2 className="pl-3 pb-2 sub-title">Hírek</h2>
        <div className="card">
          <Card
            imageSrc={img1}
            title={"Top 100!"}
            description={"A technikumok TOP 100-as listáján a Pollák!"}
            imageAlt="img1"
          />
          <Card
            imageSrc={img2}
            title={"Top Képzéseink 2025/2026-os tanévben100!"}
            description={"Képzéseink 2025/2026-os tanévben"}
          />
          <Card
            imageSrc={img3}
            title={"Emelik az ösztöndíjat"}
            description={"A 2025/2026-os tanévtől kezdve minden ösztöndíj 40%-os emelést kap"}
          />
        </div>
      </Layout>
    </>
  );
}

export default Home;
