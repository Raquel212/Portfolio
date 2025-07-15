document.addEventListener('DOMContentLoaded', () => {
    // --- DICTIONARY FOR TRANSLATIONS ---
    const translations = {
        pt: {
            page_title: "Portfólio | Raquel Martins",
            nav_home: "Início",
            nav_about: "Sobre",
            nav_projects: "Projetos",
            nav_skills: "Skills",
            hero_title: "Desenvolvedora de Software",
            hero_subtitle: "Graduada em Ciência da Computação, entusiasta de tecnologia e focada em criar soluções criativas e funcionais que agregam valor a projetos.",
            hero_contact_btn: "Entrar em Contato",
            about_title: "MUITO PRAZER, SOU RAQUEL MARTINS.",
            about_desc: "Formada em Ciência da Computação, tenho grande interesse na área de Front-End e estou sempre buscando aprender e evoluir tecnicamente. Gosto de transformar ideias em interfaces claras e funcionais, com foco na usabilidade e no impacto para o usuário. Também atuo no Back-End com Java, o que amplia minha visão sobre os projetos e me permite colaborar em diferentes etapas do desenvolvimento. Conciliar essas duas áreas ampliou minha perspectiva e vem consolidando meu caminho como desenvolvedora Fullstack. Dedico-me a criar soluções claras, eficientes e alinhadas às boas práticas, contribuindo para a evolução constante dos projetos.",
            projects_title: "MEUS PROJETOS",
            project1_desc: "Plataforma web para gerenciar medicamentos e estoques, ajudando usuários a organizar o uso, aumentar a eficiência e reduzir desperdícios.",
            project2_desc: "Plataforma web que conecta pacientes com transtornos alimentares a profissionais, facilitando o acompanhamento nutricional e psicológico em tempo real.",
            project3_desc: "Site temático desenvolvido para fãs, reunindo informações, curiosidades e conteúdos exclusivos sobre o universo One Piece.",
            skills_title: "MINHAS SKILLS",
            project_cta: "Ver Detalhes",
        },
        en: {
            page_title: "Portfolio | Raquel Martins",
            nav_home: "Home",
            nav_specialties: "Specialties",
            nav_about: "About",
            nav_projects: "Projects",
            nav_skills: "Skills",
            hero_title: "Software Developer.",
            hero_subtitle: "Computer Science graduate, technology enthusiast, and focused on creating creative and functional solutions that add value to projects.",
            hero_contact_btn: "Get in Touch",
            about_title: "NICE TO MEET YOU, I'M RAQUEL MARTINS.",
            about_desc: "Graduated in Computer Science, I have a strong interest in Front-End development and am always eager to learn and grow technically. I enjoy transforming ideas into clear and functional interfaces, focusing on usability and the user experience. I also work on Back-End development with Java, which broadens my perspective on projects and allows me to collaborate across different stages of development. Combining these two areas has expanded my outlook and has been shaping my path as a Fullstack developer. I am committed to delivering clear, efficient solutions aligned with best practices, contributing to the continuous improvement of projects.",
            projects_title: "My Projects",
            project1_desc: "Web platform for managing medications and inventory, helping users organize usage, increase efficiency, and reduce waste.",
            project2_desc: "Web platform that connects patients with eating disorders to professionals, facilitating real-time nutritional and psychological monitoring.",
            project3_desc: "Thematic website developed for fans, bringing together information, curiosities, and exclusive content about the One Piece universe.",
            skills_title: "MY SKILLS",
            project_cta: "View Details",
        }
    };

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
});



document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.bar').forEach(bar => {
      const width = bar.getAttribute('data-width');
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    });

    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    document.querySelectorAll('.circle').forEach((circle, index) => {
      const percent = circle.getAttribute('data-percent');
      const progress = circle.querySelector('.progress');

      progress.style.strokeDasharray = circumference;
      progress.style.strokeDashoffset = circumference;

      setTimeout(() => {
        progress.style.transition = 'stroke-dashoffset 2s ease-in-out';
        progress.style.strokeDashoffset = circumference - (percent / 100) * circumference;
      }, 300 + index * 200); 
    });
  });