export class Flavor {
   public name: string;
   public imagePath: string;
   public info: string;
   public pairings: string[] ;


   constructor(name:string, img: string, info: string, pair: string[] ){
       this.name = name;
       this.imagePath = img;
       this.info = info;
       this.pairings = pair;
   }
}