const fetchTrips = () => {
    const Headers = {
        'Content-Type': 'application/json',
        'x-apikey': "5dacbcd73cbe87164d4bb504",
        'cache-control': 'no-cache'
    }

    const url = "https://tripdata-452d.restdb.io/rest/trips";
    
    return fetch(url,{headers: Headers, mode: 'cors'});
};

export default fetchTrips;