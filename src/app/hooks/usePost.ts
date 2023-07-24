import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FundItem } from "../post/page";

export const usePost = (inputValue: FundItem) => {
  const queryClient = useQueryClient();
  const [photo, setPhoto] = useState<File | null | undefined>(null);

  // 이미지 파일 업로드 함수
  const fileInputHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = event.currentTarget;
    const files = (target.files as FileList)[0];
    setPhoto(files);
  };

  // 이미지 파일 드래그앤드랍 업로드 함수
  const fileDropHandler = async (event: React.DragEvent<HTMLLabelElement>) => {
    const files = (event.dataTransfer.files as FileList)[0];
    setPhoto(files);
  };

  const postDiary = useMutation(
    async (item: FormData) => {
      //   const data = await user.post("/daily", item);
      //   return data;
    }
    // {
    //   onSuccess(data) {
    //     queryClient.refetchQueries({
    //       queryKey: [keys.GET_BOARD]
    //     });
    //     const newItemId = data.data.data.id;
    //     queryClient.invalidateQueries([keys.GET_DETAIL, newItemId]);
    //   }
    // }
  );

  const submitDiaryHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    const contents = new Blob([JSON.stringify(inputValue)], {
      type: "application/json"
    });
    if (photo) {
      formData.append("image", photo);
    }
    formData.append("contents", contents);
    postDiary.mutate(formData);
  };

  return {
    submitDiaryHandler,
    fileInputHandler,
    fileDropHandler,
    photo
  };
};
