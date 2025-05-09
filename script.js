function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => section.classList.remove('ativo'));
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion(e) {
      e.target.classList.toggle('ativo');
      e.target.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((accordionItem) => {
      accordionItem.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSuave();

// animação ao scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowHeight = window.innerHeight * 0.6;

    function animarScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowHeight;

        if (sectionTop < 0) {
          section.classList.add('ativo');
        }
      });
    }
    animarScroll();
    window.addEventListener('scroll', animarScroll);
  }
}
initAnimacaoScroll();
