# Doctor Lookup

#### _A web site for searching for doctors - July 5, 2019_

#### _By **Na Hyung Choi**_

## Description

On this web site, a user may enter a medical issue and receive a list of doctors in Seattle. This web site uses the [BetterDoctor API](https://developer.betterdoctor.com).

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Search by medical issue to receive a list of doctors in the Seattle area that fit the search query** | Key Word: diabetes | Jenny Smith, MD</br>123 Salmon St, Seattle, WA 98101</br>(206) 123-4567</br>http://drjennysmith.com</br>Accepting New Patients: Yes</br></br>James Bobson, MD</br>... |
| **Search by name to receive a list of doctors in the Seattle area that fit the search query** | Last Name: Smith | Jenny Smith, MD</br>123 Salmon St, Seattle, WA 98101</br>(206) 123-4567</br>http://drjennysmith.com</br>Accepting New Patients: Yes</br></br>Tom Smith, MD</br>... |
| **Notifies user when no doctors meet the search criteria** | Last Name: Yeruweiot | No doctors meet your search criteria. |
| **Displays error message upon unsuccessful API call** | No API Key | 401 Error: Unauthorized |

## Setup/Installation Requirements

1. Clone this repository:
    ```
    $ git clone https://github.com/schoinh/doctor-lookup.git
    ```
2. Install dependencies:
    ```
    $ npm install
    ```
3. Register and get an API key from the [BetterDoctor API](https://developer.betterdoctor.com)
4. Create a file named ".env" inside the project directory:
    ```
    $ touch .env
    ```
5. Inside ".env", insert this line and save the file:
    ```
    exports.apiKey = YOUR API KEY HERE
    ```
6. Build distribution files:
    ```
    $ npm run build
    ```
7. Open the web page (dist/index.html)

* OR go directly to the [Web page](http://schoinh.github.io/doctor-lookup)

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap
* Jasmine/Karma
* ESLint
* Babel
* webpack
* npm

## Support and contact details

_Please contact Na Hyung with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Na Hyung Choi_**
