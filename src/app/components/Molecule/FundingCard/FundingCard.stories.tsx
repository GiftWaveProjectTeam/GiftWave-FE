import { Meta, StoryObj } from "@storybook/react";
import FundingCard from "./FundingCard";
import fundingImage from "../../../../../public/image.png";

const meta: Meta<typeof FundingCard> = {
  title: "Molecule/FundingCard",
  component: FundingCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FundingCard>;

export const Funding = {
  args: {
    title: "아이즈원 장원영의 생일선물 모금 펀딩 함께해요!",
    maxAmount: 240000,
    curAmount: 100000,
    image: fundingImage,
  },
};
