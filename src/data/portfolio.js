/* =============================================================================
 *  PORTFOLIO CONFIGURATION  —  EDIT THIS FILE ONLY
 * =============================================================================
 *
 *  Everything you see on the website comes from this one file.
 *  You never need to touch any component code.
 *
 *  HOW TO USE IMAGES / VIDEOS / PDF
 *  --------------------------------
 *  1. Put your file inside the folder:  public/assets/
 *  2. Write the path here starting with "/assets/"
 *
 *     Example:  public/assets/profile.png   ->   "/assets/profile.png"
 *               public/assets/reel.mp4      ->   "/assets/reel.mp4"
 *               public/assets/resume.pdf    ->   "/assets/resume.pdf"
 *
 *  You may also paste a full internet link (https://....) instead.
 *
 *  Supported project media: .jpg .jpeg .png .webp .gif  and  .mp4 .webm
 *  (The website detects automatically whether it is an image or a video.)
 * ========================================================================== */

export const portfolio = {
  /* ------------------------------------------------------------------ *
   *  1. SEO  (browser tab title, google description, social sharing)
   * ------------------------------------------------------------------ */
  seo: {
    title: "abhisXsssss | Premium Video Editor & Motion Designer",
    description:
      "Professional video editor and motion graphics designer specializing in cinematic edits, YouTube videos, and high-quality motion design.",
    ogTitle: "abhisXsssss | Premium Video Editor & Motion Designer",
    ogDescription:
      "Professional video editor and motion graphics designer specializing in cinematic edits, YouTube videos, and high-quality motion design.",
    favicon: "/assets/favicon.svg",
  },

  /* ------------------------------------------------------------------ *
   *  2. PERSONAL INFORMATION
   * ------------------------------------------------------------------ */
  personal: {
    name: "abhisXsssss",
    /* Shown in the navbar + footer + loading screen */
    logo: "abhisXsssss.",
    title: "Video Editor & Motion Graphics Designer",
    location: "Delhi, India",
    profileImage: "/assets/profile.png",
    email: "business69ideas@gmail.com",
    /* Phone removed — leave "" to hide it everywhere */
    phone: "",
    /* Put your CV inside public/assets/ and write its name below */
    resume: "/assets/resume.pdf",
    resumeLabel: "Download CV",
  },

  /* ------------------------------------------------------------------ *
   *  3. NAVIGATION  (top menu)
   *     "href" must match the id of a section on the page.
   * ------------------------------------------------------------------ */
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Portfolio", href: "#portfolio" },
      /* The reference layout has no separate "Services" block – the link
         points at the "Worked With" section. Change it to any section id. */
      { label: "Services", href: "#clients" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    /* Buttons on the right side of the navbar */
    ctaLabel: "Hire Me",
    ctaHref: "#contact",
    bookNowLabel: "Book Now",
  },

  /* ------------------------------------------------------------------ *
   *  4. HERO  (first screen)
   * ------------------------------------------------------------------ */
  hero: {
    greeting: "Professional Video Editor & Motion Graphics Designer",
    /* Each line of the big heading. Set highlight:true for the animated
       gradient line. Add or remove lines freely. */
    headingLines: [
      { text: "I Create", highlight: false },
      { text: "Cinematic Edits", highlight: true },
      { text: "That Capture", highlight: false },
      { text: "Attention", highlight: false },
    ],
    description:
      "Transforming raw footage into premium, hand-crafted cinematic experiences that keep viewers hooked from the first frame to the last.",
    tags: ["Video Editing", "Motion Graphics"],
    primaryButton: { label: "View Portfolio", href: "#portfolio" },
    secondaryButton: { label: "Contact Me", href: "#contact" },
    /* Small stats printed under the buttons */
    stats: [
      { value: "121+", label: "Projects Completed" },
      { value: "79+", label: "Happy Clients" },
      { value: "3+", label: "Years Experience" },
    ],
  },

  /* ------------------------------------------------------------------ *
   *  5. ABOUT / ACHIEVEMENT BAND  (the big numbers strip)
   * ------------------------------------------------------------------ */
  about: {
    title: "About Me",
    description:
      "I am a passionate video editor and motion designer who turns raw ideas into scroll-stopping stories.",
    image: "/assets/profile.png",
    stats: [
      { id: "views", value: "10", suffix: "K+", label: "Views Generated" },
      { id: "videos", value: "212", suffix: "+", label: "Videos Edited" },
      { id: "clients", value: "63", suffix: "+", label: "Long-Term Clients" },
      { id: "satisfaction", value: "88", suffix: "%", label: "Client Satisfaction" },
    ],
  },

  /* ------------------------------------------------------------------ *
   *  6. SKILLS  ("My Arsenal")
   *     icon = any image / logo (optional). level = 0 - 100
   * ------------------------------------------------------------------ */
  skills: {
    title: "My Arsenal",
    subtitle: "Tools I use to create magic.",
    items: [
      {
        name: "Adobe Premiere Pro",
        level: 90,
        icon: "",
        color: "#9999FF",
        description: "Multi-cam editing, pacing, sound design and colour work.",
      },
      {
        name: "Adobe After Effects",
        level: 90,
        icon: "",
        color: "#C7A0FF",
        description: "Motion graphics, VFX compositing and animated typography.",
      },
      {
        name: "Adobe Photoshop",
        level: 90,
        icon: "",
        color: "#31A8FF",
        description: "Thumbnails, poster design, matte painting and photo clean-up.",
      },
      {
        name: "DaVinci Resolve",
        level: 85,
        icon: "",
        color: "#F26B6B",
        description: "Cinematic colour grading, node based finishing and delivery.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   *  7. SERVICES  (what you offer — shown as cards)
   * ------------------------------------------------------------------ */
  services: {
    title: "What I Do",
    subtitle: "Services crafted for creators and brands.",
    items: [
      {
        icon: "Film",
        title: "Long Form Editing",
        description:
          "Story driven YouTube videos, documentaries and podcasts edited for maximum retention.",
        buttonText: "Book Now",
        buttonLink: "#contact",
      },
      {
        icon: "Sparkles",
        title: "Motion Graphics",
        description:
          "Animated titles, logo stings, infographics and VFX built in After Effects.",
        buttonText: "Book Now",
        buttonLink: "#contact",
      },
      {
        icon: "Smartphone",
        title: "Shorts & Reels",
        description:
          "Punchy vertical edits for TikTok, Reels and YouTube Shorts that stop the scroll.",
        buttonText: "Book Now",
        buttonLink: "#contact",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   *  8. EXPERIENCE  (add as many as you like)
   * ------------------------------------------------------------------ */
  experience: [
    {
      company: "Freelance",
      position: "Video Editor & Motion Designer",
      startDate: "2023",
      endDate: "Present",
      years: "3+ Years",
      description:
        "3+ years editing long form documentaries, YouTube videos and short form content for creators and brands across the globe.",
      logo: "",
      technologies: [
        "Premiere Pro",
        "After Effects",
        "DaVinci Resolve",
        "Photoshop",
      ],
    },
  ],

  /* ------------------------------------------------------------------ *
   *  9. EDUCATION  (add as many as you like)
   * ------------------------------------------------------------------ */
  education: [
    {
      institution: "Tribhuvan University",
      degree: "Bachelor",
      course: "Computer Application",
      startYear: "2023",
      endYear: "2027",
      grade: "",
      description: "Studying software while building a full time editing career.",
      logo: "",
    },
  ],

  /* ------------------------------------------------------------------ *
   *  10. PORTFOLIO / PROJECTS
   *
   *   media      -> image OR video (.mp4 / .webm). Detected automatically.
   *   videoUrl   -> optional YouTube / Vimeo link opened in the popup
   *   category   -> used to build the filter buttons automatically
   * ------------------------------------------------------------------ */
  portfolioSection: {
    title: "Featured Work",
    subtitle: "A selection of my best work.",
    viewAllLabel: "View All Projects",
    viewAllLink: "#contact",
    /* How many projects are visible before "View All Projects" */
    initialCount: 6,
  },

  /* ------------------------------------------------------------------
   *  HOW TO ADD A VIDEO FROM YOUR OWN YOUTUBE CHANNEL
   *  ------------------------------------------------
   *  1. Open the video on YouTube and copy the ID from the address bar:
   *        youtube.com/watch?v=ciLwqcH_Psc     ->   ID = ciLwqcH_Psc
   *  2. Fill the two lines below with that ID:
   *        media:    "https://i.ytimg.com/vi/ID/maxresdefault.jpg"   (thumbnail)
   *        videoUrl: "https://www.youtube.com/embed/ID"              (plays in popup)
   *        liveUrl:  "https://youtu.be/ID"                           (opens on YouTube)
   * ------------------------------------------------------------------ */
  projects: [
    {
      title: "Kifinosi — The End of the Internet",
      category: "Long Videos",
      description:
        "Documentary style long form edit with archival b-roll, cinematic pacing and custom sound design.",
      media: "https://i.ytimg.com/vi/ciLwqcH_Psc/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/ciLwqcH_Psc",
      technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      liveUrl: "https://youtu.be/ciLwqcH_Psc",
      githubUrl: "",
    },
    {
      title: "Narva — The City Russia Wants",
      category: "Long Videos",
      description:
        "Geopolitical documentary edit with animated maps, motion typography and a moody colour grade.",
      media: "https://i.ytimg.com/vi/zLqTCgCfKec/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/zLqTCgCfKec",
      technologies: ["Premiere Pro", "After Effects"],
      liveUrl: "https://youtu.be/zLqTCgCfKec",
      githubUrl: "",
    },
    {
      title: "Spain's Economic Collapse",
      category: "Long Videos",
      description:
        "Data driven explainer with animated infographics, charts and retention focused pacing.",
      media: "https://i.ytimg.com/vi/9suKnqhAmJw/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/9suKnqhAmJw",
      technologies: ["Premiere Pro", "After Effects", "Illustrator"],
      liveUrl: "https://youtu.be/9suKnqhAmJw",
      githubUrl: "",
    },
    {
      title: "The Tragic Demise of Gigi Wu",
      category: "Long Videos",
      description:
        "Story driven documentary cut — tension building sound design and cinematic grading.",
      media: "https://i.ytimg.com/vi/g7Ppu6QwPaE/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/g7Ppu6QwPaE",
      technologies: ["DaVinci Resolve", "Premiere Pro"],
      liveUrl: "https://youtu.be/g7Ppu6QwPaE",
      githubUrl: "",
    },
    {
      title: "Squid Games Season 3 Conspiracies",
      category: "Long Videos",
      description:
        "High energy commentary edit with meme cuts, zooms, SFX and animated overlays.",
      media: "https://i.ytimg.com/vi/yIb3ekn5Ss0/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/yIb3ekn5Ss0",
      technologies: ["Premiere Pro", "After Effects", "Photoshop"],
      liveUrl: "https://youtu.be/yIb3ekn5Ss0",
      githubUrl: "",
    },
    {
      title: "The Impact of AI in U.S. Elections",
      category: "Long Videos",
      description:
        "Explainer edit mixing news footage, kinetic typography and clean infographic motion.",
      media: "https://i.ytimg.com/vi/QySUcxrxBtg/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/QySUcxrxBtg",
      technologies: ["Premiere Pro", "After Effects"],
      liveUrl: "https://youtu.be/QySUcxrxBtg",
      githubUrl: "",
    },
    {
      title: "YouTube Icebergs Explained",
      category: "YouTube Videos",
      description:
        "Iceberg format video with layered reveals, custom graphics and punchy pacing.",
      media: "https://i.ytimg.com/vi/JJXA3u5e73Y/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/JJXA3u5e73Y",
      technologies: ["Premiere Pro", "After Effects", "Photoshop"],
      liveUrl: "https://youtu.be/JJXA3u5e73Y",
      githubUrl: "",
    },
    {
      title: "Why Is The Rock In Every Movie",
      category: "YouTube Videos",
      description:
        "Video essay edit — tight cuts, b-roll layering and comedic timing.",
      media: "https://i.ytimg.com/vi/bOA-LdHBcfs/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/bOA-LdHBcfs",
      technologies: ["Premiere Pro", "After Effects"],
      liveUrl: "https://youtu.be/bOA-LdHBcfs",
      githubUrl: "",
    },
    {
      title: "Gennaro \u201CJimmy\u201D Raso",
      category: "YouTube Videos",
      description:
        "Crime documentary edit with archival treatment, grain, and moody colour work.",
      media: "https://i.ytimg.com/vi/Hy13RdQ8emk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/Hy13RdQ8emk",
      technologies: ["DaVinci Resolve", "Premiere Pro"],
      liveUrl: "https://youtu.be/Hy13RdQ8emk",
      githubUrl: "",
    },
    {
      title: "ChatGPT Animation",
      category: "Motion Graphics",
      description:
        "Fully animated explainer sequence built from scratch in After Effects.",
      media: "https://i.ytimg.com/vi/5eVdECKkZrU/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/5eVdECKkZrU",
      technologies: ["After Effects", "Illustrator"],
      liveUrl: "https://youtu.be/5eVdECKkZrU",
      githubUrl: "",
    },
    {
      title: "UI Animation",
      category: "Motion Graphics",
      description:
        "Smooth UI motion design with clean easing, masks and shape layer animation.",
      media: "https://i.ytimg.com/vi/wBazmGPdI94/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/wBazmGPdI94",
      technologies: ["After Effects", "Photoshop"],
      liveUrl: "https://youtu.be/wBazmGPdI94",
      githubUrl: "",
    },
    {
      title: "Sample Intro",
      category: "Motion Graphics",
      description:
        "Logo sting / intro animation with 3D camera moves and light leaks.",
      media: "https://i.ytimg.com/vi/Ar-lGwoMMKo/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/Ar-lGwoMMKo",
      technologies: ["After Effects"],
      liveUrl: "https://youtu.be/Ar-lGwoMMKo",
      githubUrl: "",
    },
    {
      title: "Hook",
      category: "Shorts",
      description:
        "Scroll stopping vertical hook — fast cuts, tracked text and punch-in zooms.",
      media: "https://i.ytimg.com/vi/m1XYDjVMAmQ/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/m1XYDjVMAmQ",
      technologies: ["Premiere Pro", "After Effects"],
      liveUrl: "https://youtu.be/m1XYDjVMAmQ",
      githubUrl: "",
    },
    {
      title: "Talking Head Samples",
      category: "Shorts",
      description:
        "Talking head edit with captions, jump cuts, b-roll inserts and SFX.",
      media: "https://i.ytimg.com/vi/5FZ9NXCQeQM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/5FZ9NXCQeQM",
      technologies: ["Premiere Pro", "Photoshop"],
      liveUrl: "https://youtu.be/5FZ9NXCQeQM",
      githubUrl: "",
    },
    {
      title: "Cops and Car Crashes",
      category: "Shorts",
      description:
        "High tempo action edit with speed ramps, shakes and impact sound design.",
      media: "https://i.ytimg.com/vi/s_0JmLmn6ng/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/s_0JmLmn6ng",
      technologies: ["Premiere Pro", "After Effects"],
      liveUrl: "https://youtu.be/s_0JmLmn6ng",
      githubUrl: "",
    },
  ],

  /* ------------------------------------------------------------------ *
   *  11. CLIENTS  ("Worked With")
   *      logo can be empty -> the first letter is shown instead
   * ------------------------------------------------------------------ */
  clientsSection: {
    title: "Worked With",
    subtitle: "Brands, Communities & Clients I've Collaborated With",
  },

  clients: [
    { name: "ADITYA", projectType: "Content Creation", logo: "", url: "" },
    { name: "OURSMOKE", projectType: "Content Creation", logo: "", url: "" },
    { name: "dev", projectType: "Content Creation", logo: "", url: "" },
    { name: "kuma", projectType: "Content Creation", logo: "", url: "" },
    { name: "jovan", projectType: "Content Creation", logo: "", url: "" },
    { name: "AABID", projectType: "Content Creation", logo: "", url: "" },
  ],

  /* ------------------------------------------------------------------ *
   *  12. TESTIMONIALS  ("Client Feedback")
   * ------------------------------------------------------------------ */
  testimonialsSection: {
    title: "Client Feedback",
    subtitle: "Don't just take my word for it. Leave a rating below!",
    buttonLabel: "Leave a Review",
    buttonLink: "#contact",
  },

  testimonials: [
    {
      quote:
        "An incredible editor. Always hits the creative vision perfectly and delivers on time.",
      name: "ADITYA",
      role: "Creator",
      avatar: "",
      rating: 5,
    },
  ],

  /* ------------------------------------------------------------------ *
   *  13. CONTACT
   * ------------------------------------------------------------------ */
  contact: {
    title: "Let's Create Together",
    subtitle: "Ready to start your next project? Let's talk.",
    detailsTitle: "Contact Details",
    email: "business69ideas@gmail.com",
    discord: "abhisxsssss",
    /* Phone removed — leave "" and it disappears from the whole site */
    phone: "",
    location: "Delhi, India",
    /* Form labels + button text */
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "john@example.com",
      messageLabel: "Project Details",
      messagePlaceholder: "Tell me about your project, timeline, and budget...",
      submitLabel: "Send Message",
      /* Leave empty ("") to open the visitor's mail app.
         Or paste a Formspree / Getform endpoint, e.g.
         "https://formspree.io/f/xxxxxxx"  (no secret keys needed) */
      endpoint: "",
      successMessage: "Thanks! Your message is on its way.",
      errorMessage: "Something went wrong. Please email me directly.",
    },
  },

  /* ------------------------------------------------------------------ *
   *  14. SOCIAL LINKS  (leave "" to hide a platform)
   * ------------------------------------------------------------------ */
  socialLinks: {
    youtube: "https://www.youtube.com/@abhisXssssss",
    instagram: "",
    twitter: "",
    linkedin: "",
    github: "",
    discord: "abhisxsssss",
  },

  /* Handles shown inside the "Book Now" popup */
  handles: {
    youtube: "@abhisXssssss",
    instagram: "",
    twitter: "",
  },

  /* ------------------------------------------------------------------ *
   *  15. FOOTER
   * ------------------------------------------------------------------ */
  footer: {
    logo: "abhisXsssss.",
    copyright: "© 2026 abhisXsssss. All rights reserved.",
    adminLabel: "Admin",
    adminHref: "#admin",
  },
};

export default portfolio;
