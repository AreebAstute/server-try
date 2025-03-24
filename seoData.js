export function generateMetaInfo({ path }) {
  const normalizedPath = path.replace(/\/$/, '');
    switch (normalizedPath) {
      case `/edisu`:
        return{
          title: "Edisu Case Study - Astute Softwares",
          description: "Explore how Astute Softwares addressed the COVID-19 pandemic's impact on study halls with a comprehensive digital solution that included a mobile app for students and a web portal for study hall operators.",
          url: "https://www.astutesoftwares.com/edisu", // Replace with the actual URL for this case study
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "COVID-19, study halls, digital solution, mobile application, web portal, sanitation, booking system, education, public health",
          author: "Astute Softwares",
        };
      case `/pat-app`:
        return{
          title: "PAT App Case Study - Astute Softwares",
          description: "Discover how the PAT App streamlines the treatment journey for patients and healthcare providers with virtual consultations, symptom tracking, and medication reminders.",
          url: "https://www.astutesoftwares.com/pat-app", // Replace with your actual case study URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL for the case study
          keywords: "PAT App, healthcare app, patient care, medication reminders, virtual doctor-patient communication, symptom tracking, healthcare technology",
          author: "Astute Softwares",
        };
      case `/pro-id`:
        return{
          title: "Pro-ID Case Study - Digital Business Cards by Astute Softwares",
          description: "Learn how Astute Softwares developed Pro-ID, a digital business card platform that reduces waste, enhances networking, and offers real-time updates, analytics, and branding opportunities.",
          url: "https://www.astutesoftwares.com/pro-id", // Replace with actual case study page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with actual image URL
          keywords: "digital business card, networking, QR code, NFC, digital transformation, business innovation, eco-friendly, Pro-ID, data analytics, professional branding",
          author: "Astute Softwares",
        };
      case `/turin-startup-campaign`:
        return{
          title: "Astute Softwares: Dove Ogni Byte - Trasforma le Startup in Giganti",
          description: "Nel 2024, Astute Softwares aiuta le startup a ridurre i costi e a garantire un servizio completo per lo sviluppo e la manutenzione dei loro prodotti digitali. Più di 10 startup hanno lanciato con successo i loro MVP nel 2023.",
          url: "https://www.astutesoftwares.com/turin-startup-campaign", // Replace with your actual website URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "startup, sviluppo software, MVP, cloud, AWS, DevOps, consulenza IT, modellazione 3D, sviluppo web, manutenzione prodotti digitali",
          author: "Astute Softwares",
        };
      case `/usa-startups`:
        return{
          title: "Astute Softwares - Transforming Startups with Affordable Digital Solutions",
          description: "Astute Softwares helps startups reduce cloud costs, launch MVPs, and provide ongoing development and support. With over 10 successful MVP launches in 2023, we turn ideas into giants.",
          url: "https://www.astutesoftwares.com/usa-startups", // Replace with actual URL of the page
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "startups, MVP, cloud cost reduction, web and mobile development, AWS, 3D modeling, DevOps, cloud solutions",
          author: "Astute Softwares",
        };   
      case "/":
        return {
          title: "Astute Softwares - Complete Package of Software Development",
          description: "From Product Design to Software Development, Astute Softwares assures continuous delivery for your growth with custom software development, mobile app development, digital transformation, and more.",
          url: "https://www.astutesoftwares.com", // Replace with your actual website URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "software development, web development, mobile applications, digital transformation, DevOps, QA, blockchain, UI/UX design, big data",
          author: "Astute Softwares",
        };
      case `/ar-solutions`:
        return{
          title: "The Leading Platform for 3D & AR on the Web - ViewAR",
          description: "Manage your 3D assets, distribute 3D & AR experiences, collaborate with others, and showcase your work with ViewAR. Join millions of 3D creators today.",
          url: "https://www.astutesoftwares.com/ar-solutions", // Replace with your actual website URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "3D platform, augmented reality, AR, 3D models, web AR, ViewAR, mobile apps, 3D assets, app creation, immersive experiences",
          author: "Astute Softwares",
        };
      case `/about-us`:
        return{
          title: "Astute Softwares - Your Ideal Software Development Partner",
          description: "Astute Softwares helps tech companies scale up with agile software development teams, offering services in DevOps, Blockchain, Big Data, and more. We focus on innovation, technology, and digitalization to drive business growth.",
          url: "https://www.astutesoftwares.com/about-us", // Replace with your actual URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "software development, agile development, DevOps, blockchain, big data, technology partnerships, digitalization, cloud computing, UI/UX design",
          author: "Astute Softwares",
        };
      case `/services`:
        return{
          title: "Astute Softwares - Top-Notch IT Solutions & Software Development",
          description: "Looking for cutting-edge IT solutions? Astute Softwares provides top-notch custom software development, digital transformation, QA, DevOps, mobile app development, and more.",
          url: "https://www.astutesoftwares.com/services", // Replace with your actual website URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL, like a banner image or logo
          keywords: "custom software development, digital transformation, QA services, mobile app development, DevOps, blockchain, augmented reality, big data, UI/UX design, software maintenance",
          author: "Astute Softwares",
        };                             
      case `/contact-us`:
        return {
          title: "Contact Astute Softwares - Get in Touch with Our Experts",
          description: "Reach out to Astute Softwares for all your IT consultancy, software development, and business growth needs. We are here to help you with a wide range of services.",
          url: "https://www.astutesoftwares.com/contact-us", // Replace with your actual contact page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an image URL specific to the contact page
          keywords: "contact, software development, IT consultancy, business growth, Astute Softwares, get in touch, customer support",
          author: "Astute Softwares",
        };
      case `/request-contact`:
        return {
          title: "Contact Us - Astute Softwares",
          description: "Get in touch with Astute Softwares for your software development, digital transformation, or mobile app needs. We're here to assist you with our full range of services including AR/VR, QA, and more.",
          url: "https://www.astutesoftwares.com/request-contact", // Replace with your actual contact page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL for the contact page
          keywords: "contact us, software development, mobile app development, digital transformation, AR/VR, custom software development, QA and testing, UX/UI design",
          author: "Astute Softwares",
        };
      case `/request-contact-it`:
        return {
          title: "Contattaci - Astute Softwares",
          description: "Contatta Astute Softwares per maggiori informazioni sui nostri servizi. Siamo qui per aiutarti con il software personalizzato, la trasformazione digitale e molto altro.",
          url: "https://www.astutesoftwares.com/request-contact-it", // Replace with your actual contact page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "contattaci, Astute Softwares, servizi, sviluppo software, trasformazione digitale, supporto tecnico, AR/VR, mobile app, QA testing",
          author: "Astute Softwares",
        };
      case `/blogs`:
        return {
          title: "Astute Softwares Blog - Insights on Software Development, Technology & Innovation",
          description: "Explore the latest blog posts by Astute Softwares on topics including software development, digital transformation, blockchain, DevOps, and more.",
          url: "https://www.astutesoftwares.com/blogs", // Replace with your actual blogs page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL for the blog page
          keywords: "software development blog, tech blog, DevOps, blockchain, mobile app development, digital transformation, technology news, industry insights",
          author: "Astute Softwares",
        };
      
      case `/how-we-deliver`:
        return {
          title: "Astute Softwares - Agile Software Development Process",
          description: "Astute Softwares helps businesses grow by providing agile software development, project planning, and high-quality scalable solutions. We focus on delivering reliable, predictable, and flexible results that meet business goals.",
          url: "https://www.astutesoftwares.com/how-we-deliver", // Replace with your actual page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "agile software development, project planning, software solutions, scalable infrastructure, DevOps, cloud solutions, product management, team scaling",
          author: "Astute Softwares",
        };
      case `/careers`:
        return {
          title: "Careers at Astute Softwares - Join Our Growing Team",
          description: "Explore job offers at Astute Softwares. Join one of the fastest-growing software services companies and build your career in a respectful, open, and creative environment.",
          url: "https://www.astutesoftwares.com/careers", // Replace with your actual career page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL for the career page
          keywords: "careers, job offers, software development, technology jobs, software services, team, competitive salaries, job openings, tech jobs, Pakistan",
          author: "Astute Softwares",
        };
      case `/coupons`:
        return {
          title: "Astute Softwares - Exclusive Coupons and Offers",
          description: "Explore exclusive coupons and offers at Astute Softwares. Over the years, we've partnered with Fortune 500s and exciting startups to deliver top-notch services.",
          url: "https://www.astutesoftwares.com/coupons", // Replace with your actual coupon page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL for the coupon page
          keywords: "coupons, discounts, offers, exclusive deals, Astute Softwares, Fortune 500, startups",
          author: "Astute Softwares",
        };
      case `/services/custom-software-development`:
        return {
          title: "Custom Software Development - Astute Softwares",
          description: "Astute Softwares provides custom software development services including discovery, architecture, POC, MVP, QA testing, DevOps, cloud migration, and ongoing support. A reliable and scalable partner for your business.",
          url: "https://www.astutesoftwares.com/services/custom-software-development", // Replace with your actual page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "custom software development, software engineering, cloud migration, DevOps, mobile app development, QA testing, Agile, web development, software design",
          author: "Astute Softwares",
        };
      case `/services/software-quality-assurance`:
        return {
          title: "Software Quality Assurance and Testing Services - Astute Softwares",
          description: "Achieve full-cycle QA and testing excellence with Astute Softwares. We provide scalable, end-to-end testing services to ensure impeccable quality and performance across web, mobile, and on-premises applications.",
          url: "https://www.astutesoftwares.com/services/software-quality-assurance", // Replace with the actual URL of the QA and Testing Services page
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an image related to QA services (e.g., a picture of a tester or QA tools)
          keywords: "Software Quality Assurance, Software Testing, QA services, performance testing, automation testing, agile QA, mobile testing, security testing, compatibility testing, usability testing, test automation",
          author: "Astute Softwares",
        };
      case `/services/digital-transformation-services`:
        return {
          title: "Digital Transformation Services | Astute Softwares",
          description: "Accelerate your journey to the cloud with Astute Softwares' Digital Transformation services. Optimize business performance, improve agility, and unlock new business insights with cloud migration, AI, DevOps, and more.",
          url: "https://www.astutesoftwares.com/services/digital-transformation-services", // Replace with the actual URL of the page
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with the actual image URL
          keywords: "digital transformation, cloud migration, DevOps, AI, big data, business intelligence, legacy application modernization, data monetization, business agility",
          author: "Astute Softwares",
        };
      case `/services/mobile-application-development`:
        return {
          title: "Custom Mobile Application Development - Astute Softwares",
          description: "Astute Softwares creates transformative mobile experiences that solve business challenges with expertise in native iOS, Android, and cross-platform development. We deliver beautiful, user-friendly, and high-quality mobile solutions.",
          url: "https://www.astutesoftwares.com/services/mobile-application-development", // Replace with the actual URL for this page
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with the actual image URL
          keywords: "mobile application development, iOS development, Android development, cross-platform solutions, responsive mobile applications, hybrid apps, UX/UI design, mobile app optimization, enterprise mobile apps, mobile app migration",
          author: "Astute Softwares",
        };
      case `/services/ui-and-ux-design`:
        return {
          title: "Interactive UX/UI Designs - Astute Softwares",
          description: "Drive competitive advantage with data-driven UX and user-friendly UI. Astute Softwares blends skill and expertise to produce elegant, functional, and user-focused interfaces.",
          url: "https://www.astutesoftwares.com/services/ui-and-ux-design", // Replace with the actual URL of your page
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL related to UX/UI services
          keywords: "UX/UI design, front-end development, web design, mobile app design, user experience, user interface, rapid prototyping, wireframing, responsive websites",
          author: "Astute Softwares",
        };
      case `/services/maintenance-and-support`:
        return {
          title: "Application Maintenance & Support Services - Astute Softwares",
          description: "Outsource your application maintenance and support with Astute Softwares to ensure smooth software operation, scalability, and continuous delivery, so your team can focus on business-critical initiatives.",
          url: "https://www.astutesoftwares.com/services/maintenance-and-support", // Replace with your actual URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "application maintenance, software support services, bug fixing, software upgrades, IT infrastructure, 24/7 support, system monitoring, cloud-native systems, adaptive maintenance, preventive maintenance, corrective maintenance",
          author: "Astute Softwares",
        };
      case `/services/big-data-consulting-services`:
        return {
          title: "Big Data Consulting and Analytics Services | Astute Softwares",
          description: "Astute Softwares provides Big Data Consulting and Analytics Services, offering strategic insights and technology solutions to help businesses optimize their data and drive growth.",
          url: "https://www.astutesoftwares.com/services/big-data-consulting-services", // Replace with the actual URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with the actual image URL
          keywords: "Big Data, Data Analytics, Data Consulting, Data Governance, Data Science, Machine Learning, ETL, Cloud Migration, Data Visualization, Predictive Analytics",
          author: "Astute Softwares",
        };
      case `/services/blockchain-solutions`:
        return {
          title: "Blockchain Web Development Services - Astute Softwares",
          description: "Astute Softwares provides custom blockchain web solutions, ensuring transparency, security, and scalability for businesses. Our blockchain services enable decentralized applications for better data security and business growth.",
          url: "https://www.astutesoftwares.com/services/blockchain-solutions", // Replace with your actual page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "blockchain, decentralized web, blockchain web development, blockchain solutions, distributed ledger technology, smart contracts, blockchain security",
          author: "Astute Softwares",
        };
      case `/services/devops-services`:
        return {
          title: "DevOps Services and Solutions - Astute Softwares",
          description: "Astute Softwares offers continuous delivery, DevOps strategy, automation, and assessment services to help businesses stay ahead of the competition and deliver products that meet customer demands.",
          url: "https://www.astutesoftwares.com/services/devops-services", // Replace with your actual page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL for DevOps
          keywords: "DevOps services, continuous delivery, DevOps automation, DevOps strategy, CI/CD pipeline, infrastructure as code, cloud automation, DevOps consulting, agile DevOps",
          author: "Astute Softwares",
        };
      case `/services/time-and-material-services`:
        return {
          title: "Time and Material Services - Astute Softwares",
          description: "Astute Softwares offers Time and Material services to address challenges like finding qualified talent, offering flexible budgets, and ensuring client satisfaction with a focus on agile development.",
          url: "https://www.astutesoftwares.com/services/time-and-material-services", // Replace with actual page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with actual image URL
          keywords: "Time and Material Services, Software Development, Agile, Flexibility, Custom Software, Business Agility, Blockchain, DevOps, Quality Assurance",
          author: "Astute Softwares",
        };
      case `/augmented-reality`:
        return {
          title: "Augmented Reality Agency - Transform Your Business with AR Solutions",
          description: "Whether B2B or B2C, augmented reality helps businesses close more deals and increase brand awareness. Create dynamic, engaging AR experiences that deliver measurable results.",
          url: "https://www.astutesoftwares.com/augmented-reality", // Replace with actual URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with actual image URL
          keywords: "augmented reality, AR solutions, AR experiences, virtual showrooms, AR development, B2B, B2C, brand awareness, business growth",
          author: "Astute Softwares",
        };
      case `/metaverse`:
        return {
          title: "Metaverse Development and Consulting Service | Astute Softwares",
          description: "Unlock new opportunities in the evolving digital world with Astute Softwares’ metaverse development and consulting services. Build relationships, engage audiences, and prepare for the future of digital innovation.",
          url: "https://www.astutesoftwares.com/metaverse", // Replace with your actual page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with the actual image URL for this page
          keywords: "metaverse development, consulting services, digital innovation, Web3, Unity, Unreal, WebXR, blockchain, AWS, spatial design, augmented reality, virtual reality, digital transformation",
          author: "Astute Softwares",
        };
      case `/3d-modelling`:
        return {
          title: "Affordable 3D Modeling Services for VR and AR Experiences - Astute Softwares",
          description: "Astute Softwares offers affordable 3D modeling services for businesses to showcase products in virtual and augmented reality, enhancing marketing, sales, e-commerce, and more.",
          url: "https://www.astutesoftwares.com/3d-modelling", // Replace with your actual webpage URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with your actual image URL (e.g., a hero image or relevant image for 3D modeling)
          keywords: "3D modeling, VR, AR, augmented reality, virtual reality, 3D rendering, e-commerce, marketing, sales, industrial models, real estate",
          author: "Astute Softwares",
        };
      case `/portfolio`:
        return {
          title: "Astute Softwares Portfolio - Showcasing Our Work",
          description: "Explore our portfolio of innovative software solutions, including web and mobile applications, digital transformation projects, and more. See how Astute Softwares helps businesses grow.",
          url: "https://www.astutesoftwares.com/portfolio", // Replace with your actual portfolio page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL for the portfolio page
          keywords: "software portfolio, web applications, mobile apps, digital transformation, software solutions, UI/UX design, blockchain, DevOps, big data, technology solutions",
          author: "Astute Softwares",
        };
      case `/technologies/angular`:
        return {
          title: "Angular Development Services - Build High-Performance, Scalable Apps",
          description: "Get a world-class Angular development team to turn your ideas into high-performance and scalable applications. Leverage Angular for enterprise-level, scalable web and mobile apps.",
          url: "https://www.astutesoftwares.com/technologies/angular", // Replace with your actual page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "Angular development, frontend framework, scalable applications, enterprise-level applications, web apps, mobile apps, JavaScript, app development",
          author: "Astute Softwares",
        };
      case `/technologies/laravel`:
        return {
          title: "Laravel Development Services - High-Performance and Scalable Apps",
          description: "Turn your ideas into high-performance and scalable apps with experienced Laravel development teams. We provide rapid, SEO-friendly, and versatile Laravel solutions.",
          url: "https://www.astutesoftwares.com/technologies/laravel", // Replace with actual URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "Laravel development, PHP, web applications, mobile apps, scalable apps, enterprise solutions, SEO-friendly code, Laravel framework, high-performance apps",
          author: "Astute Softwares",
        };
      case `/technologies/react`:
        return {
          title: "React Development Services - Build High-Performance Apps",
          description: "Get a world-class React development team to turn your ideas into high-performance, scalable apps with our experienced team. Offering modern JavaScript development, micro frontends, SEO optimization, and reusable components.",
          url: "https://www.astutesoftwares.com/technologies/react", // Replace with your actual page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "React development, frontend solutions, scalable apps, micro frontends, SEO optimized, web development, mobile apps, enterprise-level applications",
          author: "Astute Softwares",
        };
      case `/technologies/nodejs`:
        return {
          title: "Node Development Services - High Performance & Scalable Apps",
          description: "Turn your ideas into high-performance and scalable apps with a world-class Node development team. Empower your business with modern JS development and scalable enterprise-level applications.",
          url: "https://www.astutesoftwares.com/technologies/nodejs", // Replace with the actual URL for this page
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "Node development, scalable apps, front-end solution, microservices, enterprise-level applications, SEO optimized, JavaScript frameworks",
          author: "Astute Softwares",
        };
      case `/technologies/vue`:
        return {
          title: "Vue JS Development Team | Astute Softwares",
          description: "Turn your ideas into high-performance and scalable apps with an experienced Vue JS development team. Empowering businesses with modern JS solutions, micro front-ends, real-time data flow, and scalable web applications.",
          url: "https://www.astutesoftwares.com/technologies/vue", // Replace with the actual URL for this page
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL for this page
          keywords: "Vue JS, JavaScript development, scalable apps, front-end solutions, micro front-ends, web apps, mobile apps, SEO optimization, enterprise-level applications, front-end framework, real-time data flow",
          author: "Astute Softwares",
        };
      case `/technologies/kotlin`:
        return {
          title: "Kotlin Development Team - Build High-Performance & Scalable Apps",
          description: "Turn your ideas into high-performance and scalable apps with experienced Kotlin development teams. Focus on business growth with a high-performing development team.",
          url: "https://www.astutesoftwares.com/technologies/kotlin", // Replace with your actual URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "Kotlin development, scalable apps, Kotlin framework, mobile app development, web app development, enterprise-level applications, high-performance apps",
          author: "Astute Softwares",
        };
      case `/technologies/django`:
        return {
          title: "World-Class Django Development Team | Astute Softwares",
          description: "Turn your ideas into high-performance and scalable apps with Astute Softwares' experienced Django development teams. Get rapid, SEO-friendly solutions for your business.",
          url: "https://www.astutesoftwares.com/technologies/django", // Replace with the actual page URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "Django development, scalable apps, enterprise-level applications, frontend solutions, web and mobile apps, SEO-friendly code, rapid development, Python web framework",
          author: "Astute Softwares",
        };
      case `/falling-gems`:
        return {
          title: "Falling Gems - Catch the Fruits, Blizzard, and More!",
          description: "Catch falling fruits, snow items, and even alphabets in this fun and relaxing game. From exciting game levels to gold coins, everything is designed to entertain and challenge you.",
          url: "https://www.astutesoftwares.com/falling-gems", // Replace with the actual URL for the game page
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL for the game
          keywords: "falling gems, mobile game, casual game, free game, fun game, snow blizzard, fruit catching, action game",
          author: "Astute Softwares",
        };
      case `/cookie-policy`:
        return {
          title: "Cookie Policy - Astute Softwares",
          description: "Read the Cookie Policy for Astute Softwares to learn how we use cookies to ensure the functionality of our website and improve user experience.",
          url: "https://www.astutesoftwares.com/cookie-policy", // Replace with your actual URL for the Cookie Policy page
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "cookie policy, privacy policy, GDPR, Astute Softwares, cookies, user data, third-party cookies",
          author: "Astute Softwares",
        };
      case `/privacy-policy`:
        return {
          title: "Privacy Policy - Astute Softwares",
          description: "Read Astute Softwares Privacy Policy to understand how we process and protect your personal data, your rights under GDPR, and our use of cookies.",
          url: "https://www.astutesoftwares.com/privacy-policy", // Replace with your actual Privacy Policy URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "Privacy Policy, GDPR, personal data, cookies, data protection, Astute Softwares",
          author: "Astute Softwares",
        };
      default:
        return {
          title: "Astute Softwares - Complete Package of Software Development",
          description: "From Product Design to Software Development, Astute Softwares assures continuous delivery for your growth with custom software development, mobile app development, digital transformation, and more.",
          url: "https://www.astutesoftwares.com", // Replace with your actual website URL
          image: "https://testing-server-ctgi.onrender.com/Images/previewImage.jpg", // Replace with an actual image URL
          keywords: "software development, web development, mobile applications, digital transformation, DevOps, QA, blockchain, UI/UX design, big data",
          author: "Astute Softwares",
        };
    }
  }
  