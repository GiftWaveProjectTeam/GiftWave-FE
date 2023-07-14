import { Meta, StoryObj } from "@storybook/react";
import LabelInput from "./LabelInput";

const meta: Meta<typeof LabelInput> = {
  title: "Molecule/LabelInput",
  component: LabelInput,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof LabelInput>;

export const UserId: Story = {
  args: {
    label: "아이디",
    value: "chanwoo",
    isValid: false,
    error: "아이디 형식이 맞지 않습니다.",
  },
};

export const Password: Story = {
  args: {
    label: "비밀번호",
    value: "12341234",
    isValid: false,
    error: "비밀번호 형식이 맞지 않습니다.",
  },
};

export const PasswordConfirm: Story = {
  args: {
    label: "비밀번호 확인",
    value: "12341234",
    isValid: false,
    error: "비밀번호가 맞지 않습니다.",
  },
};
