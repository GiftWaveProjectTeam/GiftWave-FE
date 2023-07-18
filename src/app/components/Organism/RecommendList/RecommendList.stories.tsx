import { Meta, StoryObj } from "@storybook/react";
import RecommendList from "./RecommedList";

const meta: Meta<typeof RecommendList> = {
  title: "Organism/RecommendList",
  component: RecommendList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RecommendList>;

export const List = {
  args: {
    data: [
      {
        title: "닌텐도 스위치 OLED",
        amount: 369190,
      },
      {
        title: "닌텐도 스위치 OLED",
        amount: 369190,
      },
      {
        title: "닌텐도 스위치 OLED",
        amount: 369190,
      },
    ],
  },
};
