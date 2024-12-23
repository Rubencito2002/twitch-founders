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
      meses: 21,
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
      renovado: false,
    },
    {
      name: 'Ales715',
      rango: ['Beta'],
      meses: 4,
      renovado: false,
    },
    {
      name: 'Hugomiles',
      rango: ['Beta'],
      meses: 3,
      renovado: false,
    },
    {
      name: 'Kqrlxz',
      rango: ['Beta'],
      meses: 2,
      renovado: false,
    },
    {
      name: 'Roberto_133',
      rango: ['Beta'],
      meses: 3,
      renovado: true,
    },
  ];
  foundersDelta: founders[] = [
    {
      name: 'PlayerZ',
      rango: ['Delta'],
      meses: 13,
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
      renovado: false,
    },
    {
      name: 'SoyDark32',
      rango: ['Delta'],
      meses: 5,
      renovado: true,
    },
    {
      name: 'Quinn-Madox',
      rango: ['Delta'],
      meses: 3,
      renovado: false,
    },
    {
      name: 'Henryy',
      rango: ['Delta'],
      meses: 2,
      renovado: false,
    },
    {
      name: 'Artairoga',
      rango: ['Delta'],
      meses: 4,
      renovado: true,
    },
    {
      name: 'Massimo364',
      rango: ['Delta'],
      meses: 3,
      renovado: true,
    },
    {
      name: 'Noeclas',
      rango: ['Delta'],
      meses: 2,
      renovado: false,
    },
    {
      name: 'Lpo123xd',
      rango: ['Delta'],
      meses: 2,
      renovado: false,
    },
    {
      name: 'Emmacho',
      rango: ['Delta'],
      meses: 1,
      renovado: false,
    },
    {
      name: 'LaylaYunik',
      rango: ['Delta'],
      meses: 2,
      renovado: true,
    },
    {
      name: 'DiegoSparkle',
      rango: ['Delta'],
      meses: 1,
      renovado: false,
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
      meses: 8,
      renovado: true,
    },
    {
      name: 'Andr3u6',
      rango: ['Omega'],
      meses: 5,
      renovado: true,
    },
    {
      name: 'Miguel',
      rango: ['Omega'],
      meses: 4,
      renovado: false,
    },
    {
      name: 'Mem',
      rango: ['Omega'],
      meses: 2,
      renovado: false,
    },
    {
      name: 'Raul23O8ir',
      rango: ['Omega'],
      meses: 2,
      renovado: false,
    },
  ];
  foundersEpsilon: founders[] = [
    
  ];
  foundersZenith : founders[] = [
    {
      name: 'Massimo364',
      rango: ['Zenith '],
      meses: 4,
      renovado: true,
    },
    {
      name: 'Puchichi-España',
      rango: ['Zenith'],
      meses: 5,
      renovado: false,
    },
  ];
  foundersHorizon: founders[] = [
    
  ];
}
