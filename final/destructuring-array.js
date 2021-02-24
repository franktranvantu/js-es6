'use strict';

let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];

const [w1, w2, w3, ...w] = widgets;
console.log(w1, w2, w3, w);