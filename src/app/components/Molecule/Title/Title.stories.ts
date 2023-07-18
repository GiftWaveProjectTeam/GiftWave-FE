import { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta: Meta<typeof Title> = {
  title: "Molecule/Title",
  component: Title,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const PopularFunding = {
  args: {
    mainTitle: "인기있는 펀딩",
    subTitle: "최근 사용자들에게 가장 인기있는 펀딩을 소개할게요.",
  },
};

export const FundingRecommend = {
  args: {
    mainTitle: "펀딩 상품 추천",
    subTitle: "최근 사용자들이 구매한 핫한 상품을 추천드려요.",
  },
};
