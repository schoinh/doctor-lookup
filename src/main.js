import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorSearch } from './api-calls';
import { parseFormatData } from './parse-format';

$(function() {
  $('#searchKeyword').submit(function(event) {
    event.preventDefault();
    $('.errors, ol, p').empty();

    const searchInput = $('#keyword').val();
    const doctorSearch = new DoctorSearch();
    const promise = doctorSearch.getDoctorsByKeyword(searchInput);
    
    promise
      .then(function(result) {
        const output = JSON.parse(result);
        parseFormatData(output);
      })
      .catch(function(error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
    
    $('form')[0].reset();
  });

  $('#searchName').submit(function(event) {
    event.preventDefault();
    $('.errors, ol, p').empty();

    const searchInput = $('#name').val();
    const doctorSearch = new DoctorSearch();
    const promise = doctorSearch.getDoctorsByName(searchInput);
    
    promise
      .then(function(result) {
        const output = JSON.parse(result);
        parseFormatData(output);
      })
      .catch(function(error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
    
    $('form')[1].reset();
  });
});