import { fastify, FastifyInstance } from 'fastify';
import routes from './src/routes/routes';

const PORT: number = 3000;

const server: FastifyInstance = fastify({
  logger: true,
});

server.register(routes);

const start = async () => {
  try {
    const adress = await server.listen({ port: PORT });
    console.log(`Server listening at ${adress}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
