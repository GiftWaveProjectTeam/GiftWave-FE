"use client";

export default function Redirect() {
  const code = new URL(window.location.href).searchParams.get("code");

  console.log(code);
  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
}