import { Meta, StoryObj } from "@storybook/react";
import GiftWaveLogo from "./GiftWaveLogo";

const meta: Meta<typeof GiftWaveLogo> = {
  title: "Atom/GitWaveLogo",
  component: GiftWaveLogo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GiftWaveLogo>;

export const Logo = {
  args: {},
};
