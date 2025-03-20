import pollak_logo_light from "./assets/pollak_logo_light.png";
import pollak_logo_dark from "./assets/pollak_logo_dark.png";
import { Button } from "./components/button";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-[#F6F6F6] w-[30%] h-[40%] flex justify-center items-center rounded-xl drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.10)]">
          <div className="w-[50%] flex flex-col justify-center items-center">
            <img src={pollak_logo_dark} alt="pollak_logo" className="ml-4" />
            <h2 className="text-lg font-medium">Pollák Kapu</h2>
          </div>
          <div className="w-[50%] flex flex-col justify-center items-center">
            <h1 className="text-xl font-me">Bejelentkezés</h1>
            <Button variant="destructive" size="lg">
              jraudsers
            </Button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
