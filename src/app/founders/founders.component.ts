import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface founders {
  name: string;
  rango: string[]
  meses: number;
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
      meses: 19,
    },
  ];
  foundersBeta: founders[] = [
    {
      name: 'Morro02',
      rango: ['Beta'],
      meses: 8,
    },
    {
      name: 'Puchichi-España',
      rango: ['Beta'],
      meses: 4,
    },
    {
      name: 'Ales715',
      rango: ['Beta'],
      meses: 4,
    },
    {
      name: 'Hugomiles',
      rango: ['Beta'],
      meses: 3,
    },
    {
      name: 'Kqrlxz',
      rango: ['Beta'],
      meses: 2,
    },
    {
      name: 'Roberto_133',
      rango: ['Beta'],
      meses: 2,
    },
  ];
    foundersDelta: founders[] = [
    {
      name: 'PlayerZ',
      rango: ['Delta'],
      meses: 11,
    },
    {
      name: 'Raulator2000',
      rango: ['Delta'],
      meses: 4,
    },
    {
      name: 'Marcsl2014',
      rango: ['Delta'],
      meses: 3,
    },
    {
      name: 'SoyDark32',
      rango: ['Delta'],
      meses: 4,
    },
    {
      name: 'Quinn-Madox',
      rango: ['Delta'],
      meses: 3,
    },
    {
      name: 'Henryy',
      rango: ['Delta'],
      meses: 2,
    },
    {
      name: 'Artairoga',
      rango: ['Delta'],
      meses: 2,
    },
    {
      name: 'Massimo clari',
      rango: ['Delta'],
      meses: 2,
    },
    {
      name: 'Noeclas',
      rango: ['Delta'],
      meses: 1,
    },
    {
      name: 'Emmacho',
      rango: ['Delta'],
      meses: 1,
    },
    {
      name: 'Lpo123xd',
      rango: ['Delta'],
      meses: 1,
    },
    {
      name: 'LaylaYunik',
      rango: ['Delta'],
      meses: 1,
    },
  ];
  foundersOmega: founders[] = [
    {
      name: 'Soy_Oihan18',
      rango: ['Omega'],
      meses: 20,
    },
    {
      name: 'Dami',
      rango: ['Omega'],
      meses: 6,
    },
    {
      name: 'Raul23O8ir',
      rango: ['Omega'],
      meses: 2,
    },
    {
      name: 'Andr3u6',
      rango: ['Omega'],
      meses: 4,
    },
    {
      name: 'Mem',
      rango: ['Omega'],
      meses: 2,
    },
    {
      name: 'Miguel',
      rango: ['Omega'],
      meses: 3,
    },
  ];
}
