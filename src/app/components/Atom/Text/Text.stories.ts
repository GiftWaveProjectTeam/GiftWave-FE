import { Meta, StoryObj } from "@storybook/react";
import * as styles from "./Text.css";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atom/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Title: Story = {
  args: {
    children: "이것이 제목이다.",
    type: "title",
  },
};

export const SubTitle: Story = {
  args: {
    children: "이것이 부 제목이다.",
    type: "subTitle",
  },
};

export const CardTitle: Story = {
  args: {
    children: "이것이 카드 제목이다.",
    type: "cardTitle",
  },
};

export const Amount: Story = {
  args: {
    children: "이것이 금액이다.",
    type: "amount",
  },
};
