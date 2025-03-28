import React from "react";
import pollak_logo from "../assets/pollak_logo_light.png";
import hszc_logo from "../assets/hszc_logo.png";
import * as Icons from "../assets/icons";
import { Button } from "./Button";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/pmszki/?locale=hu_HU",
      icon: Icons.facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pollak.technikum/",
      icon: Icons.instagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/hódmezővásárhelyi-szc-pollák-antal-szakgimnáziuma-és-szakközépiskolája",
      icon: Icons.linkedin,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCF0UK0o6MiuIYqmRurqjeww/videos",
      icon: Icons.youtube,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@pollaktechnikum",
      icon: Icons.tiktok,
    },
    {
      name: "E-mail",
      url: "mailto:pollak@pollakszentes.hu",
      icon: Icons.mail,
    },
    {
      name: "Telefon",
      url: "tel:+36-63-562-280",
      icon: Icons.phone,
    },
  ];
  return (
    <footer className="w-srceen bg-main text-center">
      <div className="flex flesx-col items-center justify-center py-4">
        <a href="https://pollak.hu" target="_blank" rel="noopener noreferrer">
          <img
            src={pollak_logo}
            alt="pollak_logo"
            title="pollak_logo"
            className="w-25"
          />
        </a>
        <div className="flex flex-col">
          <h1 className="text-2xl self-start">
            Hódmezővásárhelyi SZC Szentesi Pollák Antal Technikum
          </h1>
          <h2 className="self-start">
            <a
              href="https://g.co/kgs/DJ7iWX3"
              target="_blank"
              rel="noopener noreferrer"
              className="off-color-text hover:underline"
            >
              6600 Szentes, Apponyi Tér 1.
            </a>
          </h2>
          <div className="self-end flex gap-6">
            <a
              href="https://pollak.edupage.org/timetable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-none">Órarend</Button>
            </a>
            <a
              href="https://idp.e-kreta.hu/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dkreta-web%26response_type%3Dcode%26scope%3Dopenid%2520email%26state%3DOpenIdConnect.AuthenticationProperties%253DKLZHtZL5YujfBygWtJYzVKwmQqY1j2rCSL289mkFY7e0vZM7xdyfWjLB98uvIaurPsKo4YmIQlaFLPqgaKXvGlb4iPlm7ORKo1dD89B1TMjj5k_eABZhV3HbV8MPn2mUnnZOcdZFnh-kJz_NTeC43w%26response_mode%3Dform_post%26nonce%3D638787866776506894.ZGFkYzJmMmItOTI1My00YzUyLTljYWQtMTE2MTZlOGNiOTMxYzNlNmJmOTAtY2M0YS00NDY0LWExMDItYmZiNzk0NWUxZjIy%26institute_code%3Dhszc-pollak%26institute_data%3DeyJuZXh0X3VwZGF0ZV9kYXRlX3RpbWUiOiIyMDI1LjA0LjA5LiAyMjowMCIsImlzX3N6aXJfaW5zdGl0dXRlIjpmYWxzZSwiaXNfbGljZW5jZV92YWxpZCI6dHJ1ZSwiaXNfYXJjaGl2ZSI6ZmFsc2UsImlzX2Nzb2trZW50ZXR0X2dvbmR2aXNlbG8iOmZhbHNlLCJpc19pbnRlem1lbnlfcm92aWRuZXYiOnRydWUsImlzX3N1Y2Nlc3NfYXV0aG9yaXplZF9kYXRlIjpmYWxzZX0%253D%26prompt%3Dlogin%26redirect_uri%3Dhttps%253A%252F%252Fhszc-pollak.e-kreta.hu%26x-client-SKU%3DID_NET461%26x-client-ver%3D5.3.0.0%26suppressed_prompt%3Dlogin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-none bg-[#006DF9] hover:bg-[#006DF9]/80">
                KRÉTA
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full ">
        <div className="flex w-full items-center gap-4 py-2 pl-10 self-start">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6A6969] p-2.5 rounded-full hover:ring-2 hover:ring-primary transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary/50"
            >
              <img
                src={link.icon}
                alt={link.name}
                title={link.name}
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-row items-center w-full gap-4 py-2 pr-10 justify-end">
          <a
            href="https://www.youtube.com/watch?v=ThHvx5a9IYA"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <span className="hover-effect">Akadálymentességi nyilatkozat</span>
          </a>
          <a
            href="https://www.youtube.com/watch?v=6-8E4Nirh9s"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <span className="hover-effect">Adatkezelés</span>
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <span className="hover-effect">Impresszum</span>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 py-2 mt-4">
        <img src={hszc_logo} alt="hszc_logo" />
        <a href="https://hszc.hu" target="_blank" rel="noopener noreferrer">
          Hódmezővásárhelyi Szakképzési Centrum
        </a>
      </div>
    </footer>
  );
};

export default Footer;
