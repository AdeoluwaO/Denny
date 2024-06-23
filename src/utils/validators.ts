import * as yup from 'yup';

//
export const loginSchema = yup.object({
  email: yup.string().trim().required(),
  password: yup.string().required(),
});
export const signUpSchema = yup.object({
  email: yup.string().trim().required(),
  password: yup.string().trim(),
});
export const email = yup.object({
  email: yup.string().email().trim().required(),
});
export const otp = yup.object({
  otp: yup.string().trim().length(6).required(),
});
export const userProfileName = yup.object({
  firstName: yup.string().trim().required('first name is required'),
  lastName: yup.string().trim().required('last name is required'),
  userName: yup
    .string()
    .trim()
    .max(10, 'username must be at most 10 characters')
    .required('username is required')
    .lowercase(),
});
export const pinAndPassword = yup.object({
  password: yup.string().trim().min(8).required(),
  confrim_password: yup
    .string()
    .trim()
    .required('This is a required field')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  pin: yup.string().trim().min(4).max(6).required(),
});
export const forgotPassword = yup.object({
  otp: yup.string().trim().length(6).required(),
  password: yup.string().trim().min(8).required(),
});
export const resetPin = yup.object({
  otp: yup.string().trim().length(6).required(),
  pin: yup.string().trim().min(4).max(6).required(),
  confirm_pin: yup
    .string()
    .trim()
    .required('This is required field')
    .oneOf([yup.ref('pin')], 'Passwords do not match'),
});
export const fundWalletWithCard = yup.object({
  amount: yup.string().required(),
  card_number: yup.string().length(16).required(),
  card_holder: yup.string().required(),
  expiry_date: yup.string().required(),
  cvv: yup.string().length(3).required(),
});
export const editProfile = yup.object({
  first_name: yup.string().trim().required('first name is required'),
  last_name: yup.string().trim().required('last name is required'),
  email: yup.string().trim().required(),
  display_picture: yup.string(),
});

export const changePassword = yup.object({
  password: yup.string().trim().min(8).required(),
  new_password: yup
    .string()
    .trim()
    .min(8, 'must be at least 8 characters')
    .required(),
  confirm_new_password: yup
    .string()
    .trim()
    .required('This is required field')
    .oneOf([yup.ref('new_password')], 'Passwords do not match'),
});
export const changeTransactionPin = yup.object({
  old_pin: yup
    .string()
    .trim()
    .min(4, 'must be at least 4 characters')
    .max(6, 'must be at most 6 characters')
    .required(),
  new_pin: yup
    .string()
    .trim()
    .min(4, 'must be at least 4 characters')
    .max(6, 'must be at most 6 characters')
    .required(),
  confirm_new_pin: yup
    .string()
    .trim()
    .required('This is required field')
    .oneOf([yup.ref('new_pin')], 'Pins must match'),
});

export const contactValidation = yup.object({
  contact: yup.string().trim(),
});
