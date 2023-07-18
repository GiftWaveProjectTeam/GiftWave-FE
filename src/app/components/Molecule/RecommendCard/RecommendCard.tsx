"use client";

import { Card, Text } from "@components";
import Image, { StaticImageData } from "next/image";
import noImg from "../../../../../public/noImg.png";

interface RecommendCardProps {
  title: string;
  amount: number;
  image?: string | StaticImageData;
}

const RecommendCard = ({
  title,
  amount,
  image = noImg,
}: RecommendCardProps) => {
  return (
    <Card cardType="recommend">
      <Image src={image} width={345} height={334} alt="recommend Card" />
      <Text type="cardTitle" block={true}>
        {title}
      </Text>
      <Text type="amount" block={true}>
        {amount}원
      </Text>
    </Card>
  );
};

export default RecommendCard;
