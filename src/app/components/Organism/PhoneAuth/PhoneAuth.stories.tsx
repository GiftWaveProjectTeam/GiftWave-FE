import { Meta, StoryObj } from "@storybook/react";
import PhoneAuth from "./PhoneAuth";
import { phoneInput } from "../../Atom/Input/Input.css";

const meta: Meta<typeof PhoneAuth> = {
  title: "Organism/PhoneAuth",
  component: PhoneAuth,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PhoneAuth>;

export const Phone = {};
