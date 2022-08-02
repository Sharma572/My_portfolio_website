
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
            <li><a class="navbar-link home-link" href="#main" >Home</a></li>
            <li><a class="navbar-link about-link" href="#footer">About</a></li>
            <li><a class="navbar-link portfolio-link" href="#portfolio-section">Portfolio</a></li>
            <li>
              <a
                class="navbar-link contact-link"
                href="#contact-section"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
  
        <div class="mobile-navbar-btn">
          <ion-icon
            class="mobile-nav-icon"
            name="menu-outline"
            class="mobile-nav-icon"
          ></ion-icon>
  
          <ion-icon
            class="mobile-nav-icon"
            name="close-outline"
            class="mobile-nav-icon"
          ></ion-icon>
        </div>
      </header>
        `
    }
}
customElements.define('my-header', MyHeader);

// ========================================
//  Coustum Footer Element
// ========================================

class myFooter extends HTMLElement{
connectedCallback(){
    this.innerHTML=`
    <footer class="section section-footer " >
      <div class="container grid grid-four-col">
        <div class="f-about">
          <h3>About</h3>
          <p>We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience. Hope you like it.</p>
        </div>

        <div class="f-links">
           <h3>Links</h3>
          <ul>
            <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">home</a></li>
             <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">about</a></li>
              <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">services</a></li>
               <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">portfolio</a></li>
              
                 <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">contact</a></li>
          </ul>
        </div>

         <div class="f-services">
            <h3>Services</h3>
          <ul>
            <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">web design</a></li>
             <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">web development</a></li>
              <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Mern Project</a></li>
           
                <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Online Classes</a></li>
                 <li><span><ion-icon name="arrow-forward-outline"></ion-icon></span><a href="#">Youtube Course</a></li>
          </ul>
        </div>

        <div class="f-address"> 
          <h3>Have a Questions?</h3>
          <address>
            <div>
              <p>  <span><ion-icon name="location-outline"></ion-icon></span> Pune, India </p>
            </div>

            <div>
              <p>  <span><ion-icon name="call-outline"></ion-icon></span> <a href="tel:+91123456789"> +91 9874563215 </a></p>
            </div>

            <div>
              <p>  <span><ion-icon name="mail-outline"></ion-icon></span> <a href="mailto:test@Raunak.com"> info@Raunaktechnical.com </a> </p>
            </div>
          </address>
        </div>
      </div>

      <div class="container">
        <div class="f-social-icons">
          <a href="https://www.instagram.com/Raunaktechnical/" target="_blank">
            <ion-icon class="icons" name="logo-instagram"></ion-icon>
          </a>

            <a href="https://discord.gg/MdScmCsua6" target="_blank">
           <ion-icon class="icons" name="logo-discord"></ion-icon>
          </a>

            <a href="https://www.youtube.com/Raunaktechnical" target="_blank">
           <ion-icon class="icons" name="logo-youtube"></ion-icon>
          </a>
        </div>

        <div class="f-credits">
          <p>Copyright ©2022 All rights reserved | This template is made with ❤ by Raunak.</p>
        </div>
      </div>

    </footer>
    `
}
}

customElements.define('my-footer',myFooter);


// ========================================
// Responsive navigation
// ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

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
//  how to add media queries in JS
// ========================================
function myFunction(widthSize) {
    if (widthSize.matches) {
        // If media query matches
        const swiper = new Swiper(".swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myFunction(widthSize);
// Attach listener function on state changes
widthSize.addListener(myFunction);

// ========================================
//  scroll to top
// ========================================
const footerElm = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

// I am adding the button element inside the div element
scrollElement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// add to the bottom of the page
footerElm.after(scrollElement);

// deleting the dom element
const scrollTop = () => {
    sectionHero.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);

// get the data attributes

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




// ========================================
// creating a portfolio tabbed component
// ========================================

const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-ovelay");

port_btn.addEventListener("click", (e) => {
    // console.log(e.target);

    // we will get which child element was clicked
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn")) return;
    // always remove the classList first then add the class
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    // img_div.forEach((curElem) =>
    //   curElem.classList.remove("portfolio-image-active")
    // );

    p_btn_clicked.classList.add("p-btn-active");

    // to find the p-img class number of the images using the btn data attribute number

    const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    // console.log(img_active);

    img_div.forEach((curElem) =>
        curElem.classList.add("portfolio-image-not-active")
    );

    img_active.forEach((curElem) =>
        curElem.classList.remove(`portfolio-image-not-active`)
    );
});

// ========================================
//  lazy loading section
// ========================================
const imgRef = document.querySelector("img[data-src]");
console.log(imgRef);

const lazyImg = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = imgRef.dataset.src;
};

const imgObserver = new IntersectionObserver(lazyImg, {
    root: null,
    threshold: 0,
    // rootMargin: "100px",
});

imgObserver.observe(imgRef);

// ========================================
//  animated counter number
// ========================================

const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 200;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);


