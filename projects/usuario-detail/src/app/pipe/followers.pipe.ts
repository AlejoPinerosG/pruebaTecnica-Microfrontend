import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followers'
})
export class FollowersPipe implements PipeTransform {

  transform(value: number): string {
    return value > 0 ? value.toString() : 'sin seguidores';
  }

}
