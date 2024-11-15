import { toast } from 'sonner';
import { type FocusEvent } from 'react';
import { type ErrorsList, type ToastType, type UserData } from '../interfaces';

/**
 * Renders a toast notification with the specified type and message.
 * @param {ToastType} type - The type of the toast notification. Can be 'success', 'error', 'warning', or 'info'.
 * @param {string} message - The message to display in the toast notification.
 */
export const toastRender = (type: ToastType, message: string) => {
  const toastColors = {
    success: { backgroundColor: 'green', color: 'white' },
    error: { backgroundColor: 'red', color: 'white' },
    warning: { backgroundColor: 'orange', color: 'white' }, // Changed from yellowgreen to orange
    info: { backgroundColor: 'blue', color: 'white' },
  };

  toast[type](message, { style: toastColors[type] });
};

/**
 * Validates the user input fields for email and password.
 * The email is considered valid if it matches the regular expression pattern for a standard email format.
 * The password is considered valid if it contains at least one letter, one number, and is at least 8 characters long.
 * @returns {ErrorsList} - Returns an object containing a boolean indicating if the inputs are valid, a list of errors, and corresponding error messages.
 */
export const validateInputs = (userData: UserData): ErrorsList => {
  const errorsList = {
    emailEmpty: userData.email.trim().length === 0,
    emailInvalid:
      userData.email.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email),
    passwordEmpty: userData.password.trim().length === 0,
    passwordInvalid:
      userData.password.trim().length > 0 &&
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userData.password),
  };

  const errorMessages = {
    emailEmpty: 'El email no puede estar vacío.',
    emailInvalid: 'El email no es válido.',
    passwordEmpty: 'La contraseña no puede estar vacía.',
    passwordInvalid:
      'La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número.',
  };

  return {
    isValid: Object.values(errorsList).every((error) => !error),
    errorsList,
    errorMessages,
  };
};

/**
 * Handles the blur event for user data input fields.
 * Validates the input fields and sets the error state if there are any errors.
 * @param {FocusEvent<HTMLInputElement>} e - The blur event from the input field.
 */
export const handleBlur = (
  e: FocusEvent<HTMLInputElement>,
  userData: UserData,
  setErrors: (errors: ErrorsList) => void,
) => {
  const validation = validateInputs(userData);
  setErrors(validation);

  const { name } = e.target;
  const { errorsList, errorMessages } = validation;

  const errorType = name === 'email' ? 'email' : 'password';
  const errorKeys = [`${errorType}Empty`, `${errorType}Invalid`];

  errorKeys.forEach((key) => {
    if (errorsList[key]) {
      toastRender('warning', errorMessages[key]);
    }
  });
};
