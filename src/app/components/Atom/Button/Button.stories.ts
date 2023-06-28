import type { Meta, StoryObj } from "@storybook/react";
import * as styles from "./Button.css";
import Button from "./Button";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Atom/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
    onClickHandler: action("clicked"),
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "black", value: "#000" },
        { name: "dark", value: "#222" },
        { name: "light", value: "#ddd" },
        { name: "white", value: "#fff" },
      ],
    },
  },
};
