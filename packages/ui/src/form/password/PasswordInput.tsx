import React, { CSSProperties, InputHTMLAttributes } from "react";
import * as S from "./styles";

export interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  styles?: CSSProperties;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PasswordInput({
  value,
  styles,
  onInputChange,
  ...rest
}: PasswordInputProps) {
  return (
    <S.Input
      className="password-input"
      type="password"
      value={value}
      onChange={onInputChange}
      style={{ ...styles }}
      {...rest}
    />
  );
}
