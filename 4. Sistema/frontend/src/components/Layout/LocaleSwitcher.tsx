import { Menu, MenuItem } from '@szhsin/react-menu';
import { useRouter } from 'next/router';
import { BiWorld } from 'react-icons/bi';

import { Box, Button, Text } from '../Base';

export function LocaleSwitcher() {
  const { asPath, locale, pathname, push, query } = useRouter();

  const isPortugueseLocale = locale === 'pt-BR';

  return (
    <Box position="fixed" bottom="20px" right="20px">
      <Menu
        menuButton={
          <Button
            aria-label="Mudar idioma"
            py="0.5rem"
            px="1rem"
            bg="blue"
            color="white"
            display="flex"
            alignItems="center"
          >
            <BiWorld size={32} />
          </Button>
        }
        align="end"
        direction="left"
        viewScroll="close"
        transition
        arrow
      >
        {isPortugueseLocale ? (
          <MenuItem
            onClick={() =>
              push({ pathname, query }, asPath, { locale: 'en-US' })
            }
          >
            <Text color="mid-dark" fontSize="1rem" fontWeight="bold">
              Change to English-US
            </Text>
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() =>
              push({ pathname, query }, asPath, { locale: 'pt-BR' })
            }
          >
            <Text color="mid-dark" fontSize="1rem" fontWeight="bold">
              Mudar para Português-BR
            </Text>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
}
