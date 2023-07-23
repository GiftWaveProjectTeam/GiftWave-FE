import React, { ReactNode } from "react";
import { base, cardVariants } from "./Card.css";

interface CardProps {
  children: ReactNode;
  cardType?: "popular" | "recommend" | "search" | "celebrate";
}

export default function Card({ children, cardType }: CardProps) {
  return (
    <div className={cardType ? cardVariants[cardType] : base}>{children}</div>
  );
}
