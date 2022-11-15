import React from 'react';
import image from '../../../Resources/Assets/images/serviceImage1.jpg'
import Card from './Card';

const Cards = () => {
    const cardData = [
        {
            id: 1,
            images: image,
            name: 'Teeth Clenning',
            price: '$50',
            description: 'Best Quality Service In Town!!',
            ratings:  '#####'
        },
        {
            id: 2,
            images: image,
            name: 'Teeth Clenning',
            price: '$50',
            description: 'Best Quality Service In Town!!',
            ratings:  '#####',
        },
        {
            id: 3,
            images: image,
            name: 'Teeth Clenning',
            price: '$50',
            description: 'Best Quality Service In Town!!',
            ratings:  '#####',
        },
        {
            id: 4,
            images: image,
            name: 'Teeth Clenning',
            price: '$50',
            description: 'Best Quality Service In Town!!',
            ratings:  '#####',
        },
        {
            id: 5,
            images: image,
            name: 'Teeth Clenning',
            price: '$50',
            description: 'Best Quality Service In Town!!',
            ratings:  '#####',
        },
        {
            id: 6,
            images: image,
            name: 'Teeth Clenning',
            price: '$50',
            description: 'Best Quality Service In Town!!',
            ratings:  '#####',
        },
    ]
    return (
        <div>
            {
                cardData.map(card => <Card
                key={card.id}
                card = {card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;