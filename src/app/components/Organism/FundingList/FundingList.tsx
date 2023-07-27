"use client";

import { FundingCard, Title } from "@components";
import Slide from "../../Molecule/Slide/Slide";

type data = {
  title: string;
  maxAmount: number;
  curAmount: number;
};
interface FundinglistProps {
  data: data[];
}

const FundingList = ({ data }: FundinglistProps) => {
  return (
    <div>
      <Title
        mainTitle="인기 있는 펀딩"
        subTitle="최근 사용자들에게 가장 인기있는 펀딩을 소개할게요."
      />
      <div>
        <Slide data={data} />
      </div>
    </div>
  );
};

export default FundingList;
