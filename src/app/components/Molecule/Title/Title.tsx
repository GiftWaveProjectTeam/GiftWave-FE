"use client";
import { Text } from "@components";
import { container } from "./Title.css";

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

const Title = ({ mainTitle, subTitle }: TitleProps) => {
  return (
    <div className={container}>
      <Text type="title" block={true}>
        {mainTitle}
      </Text>
      <Text type="subTitle" block={true}>
        {subTitle}
      </Text>
    </div>
  );
};

export default Title;
