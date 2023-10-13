export type PasswordOptions =
  | "hasNumber"
  | "hasSpecialCharacters"
  | "hasUppercaseLetter"
  | "hasNoConsecutiveLetters";

export interface PasswordValidatorProps {
  value: string;
  passwordReqs: PasswordOptions[];
}

export function PasswordValidator({
  value,
  passwordReqs,
}: PasswordValidatorProps) {
  function hasSpecialCharacters() {
    const specialCharactersRegex: RegExp = /[!@#$%^&*]+/;
    return specialCharactersRegex.test(value);
  }
  function hasNumber() {
    const numberRegex: RegExp = /\d/;
    return numberRegex.test(value);
  }
  function hasUppercaseLetter() {
    const uppercaseLetterRegex: RegExp = /[A-Z]/;
    return uppercaseLetterRegex.test(value);
  }
  function hasNoConsecutiveLetters(): boolean {
    const consecutiveLettersRegex: RegExp = /[a-zA-Z]{2,}/;
    return !consecutiveLettersRegex.test(value);
  }

  const requirements: { [key in PasswordOptions]: boolean } = {
    hasNumber: hasNumber(),
    hasSpecialCharacters: hasSpecialCharacters(),
    hasUppercaseLetter: hasUppercaseLetter(),
    hasNoConsecutiveLetters: hasNoConsecutiveLetters(),
  };

  const errorMessages: { [key in PasswordOptions]: string } = {
    hasSpecialCharacters:
      "Must contain one or more of these special characters: !@#$%^&*",
    hasNumber: "Must contain at least one number/digit",
    hasUppercaseLetter: "Must contain at least one uppercase letter",
    hasNoConsecutiveLetters: "Cannot have consecutive letters",
  };

  const tipMessages: { [key in PasswordOptions]: string } = {
    hasNumber: "Has a number 0-9",
    hasSpecialCharacters: "Has a special char !@#$%^&*",
    hasUppercaseLetter: "Has uppercase Letter",
    hasNoConsecutiveLetters: "Has no consecutive letters",
  };

  const selectedRequirements = Object.fromEntries(
    Object.entries(requirements).filter(([key]) =>
      passwordReqs.includes(key as PasswordOptions)
    )
  );

  const isValid = Object.values(selectedRequirements).every(
    (value) => value === true
  );

  const errors: PasswordOptions[] = Object.entries(requirements)
    .filter(([key, value]) => !value)
    .map(([key]) => key as PasswordOptions);

  return { requirements, isValid, errors, errorMessages, tipMessages };
}
