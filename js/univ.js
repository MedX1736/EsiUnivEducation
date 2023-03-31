list = [
    {
        "Univ" : "Esi",
        "Cours" : ["Archi","TPGO","Comp","ML","Res","ALSDS","OPTIM","SSR","SYSR"]
    },
    {
        "Univ" : "Enp",
        "Cours" : ["Archi","TPGO","Comp","ML","Res","ALSDS","OPTIM","SSR","SYSR"]
    }
]

// Define the list of courses
const courses = ["Archi","TPGO","Comp","ML","Res","ALSDS","OPTIM","SSR","SYSR"];

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
    link.href = `${course}-page-${j}.html`;
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