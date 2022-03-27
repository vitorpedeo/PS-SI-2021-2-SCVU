import { InputHTMLAttributes } from 'react';

import { Box, Input, Text } from '@/components';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function TextInput({ label, ...rest }: TextInputProps) {
  return (
    <Box width="100%">
      <Text as="label" fontSize="1rem" fontWeight="bold">
        {label}
      </Text>

      <Input mt="0.5rem" {...rest} />
    </Box>
  );
}
