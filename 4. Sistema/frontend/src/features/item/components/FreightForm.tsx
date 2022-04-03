import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useTranslation } from '@/features/intl';

import {
  Box,
  Button,
  errorToast,
  Loading,
  Text,
  TextInput,
} from '@/components';

import { FreightFormFields, FreightFormAPIResponse } from '../types';

export function FreightForm() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FreightFormFields>({
    defaultValues: {
      zip: '',
    },
  });

  const [address, setAddress] = useState<string | null>(null);
  const [freightPrice, setFreightPrice] = useState<string | null>(null);

  const { locale } = useRouter();

  const translate = useTranslation();

  async function onSubmit(values: FreightFormFields) {
    const { zip } = values;

    return fetch(`https://viacep.com.br/ws/${zip}/json/`)
      .then(res => res.json())
      .then((data: FreightFormAPIResponse) => {
        const { bairro, localidade, logradouro, uf } = data;

        const userAddress = `${logradouro}, ${bairro}, ${localidade}, ${uf}`;
        const price = Math.random() * 20 + 10;
        const formattedPrice = new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: locale === 'pt-BR' ? 'BRL' : 'USD',
        }).format(price);

        setAddress(userAddress);
        setFreightPrice(formattedPrice);
      })
      .catch(err => {
        const errorMessage =
          locale === 'pt-BR' ? 'CEP inválido' : 'Invalid ZIP code';

        errorToast(errorMessage);
      });
  }

  return (
    <>
      {isSubmitting && <Loading />}
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

      {address && freightPrice && (
        <Box mt="1rem" width="60%">
          <Text
            color="blue"
            fontWeight="medium"
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {address}
          </Text>

          <Box
            mt="0.75rem"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>
              {locale === 'pt-BR' ? 'Chegará ' : 'Wil arrive '}
              <strong>{locale === 'pt-BR' ? 'amanhã' : 'tomorrow'}</strong>
            </Text>
            <Text>{freightPrice}</Text>
          </Box>
        </Box>
      )}
    </>
  );
}
