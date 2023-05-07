list = [
    {
        "Univ" : "Esi",
        "Modules" : [
          {
            "Name":
          "Réseau1",
            "Cours":[
              'Généralités sur les réseaux',
              'Couche Physique',
              'Couche liaison de données',
              'Technologies des réseaux locaux',
              'Adressage IP et Routage'
            ]
        },
          {
            "Name":
          "TPGO",
            "Cours":[
            ]
        },
          {
            "Name":
          "Compil",
            "Cours":[
            ]
        },
          {
            "Name":
          "MachineLearning",
            "Cours":[
            ]
        },
          {
            "Name":
          "ALSDS",
            "Cours":[]
        },
]
    },
    {
        "Univ" : "Enp",
        "Cours" : ["Meca","TPGO","Comp","ML","Archi1","ALSDS","OPTIM","SSR","SYSR"]
    }
]
// Get the query parameters from the current URL
const params = new URLSearchParams(window.location.search);

// Get the value of a specific parameter
const paramValue = params.get('univ');

// Log the value to the console
// console.log(paramValue);
document.getElementById("Univh1").innerHTML = paramValue;


// Define the list of modules
univ = paramValue;
const modules = list.find((e) => e.Univ.toLowerCase() === paramValue.toLowerCase()).Modules;
// console.log(modules)
// Get the container element to hold the cards
const container = document.getElementById("course-cards");

// Loop through the modules and create a new card for each course
for (let i = 0; i < modules.length; i++) {
  const course = modules[i].Name;
  var videos = modules[i].Cours;
  if (videos.length === 0){
    videos = ["Cours","Cours 2","Cours 3","Cours 4","Cours 5"];
  }


  // Create a new card element
  const card = document.createElement("div");
  card.className = "col-lg-5 py-0";

  // Create the card content
  const content = `
    <div class="bg-white shadow p-5 mt-5">
      <div class="border-bottom pb-3 mb-3">
        <h1 class="text-center mb-3">${course}
          <button type="button" data-toggle="collapse" data-target="#collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
          <img src="img/arrow-down.png" alt="arrow-down">
          </button>
        </h1>
      </div>
      <div id="collapse-${i}" class="collapse show" aria-labelledby="heading-${i}" data-parent="#accordion">
        <div class="row center">
          <div class="col-md-6">
            <ul id="${course.toLowerCase()}-list-1"></ul>
          </div>
          <div class="col-md-6">
            <ul id="${course.toLowerCase()}-list-2"></ul>
          </div>
        </div>
      </div>
    </div>
  `;

  // Set the card content
  card.innerHTML = content;

  // Get the lists to populate with hyperlinks
  const list1 = card.querySelector(`#${course.toLowerCase()}-list-1`)
  const list2 = card.querySelector(`#${course.toLowerCase()}-list-2`);
  // Populate the lists with hyperlinks to other HTML pages
  for (let j = 0  ; j < videos.length; j++) {
    const link = document.createElement("a");
    link.href = `video.html?univ=${univ}&cours=${course}&video=${videos[j]}`;
    link.textContent = `${videos[j]}`;

    const listItem = document.createElement("li");
    listItem.appendChild(link);

    if (j % 2 === 1) {
      list1.appendChild(listItem);
    } else {
      list2.appendChild(listItem);
    }
  }

  // Add the card to the container
  container.appendChild(card);
}
