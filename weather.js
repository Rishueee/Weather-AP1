

var weekday = ['Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday',
'Sunday'];


var tweleve = ['January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'];


fetch("https://api.openweathermap.org/data/2.5/weather?q=bengaluru,in&APPID=1342f8dd595eda677ca40143519800de")

.then((data) => data.json())

.then((parsedData) => {
  
  const placename = parsedData.name;

  document.getElementsByClassName("place")[0].textContent = placename

  const toddaydate = new Date(parsedData.dt * 1000);

  document.getElementsByClassName("information")[0].textContent =

  weekday[toddaydate.getDay() - 1] + ' ' + toddaydate.getDate() + ' ' + tweleve[toddaydate.getMonth() ] + ' ' + toddaydate.getFullYear();
 
  

    
  const temprature = Math.floor( parsedData.main.temp - 273)
 
  document.getElementsByClassName("tem")[0].textContent = temprature + '\xBA' + 'c'

 
  const weather = parsedData.weather[0].main
 
  document.getElementsByClassName("con")[0].textContent = weather

 
  const maxtemp = Math.floor(parsedData.main.temp_max - 273) 
 
  const MinTemp = Math.floor(parsedData.main.temp_min - 273)
 
  document.getElementsByClassName("temp-variation")[0].textContent = 
 
  maxtemp + '\xBA' +'/' + MinTemp + '\xBA'

}
)

