import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pollak_logo from "../assets/pollak_logo_light.png";
import {
  FileUser,
  Utensils,
  NotebookText,
  FileQuestion,
  Calendar,
  GraduationCap,
  ClipboardPlus,
  BriefcaseBusiness,
  CircleHelp,
  ChevronDown,
  Accessibility,
  Settings,
} from "lucide-react";
import { Button } from "./Button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const location = useLocation();

  const userName = "John Doe";

  const links = [
    { name: "Személyes adatok változása", path: "/home", icon: <FileUser /> },
    { name: "Étkezés Igénylése", path: "", icon: <Utensils /> },
    {
      name: "Törzslap másolat",
      icon: <NotebookText />,
      subLinks: [
        { name: "cucc 1", path: "" },
        { name: "cucc 2", path: "" },
        { name: "cucc 3", path: "" },
      ],
    },
    { name: "Kérdőivek kitöltése", path: "", icon: <FileQuestion /> },
    { name: "Iskolai rendezvények", path: "", icon: <Calendar /> },
    { name: "Tanulói jogviszony", path: "", icon: <GraduationCap /> },
    { name: "Felmentések/igazolások", path: "", icon: <ClipboardPlus /> },
    { name: "Közösségi szolgálat", path: "", icon: <BriefcaseBusiness /> },
    { name: "GYIK", path: "", icon: <CircleHelp /> },
  ];

  return (
    <div
      className={`flex flex-col h-screen bg-card text-white transition-all duration-300 ${
        isOpen ? "w-74" : "w-14"
      }`}
    >
      <div className="flex items-center justify-between px-1 py-4">
        <Button variant="no_bg" onClick={toggleSidebar}>
          <div
            className={`flex flex-col justify-center items-center w-6 h-6 cursor-pointer gap-1 ${
              isOpen ? "gap-1" : "gap-0.5"
            }`}
          >
            <span
              className={`block w-full h-0.5 bg-white transition-transform ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-white transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-white transition-transform ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </Button>
        <Button
          variant="no_bg"
          className={` self-center ${isOpen ? "block" : "hidden"}`}
        >
          <Accessibility />
        </Button>
      </div>

      <nav className="flex flex-col mt-4 gap-1.5 flex-1 overflow-hidden">
        <div
          className={`flex items-center justify-center flex-col ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="https://pollak.hu"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <img
              src={pollak_logo}
              alt="pollak_logo"
              title="pollak_logo"
              className="w-30"
            />
          </a>
          <h2 className="text-3xl font-light self-center mb-2">Pollák Kapu</h2>
        </div>
        {links.map((link, index) => (
          <Link key={index} to={link.path} className="flex flex-col">
            <Button
              variant="sidebar"
              className={`${
                location.pathname === link.path
                  ? "underline decoration-pollak-green decoration-2 underline-offset-5"
                  : ""
              }`}
              onClick={() => link.subLinks && toggleDropdown(index)}
            >
              {link.icon && <span className="mr-3">{link.icon}</span>}
              <span className={`${isOpen ? "block" : "hidden"}`}>
                {link.name}
              </span>
              {link.subLinks && isOpen && (
                <ChevronDown
                  className={`ml-auto transition-transform ${
                    openDropdown === index ? "rotate-90" : ""
                  }`}
                />
              )}
            </Button>
            {link.subLinks && openDropdown === index && isOpen && (
              <div className="ml-8 flex flex-col gap-1">
                {link.subLinks.map((subLink, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subLink.path}
                    className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            )}
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-between px-4 py-4 border-t border-gray-600">
        <span className={`${isOpen ? "block" : "hidden"} text-sm`}>
          {userName}
        </span>
        <Button variant="no_bg" size="icon">
          <Settings />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
