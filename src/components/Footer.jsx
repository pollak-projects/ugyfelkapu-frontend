import React from "react";
import pollak_logo from "../assets/pollak_logo_light.png";
import hszc_logo from "../assets/hszc_logo.png";
import * as Icons from "../assets/icons";

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
    <footer className="bg-main w-full text-center">
      <div className=""></div>
      <div className="flex flex-row w-full ">
        <div className="flex w-full items-center gap-4 py-2 px-4 self-start">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6A6969] p-2 rounded-full hover:ring-2 hover:ring-primary transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary/50"
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
        <div className="flex flex-row items-center w-full gap-4 py-2 px-4 justify-end">
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
