import fetch from '../../utils/fetch';

export async function login(username: string, password: string): Promise<{ token: string }> {
  return fetch('/api/v1/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      username,
      password,
    },
  }).then(async (response: Response): Promise<{ token: string }> => response.json());
}
