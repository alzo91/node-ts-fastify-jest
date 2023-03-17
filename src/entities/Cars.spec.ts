import { Car } from "./Car";

describe("[ENTITIES] Testing Car entity", () => {
  it("should be abel to create a new car", () => {
    const brand = "GM";
    const manufacture = 2022;
    const model = "Onix";
    const plate = "GHC-3I97";

    const car = new Car({
      brand,
      model,
      plate,
      manufacture,
    });

    expect(car).toHaveProperty("id");
    expect(car.car).toBeTruthy();
    expect(car.brand).toEqual(brand);
    expect(car.model).toEqual(model);
    expect(car.plate).toEqual(plate);
    expect(car.manufacture).toEqual(manufacture);
  });

  it("should be abel to create a new car with createdAt and updatedAt", () => {
    const createdAt = new Date();
    const { car } = new Car({
      brand: "GM",
      model: "Onix",
      plate: "GHC-3I97",
      manufacture: 2022,
      createdAt,
      updatedAt: createdAt,
    });
    expect(car.createdAt).toEqual(createdAt);
    expect(car.updatedAt).toBe(createdAt);
  });
});
