import { Meta, StoryObj } from "@storybook/react";
import AuthInput from "./AuthInput";

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof AuthInput> = {
  title: "Organism/SignupForm/AuthInput",
  component: AuthInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AuthInput>;

export const TimerInput: Story = {
  args: {
    label: "휴대폰 인증",
  },
};
