// Skills.jsx

import mockitoLogo from "../../assets/mockito-logo.png";
import assertjLogo from "../../assets/assertj-logo.png";
import junitLogo from "../../assets/junit-logo.png";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        tooltip:
          "A general-purpose, object-oriented programming language widely used for building enterprise-scale applications.",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        tooltip:
          "A high-level scripting language that powers interactivity and dynamic behavior on the web.",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        tooltip:
          "A server-side scripting language designed for web development and dynamic page generation.",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_sql.svg", // vendor-neutral colored SQL icon (vscode-icons, MIT licensed)
        tooltip:
          "A standard language for querying, manipulating, and managing data in relational database systems.",
      },
      {
        name: "VBA",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-original.svg",
        tooltip:
          "A Microsoft programming language used to automate tasks, build macros, and extend functionality within Excel and other Office applications.",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "Spring",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        tooltip:
          "A Java framework ecosystem including Spring Boot, Spring Security, and Spring Data JPA for building production-ready backend applications.",
      },
      {
        name: "React JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tooltip:
          "A JavaScript library for creating interactive user interfaces, especially single-page applications using reusable components.",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        tooltip:
          "A utility-first CSS framework used to rapidly build custom, responsive designs directly in markup.",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        tooltip:
          "An open-source relational database management system widely used for web applications.",
      },
      {
        name: "MS SQL Server",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        tooltip:
          "Microsoft's relational database management system used for storing and managing structured data.",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        tooltip:
          "A NoSQL document database that stores data in flexible, JSON-like documents.",
      },
    ],
  },
  {
    title: "Testing",
    skills: [
      {
        name: "JUnit",
        icon: junitLogo,
        tooltip:
          "A widely-used testing framework for writing and running unit tests in Java applications.",
      },
      {
        name: "Mockito",
        icon: mockitoLogo,
        tooltip:
          "A mocking framework for Java used to isolate and test components by simulating dependencies.",
      },
      {
        name: "AssertJ",
        icon: assertjLogo,
        tooltip:
          "A fluent assertion library for Java that makes test assertions more readable and expressive.",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        tooltip:
          "A platform for packaging applications and their dependencies into portable, consistent containers.",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        tooltip:
          "A distributed version control system for tracking changes in source code.",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        tooltip:
          "A cloud-based platform for hosting, collaborating on, and managing Git repositories.",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        tooltip:
          "An API platform used to build, test, and document HTTP requests during backend development.",
      },
      {
        name: "Swagger",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
        tooltip:
          "A tool for designing, building, documenting, and testing RESTful APIs using the OpenAPI specification.",
      },
    ],
  },
];

function SkillCard({ name, icon, IconComponent, textBadge, tooltip }) {
  return (
    <div
      className="
        group relative flex cursor-default flex-col items-center gap-3
        rounded border border-[var(--color-ink-dark)]/8 bg-[var(--color-white)]
        px-4 py-7 transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]
      "
    >
      {textBadge ? (
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[var(--color-ink)]/[0.06] text-[0.95rem] font-black tracking-tight text-[var(--color-ink)]">
          {textBadge}
        </div>
      ) : IconComponent ? (
        <IconComponent className="h-[54px] w-[54px] text-[var(--color-ink)]" />
      ) : (
        <img
          src={icon}
          alt={name}
          className="h-[54px] w-[54px] object-contain"
        />
      )}
      <p className="m-0 text-center text-[0.82rem] font-semibold text-[var(--color-ink)]">
        {name}
      </p>

      {/* Tooltip */}
      <div
        className="
          pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-10
          w-[200px] -translate-x-1/2 translate-y-1 rounded
          bg-[var(--color-ink)] px-3 py-[0.65rem] text-left text-[0.72rem]
          font-normal leading-[1.4] text-[var(--color-white)] opacity-0
          invisible transition-all duration-200
          group-hover:visible group-hover:-translate-y-0.5 group-hover:opacity-100
        "
      >
        {tooltip}
      </div>

      {/* Tooltip arrow */}
      <div
        className="
          pointer-events-none absolute bottom-full left-1/2 z-10
          -translate-x-1/2 translate-y-1 border-[6px] border-transparent
          border-t-[var(--color-ink-dark)] opacity-0 invisible
          transition-all duration-200
          group-hover:visible group-hover:-translate-y-0.5 group-hover:opacity-100
        "
      />
    </div>
  );
}

export default function SkillSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[var(--color-taste)]">
      <div className="container">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="mb-[0.6rem] text-[0.70rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] md:text-[0.78rem]">
            What I Work With
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.02em] text-[var(--color-ink)]">
            Skills
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-15 rounded bg-[var(--color-ink)]" />
        </div>

        {/* Categories */}
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="mx-auto mb-10 max-w-[350px] last:mb-0 md:max-w-[800px]"
          >
            <h3 className="mb-3 border-b border-[var(--color-ink-dark)]/10 pb-2 text-[0.85rem] font-bold uppercase tracking-[0.08em] text-[var(--color-ink)] md:mb-4 md:text-base">
              {category.title}
            </h3>

            <div className="mx-auto grid max-w-[800px] grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-5">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
