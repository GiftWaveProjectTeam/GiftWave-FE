import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState,
} from "react";
import * as styles from "./PhoneAuth.css";
import { Button, Input, InputBox, Label, Timer } from "@components";
import classNames from "classnames";
import { phoneInput } from "../../Atom/Input/Input.css";

interface PhoneAuthProps {
  setIsConfirm: Dispatch<SetStateAction<boolean>>;
}

const PhoneAuth = ({ setIsConfirm }: PhoneAuthProps) => {
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState("");
  const [request, setRequest] = useState<boolean>(false);
  const [error, setError] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");

    setPhone(newValue);
  };

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (phone.length !== 13) {
      setError(true);
    } else {
      setRequest(!request);
      setError(false);
    }
  };
  const onAuthRequestHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "");
    setConfirm(newValue);
  };

  const onConfirmHandler = (e: MouseEvent<HTMLButtonElement>) => {};

  return (
    <div>
      <div className={styles.columnInput}>
        <Label size="medium" weight="medium">
          휴대폰 인증
        </Label>
        <div className={styles.ibContainer}>
          <InputBox value={phone} showValid={true} isValid={!error}>
            <Input
              type={"text"}
              name="phone"
              value={phone}
              onChangeHandler={onChangeHandler}
              className={phoneInput}
              maxLength={13}
              placeholder="010-1234-5678"
            />
          </InputBox>
          <div>
            <Button
              type="button"
              size="auth"
              color="auth"
              label={request === false ? "인증 요청" : "재요청"}
              onClickHandler={onClickHandler}
            />
          </div>
        </div>
        <div>
          {phone !== "" && error === true && (
            <Label size="small" error={error}>
              휴대폰 번호 형식이 잘못됬습니다.
            </Label>
          )}
        </div>
      </div>
      <div style={{ marginTop: "12px" }}>
        <div style={{ display: "flex", gap: "12px" }}>
          <div className={classNames(styles.baseInput, styles.confirmInput)}>
            <Input
              type="text"
              name="PhoneConfirm"
              value={confirm}
              onChangeHandler={onAuthRequestHandler}
              className={phoneInput}
              maxLength={6}
              placeholder="인증번호 6자리를 입력하세요."
            />
            {request && (
              <Timer
                maxTime={10}
                trigger={request}
                setTrigger={setRequest}
                mode="minutes"
              />
            )}
          </div>
          <Button
            size="auth"
            color="auth"
            label="확인"
            onClickHandler={onClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneAuth;
