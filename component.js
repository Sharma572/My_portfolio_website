

// ========================================
//  Coustum Header Element
// ========================================
class MyHeader extends HTMLElement{
    
   
    connectedCallback(){
        this.innerHTML =`
        <header class="header">
        <div class="logo_container">
          <img
            src="images/logo.png"
            alt="Raunak technical logo"
            class="logo"
          />
          <h2 class="logo_text">Raunak</h2>
        </div>
        <nav class="navbar">
          <ul class="navbar-lists">
            <li><a  id="home"  class="navbar-link home-link" href="#main" >Home</a></li>
            <li><a  id="about"  class="navbar-link about-link" href="#footer">About</a></li>
            <li><a id="porfolio"  class="navbar-link portfolio-link" href="#portfolio-section">Portfolio</a></li>
            <li>
              <a id="contact" 
                class="navbar-link contact-link"
                href="#contact-section"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
  
        <div class="mobile-navbar-btn">
          <span class="mobile-nav-icon"name="menu-outline"><img class="util-logo" src="images/skillsIcon/menu.png" alt="menu"></span>
          <span class="mobile-nav-icon" name="close-outline"><img class="util-logo" src="images/skillsIcon/close.png" alt="close"></span>
       
        </div>
      </header>
        `
    }
}
customElements.define('my-header', MyHeader);



var typed = new Typed('.input', {
    strings: ["Front End Developer", "Programmer", "Web Developer", "A DIY enthusiastic"],
    typeSpeed: 100,
    backSpeed:100,
    loop:true,
});



// ========================================
//  Coustum Footer Element
// ========================================

// class myFooter extends HTMLElement{
// connectedCallback(){
//     this.innerHTML=`
//     <footer class="section section-footer " >
//       <div class="container grid grid-four-col">
//         <div class="f-about">
//           <h3>About</h3>
//           <p>We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience. Hope you like it.</p>
//         </div>

//         <div class="f-links">
//            <h3>Links</h3>
//           <ul>
//             <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">home</a></li>
//              <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">about</a></li>
//               <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">services</a></li>
//                <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">portfolio</a></li>
              
//                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">contact</a></li>
//           </ul>
//         </div>

//          <div class="f-services">
//             <h3>Services</h3>
//           <ul>
//             <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">web design</a></li>
//              <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">web development</a></li>
//               <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Mern Project</a></li>
           
//                 <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Online Classes</a></li>
//                  <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Youtube Course</a></li>
//           </ul>
//         </div>

//         <div class="f-address"> 
//           <h3>Have a Questions?</h3>
//           <address>
//             <div>
//               <p>  <span><ion-icon name="location-outline"></ion-icon></span> Pune, India </p>
//             </div>

//             <div>
//               <p>  <span><ion-icon name="call-outline"></ion-icon></span> <a href="tel:+91123456789"> +91 9874563215 </a></p>
//             </div>

//             <div>
//               <p>  <span><ion-icon name="mail-outline"></ion-icon></span> <a href="mailto:test@Raunak.com"> info@Raunaktechnical.com </a> </p>
//             </div>
//           </address>
//         </div>
//       </div>

//       <div class="container">
//         <div class="f-social-icons">
//           <a href="https://www.instagram.com/Raunaktechnical/" target="_blank">
//             <ion-icon class="icons" name="logo-instagram"></ion-icon>
//           </a>

//             <a href="#" target="_blank">
            
//           </a>

//             <a href="https://www.youtube.com/Raunaktechnical" target="_blank">
//            <ion-icon class="icons" name="logo-youtube"></ion-icon>
//           </a>
//         </div>

//         <div class="f-credits">
//           <p>Copyright ©2022 All rights reserved | This template is made with ❤ by Raunak.</p>
//         </div>
//       </div>

//     </footer>
//     `
// }
// }

// customElements.define('my-footer',myFooter);




// ========================================
// Responsive navigation
// ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const homebtn = document.getElementById('home');
const aboutbtn = document.getElementById('about');
const contactbtn = document.getElementById('contact');
const portfolio_btn = document.getElementById('porfolio');


console.log(portfolio_btn);
console.log(homebtn);
const closeNav = () => {
    // alert("hi");
    nav_header.classList.remove("active");
    
};
const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
    
};

aboutbtn.addEventListener("click", () => closeNav());
contactbtn.addEventListener("click", () => closeNav());
portfolio_btn.addEventListener("click", () => closeNav());
homebtn.addEventListener("click", () => closeNav());
mobile_nav.addEventListener("click", () => toggleNavbar());



// ========================================
// sticky navigation
// ========================================
const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
// when the hero section end part reached then we need to show the sticky navigation
observer.observe(sectionHero);


// ========================================
//  smooth scrolling
// ========================================

// Home
const main_Section = document.querySelector(".section-hero");

document.querySelector(".home-link").addEventListener("click", (e) => {
    e.preventDefault();
    main_Section.scrollIntoView({ behavior: "smooth" });
});


const portfolioSection = document.querySelector(".section-portfolio");
const contactSection = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", (e) => {
    e.preventDefault();
    portfolioSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
});

// Contact us 
const contact_Section = document.querySelector(".section-contact");

document.querySelector(".contact-link").addEventListener("click", (e) => {
    e.preventDefault();
    contact_Section.scrollIntoView({ behavior: "smooth" });
});

// About us
const bio_data_Section = document.querySelector(".section-biodata");

document.querySelector(".about-link").addEventListener("click", (e) => {
    e.preventDefault();
    bio_data_Section.scrollIntoView({ behavior: "smooth" });
});







