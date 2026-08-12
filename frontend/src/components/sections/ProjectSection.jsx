// Projects.jsx
import internfloPreview from "../../assets/images/projects/internflo/internfloprev.png";
import dentalPreview from "../../assets/images/projects/dentalcare/dentalprev.png";
import portfolioPreview from "../../assets/images/projects/portfolio/portfolioprev.png";
import {
  FaGithub,
  FaReact,
  FaPhp,
  FaDocker,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiSpring,
  SiMysql,
  SiGooglecloud,
  SiRedis,
  SiJsonwebtokens,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    image: dentalPreview,
    alt: "Dental Appointment System Preview",
    title: "Dental Appointment System",
    description:
      "Dental appointment system that enables clinics to manage patient records, schedule appointments, and streamline operations using a Spring ecosystem backend and React frontend. It features secure appointment booking, RESTful APIs, MySQL database integration, patient management, and Docker containerization for consistent deployment.",
    techStack: [
      { name: "Spring", icon: SiSpring },
      { name: "React", icon: FaReact },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Docker", icon: FaDocker },
    ],
    demoUrl: "https://dentalcare-appointment.vercel.app/",
    githubUrl: "https://github.com/rgrmlbn/Dental-Appointment-System",
    },
  {
    image: portfolioPreview,
    alt: "Portfolio Preview",
    title: "Portfolio",
    description:
      "A personal portfolio website built to showcase my skills, projects, and experience as a developer. Features a React and Tailwind CSS frontend with TanStack Query and Axios for data fetching, React Hook Form for validated contact submissions, and a Spring Boot backend with MySQL handling the contact form, containerized with Docker.",
    techStack: [
      { name: "Spring Boot", icon: SiSpring },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MySQL", icon: SiMysql },
      { name: "Docker", icon: FaDocker },
    ],
    demoUrl: "https://portfolio-roger-malabanan.vercel.app/",
    githubUrl: "https://github.com/rgrmlbn/portfolio",
  },
  {
    image: internfloPreview,
    alt: "Internflo Preview",
    title: "Internflo — Internship Portal",
    description:
      "Internflo is an internship portal connecting University of Caloocan City students with opportunities that match their courses and qualifications using Google Maps API and NLP. It features an OJT Monitoring System for advisors to track student internships and help students find roles aligned with their skills, capabilities, education, and company requirements.",
    techStack: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "PHP", icon: FaPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "Google Cloud", icon: SiGooglecloud },
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/rgrmlbn/Internflo-Capstone-Thesis-",
  },
];

function ProjectCard({
  image,
  alt,
  title,
  description,
  techStack,
  demoUrl,
  githubUrl,
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded border border-[var(--color-ink-dark)]/8 bg-[var(--color-white)] transition-all duration-[350ms] ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
      <img
        src={image}
        alt={alt}
        className="block aspect-video w-full cursor-zoom-in object-cover transition-opacity duration-150 hover:opacity-90"
      />

      <div className="flex flex-1 flex-col bg-[var(--color-white)] px-5 pb-6 pt-5 md:px-6 md:pb-[1.6rem] md:pt-[1.4rem] ">
        <h3 className="mb-2 font-[var(--font-display)] text-[1.05rem] font-bold text-[var(--color-ink)] md:text-[1.2rem]">
          {title}
        </h3>

        <p className="mb-3 text-[0.82rem] leading-[1.6] text-[var(--color-graph)] md:mb-4 md:text-[0.88rem] md:leading-[1.65]">
          {description}
        </p>

        <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2 md:mb-[1.2rem]">
          {techStack.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-[var(--color-muted)] md:text-[0.78rem]"
            >
              <Icon className="text-[0.95rem] md:text-[1.05rem]" />
              {name}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-[0.4rem] rounded border-none bg-[var(--color-ink)] px-4 py-[0.55rem] text-center font-[var(--font-body)] text-[0.72rem] font-bold uppercase tracking-[0.07em] text-[var(--color-white)] shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] md:px-4 md:py-[0.6rem] md:text-[0.78rem]"
          >
            <FaExternalLinkAlt className="shrink-0 text-[0.68rem] md:text-[0.72rem]" />
            View
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-[0.4rem] rounded border-2 border-[var(--color-ink-dark)] bg-transparent px-4 py-[0.55rem] font-[var(--font-body)] text-[0.72rem] font-bold uppercase tracking-[0.07em] text-[var(--color-ink-dark)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] md:px-4 md:py-[0.6rem] md:text-[0.78rem]"
          >
            <FaGithub className="shrink-0 text-[0.85rem] md:text-[0.95rem]" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-[var(--color-taste)] py-16 md:py-24">
      <div className="container">
        <div className="mb-14 text-center">
          <p className="mb-[0.6rem] text-[0.70rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] md:text-[0.78rem]">
            My Work
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.02em] text-[var(--color-ink)]">
            Projects
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-30 rounded bg-[var(--color-ink)]" />
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:max-w-[1200px] md:mx-auto md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
