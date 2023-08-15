let movies = [
    {
      image: "images/slider 2.PNG"
    },
    {
      image: "images/slider 1.PNG"
    },
    {
      image: "images/slider 3.PNG"
    },
    {
      image: "images/slider 4.PNG"
    },
    {
      image: "images/tale.jpg"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0;
  //  track current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // create DOM elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classnames
    slide.className = "slider";
  
    sliders.push(slide);
  
    if (sliders.length) {
      // formula
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  // card sliders
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((items, i) => {
    let containerDimensions = items.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      items.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
      items.scrollLeft -= containerWidth + 200;
    });
  });
  