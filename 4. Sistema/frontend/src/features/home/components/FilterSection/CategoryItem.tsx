import NextLink from 'next/link';
import { ReactNode } from 'react';

import { Box, Link, Text } from '@/components';

interface CategoryItemProps {
  icon: ReactNode;
  title: string;
}

export function CategoryItem({ icon, title }: CategoryItemProps) {
  return (
    <NextLink href="/" passHref>
      <Link display="flex" flexDirection="column" alignItems="center">
        <Box
          width="70px"
          height="70px"
          borderRadius="50%"
          bg="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Box>
        <Text
          mt="0.75rem"
          color="white"
          fontSize="1.125rem"
          fontWeight="medium"
        >
          {title}
        </Text>
      </Link>
    </NextLink>
  );
}
