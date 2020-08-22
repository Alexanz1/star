const burger  = document.querySelector('.burger');
        const overlay = document.querySelector('.overlay ');
         const body = document.querySelector('.overlay__menu-btn');

         let links = document.querySelectorAll('.menu__link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('burger--active');
  overlay.classList.toggle('overlay--active');
 
}

burger.addEventListener('click' , toggleMenu);

burger.addEventListener('click', function () {
    overlay.style.display === 'none' ? overlay.style.display = 'flex' : overlay.style.display = "none";
        });

        body.addEventListen('click', function() {
            overlay.style.display === "flex" ? overlay.style.display = "none" : overlay.style.display = 'flex';
        });

        
      /*   hamburger.addEventListener('click', function () {
          dropdown.style.display === 'none' ? dropdown.style.display = 'flex' : dropdown.style.display = "none";
        });
        
        closeBtn.addEventListener('click', function() {
          dropdown.style.display === "flex" ? dropdown.style.display = "none" : dropdown.style.display = 'flex';
        });
         */
      