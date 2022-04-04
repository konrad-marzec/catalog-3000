import { Input } from '@catalog/ui-toolkit';
import { SyntheticEvent, useCallback } from 'react';
import styled from 'styled-components';
import history from '../../../routes/history';
import { useURLQuery } from '../../../utils/useURLQuery';

import { login } from '../auth.api';

const AuthHolder = styled.div`
  justify-content: center;
  align-items: center;
  min-height: 540px;
  display: flex;
  height: 100%;
  width: 100%;
`;

const Card = styled.div`
  box-shadow: 0px 0px 8px 2px var(--shadow);
  justify-content: space-between;
  background: var(--background);
  border-radius: 6px;
  padding: 26px 20px;
  height: 500px;
  width: 350px;
`;

const FormField = styled.div`
  display: flex;

  flex-direction: column;
`;

function Auth(): JSX.Element {
  const query = useURLQuery();

  const onSubmit = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      const target = e.target as typeof e.target & {
        username: { value: string };
        password: { value: string };
      };

      void login(target.username.value, target.password.value)
        .then((response) => {
          localStorage.setItem('token', response.token);
          history.replace(query.get('path') ?? '/');
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    },
    [query],
  );

  return (
    <AuthHolder>
      <Card>
        <form onSubmit={onSubmit}>
          <FormField>
            <label htmlFor="username">Username</label>
            <Input id="username" type="username" required />
          </FormField>
          <FormField>
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" required />
          </FormField>
          <Input type="submit" value="Login" />
        </form>
      </Card>
    </AuthHolder>
  );
}

export default Auth;
