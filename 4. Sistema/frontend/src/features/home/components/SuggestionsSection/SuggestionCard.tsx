import Image from 'next/image';
import { useRouter } from 'next/router';

import { Box, Button, Text } from '@/components';

interface SuggestionCardProps {
  imgName: string;
  title: string;
  price: number;
}

export function SuggestionCard({ imgName, title, price }: SuggestionCardProps) {
  const { push } = useRouter();

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);

  return (
    <Box
      p="1.5rem"
      width="100%"
      borderRadius="6px"
      bg="white"
      boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1)"
    >
      <Box
        width="100%"
        height="7.75rem"
        borderRadius="6px"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={`/images/${imgName}`}
          alt="Imagem do Anúncio"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Text my="0.75rem" fontSize="1.125rem" fontWeight="medium">
        {title}
      </Text>

      <Text mb="2rem" color="dark" fontSize="1.5rem" fontWeight="bold">
        {formattedPrice}
      </Text>

      <Button py="0.75rem" width="100%" onClick={e => push('/item/details')}>
        Ver mais detalhes
      </Button>
    </Box>
  );
}
