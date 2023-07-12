import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Atom/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Popular: Story = {
  args: {
    children: "Card",
    cardType: "popular",
  },
};
export const Recommend: Story = {
  args: {
    children: "Card",
    cardType: "recommend",
  },
};
export const Search: Story = {
  args: {
    children: "Card",
    cardType: "search",
  },
};
export const Celebrate: Story = {
  args: {
    children: "Card",
    cardType: "celebrate",
  },
};
