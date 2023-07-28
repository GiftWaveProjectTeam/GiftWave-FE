"use client";

import React, { useEffect } from "react";
import { Input, FundInput } from "@components";
import { useInput } from "../hooks/useInput";
import { usePreview } from "../hooks/usePreview";
import { usePost } from "../hooks/usePost";
import PreviewBox from "../components/Molecule/PreviewBox/PreviewBox";
import * as styles from "@styles/post.css";

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
    content: ""
  };

  const { onChangeHandler, inputValue } = useInput(item);
  const { preview, previewUrl } = usePreview();
  const { submitDiaryHandler, fileInputHandler, fileDropHandler, photo } =
    usePost(inputValue);

  const changeFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgFile = (event.target.files as FileList)[0];
    fileInputHandler(event);
    preview(imgFile);
  };

  // 드래그앤 드랍
  const dragOverHandler = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const dropHandler = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();

    fileDropHandler(event);
  };

  // 글작성
  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitDiaryHandler(event);
  };

  useEffect(() => {
    preview(photo);
  }, [photo]);

  return (
    <form onSubmit={submitFormHandler} className={styles.container}>
      <FundInput label="펀딩제목" required>
        <Input
          name="title"
          value={inputValue.title}
          placeholder="펀딩 제목을 입력해주세요."
          onChangeHandler={onChangeHandler}
        />
      </FundInput>
      <FundInput label="목표금액">
        <Input
          name="price"
          value={inputValue.price}
          onChangeHandler={onChangeHandler}
        />
      </FundInput>
      <FundInput label="일시">
        <Input
          name="finishDate"
          type="date"
          value={inputValue.finishDate}
          onChangeHandler={onChangeHandler}
        />
        <Input
          name="finishTime"
          type="time"
          value={inputValue.finishTime}
          onChangeHandler={onChangeHandler}
        />
      </FundInput>
      <FundInput label="수령자명">
        <Input
          name="receiveName"
          value={inputValue.receiveName}
          onChangeHandler={onChangeHandler}
        />
      </FundInput>
      <FundInput label="휴대폰번호">
        <Input
          name="phoneNum"
          value={inputValue.phoneNum}
          onChangeHandler={onChangeHandler}
        />
      </FundInput>
      <FundInput label="계좌번호">
        <Input
          name="bank"
          value={inputValue.bank}
          onChangeHandler={onChangeHandler}
        />
        <Input
          name="accountNum"
          value={inputValue.accountNum}
          onChangeHandler={onChangeHandler}
          placeholder="계좌번호를 입력해주세요."
        />
        <Input
          name="accountHolder"
          value={inputValue.accountHolder}
          onChangeHandler={onChangeHandler}
        />
      </FundInput>
      <FundInput label="상품 URL">
        <Input
          name="url"
          value={inputValue.url}
          placeholder="상품 url을 입력해주세요."
          onChangeHandler={onChangeHandler}
        />
      </FundInput>
      <FundInput label="사진">
        <label onDragOver={dragOverHandler} onDrop={dropHandler}>
          <Input
            name="image"
            type="file"
            accept="image/jpeg image/png image/jpg image/gif"
            onChangeHandler={changeFileHandler}
          />
        </label>
      </FundInput>
      <PreviewBox url={previewUrl} />
      <FundInput label="펀딩내용">
        <Input
          name="content"
          value={inputValue.content}
          onChangeHandler={onChangeHandler}
        />
      </FundInput>
    </form>
  );
}
