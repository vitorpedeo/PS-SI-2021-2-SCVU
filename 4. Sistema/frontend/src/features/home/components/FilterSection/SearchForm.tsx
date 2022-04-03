import { FormEvent } from 'react';
import { IoSearch } from 'react-icons/io5';

import { useTranslation } from '@/features/intl';

import { Box, Button, Input } from '@/components';

export function SearchForm() {
  const translate = useTranslation();

  function onSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      width="100%"
      boxShadow="0 4px 4px rgba(0, 0, 0, 0.2)"
      display="flex"
    >
      <Input
        id="search"
        name="search"
        placeholder={translate('filterItemsPlaceholder')}
        height="60px"
        borderRadius="4px 0 0 4px"
        color="mid-dark"
        fontSize="1.125rem"
      />
      <Button
        aria-label="Buscar Anúncios"
        px="1rem"
        borderRadius="0 4px 4px 0"
        bg="white"
      >
        <IoSearch color="#2968c8" size={32} />
      </Button>
    </Box>
  );
}
