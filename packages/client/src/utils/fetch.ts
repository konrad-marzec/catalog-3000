import history from '../routes/history';

async function getRequestId(): Promise<string> {
  const data = await crypto.subtle.digest('SHA-256', crypto.getRandomValues(new Uint32Array(10)));
  const hashArray = Array.from(new Uint8Array(data));

  return hashArray.map((value) => value.toString(16).padStart(2, '0')).join('');
}

function getToken() {
  try {
    return localStorage.getItem('token') ?? undefined;
  } catch {
    return undefined;
  }
}

function handleErrors(response: Response) {
  if (!response.ok) {
    void Promise.reject(response);
  }

  return response;
}

export function handleAuthorization(response: Response): Response {
  if ([401, 403].includes(response.status)) {
    localStorage.removeItem('token');
    history.push(`/auth?path=${window.location.pathname}`);
  }

  return response;
}

export default async function _fetch(
  input: RequestInfo,
  init?: Omit<RequestInit, 'body'> & { body?: Record<string, unknown> },
): Promise<Response> {
  const token = getToken();
  const requestId = await getRequestId();

  return fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      'X-Request-Id': requestId,
      ...(token ? { Authorization: `Bearer ${token}` } : undefined),
    },
    credentials: 'same-origin',
    body: init?.body
      ? JSON.stringify({
          requestId,
          payload: init.body,
        })
      : undefined,
  }).then(handleErrors);
}
