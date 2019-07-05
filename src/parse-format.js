import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const parseFormatData = function(output) {
  const doctorList = output.data;
  for (var i = 0; i < doctorList.length; i++) {
    const fullName = `${doctorList[i].profile.first_name} ${doctorList[i].profile.last_name}, ${doctorList[i].profile.title}`;

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
      } else {
        addressInfo = false;
      }
    }

    $('ol').append(`<li><span class="name">${fullName}</span>`);

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

    if (newPatients) {
      $('ol').append(`<br>Accepting New Patients &#9989</li>`);
    } else {
      $('ol').append('</li>');
    }
  }
}