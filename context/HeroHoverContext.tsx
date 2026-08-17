"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface HeroHoverContextType {
  isButtonHovered: boolean;
  setIsButtonHovered: (hovered: boolean) => void;
}

const HeroHoverContext = createContext<HeroHoverContextType | undefined>(undefined);

export function HeroHoverProvider({ children }: { children: ReactNode }) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <HeroHoverContext.Provider value={{ isButtonHovered, setIsButtonHovered }}>
      {children}
    </HeroHoverContext.Provider>
  );
}

export function useHeroHover() {
  const context = useContext(HeroHoverContext);
  if (context === undefined) {
    throw new Error("useHeroHover must be used within a HeroHoverProvider");
  }
  return context;
}