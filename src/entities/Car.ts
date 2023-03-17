import { Replace } from "../helpers/Replace";
import { uuid } from "../utils/uuid";

export interface ICarProps {
  id?: string | null;
  model: string;
  brand: string;
  manufacture: number;
  plate: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Car {
  private props: ICarProps;

  constructor(
    props: Replace<ICarProps, { createdAt?: Date; updatedAt?: Date }>
  ) {
    const id = !props.id ? uuid() : props.id;
    const createdAt = !props.createdAt ? new Date() : props.createdAt;
    const updatedAt = !props.createdAt ? new Date() : props.createdAt;
    this.props = { ...props, id, createdAt, updatedAt };
  }

  get car() {
    return this.props;
  }
  get id() {
    return this.props.id;
  }

  get model() {
    return this.props.model;
  }

  set model(model) {
    this.props.model = model;
  }

  get brand() {
    return this.props.brand;
  }

  set brand(brand) {
    this.props.brand = brand;
  }

  get manufacture() {
    return this.props.manufacture;
  }

  set manufacture(manufacture) {
    this.props.manufacture = manufacture;
  }

  get plate() {
    return this.props.plate;
  }

  set plate(plate) {
    this.props.plate = plate;
  }
}
