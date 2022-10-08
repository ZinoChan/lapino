import * as Yup from 'yup';
import { SUPPORTED_FORMATS, FILE_SIZE } from './helpers/constants';

export const loginSchema = Yup.object().shape({
  email: Yup.string().required('this field is required').email('please enter a valid email'),
  password: Yup.string().required('this field is required').min(8, 'password must contain at least 8 characters'),
});

export const signupSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('this field is required')
    .min(4, 'must contain more than 4 letter')
    .max(16, 'your name must contain less than 16 letters'),
  email: Yup.string().required('this field is required').email('please enter a valid email'),
  password: Yup.string().required('this field is required').min(8, 'password must contain at least 8 characters'),
});

export const profileSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('this field is required')
    .min(4, 'must contain more than 4 letter')
    .max(16, 'your name must contain less than 16 letters'),
  email: Yup.string().required('this field is required').email('please enter a valid email'),
  city: Yup.string().required('this field is required'),
  address: Yup.string().required('this field is required').max(200, 'address should contain less than 200 letters'),
  zipCode: Yup.string().required('this field is required').min(6, 'must be least 6 numbers'),
  phone: Yup.string().required('this field is required'),
});

export const productSchema = Yup.object().shape({
  title: Yup.string()
    .required('this field is required')
    .min(3, 'must contain more than 3 letter')
    .max(100, 'title should contain less than 100 character'),
  description: Yup.string()
    .required('this field is required')
    .min(10, 'must contain more than 10 letter')
    .max(150, 'title should contain less than 150 character'),
  details: Yup.string()
    .required('this field is required')
    .min(50, 'must contain more than 50 letter')
    .max(250, 'title should contain less than 250 character'),
  category: Yup.string().required('this field is required'),
  originalPrice: Yup.number().typeError('Amount must be a number').required('this field is required'),

  image: Yup.mixed().required('image is required'),

  countInStock: Yup.number().typeError('must be a number').required('this field is required'),
});

export const imageUploadSchema = Yup.object().shape({
  image: Yup.mixed()
    .test('required', 'You need to provide an image', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'The image is too large max is 1mb', (value, context) => {
      return value && value[0] && value[0].size <= FILE_SIZE;
    })
    .test('fileType', 'Unsupported File Format', (value) => SUPPORTED_FORMATS.includes(value[0].type)),
});
