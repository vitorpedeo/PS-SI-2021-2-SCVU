import Head from 'next/head';
import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';

import { NewItemForm } from '@/features/item';
import { Box, Button, Header, Heading } from '@/components';

function NewItem() {
  const { back } = useRouter();

  return (
    <>
      <Head>
        <title>Desapega | Novo Anúncio</title>
      </Head>

      <Box as="main" width="100%" minHeight="100vh" bg="light">
        <Header />

        <Box
          as="section"
          mx="auto"
          py="4rem"
          px="1.5rem"
          maxWidth="1160px"
          width="100%"
        >
          <Box width="100%" display="flex" alignItems="center">
            <Button
              onClick={back}
              py="0.75rem"
              px="1.125rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <BiArrowBack size={24} style={{ marginRight: 6 }} />
              Voltar
            </Button>

            <Heading ml="2.5rem" fontSize="3rem">
              Novo Anúncio
            </Heading>
          </Box>

          <NewItemForm />
        </Box>
      </Box>
    </>
  );
}

export default NewItem;
