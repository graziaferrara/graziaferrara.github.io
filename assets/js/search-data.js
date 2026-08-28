// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-my-ph-d-at-the-university-of-salerno",
          title: 'Started my Ph.D. at the University of Salerno.',
          description: "",
          section: "News",},{id: "news-this-site-is-live",
          title: 'This site is live.',
          description: "",
          section: "News",},{id: "news-presented-our-paper-adaptive-influence-maximization-on-hypergraph-topologies-at-eumas-2025-in-bucharest-romania",
          title: 'Presented our paper “Adaptive Influence Maximization on Hypergraph Topologies” at EUMAS 2025 in...',
          description: "",
          section: "News",},{id: "news-presented-my-paper-designing-deployable-public-health-campaigns-via-online-learning-techniques-at-ecai-2025-doctoral-consortium-in-bologna-italy",
          title: 'Presented my paper “Designing Deployable Public Health Campaigns via Online Learning Techniques” at...',
          description: "",
          section: "News",},{id: "news-honored-to-give-a-talk-on-mas-in-public-health-at-the-multi-agent-systems-2025-26-course-at-the-university-of-salerno",
          title: 'Honored to give a talk on “MAS in Public Health” at the Multi...',
          description: "",
          section: "News",},{id: "news-presented-our-paper-influence-maximization-in-unknown-social-networks-a-contextual-bandit-approach-extended-abstract-at-prima-2025-in-modena-italy",
          title: 'Presented our paper “Influence Maximization in Unknown Social Networks: A Contextual Bandit Approach...',
          description: "",
          section: "News",},{id: "news-presented-an-extended-version-of-our-paper-influence-maximization-in-unknown-social-networks-a-contextual-bandit-approach-at-the-asi-workshop-aamas-2026-also-attended-aamas-in-paphos-cyprus",
          title: 'Presented an extended version of our paper “Influence Maximization in Unknown Social Networks:...',
          description: "",
          section: "News",},{id: "news-our-paper-marginal-cohesion-centrality-identifying-glue-nodes-in-hypergraphs-co-authored-with-francesco-cauteruccio-vincenzo-auletta-and-diodato-ferraioli-has-been-accepted-as-a-full-paper-asonam-2026",
          title: 'Our paper “Marginal Cohesion Centrality: Identifying Glue Nodes in Hypergraphs”, co-authored with Francesco...',
          description: "",
          section: "News",},{id: "news-this-week-i-am-volunteering-at-ec-2026-in-rome-italy",
          title: 'This week I am volunteering at EC 2026 in Rome, Italy!',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-aixia-2026-influence-maximization-on-partially-observable-social-networks-with-graph-reconstruction-with-vincenzo-auletta-francesco-cauteruccio-diodato-ferraioli-andrea-marino-and-rocco-gerardo-pizzulo-and-minimum-cost-hyperedge-interventions-for-consensus-reaching-via-answer-set-programming-with-vincenzo-auletta-francesco-cauteruccio-and-diodato-ferraioli",
          title: 'Two papers accepted @ AIxIA 2026! “Influence Maximization on Partially Observable Social Networks...',
          description: "",
          section: "News",},{id: "news-our-paper-fair-and-privacy-aware-influence-maximization-under-partial-observability-a-research-program-co-authored-with-vincenzo-auletta-francesco-cauteruccio-and-diodato-ferraioli-has-been-accepted-the-spirit-workshop-co-located-with-aixia-2026",
          title: 'Our paper “Fair and Privacy-Aware Influence Maximization under Partial Observability: A Research Program”,...',
          description: "",
          section: "News",},{id: "news-our-paper-marginal-cohesion-centrality-identifying-glue-nodes-in-hypergraphs-co-authored-with-francesco-cauteruccio-vincenzo-auletta-and-diodato-ferraioli-won-the-best-paper-award-asonam-2026",
          title: '🏆 Our paper “Marginal Cohesion Centrality: Identifying Glue Nodes in Hypergraphs”, co-authored with...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%72%66%65%72%72%61%72%61@%75%6E%69%73%61.%69%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/graziaferrara", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/grferrara", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/graziaferrara", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
