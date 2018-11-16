var countryFunctions = window.countryFunctions || {};
var allCountries = window.allCountries|| {};

countryFunctions.getAllCountries = function getAllCountries (api) {
    var request = new XMLHttpRequest();

    request.open('GET', api, true);
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            data.forEach(function (country) {
                // console.log(country.name);
            });
            allCountries = data;
            countryFunctions.renderCountry(allCountries);
        } else {
            console.log('error');
        }
    }
    request.send();
};

countryFunctions.renderCountry = function renderCountry (data) {
    var feedDiv = document.querySelector('.feed');
    if (data.length) {
        data.forEach(function (country, index) {
           var name = country.name;
            var flag = country.flag;

            var article = document.createElement('article');
            article.setAttribute('class', 'project project--254515 brick cf brick--show');
            article.setAttribute('id', 'project-254515');
            feedDiv.appendChild(article);

            var link = document.createElement('a');
            link.setAttribute('href', '#');
            article.appendChild(link);

            var thumb = document.createElement('div');
            thumb.setAttribute('class', 'thumb');
            link.appendChild(thumb);

            var image = document.createElement('div');
            image.setAttribute('style', 'background-image: url(' + flag + ')');
            image.setAttribute('class', 'image');
            image.setAttribute('alt', name);
            thumb.appendChild(image);

            var thumbTitle = document.createElement('div');
            thumbTitle.setAttribute('class', 'thumbnail-title-wrap');
            link.appendChild(thumbTitle);

            var center = document.createElement('div');
            center.setAttribute('class', 'center');
            thumbTitle.appendChild(center);

            var name = document.createElement('div');
            name.setAttribute('class', 'title title--thumbnail');
            center.appendChild(name);

            if (index > 250) {
                throw Error;
            }
        });
    }
};

(function () {
    var countriesApi = 'https://restcountries.eu/rest/v2/all';

    countryFunctions.getAllCountries(countriesApi);
})();