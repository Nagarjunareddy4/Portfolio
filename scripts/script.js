var typed = new Typed(".typing",{
    strings:["","Software Engineer at HCLTech"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');
    
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
    
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
    
                if (response.ok) {
                    formMessage.textContent = "Thank you! Your message has been sent.";
                    formMessage.style.color = "green";
                    contactForm.reset();
                } else {
                    formMessage.textContent = "Oops! Something went wrong. Please try again.";
                    formMessage.style.color = "red";
                }
            } catch (error) {
                formMessage.textContent = "Error sending message.";
                formMessage.style.color = "red";
            }
        });

        const nav =document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        toatalNavList = navList.length;
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i=0; i<toatalNavList; i++)
        {
          const a= navList[i].querySelector("a");
          a.addEventListener("click",function()
      {
          removeBackSection();
          for(let j=0; j<toatalNavList; j++)
          {
              if(navList[j].querySelector("a").classList.contains("active"))
              {
                  addBackSection(j);
                 //allSection[j].classList.add("back-section");
              }
              navList[j].querySelector("a").classList.remove("active");
          }
          this.classList.add("active")
          showSection(this);
          if(window.innerWidth < 1200)
          {
              asideSectionTogglerBtn();
          }
      })
        }
        function removeBackSection()
        {
          for(let i=0; i<totalSection; i++)
              {
                  allSection[i].classList.remove("back-section");
              }
        }
        function addBackSection(num)
        {
          allSection[num].classList.add("back-section");
        }
        function showSection(element)
        {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
        }
        function updateNav(element)
        {
          for(let i=0; i<toatalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                  navList[i].querySelector("a").classList.add("active");
              }
          }
        }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click",() =>
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.toggle("open");
        }
    }
