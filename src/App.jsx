import pollak_logo_light from "./assets/pollak_logo_light.png";
import pollak_logo_dark from "./assets/pollak_logo_dark.png";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <>
      <div className="bg-main h-screen flex justify-center items-center">
        <div className="bg-card min-w-[30%] h-[40%] flex justify-center items-center rounded-xl drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 1.0)]">
          <div className="flex flex-col justify-center items-center w-[40%]">
            <img src={pollak_logo_light} alt="pollak_logo" className="ml-4" />
            <h2 className="text-3xl font-light">Pollák Kapu</h2>
          </div>
          <form
            action=""
            className="flex flex-col justify-center items-center w-[60%] gap-2"
          >
            <h1 className="font-semibold text-3xl mb-2">Bejelentkezés</h1>
            <div className="flex flex-col gap-2 w-[90%] px-6">
              <Input
                label="OM azonosító"
                type="text"
                id="om"
                placeholder="12345678912"
                className="mb-2"
              />
              <Input
                label="Jelszó"
                type="password"
                id="password"
                placeholder="Diakjelszó123%"
                className="mb-2"
              />
              <Input
                variant="checkbox"
                type="checkbox"
                id="stay-logged-in"
                label="Bejelentkezve maradok"
                wrapperClassName="flex-row self-end"
              />
              <Button type="submit" className="self-end">
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
