import { Meta, StoryObj } from "@storybook/react";
import RadioButton, { RadioButtonProps } from "./RadioButton";
import { useState } from "react";

const meta: Meta<typeof RadioButton> = {
  title: "Molecule/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

const RadioButtonWithState = (props: any) => {
  const [radio, setRadio] = useState(0);

  const onRadio1 = () => {
    setRadio(1);
  };

  const onRadio2 = () => {
    setRadio(2);
  };

  return (
    <RadioButton
      title="성별"
      radio1Name="남자"
      radio2Name="여자"
      radio={radio}
      onRadio1={onRadio1}
      onRadio2={onRadio2}
    />
  );
};

export const Gender: Story = {
  args: {},
  render() {
    return <RadioButtonWithState />;
  },
};
