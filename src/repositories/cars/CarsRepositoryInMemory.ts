import { ICarProps, Car } from "../../entities/Car";
import { CarsRepository } from "./CarsRepository";

export class CarsRepositoryInMemory implements CarsRepository {
  private cars: Car[] = [];

  async create(props: ICarProps): Promise<Car> {
    const car = new Car(props);
    this.cars.push(car);
    return car;
  }

  async findAll(): Promise<Car[]> {
    throw new Error("Method not implemented.");
  }

  async findOne(uuid: string): Promise<Car> {
    throw new Error("Method not implemented.");
  }
}
