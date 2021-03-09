//movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const circle = document.querySelector('.circle')
const sizes = document.querySelector('.sizes')
const description = document.querySelector('.info h3')
const buy = document.querySelector('.buy button')
//Moving animation Event
container.addEventListener("mousemove", (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX)/18;
	let yAxis = (window.innerHeight / 2 - e.pageY)/18;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
	container.addEventListener('mouseenter', e =>{
		card.style.transition = 'none';
//Popout
	title.style.transform = 'translateZ(80px)';
	sneaker.style.transform = 'translateZ(110px) rotateZ(20deg)';
	sizes.style.transform = 'translateZ(80px)';
	description.style.transform = 'translateZ(80px)';
	buy.style.transform = 'translateZ(55px)';
});
//Animate Out
container.addEventListener('mouseleave', (e) => {
	card.style.transition = 'all 0.5s ease';
 	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//Popback
	title.style.transform = 'translateZ(0px)';
	sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
	sizes.style.transform = 'translateZ(0px)';
	description.style.transform = 'translateZ(0px)';
	buy.style.transform = 'translateZ(0px)';
});
