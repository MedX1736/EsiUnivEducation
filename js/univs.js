// JavaScript code to populate the lists
const estList1 = document.getElementById("est-list-1");
const estList2 = document.getElementById("est-list-2");
const ouestList1 = document.getElementById("ouest-list-1");
const ouestList2 = document.getElementById("ouest-list-2");
const centreList1 = document.getElementById("centre-list-1");
const centreList2 = document.getElementById("centre-list-2");

// Read Data From File

const estItems = [
    "Université  de Sétif 1 - Ferhat Abbas",
    "Université de Tébessa - Larbi Tébessi",
    "Université  de Annaba - Badji Mokhtar",
    "Université de Bordj Bou Arréridj - Mohamed Bachir El Ibrahimi",
    "Université  de Khenchela - Abbas Laghrour",
    "Université  de Constantine 1 - Frères Mentouri",
    "Université  de Oum El Bouaghi - Larbi Ben M'hidi",
];
const ouestItems = [
    "Universitéd'Oran1 - Ahmed Ben Bella",
    "Université de Béchar - Mohamed Tahri",
    "Université  de Mascara - Mustapha Stambouli",
    "Université de Saida - Tahar Moulay",
    "Université  de Tlemcen - Abou Bekr Belkaid",
    "Université  d'Adrar - Ahme   d Draya",
    "Université  de Tiaret - Ibn Khaldoun",
    "Université  Sidi Bel Abbès - Djillali Liabes",
];
const centreItems = [
    "Esi",
    "Université d'Alger 1 - Benyoucef Benkhedda",
    "Université  de Bouira - Akli Mohand Oulhadj",
    "Université  de Djelfa - Ziane Achour",
    "Université de Ghardaia",
    "Université  de Khemis Miliana - Djilali Bounaama",
    "Université  Médéa - Yahia Farès",
    "Université de Tamenghasset",
    "Université des sciences et de la technologie d'Alger, Houari Boumediène",
    "Université de Béjaia - Abderrahmane Mira",
    "Université  de Boumerdès - M'hamed Bougara",
    "Université  Blida 1 - Saad Dahlab",
    "Université de Tizi Ouzou - Mouloud Maameri",
];

// Function to populate a list with the given items
function populateList(list, items,region) {
    let html = "";
    items.forEach((item,index) => {
        html += `<li class="univ">${item}</li>`;
    });
    list.innerHTML = html;
    // Add click event listener to each li element
    const liElements = list.getElementsByTagName("li");
    for (let i = 0; i < liElements.length; i++) {
        liElements[i].addEventListener("click", () => {
            // Handle click event here
            window.location.href = `univ.html?region=${region}&univ=${items[i]}`;
        });
    }
}
// Populate the lists with the sample data
populateList(estList1, estItems.slice(0, estItems.length/2),"Est");
populateList(estList2, estItems.slice(estItems.length/2),"Est");
populateList(ouestList1, ouestItems.slice(0, ouestItems.length/2),"Ouest");
populateList(ouestList2, ouestItems.slice(ouestItems.length/2),"Ouest");
populateList(centreList1, centreItems.slice(0, centreItems.length/2),"Centre");
populateList(centreList2, centreItems.slice(centreItems.length/2),"Centre");