import { parseTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { PartenzatreniPipe } from '../pipes/partenzatreni.pipe';

@Component({
  selector: 'ca-treni',
  template: `
    <div class="listatreni">
      <ul>
        <li *ngFor="let metro of listametro">
          <h2>{{ metro.linea }}</h2>
          <p>ID: {{ metro.idt }}</p>
          <p>Partenza tra: {{ metro.tempo | partenzatreni }}</p>
        </li>
      </ul>
    </div>
  `,
})
export class TreniComponent {
  listametro = [
    { idt: 'ASD', linea: 'Rossa', numchatting: 32, tempo: 125000 },
    { idt: 'AKE', linea: 'Verde', numchatting: 29, tempo: 145000 },
    { idt: 'BFD', linea: 'Gialla', numchatting: 47, tempo: 155000 },
    { idt: 'KZS', linea: 'Blu', numchatting: 51, tempo: 1234000 },
  ];
}
