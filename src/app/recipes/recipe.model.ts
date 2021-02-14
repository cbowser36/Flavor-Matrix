export class Recipe {
    public name: string;
    public imagePath: string;
    public recipe: string;
 
 
    constructor(name:string, img: string, rec: string ){
        this.name = name;
        this.imagePath = img;
        this.recipe = rec;
    }
 }