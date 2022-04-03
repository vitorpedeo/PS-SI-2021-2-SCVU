import { yupResolver } from '@hookform/resolvers/yup';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { signUpSchema } from '@/features/auth/schemas';
import { SignUpFormFields } from '@/features/auth/types';
import { useTranslation } from '@/features/intl';

import {
  Box,
  Button,
  Heading,
  Link,
  Loading,
  successToast,
  Text,
  TextInput,
} from '@/components';

export function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormFields>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(signUpSchema),
  });

  const { locale, push } = useRouter();

  const translate = useTranslation();

  async function onSubmit(values: SignUpFormFields) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const registerMessage =
          locale === 'pt-BR'
            ? 'Cadastro realizado com sucesso!'
            : 'Account created successfully!';

        successToast(registerMessage);

        push('/auth/signin');

        resolve(true);
      }, 3000);
    });
  }

  return (
    <>
      {isSubmitting && <Loading />}
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        m="1.5rem"
        px={['2rem', '2rem', '3.5rem']}
        py="2rem"
        maxWidth="470px"
        width="100%"
        borderRadius="4px"
        bg="white"
        boxShadow="0 2px 4px rgba(153, 153, 153, 0.2)"
      >
        <Heading as="h2" mb="1.5rem" fontSize="2rem" textAlign="center">
          Desapega
        </Heading>

        <Text mb="1.5rem" fontSize="1.25rem" textAlign="center">
          {translate('formSubtitle')}
        </Text>

        <Box display="grid" gridGap="1rem">
          <TextInput
            label={translate('formNameLabel')}
            error={errors.name}
            {...register('name')}
          />
          <TextInput
            label={translate('formEmailLabel')}
            type="email"
            error={errors.email}
            {...register('email')}
          />
          <TextInput
            label={translate('formPasswordLabel')}
            type="password"
            error={errors.password}
            {...register('password')}
          />
        </Box>

        <Button type="submit" my="1.5rem" width="100%" height="48px">
          {translate('registerButtonText')}
        </Button>

        <Text mb="0.5rem" fontSize="1rem" textAlign="center">
          {translate('alreadyHaveAccountText')}
        </Text>
        <NextLink href="/auth/signin" passHref>
          <Link textAlign="center" display="block">
            {translate('loginLink')}
          </Link>
        </NextLink>
      </Box>
    </>
  );
}
