const imageContainer = document.querySelector('.image-split-container');
const leftHalf = document.querySelector('.left-half');
const rightHalf = document.querySelector('.right-half');
const trails = document.querySelectorAll(".trail")

const smoothPointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
}
const totalPointsArray = [40, 35, 30]

window.addEventListener("mousemove", (event) => {
  gsap.to(smoothPointer, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.5,
    ease: "power2.out",
  });
});

function updatePath() {
  trails.forEach((path, index) => {
    let points = path.points || [];
    points.unshift({...smoothPointer});
    while (points.length > totalPointsArray[index]) {
      points.pop();
    }
    path.points = points; 

    if (points.length > 1) {
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        d += ` ${points[i].x} ${points[i].y}`;
      }
      path.setAttribute("d", d);
    }
  })
}

requestAnimationFrame(updatePath);

const triggerScrollPosition = 500; // Adjust as needed

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > triggerScrollPosition) {
    leftHalf.classList.add('vanish');
    rightHalf.classList.add('vanish');
  } else {
    leftHalf.classList.remove('vanish');
    rightHalf.classList.remove('vanish');
  }
});
   
   
 //horizontal scroll
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(Draggable)


    // Essential: Configure horizontal scroll animation
    const container = document.querySelector('.horizontalScroll');
    
    // Essential: GSAP animation for smooth horizontal scrolling
    gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${container.scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      }
    });


//nav menu
    const hamMenu =document.querySelector('.ham-menu');
const offscreenmenu = document.querySelector('.off-screen-menu')
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscreenmenu.classList.toggle('active');
})



Draggable.create(".journal-slides", {
  type: "x", // Only allow horizontal dragging
  bounds: ".journal-container", // Confine dragging within the container
  inertia: true, // Adds a natural, decelerating motion after release
  edgeResistance: 0.6, // Makes it harder to drag past the edges
});




    