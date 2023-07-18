"use client";

import { FundingCard, Title } from "@components";
import RecommendCard from "../../Molecule/RecommendCard/RecommendCard";
import { StaticImageData } from "next/image";
import { container } from "./RecommendList.css";

type data = {
  title: string;
  amount: number;
  image?: string | StaticImageData;
};
interface FundinglistProps {
  data: data[];
}

const RecommendList = ({ data }: FundinglistProps) => {
  return (
    <div>
      <Title
        mainTitle="펀딩 상품 추천"
        subTitle="최근 사용자들이 구매한 핫한 상품을 추천해드려요."
      />
      <div className={container}>
        {data &&
          data.map((value: data, index: number) => {
            return (
              <RecommendCard
                title={value.title}
                amount={value.amount}
                image={value.image}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RecommendList;
