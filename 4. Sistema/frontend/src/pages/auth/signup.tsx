import Head from 'next/head';
import NextLink from 'next/link';

import { Box, Button, Heading, Link, Text, TextInput } from '@/components';

function SignUp() {
  return (
    <>
      <Head>
        <title>Desapega | Cadastrar Conta</title>
      </Head>

      <Box
        as="main"
        width="100%"
        minHeight="100vh"
        bg="light"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          as="form"
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
            <TextInput label="Nome" />
            <TextInput label="E-mail" type="email" />
            <TextInput label="Senha" type="password" />
          </Box>

          <Button type="submit" my="1.5rem" width="100%" height="48px">
            Cadastrar
          </Button>

          <Text mb="0.5rem" fontSize="1rem" textAlign="center">
            Já possui uma conta?
          </Text>
          <NextLink href="/auth/register" passHref>
            <Link textAlign="center" display="block">
              Entre agora
            </Link>
          </NextLink>
        </Box>
      </Box>
    </>
  );
}

export default SignUp;
