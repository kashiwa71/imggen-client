// reverse.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

/**
 * A custom pipe that reverses the order of an array.
 * @param value - The array to be reversed.
 * @returns A new array with the elements in reverse order.
 */
@Pipe({
    name: 'reverse',
    pure: false // this is needed to make the pipe update the view when the array changes
})
export class ReversePipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value.slice().reverse();
  }
}