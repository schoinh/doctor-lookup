export class DoctorSearch {
  getDoctorsByKeyword(keyword) {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${keyword}&location=47.609207,-122.336677,5&user_location=47.609207,-122.336677&sort=best-match-desc&limit=30&user_key=${process.env.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  getDoctorsByName(name) {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.609207,-122.336677,5&user_location=47.609207,-122.336677&sort=best-match-desc&limit=30&user_key=${process.env.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
