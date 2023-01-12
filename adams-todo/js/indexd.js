// Date --------------------------------------------------------------------------------

var today = new Date();

// Current Date
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
const dateElement = document.getElementById("date");
dateElement.innerHTML += date;
// ----------------------------------------------CHANGE COLOR PALLET------------------------------------------------------

function $(el) {
  return document.querySelector(el);
}

let container = $(".big-container");
let toggle1 = $("#toggle-pallet-1");
let toggle2 = $("#toggle-pallet-2");
let toggle3 = $("#toggle-pallet-3");
let toggle4 = $("#default-pallet");

function onClickToggle(toggle, toggleClass) {
  toggle.addEventListener("click", () => {
    let list = container.classList;
    list.replace(list[1], toggleClass);
  });
}
onClickToggle(toggle1, "pallet-1");
onClickToggle(toggle2, "pallet-2");
onClickToggle(toggle3, "pallet-3");
onClickToggle(toggle4, "default-pallet");

// ---------------------------------------------------------------------------------------------------

let addToDOButton = document.getElementById("addToDO");
let pendingContainer = document.getElementById("toDoContainer");
let inProgressContainer = document.getElementById("inProgressContainer");
let completedContainer = document.getElementById("completedContainer");
let inputField = document.getElementById("inputField");
let discriptionContent = document.getElementById("message");

addToDOButton.addEventListener("click", function () {
  var today = new Date();
  var toDoContent = {
    id: inputField.value.replace(/\s/g, ""),
    input: inputField.value,
    discription: discriptionContent.value,
    time:
      today.getHours() + "/" + today.getMinutes() + "/" + today.getSeconds(),
  };

  var pending = document.createElement("div");
  pending.setAttribute("id", toDoContent.id + "pri");
  pending.innerHTML = pendingTemplate(toDoContent);
  pendingContainer.appendChild(pending);

  toggleDiscription("pending", toDoContent);
  var temp = inputField.value;

  // Clearning input boxxes
  inputField.value = "";
  discriptionContent.value = "";
  var svgDeletePending = document.getElementById(
    toDoContent.id + "-delete-pending"
  );

  svgDeletePending.addEventListener("click", () => {
    pendingContainer.removeChild(pending);
  });

  // ----------------------------------------------PENDING TICK------------------------------------------------------

  var unchecked = document.getElementById(toDoContent.id + "-unchecked");

  unchecked.addEventListener("click", () => {
    let completed = document.createElement("div");
    completed.setAttribute("id", toDoContent.id + "pri");

    completed.innerHTML = completedTemplate(toDoContent);
    completedContainer.appendChild(completed);
    toggleDiscription("completed", toDoContent);

    var svgDeleteCompleted = document.getElementById(
      toDoContent.id + "-delete-completed"
    );
    svgDeleteCompleted.addEventListener("click", () => {
      completedContainer.removeChild(completed);
    });
    pendingContainer.removeChild(pending);
  });

  // ---------------------------------Edit TODO LOGIC------------------------------------------------------

  var svgEdit = document.getElementById(toDoContent.id + "-edit");

  svgEdit.addEventListener("click", () => {
    inputField.value = toDoContent.input;
    discriptionContent.value = toDoContent.discription;
    pendingContainer.removeChild(pending);
  });

  // -----------------------------------PROGRESS LOGIC-----------------------------------------------------

  var svgPause = document.getElementById(toDoContent.id);

  svgPause.addEventListener("click", (e) => {
    let inProgress = document.createElement("div");

    inProgress.setAttribute("id", toDoContent.id + "pri");

    inProgress.innerHTML = progressTemplate(toDoContent);

    inProgressContainer.appendChild(inProgress);

    // adding toggle todo discription

    toggleDiscription("progress", toDoContent);
    pendingContainer.removeChild(pending);

    // --------------------------COMPLETE LOGIC---------------------------------------------------

    var svgTick = document.getElementById(toDoContent.id);

    svgTick.addEventListener("click", (e) => {
      let completed = document.createElement("div");
      completed.setAttribute("id", toDoContent.id + "pri");

      completed.innerHTML = completedTemplate(toDoContent);
      completedContainer.appendChild(completed);

      toggleDiscription("completed", toDoContent);
      var svgDeleteCompleted = document.getElementById(
        toDoContent.id + "-delete-completed"
      );
      svgDeleteCompleted.addEventListener("click", () => {
        completedContainer.removeChild(completed);
      });
      inProgressContainer.removeChild(inProgress);
    });
  });
});

// --------------------------------------------------------------------------------------------------------------------------------

function toggleDiscription(sectionType, toDoContent) {
  let tempDiscription = document.getElementById(
    toDoContent.id + `todo-task-${sectionType}`
  );
  let tempLabel = document.getElementById(
    toDoContent.id + `-label-${sectionType}`
  );

  tempLabel.addEventListener("click", () => {
    if (tempDiscription.style.height === "62px") {
      tempDiscription.style.height = "auto";
    } else {
      tempDiscription.style.height = "62px";
    }
  });
}

// ---------------------------------------------------TEMPLATES---------------------------------------------------

const commonTemplate = (sectionType, toDoContent, svgs) => {
  return `
  <div id=${
    toDoContent.id + `todo-task-${sectionType}`
  } class="todo-task" style="height: 62px;;">
  <div class="title-tools" >
      
      <span>
      <input class="expand-toggle" id="expand-toggle" type="checkbox">
      <label for="expand-toggle" id=${
        toDoContent.id + `-label-${sectionType}`
      } class="expand-label">${toDoContent.input}</label>
      </span>

      <div class="action-btn-container">
          ${svgs}
      </div>
  </div>
  <div id=${toDoContent.id + "-discription"} class="discription" >
    <div class="time-container">
      <iconify-icon icon="mdi:clock"></iconify-icon>
      <span class=${"time"}>${" : " + toDoContent.time}<span>
    </div>
    <pre>${toDoContent.discription}</pre>
  </div>
  </div>   
 
      `;
};

// ------------------------------------------------------------------------------------------

const pendingTemplate = (toDoContent) => {
  return commonTemplate(
    "pending",
    toDoContent,
    `
  <svg id="${
    toDoContent.id
  }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24">
      <path fill="currentColor"
          d="M9.525 18.025q-.5.325-1.013.037Q8 17.775 8 17.175V6.825q0-.6.512-.888q.513-.287 1.013.038l8.15 5.175q.45.3.45.85t-.45.85Z" />
  </svg>
  <svg id="${
    toDoContent.id + "-unchecked"
  }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
      preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
      <path fill="currentColor"
          d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Z" />
  </svg>
  <svg id="${
    toDoContent.id + "-edit"
  }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
      preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
      <path fill="currentColor"
          d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387q.075-.188.225-.338l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225q-.188.075-.388.075ZM14.325 9.675l-.7-.7l1.4 1.4Z" />
  </svg>

  <svg id="${
    toDoContent.id + "-delete-pending"
  }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
      preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
      <path fill="red"
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
  `
  );
};

// ------------------------------------------------------------------------------------------------------

const progressTemplate = (toDoContent) => {
  return commonTemplate(
    "progress",
    toDoContent,
    `
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 256 256">
  <rect x="0" y="0" width="256" height="256" fill="none" stroke="none" />
  <path fill="currentColor"
      d="M200 28h-36a20.1 20.1 0 0 0-20 20v160a20.1 20.1 0 0 0 20 20h36a20.1 20.1 0 0 0 20-20V48a20.1 20.1 0 0 0-20-20Zm-4 176h-28V52h28ZM92 28H56a20.1 20.1 0 0 0-20 20v160a20.1 20.1 0 0 0 20 20h36a20.1 20.1 0 0 0 20-20V48a20.1 20.1 0 0 0-20-20Zm-4 176H60V52h28Z" />
  </svg>
      <svg id="${toDoContent.id}" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24">
      <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
      <path fill="currentColor"
          d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Z" />
  </svg>
      `
  );
};
const completedTemplate = (toDoContent) => {
  return commonTemplate(
    "completed",
    toDoContent,
    `
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 24 24">
  <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
  <path fill="currentColor"
      d="m10.6 16.2l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z" />
    </svg>
    <svg id="${
      toDoContent.id + "-delete-completed"
    }" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <rect x="0" y="0" width="24" height="24" fill="none" stroke="none" />
        <path fill="red"
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  `
  );
};

// ------------------------------------------------------------------------------------------------------
