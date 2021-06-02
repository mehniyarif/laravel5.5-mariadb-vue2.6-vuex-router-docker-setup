window.Vue = require('vue');

require('./bootstrap');
require('./globalComponents');
require('./router');

const app = new Vue({ router:window.router }).$mount('#app')