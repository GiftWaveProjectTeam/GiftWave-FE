import React from "react";
import {
  ButtonBar,
  MenuContainer,
  gridItem,
  navCotainer,
} from "../../styles/nav.css";

export default function Nav() {
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
        <button>로그인</button>
      </div>
    </div>
  );
}
