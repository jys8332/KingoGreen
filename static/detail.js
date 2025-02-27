var card_name = location.href.split('?')[1];
card_name = card_name.replace('%20', ' ');
console.log(card_name);

// https://juni-official.tistory.com/141
function readJSON(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}



readJSON("static/fruits.json", function(text){
  var fruit_data = JSON.parse(text);
  
  var info = fruit_data[card_name]['info'];
  var nutrient = fruit_data[card_name]['nutrient'];
  var how_pick = fruit_data[card_name]['how to choose'];
  var best_time_from = "";
  var best_time_to = "";
  switch(fruit_data[card_name]['best time'][0]){
    case 1:
      best_time_from="January";
      break;
    case 2:
      best_time_from="February";
      break;
    case 3:
      best_time_from="March";
      break;
    case 4:
      best_time_from="April";
      break;
    case 5:
      best_time_from="May";
      break;
    case 6:
      best_time_from="June";
      break;
    case 7:
      best_time_from="July";
      break;
    case 8:
      best_time_from="August";
      break;   
    case 9:
      best_time_from="September";
      break;
    case 10:
      best_time_from="October";
      break;
    case 11:
      best_time_from="November";
      break;
    case 12:
      best_time_from="December";
      break;}
    switch(fruit_data[card_name]['best time'][1]){
      case 1:
        best_time_to="January";
        break;
      case 2:
        best_time_to="February";
        break;
      case 3:
        best_time_to="March";
        break;
      case 4:
        best_time_to="April";
        break;
      case 5:
        best_time_to="May";
        break;
      case 6:
        best_time_to="June";
        break;
      case 7:
        best_time_to="July";
        break;
      case 8:
        best_time_to="August";
        break;   
      case 9:
        best_time_to="September";
        break;
      case 10:
        best_time_to="October";
        break;
      case 11:
        best_time_to="November";
        break;
      case 12:
        best_time_to="December";
        break;}
  var season =  "";
  if(best_time_from=="January" && best_time_to=="December"){
    season = "All year around";
  }
  else{
    season = best_time_from+" ~ "+best_time_to;
  }
  
  var best_time_from = fruit_data[card_name]['best time'][0];
  var best_time_to = fruit_data[card_name]['best time'][1];
  var effect = fruit_data[card_name]['effect'];
  var how_eat = fruit_data[card_name]['how to eat'];
  var why_eat = fruit_data[card_name]['why to eat'];
  document.getElementById("detail_name").innerText = card_name;
  document.getElementById("detail_nutrients").innerText = nutrient[0]+', '+nutrient[1];
  document.getElementById("detail_pick").innerText = how_pick;
  document.getElementById("datail_season").innerText = season;
  
  document.getElementById("detail_benefit1").innerText = effect[0];
  document.getElementById("detail_benefit2").innerText = effect[1];
  document.getElementById("detail_benefit3").innerText = effect[2];
  document.getElementById("detail_benefit4").innerText = effect[3];
})

