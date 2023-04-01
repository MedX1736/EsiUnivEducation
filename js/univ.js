list = [
    {
        "Univ" : "Esi",
        "Cours" : ["Archi","TPGO","Comp","ML","Res","ALSDS","OPTIM","SSR","Worked"]
    },
    {
        "Univ" : "Enp",
        "Cours" : ["Archi","TPGO","Comp","ML","Res","ALSDS","OPTIM","SSR","SYSR"]
    }
]
// Get the query parameters from the current URL
const params = new URLSearchParams(window.location.search);

// Get the value of a specific parameter
const paramValue = params.get('univ');

// Log the value to the console
// console.log(paramValue);
document.getElementById("Univh1").innerHTML = paramValue;


// Define the list of courses
const courses = list.find((e) => e.Univ.toLowerCase() === paramValue.toLowerCase()).Cours;

// console.log(courses)
// Get the container element to hold the cards
const container = document.getElementById("course-cards");

// Loop through the courses and create a new card for each course
for (let i = 0; i < courses.length; i++) {
  const course = courses[i];

  // Create a new card element
  const card = document.createElement("div");
  card.className = "col-lg-5 py-0";

  // Create the card content
  const content = `
    <div class="bg-white shadow p-5 mt-5">
      <div class="border-bottom pb-3 mb-3">
        <h1 class="text-center mb-3">${course}
          <button type="button" data-toggle="collapse" data-target="#collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
            <i class="fa fa-arrow-down"></i>
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
  const list1 = card.querySelector(`#${course.toLowerCase()}-list-1`);
  const list2 = card.querySelector(`#${course.toLowerCase()}-list-2`);

  // Populate the lists with hyperlinks to other HTML pages
  for (let j = 1; j <= 5; j++) {
    const link = document.createElement("a");
    link.href = `video.html`;
    link.textContent = `${course} Page ${j}`;

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
