import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { Menu, MenuItem } from '@szhsin/react-menu';
import { IoChevronDown, IoPerson } from 'react-icons/io5';

import { Box, Button, Link, Text } from '@/components/Base';
import { MobileSidebar } from './MobileSidebar';
import { successToast } from '../Toast';

export function Header() {
  const { pathname, push } = useRouter();

  function handleLogout() {
    signOut({ redirect: false });

    successToast('Até mais!');

    push('/auth/signin');
  }

  return (
    <Box as="header" width="100%" bg="white">
      <Box
        mx="auto"
        px="1.5rem"
        maxWidth="1160px"
        width="100%"
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <NextLink href="/" passHref>
          <Link color="dark" fontSize="2rem" fontWeight="bold">
            Desapega
          </Link>
        </NextLink>

        <Box
          as="nav"
          display={['none', 'none', 'none', 'grid']}
          gridGap="2rem"
          gridTemplateColumns="repeat(3, auto)"
        >
          <NextLink href="/" passHref>
            <Link
              color="blue"
              fontSize="1.125rem"
              fontWeight="medium"
              display="flex"
              alignItems="center"
            >
              Compras
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link
              color="blue"
              fontSize="1.125rem"
              fontWeight="medium"
              display="flex"
              alignItems="center"
            >
              Minha Conta
            </Link>
          </NextLink>
          <Button
            px="1.125rem"
            height="42px"
            onClick={e => push('/item/new')}
            disabled={pathname === '/item/new'}
          >
            Anunciar
          </Button>
        </Box>

        <Box display={['none', 'none', 'none', 'grid']}>
          <Menu
            menuButton={
              <Button
                aria-label="Menu do Usuário"
                bg="transparent"
                color="dark"
                display="flex"
                alignItems="center"
              >
                <IoPerson size={24} />
                <IoChevronDown size={14} />
              </Button>
            }
            transition
            arrow
          >
            <MenuItem onClick={handleLogout}>
              <Text color="blue" fontSize="1.125rem" fontWeight="medium">
                Sair
              </Text>
            </MenuItem>
          </Menu>
        </Box>

        <MobileSidebar />
      </Box>
    </Box>
  );
}
