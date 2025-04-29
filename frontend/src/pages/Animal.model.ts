import { Behavior } from "./Behavior.model";

export class Animal {

    animal_id! : number;
    name!: string;
    pictureName!: string;

    behaviors! : Behavior[];

    constructor(){

    }

    toString(): string{
        return "id : " + this.animal_id + ", name : " + this.name + ", pictureName : " + this.pictureName;
    }

    toCompleteString() : string {
        return this.toString() + ", behaviors : " + this.behaviors.forEach(b => b.toString());
    }
}