import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface founders {
  name: string;
  rango: string[]
  meses: number;
  renovado?: boolean;
}

@Component({
  selector: 'app-founders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './founders.component.html',
  styleUrl: './founders.component.css'
})

export class FoundersComponent {
  foundersAlfa: founders[] = [
    {
      name: 'Pepillo70',
      rango: ['Alfa'],
      meses: 20,
      renovado: true,
    },
  ];
  foundersBeta: founders[] = [
    {
      name: 'Morro02',
      rango: ['Beta'],
      meses: 8,
      renovado: false,
    },
    {
      name: 'Puchichi-España',
      rango: ['Beta'],
      meses: 4,
      renovado: true,
    },
    {
      name: 'Ales715',
      rango: ['Beta'],
      meses: 4,
      renovado: true,
    },
    {
      name: 'Hugomiles',
      rango: ['Beta'],
      meses: 3,
      renovado: true,
    },
    {
      name: 'Kqrlxz',
      rango: ['Beta'],
      meses: 2,
      renovado: true,
    },
    {
      name: 'Roberto_133',
      rango: ['Beta'],
      meses: 2,
      renovado: true,
    },
  ];
    foundersDelta: founders[] = [
    {
      name: 'PlayerZ',
      rango: ['Delta'],
      meses: 11,
      renovado: true,
    },
    {
      name: 'Raulator2000',
      rango: ['Delta'],
      meses: 4,
      renovado: true,
    },
    {
      name: 'Marcsl2014',
      rango: ['Delta'],
      meses: 3,
      renovado: true,
    },
    {
      name: 'SoyDark32',
      rango: ['Delta'],
      meses: 4,
      renovado: true,
    },
    {
      name: 'Quinn-Madox',
      rango: ['Delta'],
      meses: 3,
      renovado: true,
    },
    {
      name: 'Henryy',
      rango: ['Delta'],
      meses: 2,
      renovado: true,
    },
    {
      name: 'Artairoga',
      rango: ['Delta'],
      meses: 3,
      renovado: true,
    },
    {
      name: 'Massimo clari',
      rango: ['Delta'],
      meses: 2,
      renovado: true,
    },
    {
      name: 'Noeclas',
      rango: ['Delta'],
      meses: 2,
      renovado: true,
    },
    {
      name: 'Lpo123xd',
      rango: ['Delta'],
      meses: 2,
      renovado: true,
    },
    {
      name: 'Emmacho',
      rango: ['Delta'],
      meses: 1,
      renovado: true,
    },
    {
      name: 'LaylaYunik',
      rango: ['Delta'],
      meses: 1,
      renovado: true,
    },
    {
      name: 'DiegoSparkle',
      rango: ['Delta'],
      meses: 1,
      renovado: true,
    },
  ];
  foundersOmega: founders[] = [
    {
      name: 'Soy_Oihan18',
      rango: ['Omega'],
      meses: 20,
      renovado: true,
    },
    {
      name: 'Dami',
      rango: ['Omega'],
      meses: 7,
      renovado: true,
    },
    {
      name: 'Andr3u6',
      rango: ['Omega'],
      meses: 4,
      renovado: true,
    },
    {
      name: 'Miguel',
      rango: ['Omega'],
      meses: 4,
      renovado: true,
    },
    {
      name: 'Mem',
      rango: ['Omega'],
      meses: 2,
      renovado: true,
    },
    {
      name: 'Raul23O8ir',
      rango: ['Omega'],
      meses: 2,
      renovado: false,
    },
  ];
}
