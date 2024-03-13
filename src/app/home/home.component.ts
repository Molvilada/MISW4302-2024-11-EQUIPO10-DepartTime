import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  showedData: any[] = [];
  options: any[] = [];
  page: number = 1;
  totalPages: number = 1;
  itemsByPage: number = 8;
  maxItemsByPage: number = 8;

  ngOnInit(): void {
    for (let i = 0; i < this.itemsByPage; i++) {
      this.data.push({
        name: this.generateName(),
        date: this.generateDate(),
        startPlace: `${this.generateStreetName()} ${this.generateStreetNumber()}a #${this.generateStreetNumber()}b - ${this.generateStreetNumber()}`,
        finishPlace: `${this.generateStreetName()} ${this.generateStreetNumber()}a #${this.generateStreetNumber()}b - ${this.generateStreetNumber()}`,
        startTime: this.generateHour(),
      });
      this.options.push(i + 1);
    }
    this.cutData(this.itemsByPage);
  }

  cutData(value: number): void {
    this.showedData = this.data.slice(
      (this.page - 1) * value,
      value * this.page
    );
    this.totalPages = Math.ceil(this.data.length / value);
  }

  generateStreetName(): string {
    const address = ['Calle', 'Carrera', 'Avenida', 'Transversal'];
    return address[Math.floor(Math.random() * address.length)];
  }

  generateStreetNumber(): number {
    return Math.floor(Math.random() * 30) + 20;
  }

  generateName(): string {
    const activities: string[] = [
      'Ir de compras.',
      'Ir al supermercado.',
      'Ir a la oficina.',
      'Acudir a consultas médicas.',
      'Votar en elecciones.',
      'Ir al gimnasio.',
      'Entrevistas laborales.',
      'Spa y tratamientos de belleza.',
    ];
    return activities[Math.floor(Math.random() * activities.length)];
  }

  generateDate(): string {
    let generateDate: string = '';

    const year = this.generateAleatoryNumber(2000, 2022);
    const month = this.addCeroBeginAndEnd(this.generateAleatoryNumber(1, 12));
    const day = this.addCeroBeginAndEnd(this.generateAleatoryNumber(1, 28));
    return (generateDate = `${day}/${month}/${year}`);
  }

  generateHour(): string {
    const aleatoryHour = this.generateAleatoryNumber(0, 23);
    const aleatoryMinutes = this.generateAleatoryNumber(0, 59);
    return `${this.addCeroBeginAndEnd(aleatoryHour)}:${this.addCeroBeginAndEnd(
      aleatoryMinutes
    )}`;
  }

  generateAleatoryNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addCeroBeginAndEnd(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }

  selectedValue(event: any): void {
    const selectedValue = event.target.value;
    this.itemsByPage = selectedValue;
    this.cutData(selectedValue);
  }

  nextPage(): void {
    this.page = this.page + 1;
    this.cutData(this.itemsByPage);
  }

  prevPage(): void {
    this.page = this.page - 1;
    this.cutData(this.itemsByPage);
  }
}
