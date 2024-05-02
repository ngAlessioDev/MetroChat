import { Component } from '@angular/core';

@Component({
  selector: 'ca-lucicasa',
  template: `
  <div class="lucistanze">
    <ul>
      <li *ngFor="let lucisingole of lucidb">
      <i *ngIf="lucisingole.stato == 'ON'" class="material-icons on">lightbulb_outline</i>{{lucisingole.stanza}}</li>
      <!-- L'icona <i> apparirà solo se soddisfatta la condizione di *ngIf-->
    </ul>
  </div>
  `,
  styleUrls: ['./lucicasa.component.css']

})
export class LucicasaComponent {
lucidb = [
{stanza: 'Luce Cucine', stato: 'ON', luminosità: 5 },
{stanza: 'Luce Sala Pranzo', stato: 'OFF', luminosità: 2 },
{stanza: 'Luce Sala Bagno', stato: 'ON', luminosità: 8 }
]
}
