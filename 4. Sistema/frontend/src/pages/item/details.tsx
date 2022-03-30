import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';
import { IoChatbubble, IoStar, IoStarHalf } from 'react-icons/io5';

import { withSSRProtection } from '@/features/auth';
import { FreightForm } from '@/features/item';
import { Box, Button, Header, Heading, Text } from '@/components';

function ItemDetails() {
  const { back } = useRouter();

  return (
    <>
      <Head>
        <title>Desapega | Detalhes do Anúncio</title>
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
          <Button
            onClick={back}
            mb="2rem"
            py="0.75rem"
            px="1.125rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <BiArrowBack size={24} style={{ marginRight: 6 }} />
            Voltar
          </Button>

          <Box
            width="100%"
            display="grid"
            gridGap="3.5rem"
            gridTemplateColumns="repeat(2, 1fr)"
          >
            <Box
              width="100%"
              height="18.75rem"
              borderRadius="12px"
              overflow="hidden"
              position="relative"
            >
              <Image
                src="/images/carro.jpg"
                alt="Imagem do Anúncio"
                layout="fill"
                objectFit="cover"
              />
            </Box>

            <Box width="100%">
              <Heading fontSize="2rem" fontWeight="normal">
                Fiat Argo 1.0 2021
              </Heading>

              <Box
                mt="0.5rem"
                mb="1rem"
                width="100%"
                display="flex"
                alignItems="center"
              >
                <Box
                  display="grid"
                  gridGap="0.25rem"
                  gridTemplateColumns="repeat(5, auto)"
                >
                  <IoStar size={16} color="#FFD966" />
                  <IoStar size={16} color="#FFD966" />
                  <IoStar size={16} color="#FFD966" />
                  <IoStar size={16} color="#FFD966" />
                  <IoStarHalf size={16} color="#FFD966" />
                </Box>

                <Text ml="0.75rem" fontSize="0.75rem">
                  120 avaliações
                </Text>
              </Box>

              <Text color="dark" fontSize="2rem" fontWeight="bold">
                R$ 55.000,00
              </Text>

              <FreightForm />

              <Button mt="2.5rem" mb="1rem" py="0.875rem" width="60%">
                Comprar
              </Button>
              <Button
                py="0.875rem"
                width="60%"
                border="1px solid #255eb4"
                bg="white"
                color="blue"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IoChatbubble size={22} style={{ marginRight: 6 }} />
                Chat
              </Button>
            </Box>
          </Box>

          <Heading mt="4rem" mb="1rem" fontSize="2rem">
            Descrição do anúncio
          </Heading>

          <Text fontSize="1rem" style={{ lineHeight: '24px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
            gravida leo. Nunc id interdum orci. Sed urna lacus, rutrum
            scelerisque risus eget, volutpat venenatis nunc. Curabitur
            pellentesque vulputate magna, a maximus ipsum fermentum eget. In
            tellus velit, mollis et pellentesque ac, euismod vel felis. Nam
            iaculis et libero pretium sollicitudin. Donec et vestibulum purus,
            id malesuada tortor. Vivamus tristique lectus in facilisis ornare.
            Proin et porta metus. Integer faucibus vehicula est in laoreet.
            Donec scelerisque vitae sapien non dictum. Duis at vehicula nibh.
            Aliquam erat volutpat. Aenean non urna at lacus consectetur dictum
            et ac felis. Pellentesque quam ante, hendrerit at nisi a, interdum
            tincidunt leo. Nam non tellus congue, facilisis velit scelerisque,
            facilisis lacus. Maecenas et nisi semper, ultrices libero quis,
            vulputate enim. Sed id sem nec purus facilisis lacinia sit amet eu
            arcu. Phasellus hendrerit luctus sapien, in volutpat quam gravida
            vel. Sed sed velit tristique, dictum massa sit amet, condimentum
            metus. Ut accumsan dapibus odio, non viverra sem tempus sed.
            Curabitur auctor, mi eu facilisis fermentum, odio nisi finibus nisi,
            euismod consequat dolor ligula vitae ipsum. Vivamus sit amet enim
            eros. Donec sollicitudin, justo at mollis mattis, velit justo
            maximus diam, in rhoncus mauris magna a nisl. Curabitur gravida orci
            congue lobortis mattis. Vivamus lobortis, ligula nec maximus
            accumsan, ante lacus viverra ante, eget viverra lectus libero eu
            velit. Praesent ac sem suscipit, porttitor est quis, fringilla est.
            Etiam laoreet ipsum at tortor malesuada blandit. Donec tincidunt
            maximus lacus, vel tempus sem tincidunt quis. Morbi pulvinar nisl
            nisl, viverra vulputate purus malesuada eu.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export const getServerSideProps = withSSRProtection();

export default ItemDetails;
