'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/','ProductController.getProduct')

//Route.get('/two','ProductController.homeTwo')
//Route.get('/three','ProductController.homeThree')

Route.get('/buy','ProductController.buy')
Route.get('/about','ProductController.about')
Route.get('/account','ProductController.account')
Route.get('/cart','ProductController.cart')


Route.get('/test','ProductController.home')
Route.get('/test/:id','ProductController.pick')


Route.get('/contact','ProductController.contact')
Route.get('/login','ProductController.login')
Route.get('/reg','ProductController.reg')
Route.get('/shop','ProductController.shop')



