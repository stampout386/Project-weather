const param = {
    'url': "https://api.openweathermap.org/data/2.5/" ,
    'appid': '1014e86dd0157f925ac4fca6b4dec406',
}
//

function getWeather (){

const cityId = document.querySelector('.city').value; // получили айди города
fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`).then(weather =>{ //сделали запрос на АПИ и получили ответ после ответа обработали и запустили функию показа погоды
    return weather.json();
}).then(showWeather);

fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${param.appid}`)
  .then(weather =>{ 
    return weather.json();
}).then(showWeather1);


function showWeather(data){
 
 let a = data.dt;
 document.querySelector('.gorod').textContent = data.name;
 document.querySelector('.data').innerHTML = timeConverter(a).time;
 document.querySelector('.outtemp').innerHTML=`${Math.round(data.main.temp)}&degC`;
 document.querySelector('.overcast').textContent = data.weather[0]['description'];
 document.querySelector('.clouds').innerHTML = '<img src="http://openweathermap.org/img/w/'+data.weather[0]['icon']+'.png" class="m">'
 document.querySelector('.maxtemp').innerHTML = `Max temperature ${Math.round(data.main.temp_max)}&degC`;
 document.querySelector('.mintemp').innerHTML = `Min temperature ${Math.round(data.main.temp_min)}&degC`;
 document.querySelector('.wind').innerHTML = `wind speed ${data.wind.speed} m/s`;
 document.querySelector('.humidity').innerHTML = `humidity ${data.main.humidity}%`;
 document.querySelector('.pressure').innerHTML = `pressure ${data.main.pressure}hPa`;
 let sunriseTime = data.sys.sunrise;
 document.querySelector('.sunrise').innerHTML = `sunrise ${timeConverter(sunriseTime).time2}`;
 let sunsetTime = data.sys.sunset;
 document.querySelector('.sunset').innerHTML = `sunset ${timeConverter(sunsetTime).time2}`;
 document.querySelector('.dta').innerHTML = timeConverter(a).time3;




} 
function showWeather1(data1){
  let b = data1.list[7]['dt'];
 
  document.querySelector('.data-1').innerHTML = timeConverter(b).time3;
  let c = data1.list[15]['dt'];
  document.querySelector('.data-2').innerHTML = timeConverter(c).time3;
  let d = data1.list[23]['dt'];
  document.querySelector('.data-3').innerHTML = timeConverter(d).time3;
  let t = Math.round(data1.list[7]['main']['temp']-273);
  document.querySelector('.tem-1').innerHTML = `${t}&degC`;
  let f = Math.round(data1.list[15]['main']['temp']-273);
  document.querySelector('.tem-2').innerHTML = `${f}&degC`;
  let g = Math.round(data1.list[23]['main']['temp']-273);
  document.querySelector('.tem-2').innerHTML = `${g}&degC`;
  let a1 = data1.list[7]['weather'][0]['icon'];
  document.querySelector('.overc-1').innerHTML = '<img src="http://openweathermap.org/img/w/'+a1+'.png" class="m1">';
  let b1 = data1.list[15]['weather'][0]['icon'];
  document.querySelector('.overc-2').innerHTML = '<img src="http://openweathermap.org/img/w/'+b1+'.png" class="m1">';
  let c1 = data1.list[23]['weather'][0]['icon'];
  document.querySelector('.overc-3').innerHTML = '<img src="http://openweathermap.org/img/w/'+c1+'.png" class="m1">';
 };

};
getWeather();
document.querySelector('.city').onchange = getWeather;

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
    var day = days[a.getDay()]
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    var time2 = hour + ':' + min;
    var time3 = date + ' ' + month+', '+ day;
    return {
      time : time , 
      time2 : time2 , 
      time3: time3,
    }
  }
  
  // function timeConverter2(UNIX_timestamp){
  //   var a = new Date(UNIX_timestamp * 1000);
  //   var hour = a.getHours();
  //   var min = a.getMinutes();
  //   var time = hour + ':' + min;
  //   return time;
    
  // }
  // function timeConverter3(UNIX_timestamp){
  //   var a = new Date(UNIX_timestamp * 1000);
  //   var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  //   var month = months[a.getMonth()];
  //   var date = a.getDate();
  //   var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
  //   var day = days[a.getDay()]
  //   var time = date + ' ' + month+', '+ day;
  //   return time;
    
  // }
  
//   const cityId = document.querySelector('.city').value;
//   fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${param.appid}`)
//   .then(weather =>{ 
//     return weather.json();
    
// })
// .then(showWeather1);

// function showWeather1(data1){
//  console.log(data1);
//  let b = data1.list[7]['dt'];

//  document.querySelector('.data-1').innerHTML = timeConverter3(b);
//  let c = data1.list[15]['dt'];
//  document.querySelector('.data-2').innerHTML = timeConverter3(c);
//  let d = data1.list[23]['dt'];
//  document.querySelector('.data-3').innerHTML = timeConverter3(d);
//  let t = Math.round(data1.list[7]['main']['temp']-273);
//  document.querySelector('.tem-1').innerHTML = `${t}&degC`;
//  let f = Math.round(data1.list[15]['main']['temp']-273);
//  document.querySelector('.tem-2').innerHTML = `${f}&degC`;
//  let g = Math.round(data1.list[23]['main']['temp']-273);
//  document.querySelector('.tem-2').innerHTML = `${g}&degC`;
//  let a1 = data1.list[7]['weather'][0]['icon'];
//  document.querySelector('.overc-1').innerHTML = '<img src="http://openweathermap.org/img/w/'+a1+'.png" class="m1">';
//  let b1 = data1.list[15]['weather'][0]['icon'];
//  document.querySelector('.overc-2').innerHTML = '<img src="http://openweathermap.org/img/w/'+b1+'.png" class="m1">';
//  let c1 = data1.list[23]['weather'][0]['icon'];
//  document.querySelector('.overc-3').innerHTML = '<img src="http://openweathermap.org/img/w/'+c1+'.png" class="m1">';
// };
