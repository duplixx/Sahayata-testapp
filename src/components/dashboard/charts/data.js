// function to make fetch request
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const DataUsable = []
                data['features'].forEach(element => {
                    DataUsable.push({
                        id: element['id'],
                        mag: element['properties']['mag'],
                        location: element['properties']['place'],
                        coordinates: element['geometry']['coordinates'],
                    });
                })
                resolve(DataUsable)
            })
            .catch(reject)
    })
}


// [METHOD[?PARAMETERS]]
// function to get data from api
const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02&minmagnitude=1"

let counter = 0;
setInterval(() => {
    fetchData(url)
        .then(response => {
            console.log(response.length)
        })
    // console.log(counter++);


}, 1000)