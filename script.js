const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {  1
        burgerMenu.classList.remove("is-active");
        navbarMenu.classList.remove("is-active");
    });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
    if (this.scrollY >= 85) {
        headerMenu.classList.add("on-scroll");
    } else {
        headerMenu.classList.remove("on-scroll");
    }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.classList.remove("is-active");
        }
    }
});

//Action....................................................//
//Section=====================================================

const aboutSection = document.querySelector('.about-section');
const leftSection = document.querySelector('.left-section');
const rightSection = document.querySelector('.right-section');

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            leftSection.style.animation = 'none';
            rightSection.style.animation = 'none';
            return;
        }
        leftSection.style.animation = 'leftSectionAnimation 1s ease-out';
        rightSection.style.animation = 'rightSectionAnimation 1s ease-out';
    });
}, { threshold: 0.5 });
//This section is for services... i want to add

// ...............................................//

// services.......................................// 
// projects ======================================//

var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// function showSlides(n) {
//     var z;
//     var slide = document.getElementById("slide-bar")
//     if (n => slide.length) {
//         slideIndex = slide.length;
//     }
//     if ( z = 0; < slide.length; i--) {
//         slideIndex = slide.lenth;
//     }
//     else ( z > 0;)

// }


// Gallery

// var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");

// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
// }

// function vidFade() {
//   vid.classList.add("stopfade");
// }

// vid.addEventListener('ended', function()
// {
// // only functional if "loop" is removed 
// vid.pause();
// // to capture IE10
// vidFade();
// }); 


// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// })



{/* <TESTIMONIAL>------------------ */}

/* Demo purposes only */
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

//   FAQ ------------------------------------------------------

let summaryCollection = document.getElementsByTagName('summary');
let signsCollection = document.getElementsByClassName('faq-open-icon');

for(let i = 0; i < summaryCollection.length; i++) {
  summaryCollection[i].onclick = function() {
    if(signsCollection[i].innerHTML === '+') signsCollection[i].innerHTML = '—';
    else signsCollection[i].innerHTML = '+';
  }
}


// heading section for all pages

// Add an event listener to handle the hover effect on heading text
document.querySelector('.menu-heading').addEventListener('mouseenter', function () {
    this.classList.add('hovered');
  });
  
  document.querySelector('.menu-heading').addEventListener('mouseleave', function () {
    this.classList.remove('hovered');
  });
  


//   CONTACT------------------------------------

    function sendMail()
    {
        var name=document.getElementById("frmnme").value;
        var email=document.getElementById("frmemil").value;
        var contactno=document.getElementById("frmcontct").value;
        var message=document.getElementById("frmtxt").value;

        if(name=='')
        {
            alert('please enter your name !'); 
            document.getElementById("frmnme").focus();
            return false;
        }
        
        if(email=='')
        {
            alert('please enter your email !'); 
            document.getElementById("frmemil").focus();
            return false;
        }
        else
        {
            const pattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
            ;
            if (!pattern.test(email)) 
            {
                alert('Please enter a valid email address.');
                document.getElementById("frmemil").focus();
                return false;
            }
        }
        
        if(contactno=='')
        {
            alert('please enter your contact no !'); 
            document.getElementById("frmcontct").focus();
            return false;
        }
        else
        {
            var phoneno = /^\d{10}$/;
            if(!phoneno.test(contactno))
            {
                alert('please enter valid contact no !'); 
                document.getElementById("frmcontct").focus();
                return false;
            }
        }
        
        if(message=='')
        {
            alert('please enter your message !'); 
            document.getElementById("frmtxt").focus();
            return false;
        }
        
        $.ajax({
            url: 'https://dhtsolutions.in/dhtops/Ishan/sendMail',
            type: "POST",
            data: {
                myemail 'ishanytchannel727@gmail.com',
                name: name,
                contactno: contactno,
                email: email,
                message: message,
                bodytext: '',
            },
            dataType: "json",
            success: function (data) 
            {
                console.log(data);
            },
            error: function (error) 
            {
                console.log(`Error ${error}`);
            }
        });
    }
    

