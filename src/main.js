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
          let phoneNumber;
          let webSite;
          for (var j = 0; j < (doctorList[i].practices).length; j++) {
            if (doctorList[i].practices[j].within_search_area === true) {
              addressInfo = doctorList[i].practices[j].visit_address;
              phoneNumber = doctorList[i].practices[j].phones[0].number;
              webSite = doctorList[i].practices[j].website;
              break;
            } else {
              addressInfo = false;
            }
          }

          // for (j = 0; j < (doctorList[i].practices).length; j++) {
          //   if (doctorList[i].practices[j].within_search_area === true) {
          //     break;
          //   }
          // }

          // for (j = 0; j < (doctorList[i].practices).length; j++) {
          //   if (doctorList[i].practices[j].within_search_area === true && doctorList[i].practices[j].website) {
          //     // webSite = ;
          //     break;
          //   } else {
          //     // phoneNumber = false;
          //   }
          // }

          $('ol').append(`<li>${fullName}`);

          if (addressInfo) {
            const addressOutput = `${addressInfo.street}<br>${addressInfo.city}, ${addressInfo.state} ${addressInfo.zip}`
            $('ol').append(`${addressOutput}`);
          } else {
            $('ol').append('No address on file');
          }

          if (phoneNumber) {
            const phoneNumberOutput = `(${phoneNumber.substring(0,3)}) ${phoneNumber.substring(3,6)}-${phoneNumber.substring(6,10)}`;
            $('ol').append(`<br>${phoneNumberOutput}`);
          } else {
            $('ol').append('<br>No phone number on file');
          }

          if (webSite) {
            $('ol').append(`<br><a href="${webSite}">${webSite}</a></li>`);
          } else {
            $('ol').append('</li>');
          }
        }
      })

      .catch(function(error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });

    $('form')[0].reset();
  });
});
