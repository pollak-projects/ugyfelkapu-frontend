import pollak_logo_light from "./assets/pollak_logo_light.png";
import pollak_logo_dark from "./assets/pollak_logo_dark.png";

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-[#00FFFF] w-[30%] h-[40%] flex justify-center items-center rounded-xl drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.10)]">
          <div className="w-[50%] flex flex-col justify-center items-center">
            <img src={pollak_logo_dark} alt="pollak_logo" />
            <p className="text-xl font-semibold">Pollák Kapu</p>
          </div>
          <form action="">
            <div className="w-[50%] grid justify-center items-center gap-6">
              <h1 className="font-semibold text-3xl">Bejelentkezés</h1>
              <div className="block">
                <label htmlFor="omazonosito" className="font-normal ">OM azonosító</label>
                <input
                  type="text"
                  name="omazonosito"
                  id="om"
                  className="bg-white rounded-lg border-1 border-opacity-20"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
