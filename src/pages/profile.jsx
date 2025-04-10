import { Button } from "../components/Button";
import Layout from "../components/Layout";
import { Input } from "../components/Input";
import { Pencil } from "lucide-react";

function Profile() {
  return (
    <>
      <Layout title={"Személyes adatok"}>
        <div className="card mb-16">
          <h1 className="card-title p-3 mb-6 font-medium">Tanulói adatok</h1>
          <div className="flex flex-row w-full gap-55 mb-12 ml-3">
            <Input
              label="Teljes Név"
              type="text"
              id="nev"
              placeholder="József Gyula"
              className="mb-2 w-[260px] bg-amber-50 placeholder-stone-600 h-[50px] rounded-xl text-black placeholder:text-center text-center"
              minLength={1}
              maxLength={100}
              required
            />
            <Input
              label="OM azonosító"
              type="text"
              id="om"
              placeholder="12345678912"
              className="mb-2 w-[260px] bg-amber-50 placeholder-stone-600 h-[50px] rounded-xl text-black placeholder:text-center text-center"
              minLength={11}
              maxLength={11}
              required
            />
            <Input
              label="Születési Dátum"
              type="date"
              id="birth"
              placeholder="2006.01.01"
              className="mb-2 w-[260px] bg-amber-50 placeholder-stone-600 text-black h-[50px] rounded-xl placeholder:text-center text-center"
              required
            />
          </div>
          <h1 className="card-title p-3 mb-6 font-medium">Személyes adatok</h1>
          <div className="flex flex-row w-full gap-55 mb-12 ml-3">
            <Input
              label="Számlaszám"
              type="szamla"
              id="bank"
              placeholder="12345678-12345678"
              className="mb-2 w-[260px] bg-amber-50 placeholder-stone-600 h-[50px] rounded-xl text-black placeholder:text-center text-center"
              minLength={1}
              required
            />
            <Input
              label="E-mail cím"
              type="email"
              id="mail"
              placeholder="jozsefgyul2006@gmail.com"
              className="mb-2 w-[260px] bg-amber-50 placeholder-stone-600 h-[50px] rounded-xl text-black placeholder:text-center text-center"
              minLength={1}
              required
            />
            <Input
              label="Telefonszám"
              type="tel"
              id="phone"
              placeholder="06702435521"
              className="mb-2 w-[260px] bg-amber-50 placeholder-stone-600 h-[50px] rounded-xl text-black placeholder:text-center text-center"
              minLength={11}
              maxLength={13}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button
              size="md"
              variant="default"
              className="text-black h-14 mt-6 mb-6 w-35 mr-4"
            >
              Mentés
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Profile;
