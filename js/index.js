import '../index.html';
import getDateString from './date.js';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import 'bootstrap';

$(document).ready( () => {
    $('.js-content').html(`${getDateString()}`);
    $('.js-modal').modal({
        show: true,
        keyboard: true
    });
});

