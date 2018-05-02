import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'MyPipe'
})
export class MyPipe implements PipeTransform {

  transform(value) {
    return value.split('').join('-');
  }

}
