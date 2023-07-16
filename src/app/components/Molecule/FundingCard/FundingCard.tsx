import Image from "next/image";
import { Card, Percentage, Text } from "@components";

interface FundingCardProps {
  title: string;
  maxAmount: number;
  curAmount: number;
  image: string;
}

const FundingCard = ({
  title,
  maxAmount,
  curAmount,
  image,
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
