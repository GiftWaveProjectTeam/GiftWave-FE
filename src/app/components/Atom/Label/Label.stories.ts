import type { Meta, StoryObj } from "@storybook/react";
import * as styles from "./Label.css";

import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Atom/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: { className: `${styles.base}` },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Small: Story = {
  args: {
    children: "Label",
    size: "small",
  },
};
