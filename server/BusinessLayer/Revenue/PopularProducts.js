const express = require("express");

const PopularProducts = async (req, res) =>{
    const data = [
        {
            id: '1',
            name: 'Đào Duy long',
            product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
            hours: '2h45p',
            states: 0
        },
        {
            id: '1',
            name: 'Đào Duy long',
            product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
            hours: '0',
            states: 1
        },
        {
            id: '1',
            name: 'Đào Duy long',
            product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
            hours: '3h45p',
            states: 0
        }
    ]
    
    return res.status(200).json(data);
}



module.exports = PopularProducts;