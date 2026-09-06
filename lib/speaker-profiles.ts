// Speaker profile content, one entry per person, used by /speakers/[slug].
// Generated from "Information for Speaker Profile Pages.xlsx"; edit here from now on.
//
// `start` is the session start in UTC (Shenzhen is UTC+8) and drives the
// "Add to Calendar" link. Sessions without a parseable time omit it and the
// button is hidden for that session.

export type ProfileSession = {
  title: string;
  when: string;
  where: string;
  start?: string;
  /**
   * Per-session description. Only needed when someone has more than one talk
   * and each needs its own copy; otherwise the profile-level `description`
   * is used for the first session.
   */
  description?: string[];
};

export type SpeakerProfile = {
  name: string;
  slug: string;
  tag: string;
  title: string;
  img: string;
  country: string;
  linkedin?: string;
  x?: string;
  youtube?: string;
  /** One string for a single block, or an array to render one paragraph each. */
  bio?: string | string[];
  sessions: ProfileSession[];
  /** Session description, one entry per paragraph or bullet line. */
  description: string[];
};

export const SPEAKER_PROFILES: SpeakerProfile[] = [
  {
    name: "Andrea Abbondanza",
    slug: "andrea-abbondanza",
    tag: "Lightning Talk",
    title: "Founder, Abbondanza Marketing",
    img: "/assets/andrea-abbondanza.webp",
    country: "Italy",
    linkedin: "https://www.linkedin.com/in/andrea-abbondanza/",
    x: "https://x.com/Andre_abbo",
    bio: "Andrea Abbondanza is a digital strategist, entrepreneur, and AI consultant with more than 15 years of experience across Italy and Australia. He specialises in SEO, GEO, AIO, and AI-driven growth strategies for businesses expanding into new markets. Having worked directly with Chinese brands operating in Italy, Andrea brings practical experience in adapting search strategies to Italian culture, consumer behaviour, and market dynamics. His work combines SEO with AI and automation to help international brands build visibility, generate demand, and convert search into measurable business growth.",
    sessions: [
      { title: "Winning Italy: An AI Search Case Study for Chinese Brands", when: "Day 3 / Sep. 16 / 3:00 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T070000Z" },
    ],
    description: [
      "Italian seo market is dominated by slow-moving legacy brands. This gives agile Chinese brands a massive advantage in the new era of AI search.",
      "This 8-minute session breaks down a real-world case study showing exactly how a cross-border brand outpaced local Italian competitors in AI-generated answers. You will see the precise data-structuring framework used to get the brand explicitly recommended and cited by LLM engines like Google AI Overviews, Chat GPT and Perplexity.",
      "You will walk away with a copyable, 3-step checklist to instantly optimize your brand's linguistic and technical signals for the Italian market.",
    ],
  },
  {
    name: "Andy Wu",
    slug: "andy-wu",
    tag: "Lightning Talk",
    title: "Founder, Wuberlife Brands",
    img: "/assets/andy-wu.webp",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/andywu1/",
    bio: "Andy Wu is the Founder of Wuberlife Brands, an ecommerce operator focused on SEO, automation, data, and AI. After starting his career in online brokerages, he moved into entrepreneurship, building businesses across Amazon FBA and ecommerce. Today, he focuses on using AI and data to uncover growth opportunities, improve operations, and scale online businesses more efficiently.",
    sessions: [
      { title: "Stop Writing Ecommerce Product Descriptions: Let AI Find What’s Missing From Your Catalog", when: "Day 4 / Sep. 17 / 10:30 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T023000Z" },
    ],
    description: [
      "Most ecommerce teams use AI one page at a time: rewriting product descriptions, optimizing titles, or generating FAQs. This talk explores a different approach—using AI to analyze an entire product catalog as a dataset.",
      "I’ll show how an LLM can compare hundreds of products at once to identify missing attributes, inconsistent product information, and gaps that may affect SEO, usability, and conversion. Using a commercial espresso machine catalog as an example, I’ll demonstrate how overlooked details like voltage, boiler configuration, plumbing requirements, output capacity, certifications, and warranty information can be surfaced across a category.",
      "The key takeaway is simple: instead of using AI only to create more content, use it to understand the product data you already have. Page-level AI helps you write faster; catalog-level AI can help you make better SEO decisions.",
    ],
  },
  {
    name: "Ben Fang",
    slug: "ben-fang",
    tag: "Lightning Talk",
    title: "CEO & Co-founder, Kingsway Video",
    img: "/assets/ben-fang.jpg",
    country: "China",
    linkedin: "https://www.linkedin.com/in/ben-fang-0817325/",
    youtube: "https://www.youtube.com/channel/UC552BM8NTTkyHfh7ueAuaZg",
    bio: "Ben Fang is the CEO & Cofounder of Kingsway Video. He is also a serial entrepreneur and indie maker with 22 years of experience building websites, content creator (text & video) and video marketing expert, focused on Video SEO and lead generation.",
    sessions: [
      { title: "AI Is Making B2B Trust Harder: How Embedded Video Turns SEO Pages into Proof Pages", when: "Day 4 / Sep. 17 / 4:00 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T080000Z" },
    ],
    description: [
      "As AI-generated content floods the web, B2B buyers are becoming more cautious about what they read, who they trust, and which companies they are willing to contact. For B2B websites, ranking is no longer enough. The real challenge is turning an SEO visit into a moment of trust.",
      "In this 8-minute lightning talk, Ben Fang will share one practical insight: the right embedded video can act as a trust layer on high-intent SEO pages. Through a quick case-style walkthrough, he will show how video helps capture attention, make the company feel more real, answer buyer doubts faster, and move visitors closer to inquiry or purchase.",
      "Attendees will leave with a clear takeaway: in the AI era, don\u2019t use video as decoration. Use it as proof.",
    ],
  },
  {
    name: "Cristina Song",
    slug: "cristina-song",
    tag: "Field Talk",
    title: "SEO Lead & Co-Founder, Xpandir",
    img: "/assets/cristina-song.jpg",
    country: "South Korea",
    linkedin: "https://www.linkedin.com/in/cristinassong/",
    bio: "Cristina Song is a regional SEO specialist with a focus on high-buying-power APAC markets - primarily South Korea and Japan, along with Singapore, Hong Kong, Taiwan, Australia, and New Zealand. As the SEO Lead and Co-Founder of Xpandir, a boutique digital agency, she partners with global brands to break into new markets across Asia-Pacific. With her team, she helps brands bridge the gap between global ambition and local relevance.",
    sessions: [
      { title: "Expand into Korea with Search: From Naver to AI", when: "Day 3 / Sep. 16 / 2:40 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T064000Z" },
    ],
    description: [
      "South Korea is one of Asia\u2019s most powerful consumer markets - but search works differently here. Discover how global brands can navigate S. Korea\u2019s unique search ecosystem, from Naver to AI, and build a strategy that actually wins.",
    ],
  },
  {
    name: "David Carrasco",
    slug: "david-carrasco",
    tag: "Lightning Talk",
    title: "Freelance SEO Consultant",
    img: "/assets/david-carrasco.jpg",
    country: "Spain",
    linkedin: "https://www.linkedin.com/in/david-carrasco-pamies/",
    x: "https://x.com/davidcarrascop",
    youtube: "https://www.youtube.com/@david_carrasco/",
    bio: "David Carrasco Pamies is the founder of Magnify, a strategic SEO and brand visibility consultancy based in Barcelona, focused on international growth. Over the past decade, he has worked with brands and startups across markets, and founded, scaled, and sold his own PR SaaS tool along the way. That experience shaped how he approaches SEO: less as a traffic channel, more as a business lever. Product, profitability, and user experience come before rankings. His current focus sits between brand visibility and AI search: what happens when search engines stop sending traffic and start replacing the experience entirely. He believes the brands that will thrive are the ones building trust with real users, not optimizing for algorithms. When he's not dissecting Google patents or arguing about structured data, he's probably overthinking a LinkedIn post.",
    sessions: [
      { title: "The Validation Gap: Why SEO Doesn't End When the User Clicks", when: "Day 3 / Sep. 16 / 12:20 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T042000Z" },
    ],
    description: [
      "Most SEO stops at the click. But ranking and getting clicked aren't the same as being chosen or trusted. This lightning talk reframes the click as a midpoint, not a finish line: the moment a user lands is the moment a brand gets validated against what it actually claims, increasingly through AI systems that describe it before anyone even visits. One idea to take home: the gap that decides everything isn't between you and the SERP, it's between what a brand says and what its audience perceives.",
    ],
  },
  {
    name: "Divya Jain",
    slug: "divya-jain",
    tag: "Lightning Talk",
    title: "Global Head of Organic Growth & Brand, Edvoy",
    img: "/assets/divya-jain.jpg",
    country: "India",
    linkedin: "https://www.linkedin.com/in/divyajain3/",
    bio: "I've spent 20 years turning organic search into a growth engine across fintech, travel, local discovery, and edtech. From building SEO teams at Paytm and Justdial to leading global organic growth and brand at Edvoy across India, South Asia, Africa, and MENA, I've seen what separates strategies that compound from those that plateau. Today, I work at the intersection of SEO, content, lifecycle, and brand. I also train SEO professionals and have been recognised as a Global Marketing Leader in India. Over the years, I've unlearned as much as I've learned \u2014 and I build my talks around real-world insights, experiments, and outcomes.",
    sessions: [
      { title: "Build an Audience, Not Just Traffic: Rethinking Organic ROI", when: "Day 3 / Sep. 16 / 12:20 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T042000Z" },
    ],
    description: [
      "Most SEO teams are after the wrong statistic. Sure, traffic increases and rankings change, but teams that successfully grow organic traffic understand that the goal isn\u2019t the number of sessions, but the number of build sessions.",
      "At Edvoy, we realized that students who returned to our content before converting had much better app retention and lifetime value compared to those who came once through paid traffic. They had the same amount of traffic, but totally different business outcomes.",
      "Returning visitors are not a hollow victory. They are the best converting and lowest cost acquisition visitors, and most teams are not tracking them. You will gain a new way of thinking about content and the organic ROI within the next eight minutes.",
    ],
  },
  {
    name: "Doug Pierce",
    slug: "doug-pierce",
    tag: "Field Talk",
    title: "Founder, Cogney",
    img: "/assets/doug-pierce.jpg",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/douglasapierce/",
    bio: "Doug Pierce is the founder of Cogney, a digital marketing consultancy in Hong Kong. With 15 years of experience in B2B, SaaS, and eCommerce SEO, he has landed more than 100 companies on page one of Google for their industry's most competitive keywords, with clients including Airbnb, China Mobile, and Huawei. Airbnb's Head of SEO has called him \"an SEO legend,\" and The New York Times - with whom he has collaborated on major investigative pieces - named him \"an expert in online search.\" His research has informed a U.S. Senate inquiry and an episode of HBO's Last Week Tonight.",
    sessions: [
      { title: "Ranked Nowhere: The International SEO Mistakes of China's Biggest Global Brands", when: "Day 3 / Sep. 16 / 12:00 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T040000Z" },
    ],
    description: [
      "A live audit of the SEO mistakes hiding on the websites of China's top global brands - including DJI, Hisense and Temu - with actionable takeaways for any Chinese brand competing on the global stage.",
    ],
  },
  {
    name: "Eli Schwartz",
    slug: "eli-schwartz",
    tag: "Keynote",
    title: "Author, Product-Led SEO",
    img: "/assets/eli-schwartz.jpg",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/schwartze/",
    x: "https://x.com/5le",
    bio: [
      "Eli Schwartz is a renowned digital marketing thought leader, marketing consultant, author of the best-selling book Product-Led SEO, and an upcoming book to be published with Wiley: Customer Intelligence. With over a decade of experience helping companies like LinkedIn, Tinder, Wordpress, Quora, Coinbase and more transition from traditional organic marketing tactics to strategic, product-centric growth models.",
      "He is a frequent speaker at major industry conferences globally, including at Google's campus on multiple occasions, Stanford, Duke, and various technology summits on five continents, where he shares actionable frameworks for building sustainable organic channels.",
    ],
    sessions: [
      { title: "The 3 Pillars of AEO", when: "Day 4 / Sep. 17 / 9:30 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T013000Z" },
    ],
    description: [
      "AEO is not like SEO where you can do one think exceptionally well and generate search traffic. In AEO, you must invest in all three pillars or your AEO efforts will collapse. Users should be the center of your AEO strategy, but your strategy must still stand on the two other pillars of product and awareness.",
      "Walk away from this session knowing exactly how to invest in AEO.",
    ],
  },
  {
    name: "Gabriele Kahlout",
    slug: "gabriele-kahlout",
    tag: "Lightning Talk",
    title: "International SEO Specialist",
    img: "/assets/gabriele-kahlout.jpg",
    country: "Italy & Qatar",
    // LinkedIn intentionally omitted: the speaker asked for it to be left blank.
    bio: "Gabriele Kahlout leads SEO and data-driven initiatives to grow and engage the audience. He has over a decade of experience working with editors and developers on editorial content, technical features, and data pipelines that increasingly use AI to enrichment and automation. Gabriele builds on prior experience with successful audience acquisition strategies, speaks four languages, and is a published author.",
    sessions: [
      { title: "Detecting Google Updates Without Third-Party Tools: An Analytical Approach", when: "Day 4 / Sep. 17 / 12:20 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T042000Z" },
    ],
    description: [
      "In this presentation, Gabriele explores practical, in-house methods for tracking official and unofficial Google algorithm updates without relying on external SEO software. By leveraging raw, minute-by-minute internal analytics, the talk outlines how publishers can bypass sampled data (like that found in Google Search Console) to monitor their entire website down to the exact URL.",
    ],
  },
  {
    name: "Gary Illyes",
    slug: "gary-illyes",
    tag: "Keynote",
    title: "Analyst, Google Search",
    img: "/assets/gary-illyes.jpg",
    country: "Switzerland",
    linkedin: "https://www.linkedin.com/in/garyillyes/",
    x: "https://x.com/methode",
    bio: [
      "Gary Illyes serves as an Analyst on the Google Search Relations team, operating as a bridge between webmasters, developers, and internal engineering groups. Based in Switzerland, he frequently represents Google at international technology conferences, detailing mechanics behind web crawling, indexing, rendering pipelines, and technical optimization.",
      "Beyond public advocacy, Gary contributes to foundational web standards, notably co-authoring RFC 9309 to formalize the Robots Exclusion Protocol as an IETF standard. He leads efforts to establish modern web crawler best practices, guiding how automated systems navigate, respect, and interact with online infrastructure.",
      "Through his standardizations work and co-hosting the Search Off the Record podcast, Gary continues shaping technical web protocols while demystifying search architecture for the global developer community.",
    ],
    sessions: [
      { title: "Don't Panic. Search is Always Changing", when: "Day 3 / Sep. 16 / 9:40 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T014000Z" },
    ],
    description: [
      "Processing over five trillion annual queries, search systems constantly adapt to shifting user behaviors. Every architectural shift across thirty years traces back to a fundamental goal: satisfying evolving information needs.",
      "Like last year, this session explores the technical trajectory of search across three core pillars: content formats, content breadth, and content issues. However this year we will review how infrastructure evolved from early text indexing to neural retrieval, multimodal processing, and real-time generative synthesis to manage expanding formats and scaled web spam.",
      "With younger demographics driving visual queries through Google Lens and gesture inputs like Circle to Search, retrieval patterns continue to shift. Attendees will gain insight into how underlying systems adapt to emerging user habits, providing a practical perspective on where search architecture is heading next.",
    ],
  },
  {
    name: "Helen Han",
    slug: "helen-han",
    tag: "Lightning Talk",
    title: "Technical SEO Executive, Easygo",
    img: "/assets/helen-han.jpg",
    country: "China & Australia",
    linkedin: "https://www.linkedin.com/in/helenhanau/",
    bio: "Helen Han is a Melbourne-based Technical SEO Executive known for transforming complex SEO challenges into scalable, automated solutions. With a background in business and marketing, she blends strategic thinking with hands-on execution, leveraging tools like Sanity, GROQ, and data-driven workflows to drive organic growth across global markets. She engineered a world-first GROQ query that extracts anchor text and paired URLs in seconds, processing over 200,000 URLs with exceptional speed and precision. Helen is a winner of the B&T 30 Under 30 Award (Tech category), a finalist for the Women Leading Tech Awards 2026, and the youngest speaker at WTSFest Melbourne 2025. She is passionate about pushing the boundaries of automation in SEO and sharing innovative, scalable approaches with the industry.",
    sessions: [
      { title: "Stop Crawling, Start Querying: A New Way to Do Technical SEO at Scale", when: "Day 3 / Sep. 16 / 4:10 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T081000Z" },
    ],
    description: [
      "This talk explores how to leverage GROQ queries within Sanity CMS to surface SEO errors, content gaps, and linking issues in seconds, replacing slow, reactive workflows with fast, proactive monitoring. It also covers the development of a custom hreflang mapping tool, integrated directly with Sanity CMS, that streamlines the uploading and management of hreflang tags, significantly improving efficiency and reducing errors across large, multilingual sites.",
    ],
  },
  {
    name: "Henry Dalziel",
    slug: "henry-dalziel",
    tag: "Lightning Talk",
    title: "SEO Lead, Publicis Media",
    img: "/assets/henry-dalziel.webp",
    country: "UK & Hong Kong",
    linkedin: "https://www.linkedin.com/in/henrydalziel/",
    youtube: "https://www.youtube.com/@HenryDalzielSEO/",
    bio: "Henry Dalziel is a Hong Kong-based SEO and GEO expert with over 15 years of enterprise experience across eCommerce, insurance, banking, luxury hotels, pharma, and casinos. Until February 2026, he served as SEO Lead at Publicis Media Hong Kong, where he scaled the team from 2 to more than 30 accounts, grew monthly recurring revenue to over HKD 500K, and built a 15-person specialist team. Today, Henry leads Growth Hackers Hong Kong, working with large enterprise organizations alongside his own ventures. His true passion? Technical SEO.",
    sessions: [
      { title: "Protecting the Pages That Pay the Bills", when: "Day 4 / Sep. 17 / 2:40 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T064000Z" },
    ],
    description: [
      "Most websites generate the majority of their organic performance from a surprisingly small group of URLs, yet many SEO teams still spread their attention across thousands of pages.",
      "In my talk I'll share a practical framework for identifying your highest-value URLs and building a monitoring system around them.",
    ],
  },
  {
    name: "Ilman Akbar",
    slug: "ilman-akbar",
    tag: "Side Event",
    title: "Founder & CEO, DailySEO ID & DLYS Consulting",
    img: "/assets/ilman-akbar.webp",
    country: "Indonesia",
    linkedin: "https://www.linkedin.com/in/ilmanakbar/",
    x: "https://x.com/ilmanakbar",
    youtube: "https://www.youtube.com/@ilmanakbar/",
    bio: "Ilman Akbar is an SEO professional with over 13 years of experience. He founded DailySEO ID, a media & education company, and DLYS Consulting, a consulting firm, both are specializing in Search Engine Optimization (SEO). Before DailySEO ID & DLYS, Ilman worked at various regional tech startups, including Traveloka & Glints. He has also served as an SEO consultant for numerous startups in Indonesia, such as Flip, Sayurbox, Mamikos, Cove, RevoU, Sribu, Rata.id, and many more. In DLYS, his team serves clients like Mitsubishi Indonesia, Lalamove Indonesia, and Pika Sushi Australia, among others. With ten years of experience as an SEO trainer, Ilman has been sharing his expertise & experience with thousands of individuals across Indonesia, Thailand, and Singapore. He also considers himself a content creator through DailySEO ID's social accounts.",
    sessions: [
      { title: "How to Talk So the C-Suites Will Listen: Lessons Learned from Teaching & Implementing SEO for 12+ Years", when: "Sep. 13 / 2:50 PM", where: "The Westin Shenzhen Nanshan (3F, Ballroom)", start: "20260913T065000Z" },
    ],
    description: [
      "SEO isn't ignored because C-level executives don't care or won't spend \u2014 it's ignored because we explain it poorly. This session breaks down how to convert SEO's technical complexities into business narratives that earn C-level attention and commitment.",
    ],
  },
  {
    name: "JP/John Zhang",
    slug: "jp-john-zhang",
    tag: "Host",
    title: "Host & Organizer, Shenzhen SEO Conference",
    img: "/assets/JP-Zhang-5.jpg",
    country: "",
    linkedin: "https://www.linkedin.com/in/jiangpengzhang/",
    x: "https://x.com/jiangpengzhang",
    youtube: "https://www.youtube.com/@seoactionblog/",
    bio: "J.P. (John) Zhang is an SEO entrepreneur with 16 years of experience in the search industry. He is the host of the Shenzhen SEO Conference, recognized as China's largest international SEO event. As a leading voice in the region's search community, he runs the popular SEO Action Blog (\u82f1\u6587SEO\u5b9e\u6218\u6d3e), which has over 25,000 followers in China. He is also the founder of SEO Connector, a startup dedicated to pairing global-facing Chinese brands with vetted Western SEO agencies. His professional background spans both the Asian and US tech ecosystems, featuring SEO and content marketing roles at companies like Whova, Baunfire, and Wondershare, and he holds an MBA in Marketing Management from Hult International Business School.",
    sessions: [
      {
        title: "Opening Remarks: What is Shenzhen SEO Conference and Why I Restarted It",
        when: "Day 3 / Sep. 16 / 9:30 AM",
        where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)",
        start: "20260916T013000Z",
        description: [
          "Your host JP/John Zhang kicks off the Shenzhen SEO Conference by sharing the little-known story behind restarting the event in late 2024 (how it all started with a single Google search). Using simple SEO formulas, he breaks down what this event stands for at its core: sharing actionable SEO and organic growth knowledge, set the stage for East meeting West, driving entrepreneurship, and forging international partnerships.",
        ],
      },
      {
        title: "Closing Remarks: From Courage to Freedom: What 16 Years in SEO Really Taught Me",
        when: "Day 4 / Sep. 17 / 5:20 PM",
        where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)",
        start: "20260917T092000Z",
        description: [
          "To wrap up these four days, your host JP/John Zhang reflects on his 16 years in the search industry to explore this year's central theme: Freedom. JP shares honest lessons from when major algorithm hits like HCU and MCU almost wiped out his affiliate business and how sensing the trend early gave him the resilience to execute a tough, successful pivot. He closes with a personal story about what entrepreneurship truly means to him: gaining ultimate control over your time, location, and life choices when it matters most.",
        ],
      },
    ],
    description: [],
  },
  {
    name: "Jabez Reuben",
    slug: "jabez-reuben",
    tag: "Side Event",
    title: "Founder, The Blueprints",
    img: "/assets/jabez-reuben.jpg",
    country: "India",
    linkedin: "https://www.linkedin.com/in/jabezreuben/",
    x: "https://x.com/jabezreuben",
    bio: "Jabez Reuben is the founder of LLM Mastery, The Blueprints and LinkValidator. He has been in the SEO space for over 8 years now. His current interest is reverse engineering how various LLMs process and recommend brands and then create sustainable strategies for clients to improve their visibility across LLMs. He is based out of Chiang Mai, Thailand.",
    sessions: [
      { title: "Dominating LLMs, AiO & Google Rankings with Consensus", when: "Sep. 13 / 3:30 PM", where: "The Westin Shenzhen Nanshan (3F, Ballroom)", start: "20260913T073000Z" },
    ],
    description: [
      "In my presentation, I'll cover how to build off-page topical authority/consensus, that will help you rank across LLMs, Google AI overview results, and also rank in Google SERPs as well.",
    ],
  },
  {
    name: "Jacky Lin",
    slug: "jacky-lin",
    tag: "Side Event",
    title: "Founder, Wingfuture",
    img: "/assets/jacky-lin.webp",
    country: "China",
    linkedin: "https://www.linkedin.com/in/jacky-l-326ab2b8/",
    bio: "Jacky Lin is the founder of Wingfuture, an AI automation company helping global trade and B2B companies build practical AI systems for sales, marketing, lead generation, and workflow automation. With over 10 years of experience in international trade and consumer product supply chains, he focuses on turning real business processes into repeatable AI-powered workflows. Jacky is also the founder of the Global Trade AI Conference in China, where he brings together founders, marketers, exporters, and AI practitioners to explore how AI is changing global business. His work sits at the intersection of international trade, AI automation, content systems, and founder-led growth.",
    sessions: [
      { title: "From AI Tools to B2B Growth Systems: Building Workflows That Actually Run", when: "Sep. 12 / 2:50 PM", where: "Wuzhou Sports Center Hotel (Olympia Hall A)", start: "20260912T065000Z" },
    ],
    description: [
      "AI tools are easy to try, but much harder to turn into systems that teams can use every day. In this session, I will share a practical framework for B2B and global trade companies to turn repetitive sales and marketing work into AI-powered workflows \u2014 from lead research and customer profiling to outreach, follow-up, content production, and CRM updates.",
      "Drawing on real international trade experience and AI workflow implementation, I will explore which tasks should be automated, where human judgment must remain, and how companies can build systems that are visible, practical, and continuously improved over time.",
    ],
  },
  {
    name: "Jamie I.F.",
    slug: "jamie-i-f",
    tag: "Side Event",
    title: "Founder, AffiliateFinder.ai",
    img: "/assets/jamie-if.webp",
    country: "UK",
    linkedin: "https://www.linkedin.com/in/jamie-if/",
    x: "https://x.com/Jamie_IF",
    youtube: "https://www.youtube.com/channel/UCUYu4XfhuiuWwzhLka2L9Pw",
    bio: "Jamie I.F. is an AI visibility and affiliate and influencer growth specialist, and the founder of AffiliateFinder.ai - and AI-powered affiliate and influencer recruitment platform. He has spoken in more than 10 countries about how affiliates and influencers are essential to your AI visibility growth via brand mentions from trusted sources. AffiliateFinder.ai is one of the fastest-growing affiliate software, and is used by some of the world\u2019s biggest brands, including Google, Jotform, and more than 2,400 other brands.",
    sessions: [
      { title: "How Chinese Brands Can Use Affiliates & Influencers To Grow AI Visibility & Revenue in USA", when: "Sep. 13 / 1:10 PM", where: "The Westin Shenzhen Nanshan (3F, Ballroom)", start: "20260913T051000Z" },
    ],
    description: [
      "AI visibility and recommendations are becoming a major part of the shopping experience in the West - but most brands are just optimising their own website for this, and not using other partners to boost their visibility. This talk shows you exactly how to use your influencer and affiliate program to scale not just your revenue, but your AI visibility as well.",
    ],
  },
  {
    name: "Jessica Malnik",
    slug: "jessica-malnik",
    tag: "Workshop",
    title: "Founder, Remote Work Tribe & Clarity Briefs",
    img: "/assets/jessica-malnik.jpeg",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/jessicamalnik",
    x: "https://x.com/jessicamalnik",
    youtube: "https://www.youtube.com/@JMalnik",
    bio: "Jessica Malnik works with B2B companies to fix the messaging and positioning gaps that quietly stall growth. She helps teams turn unclear value propositions into conversion-focused messaging that drives qualified pipeline across their website, content, and campaigns. Her work spans startups, agencies, and professional service firms, and has been featured in or alongside platforms like Semrush, Wynter, SXSW, The Wall Street Journal, MicroConf, and Social Media Examiner. Known for blending strategy with hands-on execution, she focuses on practical, real-world approaches to improving messaging, case studies, and long-form content that actually convert.",
    sessions: [
      { title: "From Traffic to Pipeline: Fixing the Messaging Gaps That Hurt Conversions", when: "Day 1 / Sep. 14 / 9:00 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260914T010000Z" },
    ],
    description: [
      "Companies invest heavily in SEO, content, paid acquisition, and brand awareness, but more often than not prospects still leave without taking action. The problem is often hidden in your positioning and messaging.",
      "In this hands-on workshop, we'll analyze real-world homepages, landing pages, ad copy and SEO content examples to identify the messaging and positioning issues that quietly reduce conversions. Attendees will learn a practical framework for evaluating websites and marketing assets through the lens of clarity, relevance, and conversion.",
    ],
  },
  {
    name: "Jine Wu",
    slug: "jine-wu",
    tag: "Lightning Talk",
    title: "SEO Operations Manager, REA Group",
    img: "/assets/jine-wu.jpg",
    country: "China & Australia",
    linkedin: "https://www.linkedin.com/in/jinewu/",
    bio: "Jine Wu is the SEO Operations Manager at REA Group with over 18 years\u2019 experience in digital marketing. She began her career in web development, building a strong technical foundation that underpins her expertise in enterprise\u2011scale technical SEO, AI\u2011driven search, and large\u2011scale search platforms. Jine is known for her data\u2011driven approach and for working closely with product managers, engineers, and designers to ensure search strategies are clearly communicated and effectively delivered. She is a senior member of REA Group\u2019s award\u2011winning in\u2011house SEO team, recognised as Best In\u2011House Team at the 2026 APAC Search Awards, In\u2011house Team of the Year (SEO) at the 2023 Search Engine Land Awards, and Best In\u2011House Team at the 2020 Semrush Search Awards Australia. REA Group is an ASX\u2011listed company with a market capitalisation exceeding $20 billion and owns realestate.com.au, Australia\u2019s number one property website. Jine has spoken at industry events such as the Search Marketing Summit and contributes to platforms including Semrush.",
    sessions: [
      { title: "SEO is a Product Outcome, Not an SEO Outcome", when: "Day 3 / Sep. 16 / 10:40 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T024000Z" },
    ],
    description: [
      "SEO doesn't start at launch; it starts at the ideation stage. Most companies treat SEO as a final checklist item\u2014after technical decisions are locked in. At REA Group, managing 350M+ URLs taught us a better way: treating SEO as a core product metric. SEO is embedded at every stage of the product lifecycle: Strategy, discovery, design, engineering and launch.",
      "In this fast-paced 8-minute talk, Jine Wu shares how to embed SEO into the product lifecycle and reveals the one framework you can use tomorrow to align product managers, engineers, and SEOs behind a single growth goal.",
    ],
  },
  {
    name: "Jiyoung Lee",
    slug: "jiyoung-lee",
    tag: "Field Talk",
    title: "Co-Founder & Digital Growth Strategist, Xpandir",
    img: "/assets/jiyoung-lee.jpg",
    country: "South Korea",
    linkedin: "https://www.linkedin.com/in/jiyoung-lee-marketing-specialist/",
    bio: "A digital marketing strategist with 8 years of experience helping global brands navigate and grow in the Korean market. Her expertise covers both local and global platforms, including localized strategy, paid media, SEO, and content marketing developed around Korean consumer behavior.",
    sessions: [
      { title: "Expand into Korea with Search: From Naver to AI", when: "Day 3 / Sep. 16 / 2:40 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T064000Z" },
    ],
    description: [
      "South Korea is one of Asia\u2019s most powerful consumer markets - but search works differently here. Discover how global brands can navigate S. Korea\u2019s unique search ecosystem, from Naver to AI, and build a strategy that actually wins.",
    ],
  },
  {
    name: "Jodie Chan",
    slug: "jodie-chan",
    tag: "Lightning Talk",
    title: "SVP of Product & Strategic Partnerships, Chinafy",
    img: "/assets/jodie-chan.webp",
    country: "Hong Kong",
    linkedin: "https://www.linkedin.com/in/jodiewyc/",
    bio: "Jodie Chan is the SVP of Product & Strategic Partnerships at Chinafy, the premier China web performance platform. With a singular focus on helping websites load fast, fully, and securely in China, Chinafy stands as the industry leader in tackling the unique challenges faced by Marketing & DevOps teams in the cross-border web landscape. Since 2017, Jodie has been focused on finding innovative solutions to evolving cross-border web challenges for diverse organizations, including listed multinational corporations, universities, financial institutions and more. Her expertise has been instrumental in successfully launching two Enterprise SaaS platforms, including Chinafy, and growing Chinafy's strategic partnership ecosystem, which includes industry giants such as Alibaba Cloud, AWS, WPVIP, and more. When she's not donning her web performance detective hat, Jodie embraces her musical passions as Joya, an independent singer-songwriter",
    sessions: [
      { title: "Decoding China Web Performance for Marketers", when: "Day 3 / Sep. 16 / 3:00 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T070000Z" },
    ],
    description: [
      "Global web best practices don't always translate in China. In this session, we tackle the most common misconceptions about China website performance, demystify the marketing roadblocks in technical terms, and walk through a practical evaluation framework using real-world case studies - so you know exactly what's breaking, why, and what to do about it.",
    ],
  },
  {
    name: "Johann Sathianathen",
    slug: "johann-sathianathen",
    tag: "Lightning Talk",
    title: "Co-founder, Cyndra AI",
    img: "/assets/johann-sathianathen.webp",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/jsathianathen/",
    x: "https://x.com/johann_sath",
    youtube: "https://www.youtube.com/@johannships",
    bio: "Johann Sathianathen is the founder of Jars Global, a bootstrapped startup studio, and co-founder of Cyndra AI, specializing in enterprise AI automation. Based in Chiang Mai, Thailand, Johann has built and sold companies rapidly, including his first venture, Qura, which he exited in just 12 months. At Cyndra AI, Johann helps businesses implement AI agents for marketing automation, lead generation, and SEO optimization. His approach focuses on practical AI deployments that drive measurable ROI, not theoretical concepts. Johann's expertise spans automated content creation, programmatic SEO, and AI-powered link building strategies that have helped clients scale from startup to enterprise level. His philosophy: build fast, scale smart, and leverage AI to do the heavy lifting while humans focus on strategy. Johann will share real-world case studies of AI agents generating consistent organic traffic and revenue for businesses across industries.",
    sessions: [
      { title: "AI Agents for SEO: Automating Backlinks, Content, and 24/7 Optimization with Real Data", when: "Day 4 / Sep. 17 / 4:00 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T080000Z" },
    ],
    description: [
      "A real walkthrough of how I built an AI agent that handles SEO end-to-end, from content creation and keyword research to backlink outreach and technical audits, running 24/7 with zero human oversight. I'll break down the exact stack, share real performance data, and show how any team can deploy their own AI SEO agent in under a week. No theory, just what's working right now.",
    ],
  },
  {
    name: "Jonathan Kiekbusch",
    slug: "jonathan-kiekbusch",
    tag: "Lightning Talk",
    title: "Founder, SwishDM",
    img: "/assets/jonathan-kiekbusch.jpg",
    country: "UK & Germany",
    linkedin: "https://www.linkedin.com/in/jonathan-kiekbusch-65a84914/",
    youtube: "https://www.youtube.com/user/johnkiek",
    bio: "Founder of SwishDM and former eCommerce business owner. I help mid-to-enterprise brands grow organic revenue through strategic SEO and GEO. I've built, scaled, and sold, so I know what actually moves the needle.",
    sessions: [
      { title: "Perception Engineering: How to Change What AI Says About Your Brand", when: "Day 4 / Sep. 17 / 10:30 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T023000Z" },
    ],
    description: [
      "You probably know whether AI mentions your brand. But do you know what it says about you?",
      "In February, AI called one brand cheap and said it ran too hot. Today AI calls it premium, with high-end parts and quiet cooling. Nothing was invented. Those facts were always true, they were simply missing from the AI's knowledge.",
      "I will show you how we did this.",
    ],
  },
  {
    name: "Josh Blyskal",
    slug: "josh-blyskal",
    tag: "Field Talk",
    title: "AI Strategy & Research, Profound",
    img: "/assets/josh-blyskal.jpg",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/joshua-blyskal/",
    x: "https://x.com/JBlyskal",
    bio: [
      "Josh Blyskal was working on Answer Engine Optimization before the category had a name. He leads AI Strategy & Research at Profound, where he has analyzed more than 250 million AI search responses across ChatGPT, Perplexity, and the major answer engines. The body of work behind it is among the largest empirical studies of AI search anyone has published. He built the AI Search Grader, one of the first tools to let marketers see how they show up in AI, and has been studying the space since the week ChatGPT launched.",
      "His research shapes how Fortune 500 brands like Ramp, Indeed, and US Bank approach AI visibility, and his work is frequently cited by other researchers and operators in the field. Based in NYC, Josh speaks at BrightonSEO, TechSEO Connect, and Zero Click, among others.",
    ],
    sessions: [
      { title: "The New Citation Economy: How ChatGPT, Google AI Mode, and Claude Pick Sources", when: "Day 4 / Sep. 17 / 10:10 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T021000Z" },
    ],
    description: [
      "Three answer engines now sit between brands and their customers: ChatGPT, Google AI Mode, and Claude. Each one picks its sources differently, and most brands are optimizing for assumptions that don't hold.",
      "This session breaks down how each engine actually chooses what to cite, based on a dataset of real AI search results built at Profound. You'll see why Claude is the most predictable engine to win and the one almost everyone overlooks, what changed when ChatGPT opened its ads to self-serve, and how Google AI Mode reads a page differently depending on whether you're asking about a place or a product.",
      "The takeaway is practical: what to change on your pages so a model reads you cleanly and names you in the answer.",
    ],
  },
  {
    name: "Kiana Shen",
    slug: "kiana-shen",
    tag: "VIP Networking",
    title: "Founder, OMGrowth.ai (\u6d4e\u8c26AI)",
    img: "/assets/kiana-shen.jpg",
    country: "China",
    linkedin: "https://www.linkedin.com/in/kiana-shen-6054b11b6/",
    bio: [
      "Kiana Shen is the founder of OMGrowth.ai (济谦AI), an AI-native organic growth company helping brands expand globally and SaaS teams grow through organic search and AI discovery. Her work focuses on technical SEO and content strategy, while she is actively exploring the emerging field of GEO. Her client portfolio spans the U.S. East and West Coasts, Canada, and China.",
      "Having grown up across cultures, Kiana is committed to building cultural and commercial bridges between China and the United States. She helps brands enter unfamiliar markets without losing what makes them distinctive. She believes meaningful marketing should be built from the inside out—starting with a brand’s identity and authentic strengths, then translating them into stories that feel native to each market without losing the brand’s original voice, rather than imposing an external marketing playbook on it.",
    ],
    sessions: [
      { title: "Agency Owners Panel: Chinese Manufacturing vs. Silicon Valley SaaS (An Agency Reality Check)", when: "Day 5 / Sep. 18 / 5:20 PM", where: "MGM Shenzhen (Grand Ballroom)", start: "20260918T092000Z" },
    ],
    description: [
      "A raw operational look at what it really takes to close and retain high-ticket clients in Eastern manufacturing vs. Western SaaS.",
    ],
  },
  {
    name: "Killian Kostiha",
    slug: "killian-kostiha",
    tag: "Lightning Talk",
    title: "Founder, Get Clicks",
    img: "/assets/killian-kostiha.jpg",
    country: "France & Hong Kong",
    linkedin: "https://www.linkedin.com/in/kkostihapm/",
    x: "https://x.com/killiankostiha",
    bio: "Killian Kostiha is the founder of Get Clicks, a Hong Kong-based SEO agency helping brands grow across Asia and international markets through SEO, GEO, content, link building, and digital PR. Active in SEO since 2008 and based in Hong Kong since 2014, he has worked with brands expanding from Hong Kong or China to global markets, as well as international brands strengthening their visibility in Hong Kong, Taiwan, Singapore, and other APAC markets. He also owns The HK HUB, a Hong Kong media platform, and launched La Fl\u00e8che, a digital PR brand supporting SEO through media outreach, brand mentions, and authority-building campaigns. His background spans key global agencies, in-house, and freelance roles, with experience across SEO, GEO, content, communication, social media, media, and PR.",
    sessions: [
      { title: "How a $5K Digital PR Campaign Secured $80K Worth of Media Coverage (And Backlinks)", when: "Day 3 / Sep. 16 / 4:10 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T081000Z" },
    ],
    description: [
      "This talk will break down a real Digital PR campaign that cost around USD 5,000 to produce and secured media coverage that would have cost approximately USD 80,000 if purchased directly as sponsored articles or advertorial placements.",
      "The session will focus on one practical, step-by-step process: finding a data-led story angle, collecting data or working with market research agencies, creating media-friendly assets, identifying relevant journalists, pitching the story, and measuring the SEO value of the coverage earned. Built as an eight-slide Lightning Talk, the session will highlight key dos and don\u2019ts, useful tools, costs involved, media exposure secured in Hong Kong and APAC, and a final breakdown comparing the cost of the Digital PR campaign with the estimated cost of buying similar media placements.",
    ],
  },
  {
    name: "Konstantin Sadekov",
    slug: "konstantin-sadekov",
    tag: "Lightning Talk",
    title: "Founder & CEO, Ethical SEO",
    img: "/assets/konstantin-sadekov.jpg",
    country: "Estonia",
    linkedin: "https://www.linkedin.com/in/konstantin-sadekov/",
    bio: "Konstantin Sadekov is the Founder and CEO of EthicalSEO, an AI SEO agency helping companies and SaaS startups across the US and Europe increase online visibility in both traditional search engines and LLMs. Based in Estonia - Konstantin has worked with startups and enterprises including Remofirst, Ondato, Messente, Younium and Droppe to build modern, sustainable search strategies that level the playing field in the AI era.",
    sessions: [
      { title: "B2B SaaS Case Study: How Strategic Link Building Drives LLM Visibility", when: "Day 3 / Sep. 16 / 4:10 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T081000Z" },
    ],
    description: [
      "When a B2B SaaS company gets included in a listicle on an authoritative site \u2014 \"Best tools for X\", \"Top Y solutions\" \u2014 ChatGPT and other LLMs start citing that page when buyers ask comparison questions. Two real cases, one framework: how to identify listicle placement opportunities that drive both Google rankings and AI citations.",
    ],
  },
  {
    name: "Kun Tang",
    slug: "kun-tang",
    tag: "Field Talk",
    title: "Founder and CEO, Jademond",
    img: "/assets/kun-tang.webp",
    country: "China",
    linkedin: "https://www.linkedin.com/in/kuntang/",
    bio: "Kun is a seasoned Chinese online marketing expert with 20 years of experience in helping Western companies expand their presence in China through search, social media, and AI. With extensive on-the-ground experience and a dedicated team of over 40 members, Kun ensures that Western brands successfully navigate and thrive within the dynamic and complex Chinese market ecosystem.",
    sessions: [
      { title: "Cracking the China GEO Code: What DeepSeek, Doubao, and Yuanbao Really Cite", when: "Day 3 / Sep. 16 / 2:00 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T060000Z" },
    ],
    description: [
      "Most conversations on Generative Engine Optimization (GEO) are US-centric, focusing on OpenAI, Perplexity, and Google SGE. But China's AI search landscape is dominated by an entirely different set of players \u2014 DeepSeek, Doubao, Baidu Wenxin, Tencent Yuanbao, and Alibaba Qwen \u2014 each with distinct training data, content ecosystems, and citation logics.",
      "This session presents a correlation analysis of 6 signals (freshness, length, readership, social signals, domain authority, and internet ecosystem proximity) and how they influence citation probability across six verticals. The goal is to give attendees a data-backed playbook for optimizing content specifically for Chinese AI platforms, rather than applying Western GEO assumptions to a market that operates differently.",
    ],
  },
  {
    name: "Lars Lofgren",
    slug: "lars-lofgren",
    tag: "Keynote",
    title: "Fractional VP of Marketing",
    img: "/assets/lars-lofgren.jpg",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/larslofgren",
    x: "https://x.com/LarsLofgren",
    bio: "Lars Lofgren co-founded an SEO affiliate business that went from zero to USD$7.2 million in annual revenue within 3 years. Before that, he held executive roles at multiple startups leading marketing and content departments. Today, he consults with clients like Perplexity, Automattic, and NP Digital.",
    sessions: [
      { title: "Narrative Manipulation: When Google, Reddit, and LLMs Become Weapons and How to Fight Back", when: "Day 4 / Sep. 17 / 4:40 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T084000Z" },
    ],
    description: [
      "Today, it's shockingly easy to manipulate Google and LLMs. But even if you stick to doing things the \"right way\", competitors and bad actors can rob you of traffic or even destroy your brand. How do we fight back? By understanding which levers are used for manipulation and building up our own defenses. Not only does this protect our business, it also accelerates customer growth.",
    ],
  },
  {
    name: "Lily Ray",
    slug: "lily-ray",
    tag: "Keynote",
    title: "VP of SEO Strategy & Research, Amsive",
    img: "/assets/lily-ray.jpg",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/lily-ray-44755615/",
    x: "https://x.com/lilyraynyc",
    youtube: "https://www.youtube.com/@lilyray",
    bio: [
      "Lily Ray is the Vice President of SEO Strategy & Research at Amsive, where she provides strategic leadership for the agency\u2019s SEO client programs. Born into a family of software engineers, web developers and technical writers, Lily brings a strong technical background, performance-driven habits and forward-thinking creativity to all programs she oversees.",
      "Lily began her SEO career in 2010 in a fast-paced start-up environment and moved quickly into the agency world, where she helped grow and establish an award-winning SEO department that delivered high impact work for a fast-growing list of notable clients, including Fortune 500 companies.",
      "Lily has worked across a variety of verticals with a focus on retail, e-commerce, B2B and CPG sites. She loves diving into algorithm updates, assessing quality issues and solving technical SEO mysteries.",
    ],
    sessions: [
      { title: "How to Do GEO Without Destroying Your SEO: How Google is Cracking Down on GEO Spam", when: "Day 3 / Sep. 16 / 11:20 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T032000Z" },
    ],
    description: [
      "The race to get cited by AI has produced a wave of \"GEO\" tactics that promise generative visibility while eroding the very thing that earns it: search visibility. Reddit astroturfing, self-promotional listicles, RAG and knowledge-base poisoning, parasite SEO, artificial freshening, spammy schema: \"GEO hacks\" are everywhere, and Google has noticed. Recent Google updates have started hitting exactly the kind of manipulative, scaled, low-trust content these tactics depend on.",
      "This talk cuts through the GEO hype to show what actually drives AI search visibility, and why most of it looks a lot like good SEO. Drawing on real citation data showing how AI visibility tracks organic rankings, Lily Ray breaks down which GEO tactics are genuinely risky, why Google's enforcement keeps converging on the same signals it has always rewarded (expertise, expertise, authority, trust), and where the line sits between optimization and spam.",
    ],
  },
  {
    name: "Loki Yan",
    slug: "loki-yan",
    tag: "Field Talk",
    title: "Co-founder, First Optimise (\u58f9\u4f18\u5316)",
    img: "/assets/loki-yan.jpg",
    country: "China & Australia",
    linkedin: "https://www.linkedin.com/in/xinyuan-loki-y-86aa1456/",
    youtube: "https://www.youtube.com/@seolokiyan",
    bio: "Loki Yan is the Co-Founder of First Optimise (\u58f9\u4f18\u5316), a 2026 APAC Search Awards winning agency. Known for his deep expertise in complex technical architectures and International SEO, Loki is a featured speaker at top global events like Google Search Central Live and Ahrefs Evolve. His current work focuses on the intersection of AI and Search, helping brands navigate Generative Engine Optimization (GEO) and architect robust technical foundations for the AI era.",
    sessions: [
      { title: "An Actionable Deep Dive into E-E-A-T", when: "Day 3 / Sep. 16 / 3:50 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T075000Z" },
    ],
    description: [
      "While everyone discusses E-E-A-T in theory, few know how to translate Google\u2019s 180+ page Quality Raters Guidelines into concrete SEO results. This session strips away the fluff to reverse-engineer E-E-A-T into a strict, actionable \"Do's and Don'ts\" framework. Discover the exact tactical initiatives that move the needle for entity trust and topical authority today\u2014and the fatal mistakes that will get your site flagged by modern core updates.",
    ],
  },
  {
    name: "Magenta Qin",
    slug: "magenta-qin",
    tag: "Side Event",
    title: "Developer Advocate, SerpApi",
    img: "/assets/magenta-qin.webp",
    country: "China & Germany",
    linkedin: "https://www.linkedin.com/in/mu-qin-0a29621b8/",
    bio: "Magenta Qin is a Developer Advocate at SerpApi, where she helps developers and marketers integrate real-time search data into AI-powered applications and SEO workflows. Before joining SerpApi, she worked as a software engineer at Tencent and RedNote, building developer-facing tools and infrastructure. She now focuses on making complex search and AI technologies practical and accessible through technical content, tutorials, open-source demos, and community education.",
    sessions: [
      { title: "From JSON to Markdown: Cutting the Cost of AI-Powered SEO Analysis by Up to 90%", when: "Sep. 12 / 1:50 PM", where: "Wuzhou Sports Center Hotel (Olympia Hall A)", start: "20260912T055000Z" },
    ],
    description: [
      "Modern search results contain increasingly complex data, but sending large, nested JSON responses directly to an LLM can consume a significant amount of its context window. Using Google News, Google Trends, Amazon Shopping, Google Hotels, and Apple App Store as practical examples, this session will demonstrate how Markdown can preserve essential SEO signals while reducing token usage, lowering model costs, and allowing teams to analyze more competitors and search results in a single workflow.",
    ],
  },
  {
    name: "Mao Kawana",
    slug: "mao-kawana",
    tag: "Field Talk",
    title: "Project Manager, Faber Company",
    img: "/assets/mao-kawana.jpg",
    country: "Japan",
    linkedin: "https://www.linkedin.com/in/maokawana/",
    bio: "Mao Kawana is a Project Manager at Faber Company Inc., specializing in leading large-scale website projects to success. Recently, she has been extensively involved in complex site revamp projects, guiding them from initial strategic planning through to successful execution. With a robust background in SEO, Mao excels at driving digital growth by integrating technical expertise with high-level marketing strategy. Her holistic approach ensures that website transformations are not only technically sound but also strategically aligned with broader business objectives to deliver long-term results.",
    sessions: [
      { title: "The Unwritten Rules of Japanese SEO: From Search Behavior to Business Culture", when: "Day 3 / Sep. 16 / 2:20 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T062000Z" },
    ],
    description: [
      "Japan is a Google-dominated market, but succeeding in SEO there requires understanding both local search behavior and the realities of doing business in Japan. In this casual session, Polina and Mao will share:",
      "\u30fbAn overview of Japan\u2019s search ecosystem and user behavior",
      "\u30fbCommon mistakes global HQs make with Japanese websites, and how to maximize local SEO initiatives",
      "\u30fbHow Japanese corporate culture, such as hierarchy and avoiding bold ideas, affects web projects",
    ],
  },
  {
    name: "Marc Moeller",
    slug: "marc-moeller",
    tag: "Workshop",
    title: "Founder, Ecomexperts",
    img: "/assets/marc-moeller.jpg",
    country: "Germany & Australia",
    linkedin: "https://www.linkedin.com/in/marcmoeller-seo/",
    youtube: "https://www.youtube.com/@moellerseo",
    bio: [
      "Marc Moeller is the founder of Ecomexperts (Perth, Western Australia), with 10+ years of SEO experience helping clients solve complex search challenges across B2B, gaming, and SaaS. Trusted by brands ranging from fast-growing companies to stock market listed enterprises, his work is highly outcome-driven\u2014improving rankings, organic revenue, and lead generation by diagnosing technical issues, building scalable content systems, and aligning SEO strategy with real business goals.",
      "Marc also teaches practical SEO on YouTube to ~20k subscribers and has spoken to the Shenzhen WordPress community, sharing hands-on approaches to building and scaling SEO systems.",
      "In his workshops and talks, Marc delivers the same client-tested frameworks he uses day-to-day. Attendees get a practical, step-by-step operating system for running SEO efficiently. This is not theory: every section is designed for immediate implementation, with ready-to-use templates, checklists, and SOP structures provided so you can apply the process the moment you leave the room.",
    ],
    sessions: [
      { title: "Own AI Search: The GEO Workshop to Get Your Brand Recommended", when: "Day 1 / Sep. 14 / 9:00 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260914T010000Z" },
    ],
    description: [
      "This hands-on workshop helps your brand to go from being invisible to being the top-recommended brand in your industry. You'll get a repeatable system built across 25+ China-to-West projects to diagnose why large language models overlook you, then build the plan to fix it. It\u2019s a step by step process, that has been proven in the real world to work.",
      "Together we'll work through: 1) How LLMs actually perceive your brand \u2014 and the technical and content signals that make them trust you as a topical authority. 2) Truth alignment \u2014 manipulation vs factually correct answers: How to win the LLMs trust. 3) Audit the negative statements competitors weaponize against you. 4) Audience research over keyword research \u2014 mapping the real questions and buying journey your customers ask AI. 5) Content strategy hole detection \u2014 mapping the questions your audience asks to your content strategy to find critical holes. 6) Trusted-source strategy \u2014 why you need to stop writing new guest posts and what to do instead.",
      "You'll leave with: a completed AI-visibility audit of your own brand and a prioritized 90-day action plan you can hand to your team on Monday.",
    ],
  },
  {
    name: "Marcus Pentzek",
    slug: "marcus-pentzek",
    tag: "VIP Networking",
    title: "Partner & Director SEO, Jademond Digital",
    img: "/assets/marcus-pentzek.jpg",
    country: "Germany & China",
    linkedin: "https://www.linkedin.com/in/marcuspentzek/",
    x: "https://x.com/MPentzek",
    bio: "Marcus Pentzek offers a rare dual capability: 20 years of core Google SEO experience paired with authoritative expertise in East Asian search. As Partner and Director of SEO at Jademond Digital, Marcus lived and worked in Beijing, Guangzhou and Tianjin, co-authored SEO for China, and led the first data-driven Baidu Ranking Factors Study with Searchmetrics in 2020. He brings unparalleled clarity to China\u2019s fragmented search landscape, while helping domestic companies build scalable, high-ranking Google strategies for global markets. Connect with Marcus to discuss global Google growth, algorithmic shifts, or local search dynamics.",
    sessions: [
      { title: "How Search Is Fragmented in China", when: "Day 5 / Sep. 18 / 4:15 PM", where: "MGM Shenzhen (Grand Ballroom)", start: "20260918T081500Z" },
    ],
    description: [
      "Search in China has evolved beyond a single search engine into a fragmented ecosystem where users discover information across Baidu, Xiaohongshu, Douyin, WeChat, ecommerce platforms, maps, and AI assistants. Different platforms now serve different search intents, changing how brands need to think about visibility. In this session, Marcus Pentzek from Jademond Digital explores how China's search landscape has evolved, what this means for SEO and digital marketing, and why understanding search behavior\u2014not just search engines\u2014is now the key to success in China.",
    ],
  },
  {
    name: "Max Hobbs",
    slug: "max-hobbs",
    tag: "Lightning Talk",
    title: "Global Head of Marketing, LTL School",
    img: "/assets/max-hobbs.jpg",
    country: "UK",
    linkedin: "https://www.linkedin.com/in/max-hobbs-uk/",
    bio: "Max Hobbs serves as Global Head of Marketing at LTL School, where he leads global growth strategy and brand development for one of Asia\u2019s leading language schools. Over nearly a decade, he has driven record-breaking lead performance across multiple years and helped secure international industry recognition. Max combines performance marketing with creative brand building, including the launch of LTL's first-ever company mascot. He is passionate about helping businesses choose the right growth channels, building sustainable success rather than simply following the latest trends.",
    sessions: [
      { title: "How a Cartoon Lion Changed Our Brand Forever", when: "Day 4 / Sep. 17 / 12:20 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T042000Z" },
    ],
    description: [
      "Most SEO and marketing talks focus on keywords, links, and algorithms. This one is about something harder to measure, and more powerful than most people realise.",
      "This session tells the story of the brand mascot of LTL Language School, and how a single creative decision in January 2021 changed the way thousands of people engage with the brand. From homepage to social media to email campaigns, LTL Mascot Lex the Lion became the thread connecting every touchpoint, and eventually crossed from digital into the physical world.",
      "Attendees will leave with a clear understanding of why humanising a brand isn't a soft strategy, it drives real SEO signals including branded search growth, engagement, dwell time, and return visits. Whether you're building a brand from scratch or looking to create a deeper connection with an existing audience, this talk offers one transferable insight: people follow characters, not logos.",
    ],
  },
  {
    name: "Max Kuch",
    slug: "max-kuch",
    tag: "Field Talk",
    title: "Digital Entrepreneur",
    img: "/assets/max-kuch.webp",
    country: "Germany",
    linkedin: "https://www.linkedin.com/in/maximilian-kuch/",
    x: "https://x.com/maxkuchcom",
    youtube: "https://www.youtube.com/@maxkuchcom",
    bio: "Max is a German Digital Entrepreneur living in Chiang Mai, Thailand. He went from earning 5-to-6-Figures per Month with Affiliate SEO to starting over as an AI Solopreneur. He went from starting a new product from scratch in June 2025 to making more than 10,000$ / month within 8 months and launched several new projects since.",
    sessions: [
      { title: "From 6-Figure/Month Affiliate SEO to AI Solopreneur: Why I Switched Tracks and What I Learned", when: "Day 4 / Sep. 17 / 3:40 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T074000Z" },
    ],
    description: [
      "I built a portfolio of affiliate websites that made a six-figure profit in its best months. Then Google's Helpful Content Update in September 2023 brought the whole thing crashing down. In this session I walk through what came next. I restructured around AI micro-SaaS and small software projects, and I will be completely transparent about the numbers: what the affiliate years actually earned, what I could carry over from them into a one-person company (OPC), and how I scaled a brand new project from zero to $15K per month in eight months. The three lessons that made the difference run through all of it: ship fast and diversify, double down on what works both horizontally and vertically, and use geo-arbitrage to repeat a proven idea in a market where it is worth more.",
    ],
  },
  {
    name: "Mayi",
    slug: "mayi",
    tag: "Lightning Talk",
    title: "Founder & CEO, InnoHunts",
    img: "/assets/mayi.jpg",
    country: "China",
    linkedin: "https://www.linkedin.com/in/yiwanning-ma-642b52218/",
    bio: "Mayi is the founder & CEO of InnoHunts, a Shenzhen-based agency boldly dedicated solely to Reddit marketing. Specializing in community-driven growth, brand storytelling, and GEO strategy, building global influence for forward-thinking brands through the power of Reddit.",
    sessions: [
      { title: "We Posted 3,000 Times on Reddit: Here's Exactly Why Only Some of Them Rank", when: "Day 4 / Sep. 17 / 12:20 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T042000Z" },
    ],
    description: [
      "We burned through 3,000 Reddit posts so you don't have to. In this quick 8-minute session, we're sharing the funny, painful, and highly profitable lessons of what it takes to actually rank on Google's favorite forum today.",
    ],
  },
  {
    name: "Nick Drewe",
    slug: "nick-drewe",
    tag: "Field Talk",
    title: "Founder & CEO, Wethrift",
    img: "/assets/nick-drewe.jpg",
    country: "Australia",
    linkedin: "https://www.linkedin.com/in/nickdrewe/",
    bio: "Nick Drewe is the Founder and CEO of Wethrift, a global coupon platform launched in 2018. He has scaled the business in a highly competitive search landscape through a combination of SEO, product-led growth, and building systems that deliver reliable savings to users. Nick is based on the Gold Coast, Australia.",
    sessions: [
      { title: "What Happens When SEO Stops Working - Lessons from Gaining and Losing 80 Million Visitors", when: "Day 4 / Sep. 17 / 12:00 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T040000Z" },
    ],
    description: [
      "In this candid field talk, Nick Drewe, founder of Wethrift, shares what gaining and losing over 80 million organic visitors a year taught him about platform dependency, hidden fragility, and the risks most SEO teams don\u2019t see while growth is strong. Drawing from over 8 years of business growth, followed by near-collapse, Nick offers a clear-eyed look at what actually makes an SEO-driven business durable when Google stops carrying you.",
    ],
  },
  {
    name: "Nick White",
    slug: "nick-white",
    tag: "VIP Networking",
    title: "Author / Founder, Castle Trade Agency",
    img: "/assets/nick-white.jpg",
    country: "USA",
    bio: [
      "Nick White has been in B2B Sales for 30 years. He is the author of the book “Questions are the Answers…how elite sales people lead buyers to self-discover” and also “Why Salespeople Fail…the top 10 mistakes foreign salespeople make”",
      "When he learned a selling system that got amazing results and removed the pressure from selling, he started teaching it to salespeople around the world.",
      "In 2016, Nick started Castle Trade Agency LLC as a manufacturer rep for Chinese companies and immediately saw success contacting and winning the target customers who had previously been ignoring the supplier.",
      "Nick started teaching the Chinese sales teams the selling system and then in 2024, started public sales training seminars quarterly in China.",
      "Over the course of 30 years, Nick has worked in multiple industries such as retail, aerospace, automobile manufacturing, HVAC, building materials and service-based sales, reaching success with the biggest fortune 500 companies and small companies alike proving that these sales success principles he teaches, works regardless of the industry or product/service.",
      "His value-focused, questions-based sales training provides very tactical solutions that salespeople can use to solve the common problems they face in B2B Selling. It’s a non-traditional approach to sales which gets better than traditional results.",
    ],
    sessions: [
      { title: "What Makes Buyers in Any Country, Say \"Yes\"", when: "Day 5 / Sep. 18 / 3:05 PM", where: "MGM Shenzhen (Grand Ballroom)", start: "20260918T070500Z" },
    ],
    description: [
      "Customers aren't ignoring you. They're just not interested yet.",
    ],
  },
  {
    name: "Nik Ranger",
    slug: "nik-ranger",
    tag: "Field Talk",
    title: "Senior Growth Consultant, Dejan",
    img: "/assets/nik-ranger-2026.jpg",
    country: "Australia",
    linkedin: "https://www.linkedin.com/in/nik-ranger/",
    x: "https://x.com/nikrangerseo",
    bio: "Nik Ranger, Senior Growth Consultant at Dejan, Founder of SEO Collective Australia and Google Womens Techmakers Ambassador has translated complex technical data and user behaviour into high impact growth strategies for global enterprise, SaaS, B2C and B2B brands eCommerce brands. Specialising in optimising the complete user lifecycle, from market dominating acquisition to product retention. Whether rebuilding technical architecture, aligning cross-functional teams, measuring AI brand visibility or building custom frameworks, Nik Ranger's focus is turning data into measurable commercial growth.",
    sessions: [
      { title: "The Invisible Penalty: Detecting and Recovering from Algorithmic Suppression", when: "Day 3 / Sep. 16 / 10:20 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T022000Z" },
    ],
    description: [
      "Unlike manual actions, algorithmic suppression comes with no notification, no reconsideration request, and no official resolution pathway, I've confirmed with members of google's Search Relations team that no equivalent process exists.",
      "Sites quietly lose thousands of clicks and significant revenue without ever knowing why, I'll use a real client case study showing how I use machine learning to detect suppression patterns, isolate the likely cause, and systematically recover lost visibility.",
    ],
  },
  {
    name: "Owain Lloyd-Williams",
    slug: "owain-lloyd-williams",
    tag: "Field Talk",
    title: "Independent SEO Consultant",
    img: "/assets/owain-lloyd-williams.jpg",
    country: "UK",
    linkedin: "https://www.linkedin.com/in/owain-lloyd-williams-a8967852/",
    x: "https://x.com/Owain_LW",
    bio: "Owain Lloyd-Williams has spent over 15 years working across SEO and digital strategy, leading organic growth programmes for global brands in agency, in-house and independent roles. Now operating as an independent SEO consultant, he partners directly with senior stakeholders to shape and deliver enterprise-level SEO strategies, while remaining hands-on across international search, content strategy and technical optimisation. He also brings a specialist focus to China SEO. Alongside his strategic work, Owain regularly writes (and sometimes ghostwrites) thought leadership and search-led content for brands in the industry.",
    sessions: [
      { title: "How to Get SEO Moving Inside Large Organisations", when: "Day 4 / Sep. 17 / 3:20 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T072000Z" },
    ],
    description: [
      "Large organisations are full of SEO potential that never gets realised. Not because of technical complexity, but because of people, process, and politics.",
      "In this session, Owain draws on 15+ years of enterprise SEO experience to share the frameworks and tactics that actually move the needle inside complex organisations: how to build internal momentum, get stakeholders on side, turn SEO wins into institutional knowledge, and create the kind of change-log culture that keeps progress visible and protected. If you've ever felt like you're pushing SEO uphill inside a big company, this one's for you.",
    ],
  },
  {
    name: "Polina Kogan",
    slug: "polina-kogan",
    tag: "Field Talk",
    title: "SEO Consultant, Ayudante",
    img: "/assets/polina-kogan.webp",
    country: "Luxembourg & Russia",
    linkedin: "https://www.linkedin.com/in/polina-kogan-53965074/",
    x: "https://x.com/PolinaKogan",
    bio: [
      "Polina Kogan is an enterprise SEO and analytics consultant at Ayudante, specializing in search strategy, large-scale website migrations, and international SEO for both B2C and B2B businesses. She works with Japanese domestic brands expanding into global markets, as well as overseas companies entering Japan, giving her a unique perspective on multilingual and cross-market search strategy.",
      "Her work focuses particularly on complex technical SEO challenges, enterprise-scale website structures, and aligning SEO strategy with user behavior and search intent across different markets and languages. Based in Japan, Polina has co-authored three books on SEO and analytics, co-hosts meetups for women in SEO, and regularly speaks at industry conferences and events.",
    ],
    sessions: [
      { title: "The Unwritten Rules of Japanese SEO: From Search Behavior to Business Culture", when: "Day 3 / Sep. 16 / 2:20 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T062000Z" },
    ],
    description: [
      "Japan is a Google-dominated market, but succeeding in SEO there requires understanding both local search behavior and the realities of doing business in Japan. In this casual session, Polina and Mao will share:",
      "\u30fbAn overview of Japan\u2019s search ecosystem and user behavior",
      "\u30fbCommon mistakes global HQs make with Japanese websites, and how to maximize local SEO initiatives",
      "\u30fbHow Japanese corporate culture, such as hierarchy and avoiding bold ideas, affects web projects",
    ],
  },
  {
    name: "Roger Yin",
    slug: "roger-yin",
    tag: "Lightning Talk",
    title: "SEO Partner, HashMatrix",
    img: "/assets/roger-yin.jpg",
    country: "Canada",
    linkedin: "https://www.linkedin.com/in/mzyin/",
    x: "https://x.com/daluoseo",
    youtube: "https://www.youtube.com/@daluoseo",
    bio: "Roger Yin is a seasoned growth marketing expert and serial entrepreneur based in Vancouver, Canada, with over 10 years of hands-on digital marketing experience in North America. He has personally led SEO and growth strategies for 200+ brands, including Rabbit R1, Minimax's Hailuo AI, Kuaishou's Kling AI, and many other notable brands. Roger specializes in international SEO, AI search optimization (AEO/GEO), and building AI-powered marketing systems that scale. He is co-founder of HashMatrix, a growth agency focused on helping tech companies and e-commerce brands break into Western markets. He also shares SEO insights on YouTube and is known in the Chinese SEO community for his no-BS, results-driven approach to organic growth.",
    sessions: [
      { title: "Traffic Down, No Problem: We Did These Six Things and Tripled Our Revenue", when: "Day 4 / Sep. 17 / 2:40 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T064000Z" },
    ],
    description: [
      "A case study for a website we were working on that experienced lowered traffic but improved revenue at the same time, and we'll share six things we did that contributed to this result.",
    ],
  },
  {
    name: "Sacha Fournier",
    slug: "sacha-fournier",
    tag: "Side Event",
    title: "Founder, JournoFinder.com",
    img: "/assets/sacha-fournier.jpg",
    country: "UK",
    linkedin: "https://www.linkedin.com/in/ssfournier/",
    x: "https://x.com/sachf_",
    bio: "Sacha Fournier is the founder of JournoFinder, an AI-powered tool that helps businesses get featured in the press without the agency price tag. Before building it, Sacha was running his own digital PR campaigns and getting fed up with the clunky, inaccurate, and overpriced platforms the industry treats as standard. So he built something better. Today JournoFinder helps companies around the world find the right journalists and earn real coverage, the kind that builds authority, drives links, and moves rankings. Sacha has spoken at SEO Estonia, Chiang Mai SEO Conference, and Shenzhen SEO Conference, where he breaks down exactly how to get your business into the press.",
    sessions: [
      { title: "Winning in the West: Agentic Digital PR for Chinese Brands", when: "Sep. 12 / 3:30 PM", where: "Wuzhou Sports Center Hotel (Olympia Hall A)", start: "20260912T073000Z" },
    ],
    description: [
      "Digital PR lives or dies on the news cycle. For a Chinese brand, staying on top of a Western one is the hard part. This session shows how agentic AI watches the Western news cycle for you, spots the stories worth reacting to, finds the right journalists, personalizes each pitch, and runs the outreach end to end. Coverage and links in markets you've never set foot in.",
    ],
  },
  {
    name: "Sam Penny",
    slug: "sam-penny",
    tag: "Lightning Talk",
    title: "SEO & Growth Manager",
    img: "/assets/sam-penny.webp",
    country: "Australia",
    linkedin: "https://www.linkedin.com/in/sam-penny/",
    x: "https://x.com/sampennyseo",
    bio: "Sam Penny is a growth-focused marketer who helps brands utilise organic search to drive reach, establish trust, and generate revenue. He currently leads SEO for one of Australia\u2019s largest investment funds and advises brands on SEO and growth. Using his knowledge of technical SEO and content strategy, Sam has developed a portfolio of digital products used by more than 1M people each year. Technically minded, but commercially focused, Sam believes strong SEO is built on the foundations of product, brand, and a clear understanding of your users\u2019 needs.",
    sessions: [
      { title: "SEO is Marketing: A Proven Framework to See the Big Picture & Unlock Growth", when: "Day 3 / Sep. 16 / 10:40 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T024000Z" },
    ],
    description: [
      "Great SEOs know that search is not just about rankings, traffic or technical fixes. It is part of a much bigger marketing system. Drawing on marketing science, Sam Penny will unpack SEO as a form of brand awareness and digital distribution, showing how search helps brands become easier to remember, easier to find and easier to choose. You\u2019ll leave with a timeless framework for connecting SEO and GEO to broader marketing strategy, communicating its value to senior stakeholders and spotting where search can genuinely move the needle.",
    ],
  },
  {
    name: "Sasha Gusain",
    slug: "sasha-gusain",
    tag: "Keynote",
    title: "Head of Logged Out Experience, Canva",
    img: "/assets/sasha-gusain.jpg",
    country: "Australia",
    linkedin: "https://www.linkedin.com/in/sashagusain/",
    x: "https://x.com/SashG",
    bio: [
      "Sasha leads Organic Growth and the Logged Out Experience at Canva, where she is responsible for the experiences that connect millions of people to Canva every day. Her remit spans SEO, AI-powered discovery, homepage experiences, authentication and marketplace organic growth, bringing together product, engineering, design, data science, operations and SEO to build growth systems that scale globally while remaining locally relevant.",
      "Over nearly a decade at Canva, Sasha has helped evolve organic growth from a search channel into a full stack product org, building many of the systems, operating models and growth loops that have supported Canva's international expansion across 40 markets. Her work explores how product, brand and growth reinforce one another, and why winning globally requires far more than last mile localisation.",
      "Before returning to Canva to lead its global SEO organisation and later the Logged Out Experience group, Sasha held leadership roles at Houzz and hipages, and advised high-growth companies including Clipchamp, Airtasker, Honey Insurance and Vero.",
    ],
    sessions: [
      { title: "Radical Localisation: How Canva Blends Product, Brand, and Local Growth for Global Scale", when: "Day 4 / Sep. 17 / 11:20 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T032000Z" },
    ],
    description: [
      "Most teams doing international SEO are actually doing international translation. Same page types, same funnel logic, same conversion assumptions - just in a different language. It doesn't work. Some markets (such as India, Japan, Indonesia, Korea, Germany) may have unique search behaviours, local language mixes per JTBD, user intent patterns, and conversion triggers that are structurally different, not just linguistically different.",
      "This talk is about how Canva navigates this incredibly rich and deep world of local expansion: a hybrid model where global infrastructure enables scale, and local teams have the autonomy and resources to go deep. The result is a growth engine where more than half our global conversions come from international markets, and we're just getting started.",
    ],
  },
  {
    name: "Sebastien Edgar",
    slug: "sebastien-edgar",
    tag: "Field Talk",
    title: "Global VP of Digital Marketing, Liferay",
    img: "/assets/sebastien-edgar.jpg",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/sebastienedgar/",
    bio: "I am the Global VP of Digital Marketing at Liferay, leading a global team driving SEO, CRO, Web Strategy, Paid Media, Campaigns, and Social Media growth. Previously, I served as Global Head of Organic Discovery (Web, SEO, and Content) at Square (NYSE: XYZ) in San Francisco, managing distributed teams across the US, EMEA, and APAC. Before joining Square, I held leadership roles as SEO Team Lead at Searchmetrics US and at InterNations in Munich, Germany.",
    sessions: [
      { title: "Revenue-First SEO: Connecting Organic, Paid, Campaigns & CRO Into One Growth Engine", when: "Day 4 / Sep. 17 / 2:00 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T060000Z" },
    ],
    description: [
      "In this session, you'll learn how to reposition organic search as the central intelligence layer across your entire marketing stack, connecting it with paid media, campaigns, and CRO into a single omnichannel growth engine.",
      "We'll cover how organic search data can sharpen every other channel, how to reposition tactical initiatives, such as internal linking, into highly underrated revenue levers, and how mastering this strategic mindset elevates SEO practitioners into global marketing leaders.",
    ],
  },
  {
    name: "Sharoz Dawa",
    slug: "sharoz-dawa",
    tag: "Side Event",
    title: "SEO Lead, Fynd",
    img: "/assets/sharoz-dawa.jpg",
    country: "India",
    linkedin: "https://www.linkedin.com/in/sharozdawa/",
    x: "https://x.com/SharozDawa",
    bio: [
      "Sharoz Dawa is the SEO Lead at Fynd, where he owns organic growth across Fynd's commerce platform and its merchant storefronts, and leads AI-powered marketing tooling for the Studio product line. He works at the intersection of technical SEO, programmatic content, and software engineering, building the systems he uses rather than buying them.",
      "He has shipped an in-house SEO crawler and audit engine, a zero-404 migration framework that has remapped thousands of legacy URLs for enterprise replatforming clients, storefront SSR and structured-data defaults now running as a baseline across Fynd merchants, and an ads intelligence platform that manages multi-crore monthly spend across Google and Meta.",
      "Alongside his work at Fynd, he builds and operates his own SaaS products and a large collection of Model Context Protocol servers that connect Claude to real business systems. His expertise spans technical SEO at scale, entity and topical authority, link acquisition, marketing automation, and AI-assisted development.",
    ],
    sessions: [
      { title: "Build Your AI Workforce: A 24/7 Multi-agent Chief of Staff", when: "Sep. 12 / 4:30 PM", where: "Wuzhou Sports Center Hotel (Olympia Hall A)", start: "20260912T083000Z" },
    ],
    description: [
      "A team of specialised AI agents that runs your sales, ops, and research around the clock \u2014 coordinated by one AI Chief of Staff.",
    ],
  },
  {
    name: "Si Quan Ong",
    slug: "si-quan-ong",
    tag: "Field Talk",
    title: "Senior Content Marketer, Ahrefs",
    img: "/assets/si-quan-ong.webp",
    country: "Singapore",
    linkedin: "https://www.linkedin.com/in/si-quan-ong/",
    x: "https://x.com/siquanong",
    bio: "Si Quan (SQ) is a senior content marketer at Ahrefs, the AI marketing platform powered by big data. He focuses on publishing content that'll help other marketers do their job better or spark new ideas. He's also the main curator of Ahrefs' Digest, the company's weekly newsletter featuring the best content in the industry.",
    sessions: [
      { title: "How I Automated 144 Ahrefs Blog Updates a Year with AI", when: "Day 3 / Sep. 16 / 4:50 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T085000Z" },
    ],
    description: [
      "What if you could update your most important content every month without doing all the repetitive work yourself? I\u2019ll break down how I automated 144 Ahrefs blog updates a year with AI, including the workflow, guardrails, and human review process attendees can adapt to their own marketing tasks.",
    ],
  },
  {
    name: "Tanya Van Gastel",
    slug: "tanya-van-gastel",
    tag: "VIP Networking & Side Event",
    title: "Founder, Rankingonai.com",
    img: "/assets/tanya-van-gastel.webp",
    country: "Belgium",
    linkedin: "https://www.linkedin.com/in/tanyavangastel/",
    youtube: "https://www.youtube.com/@foundertanya",
    bio: "Tanya Van Gastel is the Founder of Rankingonai.com, AI visibility & SEO for high-growth SaaS. Her clients include Cal.com (raised +$30M), Suno (raised +$200M), HappyRobot (raised +$40M) and other high-growth SaaS companies. She's helped her clients triple AI referrals and become the top AI-recommended product in their category. Van Gastel previously built an AI photography startup that grew purely through SEO with clients like Walmart and Google, then exited it. She's also a Forbes 20 Women in Tech honoree and has been featured in Forbes, Inc. Magazine, The Wall Street Journal, BBC, and Digital Trends. Previously, she lived in Shanghai and Shenzhen working in Chinese tech.",
    sessions: [
      { title: "Side Event: Winning AI Search: A 4-Step Guide for Chinese Companies", when: "Sep. 12 / 1:10 PM", where: "Wuzhou Sports Center Hotel (Olympia Hall A)", start: "20260912T051000Z" },
      { title: "Agency Owners Panel: Chinese Manufacturing vs. Silicon Valley SaaS (An Agency Reality Check)", when: "Day 5 / Sep. 18 / 5:20 PM", where: "MGM Shenzhen (Grand Ballroom)", start: "20260918T092000Z" },
    ],
    description: [
      "A practical framework for getting your company recommended by ChatGPT and other AI search engines. Tanya spent four years in Shenzhen at OnePlus and OPPO. Now, she runs Rankingonai.com, helping companies like Suno (+$200M raised), HappyRobots (+$40M raised) and Cal.com (+$30M raised) grow through SEO and AI search. Tanya shares the four-step framework they use, common mistakes, and the unique challenges Chinese companies face when building visibility outside China.",
    ],
  },
  {
    name: "Tom Qiao",
    slug: "tom-qiao",
    tag: "Workshop",
    title: "Founder, Convert Better",
    img: "/assets/tom-qiao.jpg",
    country: "Canada",
    linkedin: "https://www.linkedin.com/in/tomqiao/",
    bio: "Tom is the founder of Convert Better, a results-driven Conversion Rate Optimization (CRO) agency that helps brands unlock new revenue growth opportunities with data-driven user behavior analysis and A/B testing. He's helped many Chinese and international brands scale their marketing profitability in B2B, B2C/DTC, and SaaS verticals.",
    sessions: [
      { title: "SEO Meets CRO: Why Your Traffic Isn't Converting Into Customers (& How to Fix It)", when: "Day 1 / Sep. 14 / 2:30 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260914T063000Z" },
    ],
    description: [
      "Good SEOs generate traffic. Great SEOs generate conversions. The difference? Understanding how real users actually behave and the factors that drive them to buy.",
      "In this workshop, you'll learn why conversion rate optimization (CRO) is an essential skill for marketing teams, why better user engagement leads to stronger SEO ranking signals (as confirmed by Google), and how simple page changes can have a massive impact on user behavior and revenue growth.",
      "This session is best for marketing managers and business owners in SaaS, B2C, and B2B who want to unlock new revenue opportunities, improve marketing efficiency, and boost organic rankings through CRO.",
    ],
  },
  {
    name: "Tom So",
    slug: "tom-so",
    tag: "VIP Networking",
    title: "Founder & CEO, MML Digital (\u6162\u6162\u6765)",
    img: "/assets/tom-so.jpg",
    country: "China",
    linkedin: "https://www.linkedin.com/in/tom-so/",
    bio: "Tom So is the Founder and CEO of MML Digital Marketing, an agency helping Chinese B2B manufacturers build stronger brands and generate growth in global markets. With 20 years of experience in international trade and 10 years in digital marketing, Tom has helped more than 2,000 export businesses develop conversion-focused websites and content marketing strategies. Under his leadership, MML has been recognized as a National High-Tech Enterprise for nine consecutive years and has collaborated with leading organizations including Huawei, OPPO, the Canton Fair, and BOE. A hands-on entrepreneur, Tom specializes in B2B export marketing, digital growth, and turning global marketing ideas into practical, results-oriented strategies for Chinese manufacturers.",
    sessions: [
      { title: "Agency Owners Panel: Chinese Manufacturing vs. Silicon Valley SaaS (An Agency Reality Check)", when: "Day 5 / Sep. 18 / 5:20 PM", where: "MGM Shenzhen (Grand Ballroom)", start: "20260918T092000Z" },
    ],
    description: [
      "A raw operational look at what it really takes to close and retain high-ticket clients in Eastern manufacturing vs. Western SaaS.",
    ],
  },
  {
    name: "Tori Long",
    slug: "tori-long",
    tag: "Side Event",
    title: "Marketing Director, GWTime",
    img: "/assets/tori-long.webp",
    country: "China",
    linkedin: "https://www.linkedin.com/in/yaping-long-59373b87/",
    bio: "\u00b7 Eight-figure international deal closer with 13 years across 50+ markets \u00b7 Co-author of the bestselling book The Compound Effect of Action \u00b7 Helps B2B SME exporters build overseas trust that compounds \u2014 turning real export experience into frameworks that convert, market by market",
    sessions: [
      { title: "S.P.A.C.E.: A Five-Dimension Framework for Exporters Who've Hit a Growth Ceiling", when: "Sep. 13 / 1:50 PM", where: "The Westin Shenzhen Nanshan (3F, Ballroom)", start: "20260913T055000Z" },
    ],
    description: [
      "When core markets slow down, most exporters do what they've always done: better pricing, faster samples, more follow-ups.",
      "But what if the problem isn't effort \u2014 it's the map? One CCTV exporter watched his European pipeline collapse, and found demand he'd never targeted before, without changing a single product.",
    ],
  },
  {
    name: "Tupa Lee",
    slug: "tupa-lee",
    tag: "Lightning Talk",
    title: "SEO & SEM Consultant",
    img: "/assets/tupa-lee.jpg",
    country: "China",
    linkedin: "https://www.linkedin.com/in/tupa-lee-756944380/",
    bio: "Tupa is a performance marketing practitioner and educator focused on international growth, with experience running multi\u2011million\u2011dollar DTC brand growth programs. From Google Ads to Google SEO, Meta ads to influencer marketing, he shares what works, what fails, and how to iterate fast with real data. He also covers YouTube growth for DTC brands, with a focus on helping brands build durable acquisition systems for e-commerce stores. He's known for winning SEO strategies for e-commerce brands that have increased 10x organic clicks, and for driving more than 2x increase in ROAS with over 8 million annual spend in Google Ads.",
    sessions: [
      { title: "10x Organic Traffic for Ecommerce with Product-led Content & Community Backlinks", when: "Day 4 / Sep. 17 / 10:30 AM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T023000Z" },
    ],
    description: [
      "Most ecommerce brands chase SEO through technical fixes and paid link schemes \u2014 and wonder why their organic growth plateaus. This session takes a different approach.",
      "Drawing from a real brand site case study, you'll see exactly how a focused two-lever strategy \u2014 product-led content creation and community-driven backlink building \u2014 delivered 10x organic traffic growth and a 3x lift in conversion rate, without bloated budgets or black-hat shortcuts.",
      "You'll walk away with a repeatable framework for building product-led content that ranks and converts, and a practical playbook for earning high-quality backlinks through forum and community channels. Whether you're an in-house SEO lead, a brand marketer, or an ecommerce founder, this session gives you a battle-tested, execution-ready roadmap you can apply the week you get home.",
    ],
  },
  {
    name: "Victor Huynh",
    slug: "victor-huynh",
    tag: "Field Talk",
    title: "CEO & Head of Digital Strategy, Ready Artwork",
    img: "/assets/victor-huynh.jpg",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/victor-huynh-581b82/",
    youtube: "https://www.youtube.com/@ReadyArtwork",
    bio: "Victor Huynh is the co-founder and CEO of Ready Artwork, a website-first B2B digital marketing agency in Southern California. For over 20 years, he's built websites and digital strategy for industrial manufacturers and high-ticket B2B companies, the kind with long sales cycles and buyers who do their homework before they ever reach out.",
    sessions: [
      { title: "You Don't Have a B2B SEO Problem. You Have a Website Problem", when: "Day 4 / Sep. 17 / 2:20 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260917T062000Z" },
    ],
    description: [
      "Everyone's working to rank for keywords. Almost no one builds a website that turns those visitors into leads. Ranking and converting are two different jobs, and most B2B companies only pay for one.",
      "Victor Huynh breaks down why your website, not your keyword rankings, decides who gets chosen, and how AI search changed the question buyers are asking. AI recommends the companies it clearly understands, so the visibility work everyone is chasing only pays off if the website underneath it is built to be chosen.",
      "Real B2B manufacturer examples. Three fixes you can run on your own site this week.",
    ],
  },
  {
    name: "Vinayak Gupta",
    slug: "vinayak-gupta",
    tag: "Side Event",
    title: "Founder, Serpbays",
    img: "/assets/vinayak-gupta.webp",
    country: "India",
    linkedin: "https://www.linkedin.com/in/vin-wordscloud/",
    bio: "Vinayak Gupta is the founder of Serpbays.com, a link-building marketplace designed to make buying and selling backlinks more transparent. He is also the founder of Wordscloud, a content marketing agency, and SaaSlinks.net, a dedicated marketplace for SaaS backlinks. He works at the intersection of SEO, content marketing, link building, AI, and product development. With a background in software development and quality analysis, Vinayak brings a technical and analytical approach to building digital businesses. Over the years, he has managed multiple affiliate websites and SaaS projects, gaining hands-on experience in traffic growth, content monetization, scalable SEO systems, backlink strategy, and digital product execution. He is currently doing extensive vibe coding with Claude Code and has built multiple internal systems and everyday business tools using AI-assisted development workflows. His expertise includes SEO strategy, content operations, link acquisition, publisher marketplace development, automation, SaaS workflows, and using AI to build practical tools that improve business efficiency.",
    sessions: [
      { title: "Build Your AI Workforce: A 24/7 Multi-agent Chief of Staff", when: "Sep. 12 / 4:30 PM", where: "Wuzhou Sports Center Hotel (Olympia Hall A)", start: "20260912T083000Z" },
    ],
    description: [
      "A team of specialised AI agents that runs your sales, ops, and research around the clock \u2014 coordinated by one AI Chief of Staff.",
    ],
  },
  {
    name: "Wasin Mekkit",
    slug: "wasin-mekkit",
    tag: "Lightning Talk",
    title: "Data & Growth Analyst, Statrys",
    img: "/assets/wasin-mekkit.webp",
    country: "Thailand",
    linkedin: "https://www.linkedin.com/in/wasin-mekkit/",
    bio: "Wasin is an Analytics & Digital Growth Expert who connects code, data, design, and strategy to drive measurable growth and impactful digital success. With expertise in both web development and data analytics, his work lives in the gap between what users see and what search engines, including AI, actually read, turning that into real growth for brands. Because the brands winning in AI search today aren't doing anything new. They're just getting the fundamentals right.",
    sessions: [
      { title: "AI Search Can't Render Your JavaScript-Heavy Website? SEO Can Fix That", when: "Day 3 / Sep. 16 / 4:10 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260916T081000Z" },
    ],
    description: [
      "Most AI crawlers can't render JavaScript-heavy websites. If your content lives inside JavaScript, AI can't see it. And that's not just a ranking problem, it's invisibility.",
      "Here's what most people miss: the fix isn't new. The technical SEO fundamentals that help Google crawl a JavaScript-heavy website are the same fundamentals that make your content visible to AI.",
      "In this lightning talk, you'll get a tight, practical checklist covering the most common JavaScript SEO issues, including AI bot blocking, rendering, schema, semantic HTML, and markdown for agents, so you know exactly what to fix first.",
      "Because the rules haven't changed. Strong SEO is still the foundation for GEO. Get the fundamentals right, and you win on both Google and AI.",
    ],
  },
  {
    name: "Zack Franklin",
    slug: "zack-franklin",
    tag: "Workshop",
    title: "Founder, SmartEcomSEO",
    img: "/assets/zack-franklin.jpg",
    country: "USA",
    linkedin: "https://www.linkedin.com/in/zackjf/",
    bio: [
      "Zack's goal is to make Chinese rich. He's doing a great job. In his ten years in China, he's worked with hundreds of ecommerce brands including many of the 8 and 9 figure brands in Shenzhen. His agency SmartEcomSEO is the leading Shopify SEO Agency in Shenzhen. SESEO generates almost 2 million clicks a month for Chinese brands, and has ranked the hardest ecommerce keywords out there.",
      "Zack is on the cutting edge of AI, if a new model or technique comes out, he's probably tried it and implemented it within one hour of release. If you need automation or AI consulting in Shenzhen, there\u2019s no better choice. One of his newer AI projects is localsites.dev, a website builder for the home service business market, building a great website for a local business within 10 minutes.",
      "Zack is also passionate about making Shenzhen a better place and a thriving community. He organizes the most popular monthly meetup for foreigners doing business in the city (Shenzhen Marketing Meetups) and also SZMeetups.com, a platform to easily discover events and communities in this city.",
    ],
    sessions: [
      { title: "AI Automation at Shenzhen Speed for SEO, Websites, and Ecom", when: "Day 1 / Sep. 14 / 2:30 PM", where: "The St. Regis Shenzhen (Grand Astor Ballroom, 5F)", start: "20260914T063000Z" },
    ],
    description: [
      "Ever feel like if only you had another you, you\u2019d be able to do everything you want? I'll teach you how to get 50 hours of work done a day, how to turn one person into 20, and how you can really put AI to work in your business. I've made more than 100 AI projects this year, from projects for billion dollar companies to simple systems to call me and remind me to go to gym.",
      "We'll go over everything from claude skills, openclaw, coding agents, and even how to manage your website on autopilot, and anything else that comes out between now and September. We'll also talk about how to integrate it into your team and company, from experiences I\u2019ve learned from automating tasks for real Chinese companies.",
      "This will be intense, practical, and the best 3 hours of the conference. Sign up today.",
    ],
  },
];

/** A bio as a list of paragraphs, whichever way it was written. */
export function bioParagraphs(bio: SpeakerProfile['bio']): string[] {
  if (!bio) return [];
  return Array.isArray(bio) ? bio : [bio];
}

/** A bio as one plain line, for meta descriptions and structured data. */
export function bioText(bio: SpeakerProfile['bio']): string {
  return bioParagraphs(bio).join(' ');
}

export const PROFILE_BY_SLUG = new Map(SPEAKER_PROFILES.map((p) => [p.slug, p]));
export const PROFILE_BY_NAME = new Map(SPEAKER_PROFILES.map((p) => [p.name.toLowerCase(), p]));
