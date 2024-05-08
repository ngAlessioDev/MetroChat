import { parseTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { PartenzatreniPipe } from '../pipes/partenzatreni.pipe';

@Component({
  selector: 'ca-treni',
  template: `
    <div class="listatreni">
      <ul>
        <li
          *ngFor="let metro of listametro"
          style="background: {{ metro.bg_color }};"
        >
          <h2>LINEA <br>{{ metro.linea  | uppercase}}</h2>
          <p>ID: {{ metro.idt }}</p>
          <p>Partenza tra: {{ metro.tempo | partenzatreni }}</p>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./treni.component.css'],
})
export class TreniComponent {
  listametro = [
    {
      idt: 'ASD',
      linea: 'Rossa',
      numchatting: 32,
      tempo: 125000,
      bg_color: 'lightcoral',
    },
    {
      idt: 'AKE',
      linea: 'Verde',
      numchatting: 29,
      tempo: 145000,
      bg_color: 'lightgreen',
    },
    {
      idt: 'BFD',
      linea: 'Gialla',
      numchatting: 47,
      tempo: 155000,
      bg_color: 'yellow',
    },
    {
      idt: 'KZS',
      linea: 'Blu',
      numchatting: 51,
      tempo: 1234000,
      bg_color: 'lightblue',
    },
    {
      idt: 'DFC',
      linea: 'Viola',
      numchatting: 63,
      tempo: 1276000,
      bg_color: 'violet',
    },
    {
      idt: 'MWT',
      linea: 'Arancione',
      numchatting: 19,
      tempo: 12940000,
      bg_color: 'orange',
    },
  ];
}
