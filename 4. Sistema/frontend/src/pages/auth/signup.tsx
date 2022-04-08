import Head from 'next/head';
import { useRouter } from 'next/router';

import { SignUpForm, withSSRAuthenticated } from '@/features/auth';

import { Box } from '@/components';

function SignUp() {
  const { locale } = useRouter();

  const tabTitle = `Desapega | ${
    locale === 'pt-BR' ? 'Cadastrar Conta' : 'Register Account'
  }`;

  return (
    <>
      <Head>
        <title>{tabTitle}</title>
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
