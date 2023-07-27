import React, { ReactNode } from "react";
import * as styles from "./Card.css";
import classNames from "classnames";

interface CardProps {
  children: ReactNode;
  cardType: "popular" | "recommend" | "search" | "celebrate";
}

export default function Card({ children, cardType }: CardProps) {
  return (
    <div className={classNames(styles.cardVariants[cardType])}>{children}</div>
  );
}
