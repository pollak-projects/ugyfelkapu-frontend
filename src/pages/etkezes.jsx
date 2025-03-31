import { useState } from "react";
import { Button } from "../components/Button";
import Layout from "../components/Layout";

function Etkezes() {
  const [currentView, setCurrentView] = useState("igénylése");
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(""); // State for selected payment method

  const toggleMealSelection = (meal) => {
    setSelectedMeals((prevSelectedMeals) =>
      prevSelectedMeals.includes(meal)
        ? prevSelectedMeals.filter((m) => m !== meal)
        : [...prevSelectedMeals, meal]
    );
  };

  return(
    <>
    <Layout title={"Étkezés Igénylés"}>
    <div className="w-[35%] flex items-space-between justify-between mb-8">
      <Button
        size="lg"
        className={`${
          currentView === "igénylése"
            ? "bg-pollak-green text-white"
            : "bg-unselected hover:bg-unselected/85 hover:ring-2 hover:ring-white/70"
        }`}
        onClick={() => setCurrentView("igénylése")}
      >
        Étkezés igénylése
      </Button>
      <Button
        size="lg"
        className={`${
          currentView === "eddigi"
            ? "bg-pollak-green text-white"
            : "bg-unselected hover:bg-unselected/85 hover:ring-2 hover:ring-white/70"
        }`}
        onClick={() => setCurrentView("eddigi")}
      >
        Eddigi étkezések
      </Button>
    </div>

    {currentView === "igénylése" && (
      <div className="card">
        <h1 className="card-title">Étkezés alkalma</h1>
        <div>
          <div className="flex items-center gap-8 my-6">
            {["Reggeli", "Ebéd", "Vacsora"].map((meal) => (
              <Button
                key={meal}
                variant="switch"
                size="md"
                className={`${
                  selectedMeals.includes(meal)
                    ? "bg-unselected hover:bg-unselected/85"
                    : "text-pollak-green border border-pollak-green"
                }`}
                onClick={() => toggleMealSelection(meal)}
              >
                {meal}
              </Button>
            ))}
          </div>
          <h1 className="card-title">Étkezés Ideje</h1>
          <div className="flex items-center gap-8 my-6">
            {["Egész Tanév", "Ez a Félév"].map((time) => (
              <Button
                key={time}
                variant="switch"
                size="md"
                className={`${
                  selectedTime === time
                    ? "bg-unselected hover:bg-unselected/85"
                    : "text-pollak-green border border-pollak-green"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
          <h1 className="card-title">Fizetés módja</h1>
          <div className="my-6 w-1/4">
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border rounded-md text-pollak-green border-pollak-green focus:outline-none focus:ring-2 focus:ring-pollak-green appearance-none"
            >
              <option value="" disabled  className="bg-card/90">
                Válasszon fizetési módot
              </option>
              <option value="Adópénzt" className="bg-card">Adópénzt</option>
              <option value="Készpénz" className="bg-card">Készpénz</option>
              <option value="Viktor Kártya" className="bg-card">Viktor Kártya</option>
              <option value="Simplepay" className="bg-card hover:bg-card/">Simplepay</option>
            </select>
          </div>
        </div>
      </div>
    )}

    {currentView === "eddigi" && (
      <div className="card">
        <h1 className="card-title">Eddigi étkezések</h1>
        <p>Itt láthatja az eddigi étkezéseit.</p>
      </div>
    )}
  </Layout>
</>
  )
}

export default Etkezes;