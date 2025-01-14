import { InjectionToken } from '@angular/core'

export const ERROR_MESSAGES: { [key: string]: (args?: any) => string } = {
  required: () => `This field is required.`,
  requiredTrue: () => `This field is required.`,
  email: () => `The entered email is invalid.`,
  minlength: ({ requiredLength }) => `The minimum length of this field is "${requiredLength}" characters.`,
  maxlength: ({ requiredLength }) => `The maximum length of this field is "${requiredLength}" characters.`,
  alphabetOnly: () => `Only letters are allowed.`,
  numericOnly: () => `Only numbers are allowed.`,
  positiveNumber: () => `Only positive numbers are allowed.`,
  mobile: () => `The mobile phone number is incorrect.`,
  phone: () => `The phone number is incorrect.`,
  phoneTooShort: () => `The phone number is too short.`,
  phoneTooLong: () => `The phone number is too long.`,
  phoneInvalidCountry: () => `The phone number is invalid in this country.`,
  pattern: () => `The entered field is invalid.`,
  confirmPasswordError: () => `The passwords are not the same`,
  wrongNumber: () => `The mobile phone number is incorrect.`
}

export const VALIDATION_ERROR_MESSAGES = new InjectionToken(`Validation Messages`, {
  providedIn: 'root',
  factory: () => ERROR_MESSAGES
})
