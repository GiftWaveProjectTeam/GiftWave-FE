import { Meta, StoryObj } from "@storybook/react";
import FundingList from "./FundingList";

const meta: Meta<typeof FundingList> = {
  title: "Organism/FundingList",
  component: FundingList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FundingList>;

export const List: Story = {
  args: {
    data: [
      {
        title: "아이즈원 장원영의 생일선물 모금 펀딩 함께해요!",
        maxAmount: 240000,
        curAmount: 100000,
      },
      {
        title: "아이즈원 안유진의 생일선물 모금 펀딩 함께해요!",
        maxAmount: 300000,
        curAmount: 100000,
      },
      {
        title: "뉴진스 민지의 생일선물 모금 펀딩 함께해요!",
        maxAmount: 350000,
        curAmount: 100000,
      },
    ],
  },
};
