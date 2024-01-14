import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleTimeLeftService {

  constructor() { }
  calculateTimeLeft(): string {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const diff = endOfDay.getTime() - now.getTime();

    if (diff <= 0) {
      return 'Sale has ended';
    }

    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hoursLeft} hours, ${minutesLeft} minutes, and ${secondsLeft} seconds`;
  }
}
