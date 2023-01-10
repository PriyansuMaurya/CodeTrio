// document
//   .querySelector("#darkmode")
//   .addEventListener("change", function (event) {
//     document.querySelector("body").classList.toggle("dark");
//   });

const facts = [
  "He belonged to an affluent family in Gujarat who owned many mills and industries in India. His family  was known for the social work that they did for the underprivileged people of the society.",
  "He pursued his education from Gujarat College in Ahmedabad and then moved to England to study in the University of Cambridge.",
  "He was one of the founding members for Indian Institute of Management (IIM), Ahmedabad, in 1961 along with Kasturbhai Lalbhai. This was the second IIM to be established in the nation.",
  "He got married to Mrinalini Sarabhai, a renowned classical dancer. However, his family members could not attend the marriage as they were a strong part of Quit India movement led by Mahatma Gandhi.",
  "Vikram Sarabhai was aided in his ordeal by Homi Jehangir Bhabha, who helped him in setting up India’s very own rocket launching station.",
  "He was the man behind the genesis of Operations Research Group (ORG) which was the first market research organization in India.",
  "He was the vice president for the fourth UN peace conference organised in 1971. The topic of concern in this issue was ‘Peaceful uses of atomic energy.’",
  "He completed his PhD in ‘Cosmic ray investigations in tropical latitudes’ under the Doctoral Advisory of Sir C. V. Raman.",
  "To ensure that an overall development of the society takes place judiciously, he set up a number of institutes including:",
  "For his visionary work, he was awarded Padma Bhushan in 1966 and Padma Vibhushan in 1972 (after his demise).",
];

var cardContainer = document.querySelector("#card-container");

for (let i = 0; i < facts.length; i++) {
  var card = `
    <div class="card">
    <h2>${i + 1}</h2>
    <hr />
    <p>
    ${facts[i]}
    </p>
  </div>
    `;
  cardContainer.innerHTML += card;
  // cardContainer.appendChild(card);
  // console.trace(i);
}
