const containerInput = document.querySelector('.container-input');
const input = document.querySelector('.container-input .inp-anim');
const validation = document.querySelector('.container-input span');

input.addEventListener('input', function(e) {

   if(e.target.value !== "") {
      e.target.parentNode.classList.add('active-input');
   }

   else if(e.target.value === "") {
      e.target.parentNode.classList.remove('active-input');
   }

   if(e.target.value.includes('$')) {
      input.classList.add('erreur');
      validation.classList.add('visibleTxt');
   }

   else {
      input.classList.remove('erreur');
      validation.classList.remove('visibleTxt');
   }
})

// 925DEV