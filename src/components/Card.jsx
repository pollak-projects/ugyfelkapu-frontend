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
      className={`flex flex-col items-center bg-card border border-main rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-main ${className}`}
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-text">
          {title}
        </h5>
        <p className="mb-3 font-normal text-input">{description}</p>
      </div>
    </a>
  );
};

export default Card;
