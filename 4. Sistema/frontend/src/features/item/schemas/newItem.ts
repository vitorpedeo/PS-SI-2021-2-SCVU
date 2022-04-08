import * as yup from 'yup';

export const newItemSchema = yup.object().shape({
  title: yup.string().required('Campo obrigatório'),
  price: yup.string().required('Campo obrigatório'),
  description: yup.string().required('Campo obrigatório'),
});
