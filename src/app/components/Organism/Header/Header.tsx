import React from "react";
import {
  ButtonBar,
  MenuContainer,
  gridItem,
  navCotainer,
} from "../../../styles/nav.css";

type User = {
  name?: string;
};

interface NavProps {
  user?: User;
}

export default function Header({ user }: NavProps) {
  return (
    <div className={navCotainer}>
      <div>GiftWave</div>
      <div className={MenuContainer}>
        <div className={gridItem}>메인 홈</div>
        <div className={gridItem}>펀딩하기</div>
        <div className={gridItem}>펀딩생성</div>
        <div className={gridItem}>마이페이지</div>
      </div>
      <div className={ButtonBar}>
        {user ? (
          <>
            <label>{user.name}</label>
            <button>로그아웃</button>
          </>
        ) : (
          <button>로그인</button>
        )}
      </div>
    </div>
  );
}
