import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { PeriodicTableService } from '../periodic-table.service';

@Component({
  selector: 'spa-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css']
})
export class InserirComponent {
  formElement = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(2)]],
    position: [null, [Validators.required, Validators.min(1), Validators.max(118)]],
    weight: [null, Validators.required],
    symbol: [null, Validators.required]
  });

  constructor(private periodicTableService: PeriodicTableService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  handleAddElement(): void {
    this.periodicTableService.addElement(this.formElement.value)
  }

  handleRemoveLastElement(): void {
    this.periodicTableService.removeLastElement();
  }
}
