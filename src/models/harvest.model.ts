import { randomUUID } from "crypto";

type fingerSize = "s" | "r";
type fingerClass = "33BCP" | "25BCP" | "38BCP" | "30TR" | "38TR" | "36TR";


type THarvest = {
    id: string,
    farmId: string,
    fingerCount: number,
    fingerSize: fingerSize
    weight: number,
    fingerClass: fingerClass,
    confidence: number,
    createdAt: Date,
}

export class HarvestModel {
    id: string;
    farmId: string;
    fingerCount: number;
    fingerSize: fingerSize;
    weight: number;
    fingerClass: fingerClass;
    confidence: number;
    createdAt: Date;

    private constructor(harvest: THarvest) {
        this.id = harvest.id;
        this.farmId = harvest.farmId;
        this.fingerCount = harvest.fingerCount;
        this.fingerSize = harvest.fingerSize;
        this.weight = harvest.weight;
        this.fingerClass = harvest.fingerClass;
        this.confidence = harvest.confidence;
        this.createdAt = harvest.createdAt;
    }

    static fromDB(harvest: THarvest) {
        return new HarvestModel(harvest);
    }

    static createNew(harvest: { farmId: string, fingerCount: number, fingerSize: fingerSize, weight: number, fingerClass: fingerClass, confidence: number }) {
        return new HarvestModel({
            id: randomUUID(),
            farmId: harvest.farmId,
            fingerCount: harvest.fingerCount,
            fingerSize: harvest.fingerSize,
            weight: harvest.weight,
            fingerClass: harvest.fingerClass,
            confidence: harvest.confidence,
            createdAt: new Date(),
        });
    }
}
