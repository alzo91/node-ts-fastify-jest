import Fastify from "fastify";
import { carsController } from "./controllers/car";

export const fastify = Fastify({
  logger: true,
});

const startServer = async () => {
  fastify.register(carsController);
  await fastify.listen({ port: 3333 });
};

startServer();
