import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partenzatreni',
})
export class PartenzatreniPipe implements PipeTransform {
  minuti!: number;
  secondi!: number;
  contorovescia!: string;

  transform(attesa: number, args?: any): string {
    this.minuti = Math.floor(attesa / 60000);
    this.secondi = Math.floor(attesa - this.minuti * 60000) / 1000;
    this.contorovescia =
      this.duecifre(this.minuti, '0', 2) +
      ':' +
      this.duecifre(this.secondi, '0', 2);
    return this.contorovescia;
  }
  duecifre(numero: number, zero: string, length: number): string {
    return (new Array(length + 1).join(zero) + numero).slice(-length);
  }
}
