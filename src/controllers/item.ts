import { v4 as uuidv4 } from 'uuid';
import { Item } from '../models/item';
import { Message } from '../models/message';
import { FastifyReply, FastifyRequest } from 'fastify';
import { ItemRequest } from '../models/request';

let items: Item[] = require('../data/items');

export function getItems(req: FastifyRequest, reply: FastifyReply) {
  reply.send(items);
}

export function getItem(req: ItemRequest, reply: FastifyReply) {
  const { id } = req.params;
  const item = items.find((item) => item.id == id);
  reply.send(item);
}

export function addItem(req: ItemRequest, reply: FastifyReply) {
  const { name } = req.body;
  const item: Item = {
    id: uuidv4(),
    name,
  };
  items = [...items, item];
  reply.code(201).send(item);
}

export function deleteItem(req: ItemRequest, reply: FastifyReply) {
  const { id } = req.params;
  items = items.filter((item) => item.id !== id);
  const message: Message = {
    message: `Item ${id} has been removed.`,
  };
  reply.send(message);
}

export function updateItem(req: ItemRequest, reply: FastifyReply) {
  const { id } = req.params;
  const { name } = req.body;

  items = items.map((item) => (item.id == id ? { id, name: name } : item));
  let item = items.find((item) => item.id == id);
  reply.send(item);
}
