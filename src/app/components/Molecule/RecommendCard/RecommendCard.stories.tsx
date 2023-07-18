import { Meta, StoryObj } from "@storybook/react";
import RecommendCard from "./RecommendCard";
import fundingImage from "../../../../../public/image.png";

const meta: Meta<typeof RecommendCard> = {
  title: "Molecule/RecommendCard",
  component: RecommendCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RecommendCard>;

export const Recommend: Story = {
  args: {
    title: "닌텐도 스위치 OLED",
    amount: 369190,
    image: fundingImage,
  },
};
