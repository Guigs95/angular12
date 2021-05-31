import { Injectable } from '@angular/core';
import { Appareil } from '../components/appareil/model/appareil';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor() { }

  appareils: Appareil[] = [
    {
      id: 1,
      name: 'Cafétière',
      statut: 'éteint',
    },
    {
      id: 2,
      name: 'Télévision',
      statut: 'allumé',
    },
    {
      id: 3,
      name: 'Four',
      statut: 'éteint',
    },
  ]
}
