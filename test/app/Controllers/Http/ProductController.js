'use strict'


class ProductController {


    getProduct({view})
    {

        let display = [
            {
              name: "chair",
              inventory: 5,
              price: 45.99,
              img: 'home2.jpg',
              sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'water.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'home5.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'bars.jpg',
                sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'home6.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'bars.jpg',
                sell: null
            }]


        let products = [
            {
              name: "chair",
              inventory: 5,
              price: 45.99,
              img: 'chips2.jpg',
              sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips2.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips5.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips4.jpg',
                sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips3.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips.jpg',
                sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips5.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips2.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips4.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips3.jpg',
                  sell: null
              },
              {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips2.jpg',
                sell: null 
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips5.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips4.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips3.jpg',
                  sell: null
              },
              {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips2.jpg',
                sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips5.jpg',
                  sell: 'SELL'
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips2.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips2.jpg',
                  sell: null
              },
              
          ];

        return view.render('welcomeone', {products, display });
    } 
    
    
    homeTwo({view})
    {

        let display = [
            {
              name: "chair",
              inventory: 5,
              price: 45.99,
              img: 'home2.jpg',
              sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'water.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'home5.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'bars.jpg',
                sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'home6.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'bars.jpg',
                sell: null
            }]


        let products = [
            {
              name: "chair",
              inventory: 5,
              price: 45.99,
              img: 'chips2.jpg',
              sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips2.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips5.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips4.jpg',
                sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips3.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips.jpg',
                sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips5.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips2.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips4.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips3.jpg',
                  sell: null
              },
              {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips2.jpg',
                sell: null 
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips5.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips4.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips3.jpg',
                  sell: null
              },
              {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips2.jpg',
                sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips5.jpg',
                  sell: 'SELL'
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips2.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips2.jpg',
                  sell: null
              },
              
          ];

        return view.render('welcometwo', {products, display });
    } 

    
    
    
    homeThree({view})
    {

        let display = [
            {
              name: "chair",
              inventory: 5,
              price: 45.99,
              img: 'home2.jpg',
              sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'water.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'home5.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'bars.jpg',
                sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'home6.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'bars.jpg',
                sell: null
            }]


        let products = [
            {
              name: "chair",
              inventory: 5,
              price: 45.99,
              img: 'chips2.jpg',
              sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips2.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips5.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips4.jpg',
                sell: 'SELL'
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips3.jpg',
                sell: null
            },
            {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips.jpg',
                sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips5.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips2.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips4.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips3.jpg',
                  sell: null
              },
              {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips2.jpg',
                sell: null 
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips5.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips4.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips3.jpg',
                  sell: null
              },
              {
                name: "chair",
                inventory: 5,
                price: 45.99,
                img: 'chips2.jpg',
                sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips5.jpg',
                  sell: 'SELL'
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips2.jpg',
                  sell: null
              },
              {
                  name: "chair",
                  inventory: 5,
                  price: 45.99,
                  img: 'chips2.jpg',
                  sell: null
              },
              
          ];

        return view.render('welcomethree', {products, display });
    } 
}

module.exports = ProductController
