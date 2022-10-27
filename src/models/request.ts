import { FastifyRequest } from 'fastify';

export interface ItemRequest extends FastifyRequest {
  params: {
    id: string;
  };
  body: {
    name: string;
  };
}
