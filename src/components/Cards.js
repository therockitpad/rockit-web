import React from 'react';
import './Cards.css'
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Services</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/services-3.jpg'
                            text='Digital Marketing'
                            path='/services'
                        />
                        <CardItem
                            src='/images/services-4.jpg'
                            text='Graphic Design'
                            path='/services'
                        />
                        <CardItem
                            src='/images/services-1.jpg'
                            text='Custom Websites'
                            path='/services'
                        />
                        <CardItem
                            src='/images/services-2.jpg'
                            text='Social Media Management'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
