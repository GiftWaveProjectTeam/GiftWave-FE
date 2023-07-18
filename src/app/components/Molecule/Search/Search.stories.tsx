import { Meta, StoryObj } from "@storybook/react";
import Search from "./Search";

const meta: Meta<typeof Search> = {
  title: "Molecule/Search",
  component: Search,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Search>;

export const SearchData = {
  args: {},
};
