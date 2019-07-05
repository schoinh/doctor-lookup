# Doctor Lookup

#### _A web site for searching for doctors - July 5, 2019_

#### _By **Na Hyung Choi**_

## Description

On this web site, a user may enter a medical issue and receive a list of doctors in Seattle. This web site uses the [BetterDoctor API](https://developer.betterdoctor.com).

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Enter a medical issue to receive a list of doctors in the Seattle area that fit the search query** | diabetes | Jenny Smith, MD</br>123 Salmon St, Seattle, WA 98101</br>(206) 123-4567</br>http://drjennysmith.com</br>Accepting New Patients: Yes |

## Setup/Installation Requirements

1. Clone this repository:
    ```
    $ git clone REPO URL HERE
    ```
2. Install dependencies:
    ```
    $ npm install
    ```
3. Get an API key from the [NAME OF API SITE] (URL OF API SITE)
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

* OR go directly to the [Web page](http://schoinh.github.io/XXXXXXX)

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
