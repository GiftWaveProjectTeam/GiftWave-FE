import { Meta, StoryObj } from "@storybook/react";
import PreviewBox from "./PreviewBox";

const meta: Meta<typeof PreviewBox> = {
  title: "Molecule/PreviewBox",
  component: PreviewBox,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof PreviewBox>;

export const Default: Story = {
  args: {
    url: ""
  }
};
