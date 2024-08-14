/*************************************************************************
 * Access data via HTTP.
 */


__version__ = '1.1'


class HTTP {
    constructor(url, success, failure, notFound) {
        this.url = url;
        this.request = new XMLHttpRequest();

        this.request.addEventListener('load', function (event) {
            try {
                if (event.target.status == 200) {
                    success(JSON.parse(event.target.response));
                } else if (event.target.status == 404) {
                    console.log(event.target);
                    notFound(event.target.response);
                } else if (event.target.status == 302) {
                    location.href = event.target.response;
                } else {
                    failure(event.target.status, event.target.response, err, event.target);
                };
            } catch (err) {
                failure(event.target.status, event.target.response, err, event.target);
            };
        });
    };
    get(data={}) {
        const isEmpty = (value) => {
            for (let prop in value) if (value.hasOwnProperty(prop)) return false;
            return true;
        };
        if (isEmpty(data)) {
            this.request.open('GET', this.url);
        } else {
            let urlEncodedDataPairs = [];
            for (let [name, value] of Object.entries(data)) urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
            let urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
            this.request.open('GET', `${this.url}?${urlEncodedData}`);
        };
        
        this.request.send();
    };

    post(data) {
        this.request.open('POST', this.url);
        this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let urlEncodedDataPairs = [];

        for (let [name, value] of Object.entries(data)) urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);

        let urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

        this.request.send(urlEncodedData);
    };
};

  