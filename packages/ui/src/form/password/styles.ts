import styled from "styled-components";

// PasswordInput
export const Input = styled.input`
  height: 1rem;
  margin: 0 1rem;
`;

// PasswordChecker
export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0.5rem;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  color: #ffffff;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  line-height: 1;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: red;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// PasswordForm
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;
