"use client";

import { ChangeEvent, useState } from "react";
import { Play } from "next/font/google";
import {
  PasswordChecker,
  PasswordInput,
  PasswordOptions,
  PasswordValidator,
} from "ui";

const pt_sans = Play({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

import styles from "./styles.module.css";

export default function Web() {
  const [value, setValue] = useState<string>("");

  const passwordReqs = [
    "hasNumber",
    "hasSpecialCharacters",
    "hasUppercaseLetter",
    "hasNoConsecutiveLetters",
  ] as PasswordOptions[];

  const { errorMessages } = PasswordValidator({ value, passwordReqs });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className={`${styles.container} ${pt_sans.className}`}>
      <h2>Password Component (custom styles)</h2>
      <div className={styles.inputContainer}>
        <PasswordInput
          value={value}
          onInputChange={handleInputChange}
          styles={{
            height: "32px",
            width: "100%",
            maxWidth: 220,
            borderRadius: 8,
            padding: "4px 8px",
            border: "1px solid #3b3b3c32",
          }}
        />
      </div>
      {errorMessages.length ? (
        <ul className={styles.errorMessages}>
          {errorMessages.map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      ) : null}
      <div className={styles.checkerContainer}>
        <PasswordChecker
          value={value}
          passwordReqs={passwordReqs}
          listStyles={{ marginTop: 24 }}
          iconStyles={{
            height: 24,
            width: 24,
            marginRight: 8,
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
}
