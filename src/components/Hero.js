import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const Hero = () => {
    const [input, setInput] = useState('');
    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const handleSubmit = () => {

    }
    const [foods, setFoods] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;
        const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
        fetch( url2|| url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [input]);
console.log(foods)
    return (
        <>
            <div className='flex items-center mt-6 justify-center'>
                <input type="text"
                    name="search"
                    id=""
                    placeholder='Search Here'
                    className='border w-2/5 p-2 mr-3 text-center'
                    onChange={handleChange}
                />
                {/* <button className='bg-green-500 p-2 text-white md:w-28 sm:w-16 }' onclick={handleSubmit}>Search</button> */}
            </div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 m-3 gap-8 '>
                {foods.length &&foods.map(fd => (
                    <Cart fd={fd} key={fd.idMeal} />
                )
                )}
            </div>
        </>
    );
};

export default Hero;