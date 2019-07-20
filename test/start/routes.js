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
Route.get('/two','ProductController.homeTwo')
Route.get('/three','ProductController.homeThree')
Route.on('/check-out').render('welcome')
Route.on('/cart').render('welcome')
Route.on('/contact').render('welcome')
Route.on('/login').render('welcome')
Route.on('/register').render('welcome')
Route.on('/restpassword').render('welcome')
Route.on('/shop').render('welcome')
Route.on('/account').render('welcome')


