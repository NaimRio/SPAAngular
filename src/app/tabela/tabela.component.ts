import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { PeriodicElement } from '../Module/periodicElement';
import { Element } from './element';
import { PeriodicTableService } from '../periodic-table.service';


@Component({
  selector: 'spa-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // @Input() dataToDisplay:any = [];

  dataSource: any;

  constructor(private periodicTableService: PeriodicTableService) { }

  ngOnInit(): void {
    // this.dataSource = new ExampleDataSource(this.dataToDisplay);
    this.periodicTableService.getElements().subscribe(elements => { this.dataSource = new ExampleDataSource(elements) })
  }

  // ngOnChanges(changes:SimpleChanges){
  //   console.log(changes.dataToDisplay, this.dataSource);
  //   if(changes.dataToDisplay && this.dataSource) {
  //     console.log("dentro");
  //     this.dataSource.setData(changes.dataToDisplay)};
  // }

}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() { }

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}