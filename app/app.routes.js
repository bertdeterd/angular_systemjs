"use strict";
var router_1 = require('@angular/router');
var start_component_1 = require('./start/start.component');
var second_component_1 = require('./second/second.component');
exports.routes = [
    { path: 'home', component: start_component_1.StartComponent },
    { path: 'second', component: second_component_1.SecondComponent },
    { path: '', component: start_component_1.StartComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map