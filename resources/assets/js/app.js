window.Vue = require('vue');

require('./bootstrap');
require('./globalComponents');// Globally Registered Components
require('./directives');// Directives
require('./filters');// Filters
require('./helper');// Filters
require('./router');

const app = new Vue({ router:window.router }).$mount('#app')