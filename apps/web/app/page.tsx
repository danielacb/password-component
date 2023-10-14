"use client";

import { useState } from "react";
import { PasswordForm } from "ui";

import styles from "../styles/index.module.css";

export default function Web() {
  const [value, setValue] = useState<string>("");
  return (
    <div className={styles.container}>
      <h2>Password Component</h2>
      <PasswordForm
        value={value}
        passwordReqs={[
          "hasNumber",
          "hasSpecialCharacters",
          "hasUppercaseLetter",
        ]}
        onInputChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
