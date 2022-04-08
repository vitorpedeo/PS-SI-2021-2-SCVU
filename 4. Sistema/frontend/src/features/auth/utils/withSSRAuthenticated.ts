import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { getSession } from 'next-auth/react';

export function withSSRAuthenticated<T>(
  fn?: GetServerSideProps<T>,
): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<T>> => {
    const session = await getSession(ctx);

    if (session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    if (fn) {
      return fn(ctx);
    }

    return {
      props: {} as T,
    };
  };
}
