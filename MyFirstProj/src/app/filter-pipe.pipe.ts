import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], searchText:string, fieldName: string) :any[]{
    if(!items) {return []}
 
    if(!searchText){return items}
 
    return items.filter(item => {
     if(item && item[fieldName]){
       return item[fieldName].toLowerCase().startsWith(searchText);
       //or
       // return item[fieldName].toLowerCase().includes(searchText);
     }
 
     return false;
     
    })
   }
}
