// console.log("===Hour 1:JSON Basics ===");

//  let student={
//     name:"Asha",
//     age:21,
//     marks:[85,90,78]
//  }

//  //convert object+json string
//  let jsonString=JSON.stringify(student);
// console.log("JSON string:",jsonString);

// //convert JSON string+object
//  let parseObj=JSON.parse(student);
// console.log("Parsed Object:",parseObj);

// //fetch sample JSON from API
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//    .then(response => response.json()) //convert to json
//    .then(data => console.log("Fetched Data:",data))
//    .catch(error => console.error("Error:",error));



// //fetch all the users and show in console+page
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(users => {
//         let output="<h3>User List</h3><ul>";
//         users.forEach(user =>{
//             output += `<li>${user.name} - ${user.email}</li>`;
//         });
//         output +="</ul>";
//         //Append result to page
//         document.body.innerHTML += output;
//     });

// //weather Info Fetcher Project
// console.log("===Weather Info Fetcher Project🌨===");

//Predefined city -> coordinates
// const cityCoords={
//     "banglore":{ lat:12.97, lon:77.59},
//     "delhi":{ lat:28.61, lon:77.20},
//     "mumbai":{ lat:19.07, lon:72.87},
//     "london":{ lat:51.51, lon:-0.13},
//     "newyork":{ lat:40.71, lon:-74.01}
// };

// //Event Listener for button
// document.getElementById("fetchBtn").addEventListener("click",()=>{
//     let city=document.getElementById("cityInput").ValueMax.toLowerCase();
        
//         if(!cityCoords[city]){
//             document.getElementById("weather").innerHTML="⚠ city not in list!";
//             return;
//         }
//         let coords=cityCoords[city];
//         let url=`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
// //AJAX Fetch
// fetch(url)
//    .then(res => res.json())
//    .then(data =>{
//     if(data.current_weather){
//         document.getElementById("weather").innerHTML=`<h3>weather in ${city}</h3><p>Temp:${data.current_weather.temperature}ºc</p><p>wind:${data.current_weather.windspeed}km/h</p><p>Time:${data.current_weather.time}</p>`;
//     }
//     else{
//         document.getElementById("weather").innerHTML="⚠ no data available";
//     }
//    })
//    .catch(error=>{
//        console.error(error);
//        document.getElementById("weather").innerHTML="⚠ Error fetching weather"
//    });
// });

// Predefined city → coordinates
const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};


// Event Listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "⚠️ City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  // AJAX Fetch
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "⚠️ No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "⚠️ Error fetching weather.";
    });
});