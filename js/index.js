// function multiplyNode(node, count, deep) {
//   for (var i = 0, copy; i < count - 1; i++) {
//       copy = node.cloneNode(deep);
//       node.parentNode.insertBefore(copy, node);
//   }
// }

// multiplyNode(document.querySelector('.todo-task'), 5, true);

// let http = new XMLHttpRequest();

// http.open("get", "json-data/pending.json", true);

// http.send();

// http.onload = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     let pending = JSON.parse(this.responseText);

//     // let body = {
//     //   title: "Task 7",
//     //   discription: "Lorem, ipsum ntur eveniet quam, deserunt aspernatur!",
//     //   id: 8,
//     // };
//     // pending.push(body);
//     let output = "";

//     for (let item of pending) {
//       output += `
//       <div class="todo-task">
//                     <h4>${item.title}</h4>
//                     <div class="action-btn-container">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
//                             preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                             <path fill="currentColor"
//                                 d="M9.525 18.025q-.5.325-1.013.037Q8 17.775 8 17.175V6.825q0-.6.512-.888q.513-.287 1.013.038l8.15 5.175q.45.3.45.85t-.45.85Z" />
//                         </svg>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
//                             preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                             <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
//                             <path fill="currentColor"
//                                 d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Z" />
//                         </svg>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
//                             preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                             <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
//                             <path fill="currentColor"
//                                 d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387q.075-.188.225-.338l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225q-.188.075-.388.075ZM14.325 9.675l-.7-.7l1.4 1.4Z" />
//                         </svg>

//                         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
//                             preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                             <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
//                             <path fill="currentColor"
//                                 d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
//                         </svg>

//                     </div>
//                 </div>

//       `;
//     }
//     document.querySelector(".todo-container").innerHTML = output;
//   }
// };

// fetch("json-data/pending.json", { mode: "no-cors" })
//   .then((response) => response.text())
//   .then((data) => {
//     let pending = JSON.parse(data);

//     // let body = {
//     //   title: "Task 7",
//     //   discription: "Lorem, ipsum ntur eveniet quam, deserunt aspernatur!",
//     //   id: 8,
//     // };
//     // pending.push(body);
//     let output = "";

//     for (let item of pending) {
//       output += `
//           <div class="todo-task">
//                         <h4>${item.title}</h4>
//                         <div class="action-btn-container">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
//                                 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                                 <path fill="currentColor"
//                                     d="M9.525 18.025q-.5.325-1.013.037Q8 17.775 8 17.175V6.825q0-.6.512-.888q.513-.287 1.013.038l8.15 5.175q.45.3.45.85t-.45.85Z" />
//                             </svg>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
//                                 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                                 <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
//                                 <path fill="currentColor"
//                                     d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Z" />
//                             </svg>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
//                                 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                                 <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
//                                 <path fill="currentColor"
//                                     d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387q.075-.188.225-.338l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225q-.188.075-.388.075ZM14.325 9.675l-.7-.7l1.4 1.4Z" />
//                             </svg>

//                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
//                                 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
//                                 <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
//                                 <path fill="currentColor"
//                                     d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
//                             </svg>

//                         </div>
//                     </div>

//           `;
//     }
//     document.querySelector(".todo-container").innerHTML = output;
//   })
//   .catch((error) => console.error(error));

let addToDOButton = document.getElementById("addToDO");
let pendingContainer = document.getElementById("toDoContainer");
let inProgressContainer = document.getElementById("inProgressContainer");
let completedContainer = document.getElementById("completedContainer");
let inputField = document.getElementById("inputField");
let discription = document.getElementById("message");

addToDOButton.addEventListener("click", function () {
  var toDoContent = {
    input: inputField.value,
    discription: discription.value,
  };

  var pending = document.createElement("div");
  pending.setAttribute("id", inputField.value + "pri");
  pending.innerHTML = `
    <div class="todo-task" >
    <div class="title-tools">
        
        <h4>
        <input class="expand-toggle" id="expand-toggle" type="checkbox">
        <label for="expand-toggle" class="expand-label">${
          toDoContent.input
        }</label>
        </h4>

        <div class="action-btn-container">
            <svg id="${
              toDoContent.input
            }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M9.525 18.025q-.5.325-1.013.037Q8 17.775 8 17.175V6.825q0-.6.512-.888q.513-.287 1.013.038l8.15 5.175q.45.3.45.85t-.45.85Z" />
            </svg>
            <svg id="${
              toDoContent.input + " -unchecked"
            }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
                <path fill="currentColor"
                    d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Z" />
            </svg>
            <svg id="${
              toDoContent.input + " -edit"
            }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
                <path fill="currentColor"
                    d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387q.075-.188.225-.338l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225q-.188.075-.388.075ZM14.325 9.675l-.7-.7l1.4 1.4Z" />
            </svg>

            <svg id="${
              toDoContent.input + " -delete-pending"
            }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
                <path fill="red"
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>

        </div>
    </div>
    <div class="discription">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Hic minima ab tenetur repellat blanditiis aspernatur odio
        velit ipsum saepe deserunt nesciunt, quibusdam aliquid 
        molestias debitis quas perferendis accusamus quia obcaecati?
        
        </p>
    </div>
    </div>   
   
        `;
  pendingContainer.appendChild(pending);
  var input = inputField.value;
  inputField.value = "";
  var svgDeletePending = document.getElementById(
    toDoContent.input + "-delete-pending"
  );
  svgDeletePending.addEventListener("click", () => {
    pendingContainer.removeChild(pending);
  });

  var unchecked = document.getElementById(toDoContent.input + "-unchecked");

  unchecked.addEventListener("click", () => {
    completedContainer.appendChild(pending);
    pendingContainer.removeChild(pending);
  });
  var svgEdit = document.getElementById(toDoContent.input + "-edit");
  console.log(svgEdit);
  svgEdit.addEventListener("click", () => {
    inputField.value = toDoContent.input;
    pendingContainer.removeChild(pending);
  });
  var svgPause = document.getElementById(toDoContent.input);
  svgPause.addEventListener("click", (e) => {
    let inProgress = document.createElement("div");
    inProgress.setAttribute("id", toDoContent.input + "pri");
    inProgress.innerHTML = `
          <div class="todo-task">
          <h4>${toDoContent.input}</h4>
          <div class="action-btn-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 256">
                  <rect x="0" y="0" width="256" height="256" fill="none" stroke="none" />
                  <path fill="currentColor"
                      d="M200 28h-36a20.1 20.1 0 0 0-20 20v160a20.1 20.1 0 0 0 20 20h36a20.1 20.1 0 0 0 20-20V48a20.1 20.1 0 0 0-20-20Zm-4 176h-28V52h28ZM92 28H56a20.1 20.1 0 0 0-20 20v160a20.1 20.1 0 0 0 20 20h36a20.1 20.1 0 0 0 20-20V48a20.1 20.1 0 0 0-20-20Zm-4 176H60V52h28Z" />
              </svg>
              <svg id="${toDoContent.input}" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24">
                  <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
                  <path fill="currentColor"
                      d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Z" />
              </svg>
          </div>
          </div>
          `;
    inProgressContainer.appendChild(inProgress);
    pendingContainer.removeChild(pending);

    var svgTick = document.getElementById(toDoContent.input);

    svgTick.addEventListener("click", (e) => {
      let completed = document.createElement("div");
      completed.setAttribute("id", toDoContent.input + "pri");

      completed.innerHTML = `
              <div class="todo-task">
                  <h4>${toDoContent.input}</h4>
                  <div class="action-btn-container">
              
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24">
                          <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
                          <path fill="currentColor"
                              d="m10.6 16.2l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z" />
                      </svg>
                      <svg id="${
                        toDoContent.input + "-delete-completed"
                      }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24">
                          <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
                          <path fill="red"
                              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                      </svg>
                  </div>
              </div>
          `;

      completedContainer.appendChild(completed);
      var svgDeleteCompleted = document.getElementById(
        toDoContent.input + "-delete-completed"
      );
      svgDeleteCompleted.addEventListener("click", () => {
        completedContainer.removeChild(completed);
      });
      inProgressContainer.removeChild(inProgress);
    });
  });
});

const accordion = document.getElementsByClassName("todo-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
