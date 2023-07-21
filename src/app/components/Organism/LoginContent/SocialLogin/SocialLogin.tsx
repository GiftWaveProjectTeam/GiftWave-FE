"use client";
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL } from "@lib";
import * as styles from "./SocialLogin.css";
import { SocialIcon, Text } from "@components";
import google from "../../../../../../public/google.png";
import kakao from "../../../../../../public/kakao.png";
import naver from "../../../../../../public/naver.png";

export default function SocialLogin() {
  return (
    <>
      <div className={styles.container}>
        <Text block={true} type="otherLogin">
          다른 서비스로 로그인
        </Text>
        <div className={styles.loginBox}>
          <SocialIcon url={GOOGLE_AUTH_URL} src={google} alt="구글 로그인" />
          <SocialIcon url={KAKAO_AUTH_URL} src={kakao} alt="카카오 로그인" />
          <SocialIcon url={NAVER_AUTH_URL} src={naver} alt="네이버 로그인" />
        </div>
      </div>
    </>
  );
}
