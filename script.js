
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {

  const translations = {
    pt: {
      page_title: "Portfólio | Raquel Martins",
      nav_home: "Início",
      nav_about: "Sobre",
      nav_projects: "Projetos",
      nav_skills: "Skills",
      hero_title: "DESENVOLVEDORA DE SOFTWARE",
      hero_subtitle: "Graduada em Ciência da Computação, entusiasta de tecnologia e focada em criar soluções criativas e funcionais que agregam valor a projetos.",
      hero_contact_btn: "Entrar em Contato",
      about_title: "MUITO PRAZER, SOU RAQUEL MARTINS",
      about_desc: "Formada em Ciência da Computação, tenho grande interesse na área de Front-End e estou sempre buscando aprender e evoluir tecnicamente. Gosto de transformar ideias em interfaces claras e funcionais, com foco na usabilidade e no impacto para o usuário. Também atuo no Back-End com Java, o que amplia minha visão sobre os projetos e me permite colaborar em diferentes etapas do desenvolvimento. Conciliar essas duas áreas ampliou minha perspectiva e vem consolidando meu caminho como desenvolvedora Fullstack. Dedico-me a criar soluções claras, eficientes e alinhadas às boas práticas, contribuindo para a evolução constante dos projetos.",
      projects_title: "MEUS PROJETOS",
      project1_desc: "Plataforma web para gerenciar medicamentos e estoques, ajudando usuários a organizar o uso, aumentar a eficiência e reduzir desperdícios.",
      project2_desc: "Plataforma web desenvolvida para aproximar pacientes e profissionais de saúde, funcionando como um diário digital compartilhado.",
      project3_desc: "Plataforma web para gestão do fator humano em equipes ágeis, com análise, indicadores de bem-estar, identificação de riscos de burnout e integração entre práticas do PMBOK e metodologias ágeis.",
      skills_title: "MINHAS SKILLS",
      project_cta: "Ver Detalhes",
      skills_tech: "Habilidades Técnicas",
      skills_prof: "Habilidades Profissionais",
      skill_creativity: "Criatividade",
      skill_communication: "Comunicação",
      skill_problem: "Resolução de Problemas",
      skill_teamwork: "Trabalho em Equipe",
    },
    en: {
      page_title: "Portfolio | Raquel Martins",
      nav_home: "Home",
      nav_specialties: "Specialties",
      nav_about: "About",
      nav_projects: "Projects",
      nav_skills: "Skills",
      hero_title: "SOFTWARE DEVELOPER",
      hero_subtitle: "Computer Science graduate, technology enthusiast, and focused on creating creative and functional solutions that add value to projects.",
      hero_contact_btn: "Get in Touch",
      about_title: "NICE TO MEET YOU, I'M RAQUEL MARTINS",
      about_desc: "Graduated in Computer Science, I have a strong interest in Front-End development and am always eager to learn and grow technically. I enjoy transforming ideas into clear and functional interfaces, focusing on usability and the user experience. I also work on Back-End development with Java, which broadens my perspective on projects and allows me to collaborate across different stages of development. Combining these two areas has expanded my outlook and has been shaping my path as a Fullstack developer. I am committed to delivering clear, efficient solutions aligned with best practices, contributing to the continuous improvement of projects.",
      projects_title: "MY PROJECTS",
      project1_desc: "Web platform for managing medications and inventory, helping users organize usage, increase efficiency, and reduce waste.",
      project2_desc: "Web platform developed to bring patients and healthcare professionals closer together, functioning as a shared digital diary.",
      project3_desc: "A web platform for managing the human factor in agile teams, featuring analysis, well-being indicators, burnout risk identification, and integration of PMBOK practices with agile methodologies.",
      skills_title: "MY SKILLS",
      project_cta: "View Details",
      skills_tech: "Technical Skills",
      skills_prof: "Professional Skills",
      skill_creativity: "Creativity",
      skill_communication: "Communication",
      skill_problem: "Problem Solving",
      skill_teamwork: "Teamwork",
    }
  };

  /* =========================================================
      TEMA CLARO / ESCURO
     ========================================================= */
  const themeSwitcher = document.getElementById('checkbox');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
      themeSwitcher.checked = true;
    }
  }

  themeSwitcher.addEventListener('change', () => {
    if (themeSwitcher.checked) {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    }
  });

  /* =========================================================
      IDIOMA PT / EN
     ========================================================= */
  const langPtBtn = document.getElementById('lang-pt');
  const langEnBtn = document.getElementById('lang-en');
  const savedLang = localStorage.getItem('language') || 'pt';

  const changeLanguage = (lang) => {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    if (lang === 'pt') {
      langPtBtn.classList.add('active');
      langEnBtn.classList.remove('active');
      document.documentElement.lang = 'pt-br';
    } else {
      langEnBtn.classList.add('active');
      langPtBtn.classList.remove('active');
      document.documentElement.lang = 'en';
    }

    localStorage.setItem('language', lang);
  };

  changeLanguage(savedLang);
  langPtBtn.addEventListener('click', () => changeLanguage('pt'));
  langEnBtn.addEventListener('click', () => changeLanguage('en'));

  /* =========================================================
     ANIMAÇÃO DOS MEDIDORES CIRCULARES (skills técnicas)
     ========================================================= */
  const animateGauges = () => {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;

    document.querySelectorAll('.gauge').forEach((gauge, index) => {
      const percent = gauge.getAttribute('data-percent');
      const fill = gauge.querySelector('.gauge-fill');

      fill.style.strokeDasharray = circumference;
      fill.style.strokeDashoffset = circumference;

      setTimeout(() => {
        fill.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.22, .61, .36, 1)';
        fill.style.strokeDashoffset = circumference - (percent / 100) * circumference;
      }, 150 + index * 110);
    });
  };

  /* =========================================================
     ANIMAÇÃO DOS CÍRCULOS DE SKILLS (skills profissionais)
     ========================================================= */
  const animateCircles = () => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    document.querySelectorAll('.circle').forEach((circle, index) => {
      const percent = circle.getAttribute('data-percent');
      const progress = circle.querySelector('.progress');

      progress.style.strokeDasharray = circumference;
      progress.style.strokeDashoffset = circumference;

      setTimeout(() => {
        progress.style.transition = 'stroke-dashoffset 1.8s ease-in-out';
        progress.style.strokeDashoffset = circumference - (percent / 100) * circumference;
      }, 300 + index * 180);
    });
  };

  /* =========================================================
     MENU MOBILE
     ========================================================= */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  /* =========================================================
     NAVBAR + PROGRESSO DE LEITURA + VOLTAR AO TOPO
     ========================================================= */
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('pageProgress');
  const backToTop = document.getElementById('backToTop');

  const onScroll = () => {
    const scrollY = window.scrollY;

    navbar.classList.toggle('scrolled', scrollY > 30);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    progressBar.style.width = percent + '%';

    backToTop.classList.toggle('show', scrollY > 480);
  };

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* =========================================================
     REVEAL ON SCROLL + LINK ATIVO DO MENU
     ========================================================= */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* Barra de skills anima quando a seção aparece */
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateGauges();
          animateCircles();
          skillsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    skillsObserver.observe(skillsSection);
  }

  /* Destaca o item ativo do menu conforme a seção visível */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.menu-desktop a');

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.5, rootMargin: '-35% 0px -55% 0px' });

  sections.forEach(sec => activeObserver.observe(sec));

  /* Se JS não percorrer o reveal (conteúdo maior que a tela), garante visibilidade */
  setTimeout(() => {
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('in-view');
    });
  }, 120);
});
