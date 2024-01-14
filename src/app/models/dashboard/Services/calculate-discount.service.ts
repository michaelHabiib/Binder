import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateDiscountService {

  constructor() { }
  calculateDiscountPercentage(value: string): number {
    if (!value || typeof value !== 'string') {
      return NaN; // Return NaN for invalid input
    }

    // Remove leading and trailing whitespaces, and check if the string ends with '%'
    let trimmedValue = value.trim();
    if (trimmedValue.endsWith('%')) {
      // Remove the percentage sign and attempt to convert to a number
      let numericValue = parseFloat(trimmedValue.slice(0, -1));

      // Check if the conversion was successful and numericValue is a number
      return isNaN(numericValue) ? NaN : numericValue;
    }

    return NaN; // Return NaN for invalid input
  }
}
