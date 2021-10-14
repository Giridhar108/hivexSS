import { Ivalidate } from "../types/types";

export const validate = (values: Ivalidate) => {
  const errors: Ivalidate = {};
  const containsLetters = /^.*[a-zA-Z]+.*$/;

  if (!values.login) {
    errors.login = 'Required';
  } else if (values.login.length < 4) {
    errors.login = 'Must be 5 characters or more';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!containsLetters.test(values.password ?? '')) {
    errors.password = 'В пароле должны быть латинские буквы и цифры';
  }

  return errors;
};
