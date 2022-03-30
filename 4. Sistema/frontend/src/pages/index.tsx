import Head from 'next/head';
import NextLink from 'next/link';

import { withSSRProtection } from '@/features/auth';

import { FilterSection, SuggestionsSection } from '@/features/home';
import { Box, Header, Link } from '@/components';

function Home() {
  return (
    <>
      <Head>
        <title>Desapega</title>
      </Head>

      <Box as="main" width="100%" minHeight="100vh" bg="light">
        <Header />

        <FilterSection />

        <SuggestionsSection />

        <Box mx="auto" pb="3.5rem" px="1.5rem" maxWidth="1160px" width="100%">
          <NextLink href="/" passHref>
            <Link textAlign="right" display="block">
              Preciso de ajuda
            </Link>
          </NextLink>
        </Box>
      </Box>
    </>
  );
}

export const getServerSideProps = withSSRProtection();

export default Home;
