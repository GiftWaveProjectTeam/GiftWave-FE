"use client";
import Link from "next/link";
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL } from "@lib";
import Image from "next/image";
import { LoginBox } from "./SocialLogin.css";

export default function SocialLogin() {
  return (
    <div className={LoginBox}>
      <Link href={GOOGLE_AUTH_URL}>
        <Image src="/Google.png" width={270} height={45} alt="구글 로그인" />
      </Link>
      <Link href={NAVER_AUTH_URL}>
        <Image src="/naver.png" width={260} height={45} alt="네이버 로그인" />
      </Link>
      <Link href={KAKAO_AUTH_URL}>
        <Image src="/kakao.png" width={260} height={45} alt="카카오 로그인" />
      </Link>
    </div>
  );
}
