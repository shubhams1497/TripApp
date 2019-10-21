const Headers = {
    'Content-Type': 'application/json',
    'x-apikey': "5dacbcd73cbe87164d4bb504",
    'cache-control': 'max-age=0'
}

const fetchTrips = () => {
    
    const url = "https://tripdata-452d.restdb.io/rest/trips";
    
    return fetch(url,{headers: Headers, mode: 'cors'});
};


export function fetchTripInfo(id){
    const url = `https://tripdata-452d.restdb.io/rest/trips/${id}`;

    return fetch(url,{headers: Headers, mode: 'cors'});
}


export default fetchTrips;