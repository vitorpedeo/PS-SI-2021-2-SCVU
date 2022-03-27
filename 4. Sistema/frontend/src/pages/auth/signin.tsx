import Head from 'next/head';

import { SignInForm } from '@/features/auth';

import { Box } from '@/components';

function SignIn() {
  return (
    <>
      <Head>
        <title>Desapega | Login</title>
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
        <SignInForm />
      </Box>
    </>
  );
}

export default SignIn;
