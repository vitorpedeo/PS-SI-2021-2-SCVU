import { yupResolver } from '@hookform/resolvers/yup';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';

import { signInSchema } from '@/features/auth/schemas';
import { SignInFormFields } from '@/features/auth/types';

import { Box, Button, Heading, Link, Text, TextInput } from '@/components';
import { GoogleLoginButton } from './GoogleLoginButton';

export function SignInForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormFields>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInSchema),
  });

  function onSubmit(values: SignInFormFields) {
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
        Acesse sua conta
      </Text>

      <Box display="grid" gridGap="1rem">
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
        Entrar
      </Button>

      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box width="42%" height="1px" bg="#F2F2F2" />
        <Text color="#898989" fontSize="0.875rem">
          ou
        </Text>
        <Box width="42%" height="1px" bg="#F2F2F2" />
      </Box>

      <GoogleLoginButton />

      <Text mb="0.5rem" fontSize="1rem" textAlign="center">
        Não tem uma conta?
      </Text>
      <NextLink href="/auth/signup" passHref>
        <Link textAlign="center" display="block">
          Cadastre-se agora
        </Link>
      </NextLink>
    </Box>
  );
}
