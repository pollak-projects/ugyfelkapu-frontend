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

  const links = [
    {
      text: "Akadálymentességi nyilatkozat",
      url: "https://www.youtube.com/watch?v=ThHvx5a9IYA",
    },
    {
      text: "Adatkezelés",
      url: "https://www.youtube.com/watch?v=6-8E4Nirh9s",
    },
    {
      text: "Impresszum",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  return (
    <footer className="w-srceen text-center">
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
              href="https://hszc-pollak.e-kreta.hu/Adminisztracio/Login"
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
      <div className="flex flex-row w-full">
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
          {links.map((link) => (
            <a
              key={link.text}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <span className="hover-effect">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center py-2 mt-4 bg-main">
        <a
          href="https://hszc.hu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-4"
        >
          <img src={hszc_logo} alt="hszc_logo" />
          <p className="hover-effect">Hódmezővásárhelyi Szakképzési Centrum</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
