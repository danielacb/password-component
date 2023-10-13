import React from "react";
import { PasswordOptions, PasswordValidator } from "./PasswordValidator";

import * as S from "./styles";

export interface PasswordCheckerProps {
  value: string;
  passwordReqs: PasswordOptions[];
}

export function PasswordChecker({ value, passwordReqs }: PasswordCheckerProps) {
  const { errors, tipMessages } = PasswordValidator({ value, passwordReqs });

  function getIconColor(option: PasswordOptions) {
    return errors.includes(option) ? "red" : "green";
  }

  function getIcon(option: PasswordOptions) {
    return errors.includes(option) ? "x" : "✔";
  }

  return (
    <S.List className="form-checker">
      {passwordReqs.map((requirement) => (
        <S.ListItem key={requirement}>
          <S.Icon style={{ backgroundColor: getIconColor(requirement) }}>
            {getIcon(requirement)}
          </S.Icon>
          <span>{tipMessages[requirement]}</span>
        </S.ListItem>
      ))}
    </S.List>
  );
}
