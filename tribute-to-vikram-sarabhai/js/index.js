
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

var cardContainer = document.querySelector(".slide_group");

for (let i = 0; i < facts.length; i++) {
  var card = `
      <div class="slide basic-card basic-card-aqua">
          <div class="card-content">
              <span class="card-title">${i + 1}</span>
              <hr>
              <p class="card-text">
                  ${facts[i]}
              </p>
          </div>
      </div>
      `;
  cardContainer.innerHTML += card;
  // cardContainer.appendChild(card);
  // console.trace(i);
}

$(".slider").each(function () {
  var $this = $(this);
  var $group = $this.find(".slide_group");
  var $slides = $this.find(".slide");
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(":animated") || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass("active");
    bulletArray[newIndex].addClass("active");

    if (newIndex > currentIndex) {
      slideLeft = "100%";
      animateLeft = "-100%";
    } else {
      slideLeft = "-100%";
      animateLeft = "100%";
    }

    $slides.eq(newIndex).css({
      display: "block",
      left: slideLeft,
    });
    $group.animate(
      {
        left: animateLeft,
      },
      function () {
        $slides.eq(currentIndex).css({
          display: "none",
        });
        $slides.eq(newIndex).css({
          left: 0,
        });
        $group.css({
          left: 0,
        });
        currentIndex = newIndex;
      }
    );
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < $slides.length - 1) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $(".next_btn").on("click", function () {
    if (currentIndex < $slides.length - 1) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $(".previous_btn").on("click", function () {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function (index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass("active");
    }
    $button.on("click", function () {
      move(index);
    });
    bulletArray.push($button);
  });

  advance();
});
