import {  Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'alpha'
})



export class AlphaPipe implements PipeTransform{
   static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
     throw new Error('Method not implemented.');
   }
   transform(value: any){
    return value.sort()
   }
}