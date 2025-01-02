import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isButton?: boolean;
  external?: boolean;
}

export function NavLink({ href, children, onClick, isButton = false, external = false }: NavLinkProps) {
  const baseClasses = "px-3 py-2 rounded-md text-sm font-medium";
  const standardClasses = "text-gray-300 hover:text-purple-400";
  const buttonClasses = "bg-purple-600 text-white hover:bg-purple-700";

  const externalProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${isButton ? buttonClasses : standardClasses}`}
      {...externalProps}
    >
      {children}
    </a>
  );
}