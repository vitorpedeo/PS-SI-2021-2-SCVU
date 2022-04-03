import { useForm } from 'react-hook-form';

import { useTranslation } from '@/features/intl';

import { Box, Button, TextInput } from '@/components';

import { FreightFormFields } from '../types';

export function FreightForm() {
  const { handleSubmit, register } = useForm<FreightFormFields>({
    defaultValues: {
      zip: '',
    },
  });

  const translate = useTranslation();

  function onSubmit(values: FreightFormFields) {
    console.log(values);
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      width="60%"
      mt="3rem"
      display="flex"
      alignItems="flex-end"
    >
      <TextInput
        label={translate('freightValueLabel')}
        placeholder={translate('freightValuePlaceholder')}
        {...register('zip')}
      />
      <Button ml="1.125rem" px="1rem" height="3rem">
        Ok
      </Button>
    </Box>
  );
}
