
// SECTION 2 FADING TRANSITION
const faders = document.getElementById("fading");
const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = (element, callback) => {
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
          callback(element);
          observer.disconnect();
        }
      });
    }, {
        threshold: 0.5
    }).observe(element);
}
appearOnScroll(faders, () => faders.classList.add("fade-in"))


// TESTIMONIAL SLIDING
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter+= 1;
    if(counter > 5){
        counter = 1;
      }
    }, 3200);



// STICKY NAVBAR
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}
    console.log(currentScroll);

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;

});