"use client";

import React, { useState } from "react";
import { Input, FundInput } from "@components";
import { useInput } from "../hooks/useInput";
import { usePreview } from "../hooks/usePreview";

export type FundItem = {
  title: string;
  price: number;
  finishDate: string;
  finishTime: string;
  receiveName: string;
  phoneNum: string;
  bank: string;
  accountNum: string;
  accountHolder: string;
  url: string;
  content: string;
};

export default function PostPage() {
  const item = {
    title: "",
    price: 0,
    finishDate: "",
    finishTime: "",
    receiveName: "",
    phoneNum: "",
    bank: "",
    accountNum: "",
    accountHolder: "",
    url: "",
    content: "",
  };

  const { onChangeHandler, inputValue, setInputValue } = useInput(item);
  const { preview, previewUrl } = usePreview();

  return (
    <div>
      <FundInput label="펀딩제목">
        <Input
          name="title"
          value={inputValue.title}
          placeholder="펀딩 제목을 입력해주세요."
          onChangeHandler={onChangeHandler}
        />
      </FundInput>
      <FundInput label="목표금액">
        <Input name="price" value={inputValue.price} />
      </FundInput>
      <FundInput label="일시">
        <Input name="finishDate" type="date" value={inputValue.finishDate} />
        <Input name="finishTime" type="time" value={inputValue.finishTime} />
      </FundInput>
      <FundInput label="수령자명">
        <Input name="receiveName" value={inputValue.receiveName} />
      </FundInput>
      <FundInput label="휴대폰번호">
        <Input name="phoneNum" value={inputValue.phoneNum} />
      </FundInput>
      <FundInput label="계좌번호">
        <Input name="bank" value={inputValue.bank} />
        <Input
          name="accountNum"
          value={inputValue.accountNum}
          placeholder="계좌번호를 입력해주세요."
        />
        <Input name="accountHolder" value={inputValue.accountHolder} />
      </FundInput>
      <FundInput label="상품 URL">
        <Input
          name="url"
          value={inputValue.url}
          placeholder="상품 url을 입력해주세요."
        />
      </FundInput>
      <FundInput label="사진">
        <Input name="image" type="file" />
      </FundInput>
      <FundInput label="펀딩내용">
        <Input name="content" value={inputValue.content} />
      </FundInput>
    </div>
  );
}
