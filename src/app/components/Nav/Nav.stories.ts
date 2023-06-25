import type { Meta, StoryObj } from "@storybook/react";
import Nav from "./Nav";

const meta: Meta<typeof Nav> = {
  title: "Giftwave/Header",
  component: Nav,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const LoggedIn: Story = {};

export const LoggedOut: Story = {};
