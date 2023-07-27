import { Meta, StoryObj } from "@storybook/react";
import Slide from "./Slide";

const meta: Meta<typeof Slide> = {
  title: "Molecule/Slide",
  component: Slide,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Slide>;

export const slide: Story = {
  args: {
    data: [
      {
        title: "아이즈원 장원영의 생일선물 모금 펀딩 함께해요!",
        maxAmount: 240000,
        curAmount: 100000,
        image: "https://carousel-slider.uiinitiative.com/images/dr-strange.jpg",
      },
      {
        title: "아이즈원 안유진의 생일선물 모금 펀딩 함께해요!",
        maxAmount: 300000,
        curAmount: 100000,
        image:
          "https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg",
      },
      {
        title: "뉴진스 민지의 생일선물 모금 펀딩 함께해요!",
        maxAmount: 350000,
        curAmount: 100000,
        image:
          "https://carousel-slider.uiinitiative.com/images/justice-league.jpg",
      },
      {
        title: "뉴진스 민지의 생일선물 모금 펀딩 함께해요!",
        maxAmount: 350000,
        curAmount: 100000,
        image: "https://carousel-slider.uiinitiative.com/images/spider-man.jpg",
      },
      {
        title: "뉴진스 민지의 생일선물 모금 펀딩 함께해요!",
        maxAmount: 350000,
        curAmount: 100000,
        image:
          "https://carousel-slider.uiinitiative.com/images/suicide-squad.jpg",
      },
      {
        title: "뉴진스 민지의 생일선물 모금 펀딩 함께해요!",
        maxAmount: 350000,
        curAmount: 100000,
        image:
          "https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg",
      },
      {
        title: "뉴진스 민지의 생일선물 모금 펀딩 함께해요!",
        maxAmount: 350000,
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
