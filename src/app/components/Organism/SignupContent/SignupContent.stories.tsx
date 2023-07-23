import { Meta, StoryObj } from "@storybook/react";
import SignupContent from "./SignupContent";

const meta: Meta<typeof SignupContent> = {
  title: "Organism/SignupForm",
  component: SignupContent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SignupContent>;

export const From = {};
