import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorSearch } from './api-calls';

$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('.errors, .output').empty();

    const inputKeyword = $('#keyword').val();
    
    const doctorSearch = new DoctorSearch();
    const promise = doctorSearch.getDoctors(inputKeyword);
    
    promise
      .then(function(result) {
        const output = JSON.parse(result);
        const doctorList = output.data;
        for (var i = 0; i < doctorList.length; i++) {
          const nameFormatted = `${doctorList[i].profile.first_name} ${doctorList[i].profile.last_name}, ${doctorList[i].profile.title}`
          $('ol').append(`<li>${nameFormatted}</li>`);
        }
      })
      .catch(function(error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });

    $('form')[0].reset();
  });
});
