import { yupResolver } from '@hookform/resolvers/yup';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';

import { signUpSchema } from '@/features/auth/schemas';
import { SignUpFormFields } from '@/features/auth/types';

import { Box, Button, Heading, Link, Text, TextInput } from '@/components';

export function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormFields>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(signUpSchema),
  });

  function onSubmit(values: SignUpFormFields) {
    console.log(values);
  }

  return (
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
        Crie sua conta
      </Text>

      <Box display="grid" gridGap="1rem">
        <TextInput label="Nome" error={errors.name} {...register('name')} />
        <TextInput
          label="E-mail"
          type="email"
          error={errors.email}
          {...register('email')}
        />
        <TextInput
          label="Senha"
          type="password"
          error={errors.password}
          {...register('password')}
        />
      </Box>

      <Button type="submit" my="1.5rem" width="100%" height="48px">
        Cadastrar
      </Button>

      <Text mb="0.5rem" fontSize="1rem" textAlign="center">
        Já possui uma conta?
      </Text>
      <NextLink href="/auth/signin" passHref>
        <Link textAlign="center" display="block">
          Entre agora
        </Link>
      </NextLink>
    </Box>
  );
}
