import Image from 'next/image';

import { Box, Button } from '@/components';

export function GoogleLoginButton() {
  return (
    <Button
      type="button"
      my="1.5rem"
      width="100%"
      height="48px"
      bg="#4285F4"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box mr="0.5rem" width="26px" height="26px" position="relative">
        <Image src="/google-logo.png" alt="Google Logo" layout="fill" />
      </Box>
      Entrar com o Google
    </Button>
  );
}
