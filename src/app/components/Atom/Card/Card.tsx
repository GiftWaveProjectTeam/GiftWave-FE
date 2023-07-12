import React, { ReactNode } from "react";
import { cardVariants } from "./Card.css";

interface CardProps {
  children: ReactNode;
  cardType: "popular" | "recommend" | "search" | "celebrate";
}

export default function Card({ children, cardType }: CardProps) {
  return <div className={cardVariants[cardType]}>{children}</div>;
}
