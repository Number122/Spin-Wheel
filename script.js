const wheel = document.querySelector('.wheel')
const inner = document.querySelector('.inner')
const spinBtn = document.querySelector('.spinBtn');

let rotation1 = 0; 
let rotation2 = 0; 

spinBtn.onclick = function() {
 let randomRotation1 = Math.floor(Math.random() * 360) + 3600; // Add 3600 for multiple spins
 let randomRotation2 = Math.floor(Math.random() * 360) + -3600; // Add -3600 for multiple spins


 rotation1 += randomRotation1;
 rotation2 += randomRotation2;

 wheel.style.transform = `rotate(${rotation1}deg)`;
 inner.style.transform = `rotate(${rotation2}deg)`;
};
