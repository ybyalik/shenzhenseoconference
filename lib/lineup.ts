// Single source of truth for the categorized speaker lineup.
// Both the Speakers page and the individual speaker profile pages read from
// here, so adding or moving a speaker in one place updates everywhere —
// including the "same category" recommendations shown on each profile.

export type Speaker = {
  name: string;
  country: string;
  title: string;
  img: string;
  tag?: string;
  /**
   * Kept in the data but not shown in the public lineup. The agenda resolves a
   * talk's headshot and title by name from this file, so a speaker who is off
   * the lineup but still on the schedule has to stay here or their talk loses
   * its photo and job title.
   */
  hiddenFromLineup?: boolean;
};

export type Category = 'Keynote' | 'Workshop' | 'Field Talk' | 'Lightning Talk';

export const KEYNOTES: Speaker[] = [
  { name: 'Lily Ray', country: 'USA', title: 'VP of SEO Strategy & Research, Amsive', img: '/assets/lily-ray.jpg' },
  { name: 'Gary Illyes', country: 'Switzerland', title: 'Analyst, Google Search', img: '/assets/gary-illyes.jpg' },
  { name: 'Eli Schwartz', country: 'USA', title: 'Author, Product-Led SEO', img: '/assets/eli-schwartz.jpg' },
  { name: 'Sasha Gusain', country: 'Australia', title: 'Head of Logged Out Experience, Canva', img: '/assets/sasha-gusain.jpg' },
  { name: 'Lars Lofgren', country: 'USA', title: 'Fractional VP of Marketing', img: '/assets/lars-lofgren.jpg' },
  { name: 'Bernard Huang', country: 'USA', title: 'Co-founder, Clearscope', img: '/assets/bernard-huang.jpg', hiddenFromLineup: true },
];
export const WORKSHOPS: Speaker[] = [
  { name: 'Marc Moeller', country: 'Germany & Australia', title: 'Founder, Ecomexperts', img: '/assets/marc-moeller.jpg' },
  { name: 'Tom Qiao', country: 'Canada', title: 'Founder, Convert Better', img: '/assets/tom-qiao.jpg' },
  { name: 'Jessica Malnik', country: 'USA', title: 'Founder, Remote Work Tribe & Clarity Briefs', img: '/assets/jessica-malnik.jpeg' },
  { name: 'Zack Franklin', country: 'USA', title: 'Founder, SmartEcomSEO', img: '/assets/zack-franklin.jpg' },
];
export const FIELD_TALKS: Speaker[] = [
  { name: 'Nick Drewe', country: 'Australia', title: 'Founder & CEO, Wethrift', img: '/assets/nick-drewe.jpg' },
  { name: 'Josh Blyskal', country: 'USA', title: 'AI Strategy & Research, Profound', img: '/assets/josh-blyskal.jpg' },
  { name: 'Nik Ranger', country: 'Australia', title: 'Senior Growth Consultant, Dejan', img: '/assets/nik-ranger-2026.jpg' },
  { name: 'Si Quan Ong', country: 'Singapore', title: 'Senior Content Marketer, Ahrefs', img: '/assets/si-quan-ong.webp' },
  { name: 'Loki Yan', country: 'China & Australia', title: 'Co-founder, First Optimise (壹优化)', img: '/assets/loki-yan.jpg' },
  { name: 'Doug Pierce', country: 'USA', title: 'Founder, Cogney', img: '/assets/doug-pierce.jpg' },
  { name: 'Mao Kawana', country: 'Japan', title: 'Project Manager, Faber Company', img: '/assets/mao-kawana.jpg' },
  { name: 'Polina Kogan', country: 'Luxembourg & Russia', title: 'SEO Consultant, Ayudante', img: '/assets/polina-kogan.webp' },
  { name: 'Victor Huynh', country: 'USA', title: 'CEO & Head of Digital Strategy, Ready Artwork', img: '/assets/victor-huynh.jpg' },
  { name: 'Cristina Song', country: 'South Korea', title: 'SEO Lead & Co-Founder, Xpandir', img: '/assets/cristina-song.jpg' },
  { name: 'Jiyoung Lee', country: 'South Korea', title: 'Co-Founder & Digital Growth Strategist, Xpandir', img: '/assets/jiyoung-lee.jpg' },
  { name: 'Owain Lloyd-Williams', country: 'UK', title: 'Independent SEO Consultant', img: '/assets/owain-lloyd-williams.jpg' },
  { name: 'Sebastien Edgar', country: 'USA', title: 'Global VP of Digital Marketing, Liferay', img: '/assets/sebastien-edgar.jpg' },
  { name: 'Max Kuch', country: 'Germany', title: 'Digital Entrepreneur', img: '/assets/max-kuch.webp' },
  { name: 'Kun Tang', country: 'China', title: 'Founder and CEO, Jademond', img: '/assets/kun-tang.webp' },
];
export const LIGHTNING_TALKS: Speaker[] = [
  { name: 'Apurva Bose', country: 'USA', title: 'VP of Operations & Strategy, Overtake Digital', img: '/assets/apurva-bose.jpg' },
  { name: 'Johann Sathianathen', country: 'USA', title: 'Co-founder, Cyndra AI', img: '/assets/johann-sathianathen.webp' },
  { name: 'Roger Yin', country: 'Canada', title: 'SEO Partner, HashMatrix', img: '/assets/roger-yin.jpg' },
  // Off the public lineup but still on the agenda, which resolves a talk's
  // headshot and title by name from this file.
  { name: 'Begum Kaya', country: 'Turkey', title: 'Organic Growth Strategist, Omniscient Digital', img: '/assets/begum-kaya.webp', hiddenFromLineup: true },
  { name: 'David Carrasco', country: 'Spain', title: 'Freelance SEO Consultant', img: '/assets/david-carrasco.jpg' },
  { name: 'Andrea Abbondanza', country: 'Italy', title: 'Founder, Abbondanza Marketing', img: '/assets/andrea-abbondanza.webp' },
  { name: 'Jonathan Kiekbusch', country: 'UK & Germany', title: 'Founder, SwishDM', img: '/assets/jonathan-kiekbusch.jpg' },
  { name: 'Max Hobbs', country: 'UK', title: 'Global Head of Marketing, LTL School', img: '/assets/max-hobbs.jpg' },
  { name: 'Konstantin Sadekov', country: 'Estonia', title: 'Founder & CEO, Ethical SEO', img: '/assets/konstantin-sadekov.jpg' },
  { name: 'Gabriele Kahlout', country: 'Italy & Qatar', title: 'International SEO Specialist', img: '/assets/gabriele-kahlout.jpg' },
  { name: 'Sam Penny', country: 'Australia', title: 'SEO & Growth Manager', img: '/assets/sam-penny.webp' },
  { name: 'Helen Han', country: 'China & Australia', title: 'Technical SEO Executive, Easygo', img: '/assets/helen-han.jpg' },
  { name: 'Jine Wu', country: 'China & Australia', title: 'SEO Operations Manager, REA Group', img: '/assets/jine-wu.jpg' },
  { name: 'Henry Dalziel', country: 'UK & Hong Kong', title: 'SEO Lead, Publicis Media', img: '/assets/henry-dalziel.webp' },
  { name: 'Killian Kostiha', country: 'France & Hong Kong', title: 'Founder, Get Clicks', img: '/assets/killian-kostiha.jpg' },
  { name: 'Jodie Chan', country: 'Hong Kong', title: 'SVP of Product & Strategic Partnerships, Chinafy', img: '/assets/jodie-chan.webp' },
  { name: 'Divya Jain', country: 'India', title: 'Global Head of Organic Growth & Brand, Edvoy', img: '/assets/divya-jain.jpg' },
  { name: 'Wasin Mekkit', country: 'Thailand', title: 'Data & Growth Analyst, Statrys', img: '/assets/wasin-mekkit.webp' },
  { name: 'Mayi', country: 'China', title: 'Founder & CEO, InnoHunts', img: '/assets/mayi.jpg' },
  { name: 'Ben Fang', country: 'China', title: 'CEO & Co-founder, Kingsway Video', img: '/assets/ben-fang.jpg' },
  { name: 'Tupa Lee', country: 'China', title: 'SEO & SEM Consultant', img: '/assets/tupa-lee.jpg' },
];

// Networking and pre-conference side-event speakers (not part of the main-stage
// categories). Shared so both /speakers and the agenda resolve their headshots/titles.
export const VIP_NETWORKING: Speaker[] = [
  { name: 'Nick White', country: 'USA', title: 'Author / Founder, Castle Trade Agency', img: '/assets/nick-white.jpg' },
  { name: 'Marcus Pentzek', country: 'Germany & China', title: 'Partner & Director SEO, Jademond Digital', img: '/assets/marcus-pentzek.jpg' },
  { name: 'Tanya Van Gastel', country: 'Belgium', title: 'Founder, Rankingonai.com', img: '/assets/tanya-van-gastel.webp' },
  { name: 'Tom So', country: 'China', title: 'Founder & CEO, MML Digital (慢慢来)', img: '/assets/tom-so.jpg' },
  { name: 'Kiana Shen', country: 'China', title: 'Founder, OMGrowth.ai (济谦AI)', img: '/assets/kiana-shen.jpg' },
];
export const SIDE_EVENTS: Speaker[] = [
  { name: 'Tanya Van Gastel', country: 'Belgium', title: 'Founder, Rankingonai.com', img: '/assets/tanya-van-gastel.webp' },
  { name: 'Sacha Fournier', country: 'UK', title: 'Founder, JournoFinder.com', img: '/assets/sacha-fournier.jpg' },
  { name: 'Jamie I.F.', country: 'UK', title: 'Founder, AffiliateFinder.ai', img: '/assets/jamie-if.webp' },
  { name: 'Vinayak Gupta', country: 'India', title: 'Founder, Serpbays', img: '/assets/vinayak-gupta.webp' },
  { name: 'Sharoz Dawa', country: 'India', title: 'SEO Lead, Fynd', img: '/assets/sharoz-dawa.jpg' },
  { name: 'Magenta Qin', country: 'China & Germany', title: 'Developer Advocate, SerpApi', img: '/assets/magenta-qin.webp' },
  { name: 'Jabez Reuben', country: 'India', title: 'Founder, The Blueprints', img: '/assets/jabez-reuben.jpg' },
  { name: 'Ilman Akbar', country: 'Indonesia', title: 'Founder & CEO, DailySEO ID & DLYS Consulting', img: '/assets/ilman-akbar.webp' },
  { name: 'Tori Long', country: 'China', title: 'Marketing Director, GWTime', img: '/assets/tori-long.webp' },
  { name: 'Jacky Lin', country: 'China', title: 'Founder, Wingfuture', img: '/assets/jacky-lin.webp' },
];

// Category label -> its speakers, in display order.
export const LINEUP: { label: Category; speakers: Speaker[] }[] = [
  { label: 'Keynote', speakers: KEYNOTES },
  { label: 'Workshop', speakers: WORKSHOPS },
  { label: 'Field Talk', speakers: FIELD_TALKS },
  { label: 'Lightning Talk', speakers: LIGHTNING_TALKS },
];

// "Gary Illyes" -> "gary-illyes". Used to build /speakers/<slug> profile links.
export const speakerSlug = (name: string) =>
  name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Everyone in the same category as `name`, excluding that person, capped at `limit`.
// Returns [] if the name isn't found in any category.
export function sameCategorySpeakers(name: string, limit = 8): Speaker[] {
  const group = LINEUP.find((g) => g.speakers.some((s) => s.name === name));
  if (!group) return [];
  return group.speakers
    .filter((s) => s.name !== name && !s.hiddenFromLineup)
    .slice(0, limit);
}

/** The speakers shown publicly. Use this anywhere the lineup is displayed. */
export function visibleSpeakers(speakers: Speaker[]): Speaker[] {
  return speakers.filter((s) => !s.hiddenFromLineup);
}
