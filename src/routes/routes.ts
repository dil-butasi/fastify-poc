import { FastifyInstance } from 'fastify';
import * as Schema from '../schema/schema';

async function routes(fastify: FastifyInstance) {
  // //Get all items
  fastify.get('/items', Schema.getItemsOpts);
  //Get single item
  fastify.get('/items/:id', Schema.getItemOpts);
  // //Add item
  fastify.post('/items', Schema.postItemOpts);
  // //Delete item
  fastify.delete('/items/:id', Schema.deleteItemOpts);
  // //Update item
  fastify.put('/items/:id', Schema.updateItemOpts);
}

export default routes;
