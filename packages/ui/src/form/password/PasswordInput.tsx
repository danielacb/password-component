import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

export interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PasswordInput({
  value,
  onInputChange,
  ...rest
}: PasswordInputProps) {
  return (
    <S.Input
      className="password-input"
      type="password"
      value={value}
      onChange={onInputChange}
      {...rest}
    />
  );
}
