import React, { CSSProperties, HTMLAttributes } from "react";
import { PasswordOptions, PasswordValidator } from "./PasswordValidator";

import * as S from "./styles";

export interface PasswordCheckerProps extends HTMLAttributes<HTMLUListElement> {
  value: string;
  passwordReqs: PasswordOptions[];
  iconStyles?: CSSProperties;
  listStyles?: CSSProperties;
  listItemStyles?: CSSProperties;
}

export function PasswordChecker({
  value,
  listStyles,
  listItemStyles,
  iconStyles,
  passwordReqs,
  ...rest
}: PasswordCheckerProps) {
  const { errors, tipMessages } = PasswordValidator({ value, passwordReqs });

  function getIconColor(option: PasswordOptions) {
    return errors.includes(option) ? "red" : "green";
  }

  function getIcon(option: PasswordOptions) {
    return errors.includes(option) ? "x" : "✔";
  }

  return (
    <S.List className="form-checker" style={{ ...listStyles }} {...rest}>
      {passwordReqs.map((requirement) => (
        <S.ListItem key={requirement} style={{ ...listItemStyles }}>
          <S.Icon
            style={{
              backgroundColor: getIconColor(requirement),
              ...iconStyles,
            }}
          >
            {getIcon(requirement)}
          </S.Icon>
          <span>{tipMessages[requirement]}</span>
        </S.ListItem>
      ))}
    </S.List>
  );
}
