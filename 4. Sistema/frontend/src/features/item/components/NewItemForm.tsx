import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useTranslation } from '@/features/intl';

import {
  Box,
  Button,
  ImageInput,
  Loading,
  successToast,
  TextInput,
} from '@/components';

import { NewItemFormFields } from '../types';
import { newItemSchema } from '../schemas';

export function NewItemForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<NewItemFormFields>({
    defaultValues: {
      title: '',
      price: '0',
      description: '',
    },
    resolver: yupResolver(newItemSchema),
  });

  const { locale, push } = useRouter();

  const translate = useTranslation();

  const [image, setImage] = useState<File | null>(null);

  function onSubmit(values: NewItemFormFields) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newItemMessage =
          locale === 'pt-BR'
            ? 'Item cadastrado com sucesso!'
            : 'Advertisement created successfully!';

        successToast(newItemMessage);

        push('/');

        resolve(true);
      }, 3000);
    });
  }

  console.log(image);

  return (
    <>
      {isSubmitting && <Loading />}
      <Box as="form" onSubmit={handleSubmit(onSubmit)} mt="4rem" width="100%">
        <Box display="grid" gridGap="4rem" gridTemplateColumns="repeat(2, 1fr)">
          <ImageInput setImage={setImage} />

          <Box width="100%" display="grid" gridGap="1rem">
            <TextInput
              label={translate('formTitleLabel')}
              error={errors.title}
              {...register('title')}
            />
            <TextInput
              type="number"
              min="0.00"
              step="0.01"
              label={translate('formPriceLabel')}
              error={errors.price}
              {...register('price')}
            />
            <TextInput
              label={translate('formDescriptionLabel')}
              error={errors.description}
              {...register('description')}
            />
          </Box>
        </Box>

        <Box
          mt="3rem"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button type="submit" py="0.875rem" width="75%">
            {translate('newItemButtonText')}
          </Button>
        </Box>
      </Box>
    </>
  );
}
