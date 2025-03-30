import { Button } from "../components/Button";
import Layout from "../components/Layout";

function Home() {
  return (
    <>
      <Layout title={"Főoldal"}>
        <div className=" w-[35%] flex items-center">
          <Button size="sm">Étkezés igénylése</Button>
          <Button variant="unselected" size="sm">Eddigi étkezések</Button>
        </div>
      </Layout>
    </>
  );
}

export default Home;
