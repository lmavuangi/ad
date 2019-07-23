'use strict'

const Prod = use('App/Models/Product')

const Product = use('App/Models/Product')

class ProductController {




    account({view}){ return  view.render('account'); }
    about({view}){ return  view.render('about'); }
    buy({view}){ return  view.render('buy'); }
    cart({view}){ return  view.render('cart'); }
    contact({view}){ return  view.render('contact'); }
    login({view}){ return  view.render('login'); }
    reg({view}){ return  view.render('reg'); }

    

    home({view})
    {

        return 5;
    }
    
    shop({view}){
        
        const prod = new Prod;

        let products = prod.prod();

        let display = prod.getdis();

        return view.render('shop', {products, display });
    
    }
    
    test()
    {

        const prod = new Prod;

        let candy = prod.candy();

         return  candy; 
    }

    pick(params)
    {

        const prod = new Prod;
        let candy;

           /* switch(params)
            {
            case 1:
                candy = prod.candy();
                break;
            case 2:
                candy = prod.drinks();
                break;
            case 3:
                candy =  prod.prod();
                break;
            case 4:
                candy = prod.candy();
                break;
            case 5:
                candy = prod.prod();
                break;
            case 6:
                candy = prod.drinks();
                break;
            default:
                candy = prod.drinks();
                break;
            }*/

            candy = typeof params;

         return candy; 
    }

    getProduct({view})
    {
        //const prod = new Prod;

        //let products = prod.prod();

        //let display = prod.getdis();

        return view.render('welcome');
    } 
    
    
    homeTwo({view})
    {

        const prod = new Prod;

        let products = prod.prod();

        let display = prod.getdis();
        return view.render('welcometwo', {products, display });
    } 

    
    
    
    homeThree({view})
    {
 
          const prod = new Prod;

          let products = prod.prod();

          let display = prod.getdis();

        return view.render('welcomethree', {products, display });
    } 
}

module.exports = ProductController
