import Image, { StaticImageData } from "next/image";
import { Card, Percentage, Text } from "@components";
import noImg from "../../../../../public/noImg.png";

interface FundingCardProps {
  title: string;
  maxAmount: number;
  curAmount: number;
  image?: string | StaticImageData;
}

const FundingCard = ({
  title = "",
  maxAmount = 0,
  curAmount = 0,
  image = noImg,
}: FundingCardProps) => {
  return (
    <Card cardType="popular">
      <Image src={image} width={220} height={220} alt="Card Image" />
      <Text block={true} type="cardTitle">
        {title}
      </Text>
      <Text block={true} type="amount">
        {maxAmount}원
      </Text>
      <Percentage
        maxAmount={maxAmount}
        curAmount={curAmount}
        isPercent={true}
      />
    </Card>
  );
};

export default FundingCard;
