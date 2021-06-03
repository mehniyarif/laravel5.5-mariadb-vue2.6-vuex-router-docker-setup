window.Vue = require('vue');

require('./bootstrap');
require('./globalComponents');// Globally Registered Components
require('./directives');// Directives
require('./filters');// Filters
require('./helper');// Filters
require('./router');
require('./store/store');

const app = new Vue({ router:window.router, store:window.store }).$mount('#app')