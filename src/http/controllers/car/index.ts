import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { Car } from "../../../entities/Car";

export const carsController = async (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  next: (err?: Error | undefined) => void
) => {
  return fastify.get("/cars", handlerCarsConstroller);
};

const handlerCarsConstroller = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  console.log({ carsRequest: request });
  const { car } = new Car({
    brand: "brand",
    manufacture: 2023,
    model: "model",
    plate: "plate",
  });
  reply.status(200).send({ cars: [car, car, car] });
};
