import { Car, ICarProps } from "../../entities/Car";

export abstract class CarsRepository {
  abstract create(props: ICarProps): Promise<Car>;
  abstract findAll(): Promise<Car[]>;
  abstract findOne(uuid: string): Promise<Car>;
}
