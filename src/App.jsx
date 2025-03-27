import pollak_logo_light from "./assets/pollak_logo_light.png";
import pollak_logo_dark from "./assets/pollak_logo_dark.png";
import { Button } from "./components/button";

function App() {
  return (
    <>
      <div className="bg-main h-screen flex justify-center items-center">
        <div className="bg-card w-[30%] min-w-2xl h-[40%] flex justify-center items-center rounded-xl drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.10)]">
          <div className="flex flex-col justify-center items-center w-1/2">
            <img src={pollak_logo_light} alt="pollak_logo" className="ml-4" />
            <h2 className="text-lg font-medium">Pollák Kapu</h2>
          </div>
          <form action="">
            <div className="grid justify-center items-center gap-4 w-2/3">
              <h1 className="font-semibold text-3xl">Bejelentkezés</h1>
              <div className="text-gray-400">
                <label
                  htmlFor="omazonosito"
                  className="text-gray-400 font-normal"
                >
                  OM azonosító
                </label>
                <input
                  placeholder="12345678912"
                  type="text"
                  name="omazonosito"
                  id="om"
                  className="bg-input rounded-lg placeholder-zinc-600"
                />
              </div>
              <div>
                <label htmlFor="jelszo" className="font-normal">
                  Jelszó
                </label>
                <input
                  placeholder="Diákjelszó123%"
                  type="password"
                  name="jelszo"
                  id="jelszo"
                  className="bg-input rounded-lg placeholder-zinc-600"
                />
              </div>
              <Button variant="default" size="auto">
                Küldés
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
