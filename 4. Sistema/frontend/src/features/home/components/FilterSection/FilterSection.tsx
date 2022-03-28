import {
  IoBed,
  IoCarSport,
  IoFootball,
  IoHome,
  IoPhonePortraitOutline,
  IoWoman,
} from 'react-icons/io5';

import { Box } from '@/components';
import { CategoryItem } from './CategoryItem';
import { SearchForm } from './SearchForm';

export function FilterSection() {
  return (
    <Box
      as="section"
      py="3.75rem"
      px="1.5rem"
      bg="blue"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box maxWidth="700px" width="100%">
        <SearchForm />

        <Box
          mt="2rem"
          width="100%"
          display="grid"
          gridGap="1.5rem"
          gridTemplateColumns="repeat(6, auto)"
        >
          <CategoryItem
            icon={<IoPhonePortraitOutline color="#323232" size={38} />}
            title="Eletrônicos"
          />
          <CategoryItem
            icon={<IoCarSport color="#323232" size={38} />}
            title="Auto e Peças"
          />
          <CategoryItem
            icon={<IoFootball color="#323232" size={38} />}
            title="Esportes"
          />
          <CategoryItem
            icon={<IoWoman color="#323232" size={38} />}
            title="Moda"
          />
          <CategoryItem
            icon={<IoHome color="#323232" size={38} />}
            title="Imóveis"
          />
          <CategoryItem
            icon={<IoBed color="#323232" size={38} />}
            title="Móveis"
          />
        </Box>
      </Box>
    </Box>
  );
}
