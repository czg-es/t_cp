//console.log(tales.length);
let rando = Math.floor(Math.random() * tales.length);
//DATASET----
let current = tales[rando];  //tales comes from creepypastas2.js which loads before this script
// DOM ELEMENTS-----
const head = document.getElementById('head');
const title = document.getElementById('title');
const description = document.getElementById('desc');
const story_body = document.getElementById('dashboard');
const table = document.getElementById('tabla');

let matter ; //it'll hold the story once loaded, for debugging purposes

// change story based on index given i not given, changes to a random story
function change_s(index){

      let rando = Math.floor(Math.random() * tales.length);
      index = (typeof index === "undefined") ? index = rando : index
      let current = tales[index];
      let story = current['body'];
      matter = story;
      let s_title = current['story_name'];
      let tags = current['tags'];
      let rating = current['average_rating'];
      let read_time = current['estimated_reading_time'];
      let publish_date = current['publish_date'];
      let categories = current['categories'];
      // variables to DOM----
      title.innerHTML = index+' - ';
      title.innerHTML += s_title;
      story_body.innerText = story ; //innerText preserves format
      description.innerHTML = "Categories: "+ "</br>"+categories + "</br>"; 
      description.innerHTML += "Read Time: "+ "</br>"+read_time + "</br>"; 
      description.innerHTML += "Publish Date: "+ "</br>"+publish_date + "</br>"; 
      description.innerHTML += "Rating: "+ "</br>"+ rating + "</br>"; 
}

change_s();
//Populate Complete list of stories.
for (const item of tales.entries(tales)) {
    let line = `-${item[1]['story_name']}-📈: ${item[1]['average_rating']} Nº: ${item[0]} `; //Divide & conquer
    let link = `<a class='link' onclick='change_s(${item[0]});timed_to_top();' href="#" target="frame">${line}</a><br>`
    table.innerHTML += link; 
}

document.getElementById('loader').classList.add("hide-loader"); //When all is done hide the loader.


