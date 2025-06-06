import { randomUUID } from "crypto";

type TFarm = {
    id: string,
    number: number,
    createdAt: Date,
}

export class FarmModel {
    id: string;
    number: number;
    createdAt: Date;

    private constructor(farm: TFarm) {
        this.id = farm.id;
        this.number = farm.number;
        this.createdAt = farm.createdAt;
    }

    static fromDB(farm: TFarm) {
        return new FarmModel(farm);
    }

    static createNew(number: number) {
        return new FarmModel({
            id: randomUUID(),
            number: number,
            createdAt: new Date(),
        });
    }
}
