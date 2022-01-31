var slideIndex = 1;

document.addEventListener("DOMContentLoaded",(event)=>{
  showSlides(slideIndex);
});


function plusSlides(slideIndexParams) {
  showSlides(slideIndex += slideIndexParams);
}

function currentSlide(slideIndexParams) {
  showSlides(slideIndex = slideIndexParams);
}

function showSlides(slideIndexParams) {
  var index;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (slideIndexParams > slides.length) {
    slideIndex = 1
  }    
  if (slideIndexParams < 1) {
    slideIndex = slides.length
  }
  for (index = 0; index < slides.length; index++) {
      slides[index].style.display = "none";  
  }
  for (index = 0; index < dots.length; index++) {
      dots[index].className = dots[index].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




function sendEmail() {
      Email.send({
          SecureToken: "security token of your smtp",
          To: "someone@gmail.com",
          From: "someone@gmail.com",
          Subject: "Subject...",
          Body: document.getElementById('text').value
      }).then( 
          message => alert("mail sent successfully")
      );
  }