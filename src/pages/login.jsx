import { useNavigate } from "react-router-dom";
import { useState } from "react";
import pollak_logo_light from "../assets/pollak_logo_light.png";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Check } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  const validateOMInput = (omInput) => {
    return omInput.length === 11 && /^\d+$/.test(omInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const omInput = event.target.elements.om.value;

    if (!validateOMInput(omInput)) {
      alert("Az OM azonosítónak pontosan 11 számjegyből kell állnia!");
      return;
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowCheckmark(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 1000);
    }, 4000);
  };

  return (
    <>
      <div className="bg-main h-screen flex justify-center items-center">
        <div className="bg-card min-w-[30%] h-[40%] flex justify-center items-center rounded-xl drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 1.0)]">
          <div className="flex flex-col justify-center items-center w-[40%]">
            <img src={pollak_logo_light} alt="pollak_logo" className="ml-4" />
            <h2 className="text-3xl font-light">Pollák Kapu</h2>
          </div>
          <form
            className="flex flex-col justify-center items-center w-[60%] gap-2"
            onSubmit={handleSubmit}
          >
            <h1 className="font-semibold text-3xl mb-2">Bejelentkezés</h1>
            <div className="flex flex-col gap-2 w-[90%] px-6">
              <Input
                label="OM azonosító"
                type="text"
                id="om"
                placeholder="12345678912"
                className="mb-2"
                minLength={11}
                maxLength={11}
                required
              />
              <Input
                label="Jelszó"
                type="password"
                id="password"
                placeholder="Diakjelszó123%"
                className="mb-2"
                required
              />
              <Input
                variant="checkbox"
                type="checkbox"
                id="stay-logged-in"
                label="Bejelentkezve maradok"
                wrapperClassName="flex-row self-end"
              />
              <Button type="submit" className="self-end">
                Bejelentkezés
              </Button>
            </div>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 z-50">
          <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col items-center">

              <img src={pollak_logo_light} alt="pollak_logo" className="ml-4" />
              <h2 className="text-3xl font-light">Üdvözli a Pollák Kapu!</h2>

            {!showCheckmark ? (
              <div className="p-4 border-4 border-pollak-green border-t-transparent rounded-full animate-spin mt-4"/>
            ) : (
              <Check size={48} strokeWidth={2.5} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
