import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorSearch } from './api-calls';

$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('.errors, ol').empty();

    const inputKeyword = $('#keyword').val();
    
    const doctorSearch = new DoctorSearch();
    const promise = doctorSearch.getDoctors(inputKeyword);
    
    promise
      .then(function(result) {
        const output = JSON.parse(result);
        const doctorList = output.data;
        for (var i = 0; i < doctorList.length; i++) {
          const fullName = `${doctorList[i].profile.first_name} ${doctorList[i].profile.last_name}, ${doctorList[i].profile.title}`;
          let addressInfo;
          for (var j = 0; j < (doctorList[i].practices).length; j++) {
            if (doctorList[i].practices[j].within_search_area === true && doctorList[i].practices[j].visit_address) {
            addressInfo = doctorList[i].practices[j].visit_address;
            break;
            } else {
              addressInfo = false;
            }
          }
          if (addressInfo) {
            const addressOutput = `${addressInfo.street}<br>${addressInfo.city}, ${addressInfo.state} ${addressInfo.zip}`
            $('ol').append(`<li>${fullName}<br>${addressOutput}</li>`);
          } else {
            $('ol').append(`<li>${fullName}<br>No address on file</li>`);
          }
        }
      })
      .catch(function(error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });

    $('form')[0].reset();
  });
});
