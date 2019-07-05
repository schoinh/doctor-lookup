import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const parseFormatData = function(output) {
  const doctorList = output.data;
  if (doctorList.length === 0) {
    $('.errors').text('No doctors in Seattle meet your search criteria.');
  } else {  
    $('ol').before('<p>&#9989 = Accepting new patients');

    for (var i = 0; i < doctorList.length; i++) {
      let fullName = `${doctorList[i].profile.first_name} ${doctorList[i].profile.last_name}, ${doctorList[i].profile.title}`;

      let specialty;
      if ((doctorList[i].specialties).length > 0) {
        specialty = doctorList[i].specialties[0].actor;
      } else {
        specialty = false;
      }

      let addressInfo;
      let phoneNumber;
      let webSite;
      let newPatients;
      for (var j = 0; j < (doctorList[i].practices).length; j++) {
        if (doctorList[i].practices[j].within_search_area === true) {
          addressInfo = doctorList[i].practices[j].visit_address;
          phoneNumber = doctorList[i].practices[j].phones[0].number;
          webSite = doctorList[i].practices[j].website;
          newPatients = doctorList[i].practices[j].accepts_new_patients;
          break;
        }
      }

      if (newPatients === true) {
        fullName = `${fullName} &#9989`;
      }

      if (specialty) {
        $('ol').append(`<li><span class="name">${fullName}</span><br>${specialty}`);
      } else {
        $('ol').append(`<li><span class="name">${fullName}</span>`);
      }

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
        $('ol').append(`<br><a href="${webSite}">${webSite}</a>`);
      } 
    }
  }
}