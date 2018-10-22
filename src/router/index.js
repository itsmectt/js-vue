import Vue from 'vue';
import Router from 'vue-router';
import cart from '@/components/cart';
import addr from '@/components/addr';
import App from '../App'

Vue.use(Router);

 export default new Router({
     mode:'history',
     routes: [
         {
           path: '/cart',
           name: 'cart',
           component:  cart,
         },
         {
           path: '/',
           component:  cart,
         },
        {
          path: '/addr',
          name: 'addr',
          component: addr,
        }
      ]  
 })

// export default [{
//     path:'/',
//     component:App,
//     children:[{
//         path:'',
//         component:r => require.ensure([],() => r (require('../App')),'App')
//     },{
//         path:'/cart',
//         component:r => require.ensure([],() => r (require('../components/cart')),'cart')
//     },{
//         path:'/address',
//         component:r => require.ensure([],() => r (require('../components/address')),'address')
//     }]
// }]