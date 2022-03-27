import Head from 'next/head';

import { Box, Header } from '@/components';

function Home() {
  return (
    <>
      <Head>
        <title>Desapega</title>
      </Head>

      <Box as="main" width="100%" minHeight="100vh" bg="light">
        <Header />

        <h1>Desapega</h1>
      </Box>
    </>
  );
}

export default Home;
