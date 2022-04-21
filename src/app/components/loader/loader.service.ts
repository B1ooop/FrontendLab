import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public loaderConditions: number = 0;

  constructor() { }

  public addLoaderCondition(): void {
    this.loaderConditions++;
  }

  public removeLoaderCondition(): void {
    this.loaderConditions--;
    if (this.loaderConditions < 0) {
      this.loaderConditions = 0;
    }
  }
}
