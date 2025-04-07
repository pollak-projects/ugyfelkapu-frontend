import React from "react";

const Card = ({
  href = "#",
  imageSrc,
  imageAlt = "",
  title,
  description,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`flex flex-col items-center bg-card rounded-lg shadow-sm md:flex-row hover:bg-main p-3 ${className}`}
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-70 md:rounded-none md:rounded-s-lg"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="flex flex-col p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-normal tracking-tight">
          {title}
        </h5>
        <p className="mb-3 font-light text-input">{description}</p>
      </div>
    </a>
  );
};

export default Card;
