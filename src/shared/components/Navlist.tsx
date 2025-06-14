import React, { FC } from "react";
import { Tnavlink } from "../types/Tnavlink";

interface INavlistProps {
  item: Tnavlink;
  activeHash: boolean;
  variant?: "desktop" | "mobile";
}

export const Navlist: FC<INavlistProps> = ({ 
  item, 
  activeHash, 
  variant = "desktop" 
}) => {
  const desktopStyles = `text-xl font-bold transition-all duration-75 hover:text-green-700 ${
    activeHash
      ? "text-green-700 border-b-4 border-green-700"
      : "text-gray-400"
  }`;

  const mobileStyles = `block w-full text-left px-3 py-3 rounded-md transition-colors hover:bg-gray-100 ${
    activeHash
      ? "text-green-700 bg-green-50"
      : "text-gray-700"
  }`;

  return (
    <a
      href={item.href}
      className={variant === "mobile" ? mobileStyles : desktopStyles}
    >
      {item.title}
    </a>
  );
};