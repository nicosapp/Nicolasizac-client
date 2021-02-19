/* eslint-disable no-multi-str */
export default {
  pages: {
    homepage: {
      title: 'Home',
      description:
        'Freelance fullstack Front-end (NuxtJS, VueJS) et Backend (Laravel) developper',
    },
    tech_profile: {
      title: 'Tech profile',
      description: 'List of my work experiences in companies and my education',
    },
    services: {
      title: 'Services',
      description:
        'List of technologies I have an expert knowledge of to implement your projects',
    },
    contact: {
      title: 'Contact',
      description: 'Contact form to discuss together about your project',
      message_sent:
        'Message send! Thank you, I will contact you as soon as possible',
    },
    projects: {
      title: 'Projects',
      description:
        'List of web and mobile programming projects I worked on and direct link to their Github repositories',
    },
  },
  // cookies
  cookies: {
    sentence: {
      before: 'Can I use cookies for analytics? Read',
      after: 'for more information!',
    },
    privacy_policy_link: 'the privacy policy',
  },

  // section me
  sections: {
    me: {
      title: 'Me',
      firstline:
        'Geek since my early age, I graduated from a French Engineering University. After several expériences \
        in international companies, I now work as a Freelance Fullstack Lead Développer \
        expert with Javascript/Typescript Framework and Laravel',
      //   'Passionate since a child about programming and web development, \
      // I graduated from the INSA Lyon (French Engineering University) and develop strong theorical knowledges. \
      // I strengthen them subsequently in my work experiences and as self-taught.',

      description:
        'As a Fullstack developer with cognisant knowledge of server administration, I am fully qualified to create \
        from scratch, deploy and manage web and mobile applications. Complying with agile methods I carry \
        out and deliver in time your projects even with challenging deadlines',
      //   'After several experiences in international companies, I work now as a freelance Fullstack developper. \
      // I share my times between missions and Open-Source projects. I am expert with Frontend frameworks \
      // based on JS and Typescript such as Vue.JS/Nuxt.JS and React. I have also strong skills in Backend programmating with Laravel. \
      // You will find hereunder a list of my projects and work experiences.',
    },
  },

  projects: {
    mycodesnippets: {
      description:
        'MyCodeSnippets is a web and mobile (PWA) application allowing to save important and recurrent pieces of code. \
      By creating several `Snippets` you can access your work quickly and easily. \
      Snippets can be set `public` to let the others users use your work.',
    },
    myvoc: {
      description:
        'Myvoc is a web and mobile (PWA) education platform to learn foreign language vocables. \
      Choose your native language and create foreign dictionnary to start adding words. \
      To memorize new terms, save new words gradually and order them by categories, grammatical groups or level of speech.',
    },
    mespetitshabits: {
      description:
        'MesPetitsHabits.fr is a secondhand children clothes MarketPlace. Sell or buy not used or used children clothing or accessories. \
      MesPetitsHabits aims at fighting against clothes waste and overconsumption by giving a second lease of life to objects.',
    },
    memocards: {
      description: 'Memocards is a web flash card application.',
    },
    dokanstorecarousel: {
      description:
        'Dokan Store Carousel for Wordpress is a Wordpress plugin enriching the Doken Marketplace module. \
        With a wordpress `shortcode` you can easily include a customizable `Dokan Store Carousel` in your pages.',
    },
  },

  services: {
    introduction:
      'As a Full Stakc developper, I am eager to help people creating new projects or work on/enhance \
     existing web or mobile softwares.',
    frontend: {
      short:
        "Développement d'applications Front-End (SPA, Universal, PWA) performantes et de features complexes. \
      Avec la technologie de votre choix pour un Front-End SEO friendly.",
      description:
        "Étant un developpeur expert en Frontend, je suis capable de développer des applications SPA performantes \
      et optimisées avec les dernières frameworks tels que Vue.JS, React.JS ou Angular. J'apporterai mon expertise \
      sur les fonctionnalités les plus complexes tout en posant une architecture conventionnée suivant les Good Development Practise. \
      Nuxt.JS offre la possiblité de mettre en place une site web optimisé pour le SEO (référencement naturel). \
      Je peux également intervenir sur votre projet existant.",
    },
    backend: {
      short:
        "À l'heure des projets dits 'API First', je mets en place des projets Laravel puissants et sécurisé (CSRF) \
      que vos applications Front-End ou mobile puissent consommer.",
      description:
        "Avec le développement des PWA, des frontend indépendants, la tendance est aujourd'hui à l'`API First`. \
      En tant que développeur FullStack créons ensemble avec le très puissant Framework artisan Laravel une API robuste et agile. \
      Vous avez de plus l'entière liberté sur la technologie de stockage (PostgreSQL, MySQL, ElasticSearch, AWS...).",
    },
    mobile: {
      short:
        'Avec des technologies comme Ionic, React Native ou Flutter, il est possible \
      de développer des applications mobiles natives avec du JS.',
      description:
        "Avec des technologies telles que Ionic, React Native ou encore Flutter, il est possible de créer des applications \
      mobiles natives ou PWA avec du JS, complètement autonomes. Grâce au partage du \
      code base entre votre site web et l'application mobile vous gagnerez du temps et de l'argent.",
    },
    cmsintegration: {
      short:
        'Sachant que près de 40% du web repose sur Wordpress, les CMS restent toujours une option de choix si \
      vous souhaitez avoir la possibilité de modifier vous-même facilement le contenu de votre site. \
      Je développe de plus des Front-End puissant connecté à des CMS Headless.',
      description:
        "Sachant que près de 40% du web repose sur Wordpress, les CMS restent toujours une option de choix si \
      vous souhaitez avoir la possibilité de modifier vous-même facilement le contenu de votre site. \
      Aujourd'hui la tendance est au CMS Headless. Les nouveaux arrivant sont Strapi, Prismic, \
      Contentful, etc... A la différence de Wordpress ou Shopify, le Front-End sera totalement indépendant. Le contenu restera facilement modifiable",
    },
  },

  experiences: {
    freelance: {
      title: 'Freelance Full Stack Developper',
      introduction:
        '__Freelance Fullstack developer__ spécialisé dans les frameworks NuxtJS & Laravel',
      task_1:
        '__Nov. 2020 - Now__ - Carnet de Retraite - Frontend Lead Developer | VueJS & Material Design Bootstrap',
      task_2:
        '__Jul. 2020 - Dec. 2020__ - Comenregions - Fullstack Lead Developer | Symfony & React & Metronic',
      task_3:
        '__Feb. 2020 - Oct__ - Autorigin - Fullstack Lead Developer | Laravel & Blade',
      task_4:
        '__Oct. 2020 - Nov. 2020__ - MyVoc - Fullstack Developer | Laravel & NuxtJS',
      task_5:
        '__Sept. 2020 - Oct. 2020__ - MyCodeSnippets - Fullstack Developer | Laravel & NuxtJS',
      task_6:
        '__Mai. 2020 - Sept. 2020__ - MesPetitsHabits - Fullstack Developer | Wordpress & Jquery',
    },
    ge: {
      title: 'Digital Project Officier',
      introduction:
        'Worked as an __Digital Project Officier__ in the Advantage Windows modality (AW).',
      task_1:
        'Coordinated with manufacturing, sales and developments teams to implement new features on the SaaS \
        eDelivery application  to achieve corporate cost and quality objectives.',
      task_2:
        'Conducted regular project meetings with management and team members to track project status and progress.',
      task_3: 'Evaluated and improved user stories for maximum efficiency.',
      task_4:
        'Implemented is the USA the new eDelivery process (virtual software distribution) for AW products',
    },
    staubli: {
      title: 'Project Officier',
      introduction:
        'Managed the implementation of the MES for the three \
      production lines (jacquard machines, harnesses, components).',
      task_1:
        'Collected user requirements and translated them in technical specifications.',
      task_2:
        'Conducted planning & reportings meetings. Followed suppliers work progress.',
    },
    bmw: {
      title: 'R&D Engineer',
      introduction:
        'Provided a descriptive and predictive method to describe the sound \
      transmission for the automotive industry time and resource saving.',
    },
    insalyon: {
      title: 'Mechanical/Computer Engineer',
      introduction: '__M. Sc. Mechanical & Computer Engineering__',
      task_1: '__2014 - 2017__ : M. Sc. Mechanical / Computer Engineering',
      task_2: '__2015 - 2016__ : Exchange semester - TU Berlin',
      task_3: '__2012 - 2014__ : Integrated preparatory classes',
    },
  },
}
