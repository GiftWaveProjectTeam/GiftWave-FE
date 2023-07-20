import { Meta, StoryObj } from "@storybook/react";
import FundInput from "./FundInput";
import Input from "../../Atom/Input/Input";

const meta: Meta<typeof FundInput> = {
  title: "Molecule/FundInput",
  component: FundInput,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof FundInput>;

export const Default: Story = {
  args: {
    label: "제목",
    children: <Input />
  }
};

export const Required: Story = {
  args: {
    label: "제목",
    required: true,
    children: <Input />
  }
};
