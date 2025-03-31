export class Behavior {

    name! : string;
    description! : string;
    iterations!: number;
    type! : string;
    //paddock! : number; // A mettre dans un model animal qui comportera l'identification de l'animal et les comportement à enregistrer
    //duration! : Date; TODO ajouter un chrono

    constructor(){
        
    }

    toString(): string{
        return "name : \"" + this.name + "\", description : \"" + this.description + "\", iterations : " + this.iterations +
            ", type : \"" + this.type + "\"";
    }

}