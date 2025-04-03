import { Button } from "../components/Button";
import Layout from "../components/Layout";
import { Input } from "../components/Input";

function Profile() {
  return (
    <>
      <Layout title={"Személyes adatok"}>
        <div className="card mb-16">
          <h1 className="card-title p-3">Tanulói adatok</h1>
          <div className="flex flex-row w-full gap-20">
            <Input
              label="Teljes Név"
              type="text"
              id="nev"
              placeholder="József Gyula"
              className="mb-2 w-[100%] "
              minLength={1}
              maxLength={100}
              required
            />
            <Input
              label="OM azonosító"
              type="text"
              id="om"
              placeholder="12345678912"
              className="mb-2 w-[100%] "
              minLength={11}
              maxLength={11}
              required
            />
            <Input
              label="Születési Dátum"
              type="date"
              id="birth"
              placeholder="2006.01.01"
              className="mb-2 w-[100%] !text-gray-300"
              required
            />
          </div>

          <div className="flex flex-row w-full gap-20">
            <Input
              label="Számlaszám"
              type="szamla"
              id="bank"
              placeholder="12345678-12345678"
              className="mb-2 w-[100%] "
              minLength={1}
              required
            />
            <Input
              label="E-mail cím"
              type="email"
              id="mail"
              placeholder="jozsefgyul2006@gmail.com"
              className="mb-2 w-[100%] "
              minLength={1}
              required
            />
            <Input
              label="Telefonszám"
              type="tel"
              id="phone"
              placeholder="06702435521"
              className="mb-2 w-[100%] "
              minLength={11}
              maxLength={13}
              required
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Profile;
