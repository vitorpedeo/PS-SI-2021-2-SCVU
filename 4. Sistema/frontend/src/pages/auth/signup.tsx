import Head from 'next/head';

import { SignUpForm, withSSRAuthenticated } from '@/features/auth';

import { Box } from '@/components';

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
        <SignUpForm />
      </Box>
    </>
  );
}

export const getServerSideProps = withSSRAuthenticated();

export default SignUp;
