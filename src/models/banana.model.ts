import { randomUUID } from "crypto";

type fingerSize = "s" | "r";
type fingerClass = "33bcp" | "25bcp" | "38bcp" | "30tr" | "38tr" | "36tr";


type TBanana = {
    id: string,
    farmId: string,
    fingerCount: number,
    fingerSize: fingerSize
    weight: number,
    fingerClass: fingerClass,
    confidence: number,
    createdAt: Date,
}

export class BananaModel {
    id: string;
    farmId: string;
    fingerCount: number;
    fingerSize: fingerSize;
    weight: number;
    fingerClass: fingerClass;
    confidence: number;
    createdAt: Date;

    private constructor(banana: TBanana) {
        this.id = banana.id;
        this.farmId = banana.farmId;
        this.fingerCount = banana.fingerCount;
        this.fingerSize = banana.fingerSize;
        this.weight = banana.weight;
        this.fingerClass = banana.fingerClass;
        this.confidence = banana.confidence;
        this.createdAt = banana.createdAt;
    }

    static fromDB(banana: TBanana) {
        return new BananaModel(banana);
    }

    static createNew(banana: { farmId: string, fingerCount: number, fingerSize: fingerSize, weight: number, fingerClass: fingerClass, confidence: number }) {
        return new BananaModel({
            id: randomUUID(),
            farmId: banana.farmId,
            fingerCount: banana.fingerCount,
            fingerSize: banana.fingerSize,
            weight: banana.weight,
            fingerClass: banana.fingerClass,
            confidence: banana.confidence,
            createdAt: new Date(),
        });
    }
}
