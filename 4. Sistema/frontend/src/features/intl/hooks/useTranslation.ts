import { useCallback } from 'react';
import { useIntl } from 'react-intl';

export function useTranslation() {
  const { formatMessage } = useIntl();

  const translate = useCallback(
    (id: string) => formatMessage({ id }),
    [formatMessage],
  );

  return translate;
}
