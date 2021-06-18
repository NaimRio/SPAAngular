import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Injectable({
  providedIn: 'root'
})
export class PeriodicTableService {

  private _elemments = new BehaviorSubject(ELEMENT_DATA);

  getElements(): Observable<any[]> {
    return this._elemments.asObservable();
  }
  setElements(elemments: any): void {
    this._elemments.next(elemments);
  }
  addElement(element: any): void {
    let currentElements = this._elemments.getValue()
    this.setElements([...currentElements, element])
  }
  removeLastElement() {
    let currentElements = this._elemments.getValue()
    currentElements.pop();
    this.setElements([...currentElements]);
  }

}
