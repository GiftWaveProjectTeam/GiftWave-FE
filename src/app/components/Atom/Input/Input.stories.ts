import type { Meta, StoryObj } from "@storybook/react";
import * as styles from "./Input.css";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atom/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { className: `${styles.base}` },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const OkValid: Story = {
  args: {
    className: `${styles.okValid}`,
  },
};

export const NotValid: Story = {
  args: {
    className: `${styles.notValid}`,
  },
};
