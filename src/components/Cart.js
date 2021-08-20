import React from 'react';
import TextTruncate from 'react-text-truncate';

const Cart = ({ fd }) => {
    const { strMeal, strMealThumb, strInstructions } = fd;
    return (
        <div className='p-6 cursor-pointer'>
            <img src={strMealThumb}
                alt=""
                className=' rounded-2xl'
            />
            <h3 className='text-xl my-3 text-center font-semibold  font-mono text-green-800'>{strMeal}</h3>
            <p className='text-justify	'>
                <TextTruncate
                    line={7}
                    element="small"
                    truncateText=".............."
                    text={strInstructions}
                />
            </p>
            {/* <p className='font-mono text-justify'><small>{strInstructions}</small></p> */}
        </div>
    );
};

export default Cart;