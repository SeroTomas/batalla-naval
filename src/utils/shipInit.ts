import { SHIP_ORIENTATION } from "@/models";


export class Ship{

    private id;
    private size;
    private orientation;
    private coordinates?: string[];

    constructor(id:number, size: number, orientation: string){
        this.id = id;
        this.size = size;
        this.orientation = orientation;
    }

    public getId():number{
        return this.id;
    }

    public getSize(): number{
        return this.size;
    }

    public getOrientation():string {
        return this.orientation;
    }

    public setOrientation(orientation: string){
        this.orientation = orientation;
    }

    public getCoordinates():string[] | undefined {
        return this.coordinates;
    }

    public setCoordinates(coordinates: string[]){
        this.coordinates = coordinates;
    }

}

const ship1 = new Ship(1, 5, SHIP_ORIENTATION.VERTICAL);
const ship2 = new Ship(2, 4, SHIP_ORIENTATION.VERTICAL);
const ship3 = new Ship(3, 3, SHIP_ORIENTATION.VERTICAL);
const ship4 = new Ship(4, 3, SHIP_ORIENTATION.VERTICAL);
const ship5 = new Ship(5, 2, SHIP_ORIENTATION.VERTICAL);

export const ships = [ship1, ship2, ship3, ship4, ship5]