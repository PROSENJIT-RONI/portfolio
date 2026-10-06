import Image from "next/image";
import ContactForm from "./components/ContactForm";
import SiteHeader from "./components/SiteHeader";
import styles from "./page.module.css";

type FeaturedProject = {
  slug: "spliteasy" | "facelive";
  number: string;
  label: string;
  title: string;
  summary: string;
  overview: string;
  features: string[];
  technicalHighlights: string[];
  technologies: string[];
  githubUrl: string;
};

const storyHighlights = [
  { label: "Based in", value: "Naihati, West Bengal, India" },
  { label: "Current role", value: "Mobile App Developer / Flutter Developer" },
  { label: "Focus", value: "Flutter, mobile product development, APIs, and backend-aware apps" },
  {
    label: "Education",
    value: "B.Tech in Computer Science & Engineering • GCELT • CGPA approximately 9.14",
  },
];

const skills = [
  {
    title: "Mobile development",
    description: "Building responsive, user-friendly apps with a practical product lens.",
    items: ["Flutter", "Dart", "GetX", "Responsive UI"],
  },
  {
    title: "Application architecture",
    description: "Keeping app flows clear, maintainable, and ready for real-world use.",
    items: ["Clean app structure", "State management", "Modular patterns", "Product thinking"],
  },
  {
    title: "Backend & data",
    description: "Connecting mobile experiences to APIs, services, and relational data.",
    items: ["REST APIs", "Supabase", "PostgreSQL", "Row Level Security"],
  },
  {
    title: "Tools & workflow",
    description: "Using the tools that support clean development and team collaboration.",
    items: ["Git", "GitHub", "Android Studio", "VS Code"],
  },
];

const featuredProjects: FeaturedProject[] = [
  {
    slug: "spliteasy",
    number: "01",
    label: "Trip expense management",
    title: "SplitEasy",
    summary:
      "A practical trip and expense management app designed to make shared spending easier to track and settle.",
    overview:
      "SplitEasy helps groups manage travel expenses by organizing trips, participants, and cost-sharing logic in one place without manual balancing.",
    features: [
      "Trip and participant management",
      "Equal, unequal, and percentage-based splits",
      "Balance tracking and debt simplification",
      "Responsive Material 3 experience",
    ],
    technicalHighlights: [
      "Reactive state handling with GetX",
      "Supabase-backed data flow",
      "PostgreSQL row-level access policies",
    ],
    technologies: ["Flutter", "Dart", "GetX", "Supabase", "PostgreSQL", "RLS", "Material 3"],
    githubUrl: "https://github.com/PROSENJIT-RONI/spliteasy-flutter",
  },
  {
    slug: "facelive",
    number: "02",
    label: "Face verification",
    title: "FaceLive",
    summary:
      "A Flutter-based face liveness and recognition project focused on camera-driven verification workflows.",
    overview:
      "FaceLive explores mobile verification flows, liveness checks, and anti-spoofing patterns in a practical app context using computer-vision components.",
    features: [
      "Camera permission and capture flow",
      "Face liveness and detection concepts",
      "Anti-spoofing and replay protection considerations",
      "Modular mobile architecture",
    ],
    technicalHighlights: [
      "Camera-driven capture and verification flow",
      "Google ML Kit integration",
      "YOLOv8 and SCRFD components with TensorFlow Lite",
    ],
    technologies: ["Flutter", "GetX", "ML Kit", "YOLOv8", "SCRFD", "TFLite"],
    githubUrl: "https://github.com/PROSENJIT-RONI/facelive",
  },
];

type ExperienceEntry = {
  number: string;
  company: string;
  companyUrl: string;
  role: string;
  dates: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
};

type AchievementEntry = {
  title: string;
  detail: string;
};

type CommunityEntry = {
  organization: string;
  role: string;
  period?: string;
  summary: string;
  url: string;
  linkLabel: string;
};

type EducationEntry = {
  degree: string;
  institution: string;
  dates: string;
  location: string;
  cgpa: string;
};

const experienceData: ExperienceEntry[] = [
  {
    number: "01",
    company: "ARISU APP SOLUTIONS",
    companyUrl: "https://arisuappsolutions.com/",
    role: "Mobile App (Flutter) Developer",
    dates: "Feb 2026 – Present",
    summary: "Building cross-platform mobile applications using Flutter and Dart.",
    responsibilities: [
      "Developing and maintaining production-grade mobile app features.",
      "Collaborating with the team on client and internal projects.",
    ],
    technologies: ["Flutter", "Dart"],
  },
];

const achievementData: AchievementEntry[] = [
  {
    title: "Status Code 0",
    detail: "Auth0 and MongoDB track winner · IIIT Kalyani hackathon",
  },
  {
    title: "HackSquad 2022",
    detail: "Top 60 rank among 300 teams",
  },
  {
    title: "100 Days of Code",
    detail: "Completed · CodeIn Community",
  },
  {
    title: "Version Control with Git",
    detail: "Atlassian University",
  },
];

const communityData: CommunityEntry[] = [
  {
    organization: "HACK4BENGAL",
    role: "PR and Outreach Lead",
    summary:
      "First season: onboarded 25 sponsors and 45 community partners; supported 85 events.",
    url: "https://www.linkedin.com/company/hack4bengal/mycompany/",
    linkLabel: "Hack4Bengal on LinkedIn",
  },
  {
    organization: "GDG CLOUD KOLKATA",
    role: "Member",
    period: "Cloud Community Days Kolkata · 2022, 2023 & 2024",
    summary:
      "Contributed to social media outreach, on-ground volunteering, and speaker relations.",
    url: "https://ccd2024.gdgcloudkol.org/team",
    linkLabel: "GDG Cloud Kolkata team",
  },
  {
    organization: "OPEN CODEYARD",
    role: "Co-founder & Organizer",
    summary:
      "Open-source GitHub organization sharing free solutions and technologies from Kolkata’s local developer community.",
    url: "https://github.com/OpenCodeyard",
    linkLabel: "Open Codeyard on GitHub",
  },
];

const educationData: EducationEntry = {
  degree: "B.Tech. in Computer Science",
  institution: "Government College of Engineering & Leather Technology",
  dates: "Dec 2020 – 2024",
  location: "Kolkata, India",
  cgpa: "9.14",
};

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.pageShell}>
      <SiteHeader />

      <main className={styles.mainContent} id="top">
        <section className={styles.heroSection}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Software Developer</p>
            <h1>
              <span>Hi, I&apos;m Prosenjit.</span>
              <span>I build thoughtful digital experiences.</span>
            </h1>
            <p className={styles.lead}>
              Software Developer building reliable mobile and product experiences with
              Flutter, modern app architecture, APIs, backend integration, and practical
              engineering.
            </p>

            <div className={styles.actionRow}>
              <a href="#work" className={styles.primaryAction} aria-label="View Prosenjit Swarnakar's portfolio work">
                View My Work
              </a>
              <a
                href="/resume/prosenjit-swarnakar-resume.pdf"
                className={styles.secondaryAction}
                aria-label="Download Prosenjit Swarnakar resume PDF"
              >
                Download Resume
              </a>
            </div>

            <div className={styles.socialRow} aria-label="Social links">
              <a
                href="https://github.com/PROSENJIT-RONI"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Prosenjit Swarnakar on GitHub"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/prosenjit-swarnakar-5baa59236/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Prosenjit Swarnakar on LinkedIn"
              >
                LinkedIn
              </a>
            </div>

            <div className={styles.currentlyRow}>
              Currently building mobile experiences at ARISU APP SOLUTIONS.
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualGlow} />
            <div className={styles.visualFrame}>
              <Image
                src="/images/profile/profile.jpg"
                alt="Portrait of Prosenjit Swarnakar"
                width={640}
                height={780}
                priority
                className={styles.profileImage}
              />
            </div>
            <div className={styles.visualBadge}>
              <span>Flutter</span>
              <span>APIs</span>
              <span>Databases</span>
            </div>
            <div className={styles.visualTag}>Software Developer</div>
          </div>
        </section>

        <div className={styles.scrollCue} aria-hidden="true">
          <span>SCROLL TO EXPLORE</span>
          <span className={styles.scrollIndicator} />
        </div>

        <section id="about" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p>About</p>
            <h2>Software developer focused on practical product work.</h2>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutStory}>
              <p>
                I&apos;m Prosenjit Swarnakar, a software developer building practical digital
                experiences with a strong focus on Flutter and mobile application development.
                My work sits at the intersection of product thinking, clean implementation, and
                real-world app functionality.
              </p>
              <p>
                I enjoy working on interfaces that feel considered, systems that stay
                maintainable, and features that connect well with APIs, services, and backend
                data. That includes Flutter-based mobile apps, modern app architecture, and the
                integration work that makes a product feel reliable in daily use.
              </p>
              <p>
                Beyond coding, I&apos;ve been involved in community building, hackathons, and
                collaborative learning through Hack4Bengal, GDG Cloud Kolkata, and Open
                Codeyard. That background has shaped how I approach building and learning as a
                developer.
              </p>
            </div>

            <div className={styles.storyPanel}>
              <ul className={styles.infoList}>
                {storyHighlights.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>

              <div className={styles.educationHighlight}>
                <span>Education</span>
                <strong>B.Tech in Computer Science &amp; Engineering</strong>
                <small>GCELT • CGPA approximately 9.14</small>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p>Skills</p>
            <h2>Technologies and workflows shaped by practical experience.</h2>
          </div>

          <div className={styles.skillGrid}>
            {skills.map((skill) => (
              <article key={skill.title} className={styles.skillCard}>
                <div className={styles.skillHeader}> 
                  <span>{skill.title}</span>
                </div>
                <p>{skill.description}</p>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p>Selected work</p>
            <h2>Software shaped by practical product thinking and technical depth.</h2>
          </div>

          <div className={styles.projectShowcase}>
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className={`${styles.projectFeature} ${styles[`${project.slug}Feature`]}`}
              >
                <div className={styles.projectMeta}>
                  <span className={styles.projectNumber}>{project.number}</span>
                  <div>
                    <p className={styles.projectEyebrow}>Featured project</p>
                    <p className={styles.projectCategory}>{project.label}</p>
                  </div>
                </div>

                <header className={styles.projectHeader}>
                  <h3>{project.title}</h3>
                  <p className={styles.projectSummary}>{project.summary}</p>
                </header>

                <section className={styles.projectOverview}>
                  <h4>Overview</h4>
                  <p>{project.overview}</p>
                </section>

                <div className={styles.projectDetails}>
                  <section className={styles.projectDetail}>
                    <h4>Key features</h4>
                    <ol className={styles.projectFeatureList}>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ol>
                  </section>

                  <section className={styles.projectDetail}>
                    <h4>Technical highlights</h4>
                    <ul className={styles.technicalList}>
                      {project.technicalHighlights.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className={styles.projectStack}>
                  <h4>Tech stack</h4>
                  <ul className={styles.tagList} aria-label={`${project.title} technologies`}>
                    {project.technologies.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <a
                  className={styles.projectLink}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  View repository <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p>Experience</p>
            <h2>Cross-platform mobile development at ARISU APP SOLUTIONS.</h2>
          </div>

          <div className={styles.experienceList}>
            {experienceData.map((experience) => (
              <article key={experience.company} className={styles.experienceCard}>
                <div className={styles.experienceIndex} aria-hidden="true">
                  {experience.number}
                </div>

                <div className={styles.experienceContent}>
                  <div className={styles.experienceRow}>
                    <div>
                      <p className={styles.roleLabel}>{experience.dates}</p>
                      <h3>{experience.role}</h3>
                    </div>
                    <a
                      className={styles.companyBadge}
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.company}
                    </a>
                  </div>

                  <p className={styles.experienceSummary}>{experience.summary}</p>
                  <ul className={styles.responsibilityList}>
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>

                  <div className={styles.experienceTechnologies}>
                    <span>Technologies</span>
                    <p>{experience.technologies.join(" · ")}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p>Achievements</p>
            <h2>Recognition earned through competition and continued learning.</h2>
          </div>

          <article className={styles.achievementFeature}>
            <div className={styles.achievementEyebrow}>
              <span>Featured achievement</span>
              <span>36-hour hackathon</span>
            </div>
            <div className={styles.achievementHeadline}>
              <span className={styles.achievementYear}>2023</span>
              <div>
                <h3>HackSquad</h3>
                <p>Winner</p>
              </div>
            </div>
            <a href="#community" className={styles.communityJump}>
              Community involvement <span aria-hidden="true">↓</span>
            </a>
          </article>

          <div className={styles.additionalAchievements}>
            {achievementData.map((achievement) => (
              <article key={achievement.title} className={styles.achievementItem}>
                <h3>{achievement.title}</h3>
                <p>{achievement.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="community"
          className={`${styles.section} ${styles.communitySection}`}
        >
          <div className={styles.sectionIntro}>
            <p>Community</p>
            <h2>Contributing across developer communities and events.</h2>
          </div>

          <div className={styles.communityList}>
            {communityData.map((community, index) => (
              <article key={community.organization} className={styles.communityItem}>
                <span className={styles.communityIndex} aria-hidden="true">
                  0{index + 1}
                </span>
                <div className={styles.communityContent}>
                  <div className={styles.communityHeading}>
                    <h3>{community.organization}</h3>
                    <p>{community.role}</p>
                  </div>
                  {community.period && (
                    <p className={styles.communityPeriod}>{community.period}</p>
                  )}
                  <p className={styles.communitySummary}>{community.summary}</p>
                </div>
                <a
                  className={styles.communityLink}
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {community.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className={styles.section}>
          <div className={styles.sectionIntro}>
            <p>Education</p>
            <h2>Academic foundation in computer science.</h2>
          </div>

          <div className={styles.educationCard}>
            <div className={styles.educationMain}>
              <p className={styles.educationLabel}>Undergraduate degree</p>
              <h3>{educationData.degree}</h3>
              <p className={styles.educationInstitution}>{educationData.institution}</p>
              <p className={styles.educationMeta}>
                {educationData.dates} <span aria-hidden="true">·</span>{" "}
                {educationData.location}
              </p>
            </div>
            <div className={styles.educationResult}>
              <span>CGPA</span>
              <strong>{educationData.cgpa}</strong>
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
          <div className={styles.sectionIntro}>
            <p>Contact</p>
            <h2>Let&apos;s build something meaningful together.</h2>
          </div>

          <div className={styles.contactLayout}>
            <div className={styles.contactIntro}>
              <p>
                I&apos;m open to software development opportunities, Flutter projects, product
                collaboration, and thoughtful engineering work.
              </p>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span>Email</span>
                  <a href="mailto:prosenjitswarnakar2002@gmail.com">
                    prosenjitswarnakar2002@gmail.com
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span>Location</span>
                  <strong>Naihati, West Bengal, India</strong>
                </div>
              </div>

              <div className={styles.contactLinks}>
                <a
                  href="https://github.com/PROSENJIT-RONI"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Prosenjit Swarnakar on GitHub"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/prosenjit-swarnakar-5baa59236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Prosenjit Swarnakar on LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/prosenjit_02"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Prosenjit Swarnakar on Instagram"
                >
                  Instagram
                </a>
                <a
                  href="https://linktr.ee/Prosenjit_Swarnakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Prosenjit Swarnakar on Linktree"
                >
                  Linktree
                </a>
                <a
                  href="https://www.facebook.com/prosenjit.swarnakar.393"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Prosenjit Swarnakar on Facebook"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div className={styles.contactPanel}>
              <ContactForm />
            </div>
          </div>

          <div className={styles.resumePanel}>
            <div>
              <p className={styles.resumeEyebrow}>Resume</p>
              <h3>Want to know more about my experience?</h3>
            </div>

            <div className={styles.resumeActions}>
              <a
                href="/resume/prosenjit-swarnakar-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumePrimary}
                aria-label="View Prosenjit Swarnakar resume in a new tab"
              >
                View Resume ↗
              </a>
              <a
                href="/resume/prosenjit-swarnakar-resume.pdf"
                download="Prosenjit-Swarnakar-Resume.pdf"
                className={styles.resumeSecondary}
                aria-label="Download Prosenjit Swarnakar resume PDF"
              >
                Download Resume ↓
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <p>Prosenjit Swarnakar</p>
          <span>Flutter Developer · Software Developer</span>
          <p className={styles.footerDescription}>
            Building thoughtful mobile experiences and practical product engineering work with a
            strong focus on Flutter, APIs, and user-centered implementation.
          </p>
          <a href="mailto:prosenjitswarnakar2002@gmail.com" className={styles.footerEmail}>
            prosenjitswarnakar2002@gmail.com
          </a>
        </div>

        <div className={styles.footerMeta}>
          <nav className={styles.footerNav} aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#achievements">Achievements</a>
            <a href="#community">Community</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className={styles.footerLinks}>
            <a
              href="https://github.com/PROSENJIT-RONI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Prosenjit Swarnakar on GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prosenjit-swarnakar-5baa59236/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Prosenjit Swarnakar on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/prosenjit_02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Prosenjit Swarnakar on Instagram"
            >
              Instagram
            </a>
            <a
              href="https://linktr.ee/Prosenjit_Swarnakar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Prosenjit Swarnakar on Linktree"
            >
              Linktree
            </a>
            <a
              href="https://www.facebook.com/prosenjit.swarnakar.393"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Prosenjit Swarnakar on Facebook"
            >
              Facebook
            </a>
          </div>

          <div className={styles.footerBottom}>
            <span>© {currentYear} Prosenjit Swarnakar</span>
            <a href="#top" className={styles.backToTop} aria-label="Back to top">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
