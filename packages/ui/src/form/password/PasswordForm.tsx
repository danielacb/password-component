import React from "react";
import { PasswordOptions } from "./PasswordValidator";
import { PasswordInput } from "./PasswordInput";
import { PasswordChecker } from "./PasswordChecker";

import * as S from "./styles";

export interface PasswordFormProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  value: string;
  passwordReqs: PasswordOptions[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PasswordForm({
  value,
  passwordReqs,
  onInputChange,
  ...rest
}: PasswordFormProps) {
  return (
    <S.Form {...rest}>
      <PasswordInput value={value} onInputChange={onInputChange} />
      <PasswordChecker value={value} passwordReqs={passwordReqs} />
    </S.Form>
  );
}
