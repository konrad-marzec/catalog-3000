import { object, string, TypeOf } from 'zod';

export const createSessionSchema = object({
  body: object({
    payload: object({
      username: string({
        required_error: 'User name is required!',
      }),
      password: string({
        required_error: 'Password is required!',
      }),
    }),
  }),
});

export type CreateSessionInput = TypeOf<typeof createSessionSchema>;
