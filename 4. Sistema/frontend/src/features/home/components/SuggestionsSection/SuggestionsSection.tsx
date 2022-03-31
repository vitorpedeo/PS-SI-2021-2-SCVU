import { Box, Heading } from '@/components';
import { SuggestionCard } from './SuggestionCard';

export function SuggestionsSection() {
  return (
    <Box mx="auto" pb="6rem" px="1.5rem" maxWidth="1160px" width="100%">
      <Heading my="2.5rem" fontSize="2rem">
        Sugestões do dia
      </Heading>

      <Box
        width="100%"
        display="grid"
        gridGap="1.5rem"
        gridTemplateColumns="repeat(4, 1fr)"
      >
        <Heading>
          <SuggestionCard
            name="carro"
            imgPath="carro.jpg"
            title="Fiat Argo 1.0 2021"
            price={55000}
          />
        </Heading>
        <Heading>
          <SuggestionCard
            name="chuteira"
            imgPath="chuteira.jpg"
            title="Nike Mercurial Vapor"
            price={439.99}
          />
        </Heading>
        <Heading>
          <SuggestionCard
            name="abajur"
            imgPath="abajur.jpg"
            title="Abajur Stella"
            price={80}
          />
        </Heading>
        <Heading>
          <SuggestionCard
            name="camisa"
            imgPath="camisa_social.png"
            title="Camisa Social Masc."
            price={75}
          />
        </Heading>
      </Box>
    </Box>
  );
}
