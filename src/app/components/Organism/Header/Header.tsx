"use client";

import React from "react";
import * as styles from "./Header.css";
import GiftWaveLogo from "../../Atom/GiftWaveLogo/GiftWaveLogo";
import { Text } from "@components";
import { usePathname, useRouter } from "next/navigation";

type User = {
  name?: string;
};

interface NavProps {
  user?: User;
}

export default function Header({ user }: NavProps) {
  const router = useRouter();

  const logoClickHandler = () => {
    router.push("/");
  };

  const loginClickHandler = () => {
    router.push("/login");
  };

  return (
    <div className={styles.navCotainer}>
      <div className={styles.logoBlock} onClick={logoClickHandler}>
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
            <Text type="logoutComment" block={true}>
              {user.name}
            </Text>
            <button className={styles.buttonStyle}>로그아웃</button>
          </>
        ) : (
          <>
            <Text type="loginComment" block={true}>
              로그인이 필요합니다.
            </Text>
            <button className={styles.buttonStyle} onClick={loginClickHandler}>
              로그인
            </button>
          </>
        )}
      </div>
    </div>
  );
}
