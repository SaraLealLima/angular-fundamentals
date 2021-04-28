import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine';

const WINES: Wine[] = [
  {
    id: '0',
    name: 'Arbo Reservado Cabernet Sauvignon',
    image: '/assets/images/arbo.webp',
    category: 'mains',
    featured: true,
    label: 'Tinto',
    price: '40,00',
    country: 'Brasil',
    description: 'Vinho para ser consumido jovem. Fácil de beber, remete frutas vermelhas e deliciosa acidez. Este exemplar possui 3,6 mg/L de Resveratrol, substância antioxidante presente no vinho que faz bem à saúde. Além da Pontuação Descorchados, foi premiado no Guia Adega de Vinhos do Brasil 2013, 2014 e 2016.'
  },
  {
    id: '1',
    name: 'Altos del Plata Cabernet Sauvignon 2019',
    image: '/assets/images/altos.webp',
    category: 'mains',
    featured: false,
    label: 'Tinto',
    price: '187,90',
    country: 'Argentina',
    description: 'Este vinho é elaborado com uvas cultivadas no Córdon del Plata, na Cordilheira dos Andes, um local de altitude elevada, que possui um terroir diferenciado. Nesta área, a rainha das uvas tintas atinge um grau de maturação perfeito.'
  },
  {
    id: '2',
    name: 'Giaretta Reserva Cabernet Sauvignon 2019',
    image: '/assets/images/giaretta.webp',
    category: 'mains',
    featured: false,
    label: 'Tinto',
    price: '58,70',
    country: 'Brasil',
    description: 'O Giaretta Reserva Cabernet Sauvignon é a tradução da busca pela perfeição na elaboração de um vinho. O resultado é harmônico, de boa complexidade, com rápidas notas de carvalho, tornando-o superior.'
  },
  {
    id: '3',
    name: 'Finca La Linda Old Vines Malbec 2018',
    image: '/assets/images/lalinda.webp',
    category: 'mains',
    featured: false,
    label: 'Tinto',
    price: '162,24',
    country: 'Argentina',
    description: 'Um Malbec tradicional que representa o melhor do terroir de Mendoza, mas sem deixar de ser moderno em sua apresentação. Com taninos aveludados, frutado e boa complexidade, é um Malbec de vinhas velhas.'
  }
 ];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  wines = WINES;

  selectedWine = WINES[0];

  constructor() { }

  ngOnInit(): void {
  }

}
