import {
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
} from 'react';
import { FieldError } from 'react-hook-form';

import { Box, Input, Text } from '../Base';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: FieldError;
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = ({ name, label, error = undefined, ...rest }, ref) => {
  return (
    <Box width="100%">
      <Text as="label" htmlFor={name} fontSize="1rem" fontWeight="bold">
        {label}
      </Text>

      <Input
        ref={ref}
        id={name}
        name={name}
        mt="0.5rem"
        borderColor={error ? '#ef233c' : 'mid-light'}
        {...rest}
      />
      {!!error && (
        <Text as="small" color="#ef233c">
          {error.message}
        </Text>
      )}
    </Box>
  );
};

export const TextInput = forwardRef(TextInputBase);
