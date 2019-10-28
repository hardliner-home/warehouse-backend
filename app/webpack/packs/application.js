import '../src/stylesheets/application.scss';

/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

window.Controllers = {};

import $ from 'jquery';
import '../src/javascripts/common';

import OrderIndex from '../src/javascripts/classes/OrderIndex';
import OrderNew from '../src/javascripts/classes/OrderNew';

window.Controllers.OrderIndex = OrderIndex;
window.Controllers.OrderNew = OrderNew;

var Turbolinks = require("turbolinks");
Turbolinks.start();

document.addEventListener("turbolinks:load", function() {
    bindClasses($('body'))
});

function bindClasses($scope) {
    $scope.find('[data-controller]').each((key, element) => {
        $.each($(element).data('controller').split(' '), (index, className) => {
            new (Controllers[className])($(element))
        })
    });
}