import React from "react";
import * as styles from "./Header.css";
import GiftWaveLogo from "../../Atom/GiftWaveLogo/GiftWaveLogo";

type User = {
  name?: string;
};

interface NavProps {
  user?: User;
}

export default function Header({ user }: NavProps) {
  return (
    <div className={styles.navCotainer}>
      <div className={styles.logoBlock}>
        <GiftWaveLogo />
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.gridItem}>메인 홈</div>
        <div className={styles.gridItem}>펀딩하기</div>
        <div className={styles.gridItem}>펀딩생성</div>
        <div className={styles.gridItem}>마이페이지</div>
      </div>
      <div className={styles.buttonBar}>
        {user ? (
          <>
            <label>{user.name}</label>
            <button>로그아웃</button>
          </>
        ) : (
          <>
            <div className={styles.commentStyle}>로그인이 필요합니다.</div>
            <button className={styles.buttonStyle}>로그인</button>
          </>
        )}
      </div>
    </div>
  );
}
