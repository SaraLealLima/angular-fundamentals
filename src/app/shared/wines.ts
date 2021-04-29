import { Wine } from './wine'

export const WINES: Wine[] = [
    {
        id: '0',
        name: 'Arbo Reservado Cabernet Sauvignon',
        image: '/assets/images/arbo.webp',
        category: 'mains',
        featured: true,
        label: 'Tinto',
        price: '40,00',
        country: 'Brasil',
        description: 'Vinho para ser consumido jovem. Fácil de beber, remete frutas vermelhas e deliciosa acidez. Este exemplar possui 3,6 mg/L de Resveratrol, substância antioxidante presente no vinho que faz bem à saúde. Além da Pontuação Descorchados, foi premiado no Guia Adega de Vinhos do Brasil 2013, 2014 e 2016.',
        comments: [
            {
                rating: 5,
                comment: 'Sabor incrível',
                author: 'João Fonseca',
                date: '2021-01-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Vinícula muito esplêndida',
                author: 'Paul McVites',
                date: '2020-09-05T17:57:28.556094Z'
            },
            {
                rating: 5,
                comment: 'Apenas bebam, senhores',
                author: 'Michael Jailson',
                date: '2021-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Uma delícia!',
                author: 'Sr. Mendes',
                date: '2021-03-02T17:57:28.556094Z'
            },
            {
                rating: 3.5,
                comment: 'Muito bom, mas não superou as expectativas',
                author: 'Jorge George',
                date: '2020-12-02T17:57:28.556094Z'
            }
        ]
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
        description: 'Este vinho é elaborado com uvas cultivadas no Córdon del Plata, na Cordilheira dos Andes, um local de altitude elevada, que possui um terroir diferenciado. Nesta área, a rainha das uvas tintas atinge um grau de maturação perfeito.',
        comments: [
            {
                rating: 5,
                comment: 'Sabor incrível',
                author: 'João Fonseca',
                date: '2021-01-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Vinícula muito esplêndida',
                author: 'Paul McVites',
                date: '2020-09-05T17:57:28.556094Z'
            },
            {
                rating: 5,
                comment: 'Apenas bebam, senhores',
                author: 'Michael Jailson',
                date: '2021-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Uma delícia!',
                author: 'Sr. Mendes',
                date: '2021-03-02T17:57:28.556094Z'
            },
            {
                rating: 3.5,
                comment: 'Muito bom, mas não superou as expectativas',
                author: 'Jorge George',
                date: '2020-12-02T17:57:28.556094Z'
            }
        ]
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
        description: 'O Giaretta Reserva Cabernet Sauvignon é a tradução da busca pela perfeição na elaboração de um vinho. O resultado é harmônico, de boa complexidade, com rápidas notas de carvalho, tornando-o superior.',
        comments: [
            {
                rating: 5,
                comment: 'Sabor incrível',
                author: 'João Fonseca',
                date: '2021-01-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Vinícula muito esplêndida',
                author: 'Paul McVites',
                date: '2020-09-05T17:57:28.556094Z'
            },
            {
                rating: 5,
                comment: 'Apenas bebam, senhores',
                author: 'Michael Jailson',
                date: '2021-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Uma delícia!',
                author: 'Sr. Mendes',
                date: '2021-03-02T17:57:28.556094Z'
            },
            {
                rating: 3.5,
                comment: 'Muito bom, mas não superou as expectativas',
                author: 'Jorge George',
                date: '2020-12-02T17:57:28.556094Z'
            }
        ]
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
        description: 'Um Malbec tradicional que representa o melhor do terroir de Mendoza, mas sem deixar de ser moderno em sua apresentação. Com taninos aveludados, frutado e boa complexidade, é um Malbec de vinhas velhas.',
        comments: [
            {
                rating: 5,
                comment: 'Sabor incrível',
                author: 'João Fonseca',
                date: '2021-01-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Vinícula muito esplêndida',
                author: 'Paul McVites',
                date: '2020-09-05T17:57:28.556094Z'
            },
            {
                rating: 5,
                comment: 'Apenas bebam, senhores',
                author: 'Michael Jailson',
                date: '2021-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Uma delícia!',
                author: 'Sr. Mendes',
                date: '2021-03-02T17:57:28.556094Z'
            },
            {
                rating: 3.5,
                comment: 'Muito bom, mas não superou as expectativas',
                author: 'Jorge George',
                date: '2020-12-02T17:57:28.556094Z'
            }
        ]
    }
];