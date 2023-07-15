import { Meta, StoryObj } from "@storybook/react";
import Percentage from "./Percentage";

const meta: Meta<typeof Percentage> = {
  title: "Atom/Percentage",
  component: Percentage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Percentage>;

export const PercentageBox = {
  args: {},
};
