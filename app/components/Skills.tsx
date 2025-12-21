"use client";

import { motion } from "framer-motion";

const SkillCard = ({ icon, title, skills }) => (
  <motion.div
    className="col-md-6 col-lg-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="card h-100 border-0 shadow-sm rounded-4 p-4">

      <div className="d-flex align-items-center gap-2 mb-3">
        <i className={`bi ${icon} text-primary fs-4`}></i>
        <h5 className="fw-semibold mb-0">{title}</h5>
      </div>

      {skills.map((skill, i) => (
        <div key={i} className="mb-3">
          <div className="d-flex justify-content-between small">
            <span>{skill.name}</span>
            <span className="text-muted">{skill.level}%</span>
          </div>
          <div className="progress" style={{ height: "6px" }}>
            <div
              className="progress-bar bg-primary"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}

    </div>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-5 border-bottom">
      <div className="container py-5">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Skills</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
            I build scalable, cloud-native applications with a strong focus on
            performance, reliability, and clean architecture.
          </p>
        </div>

        <div className="row g-4">

          {/* Frontend */}
          <SkillCard
            icon="bi-laptop"
            title="Frontend"
            skills={[
              { name: "HTML / CSS", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "React", level: 90 },
              { name: "Next.js", level: 85 },
              { name: "Bootstrap", level: 90 }
            ]}
          />

          {/* Backend */}
          <SkillCard
            icon="bi-server"
            title="Backend"
            skills={[
              { name: "Python", level: 90 },
              { name: "Java", level: 85 },
              { name: "PHP (Laravel)", level: 90 },
              { name: "Node.js", level: 80 },
              { name: "REST APIs", level: 95 }
            ]}
          />

          {/* Databases */}
          <SkillCard
            icon="bi-database"
            title="Databases"
            skills={[
              { name: "MySQL", level: 90 },
              { name: "MongoDB", level: 85 },
              { name: "Redis", level: 85 },
              { name: "Elasticsearch", level: 80 }
            ]}
          />

          {/* Cloud & DevOps */}
          <SkillCard
            icon="bi-cloud"
            title="Cloud & DevOps"
            skills={[
              { name: "AWS", level: 85 },
              { name: "Google Cloud", level: 80 },
              { name: "Docker", level: 80 },
              { name: "CI/CD", level: 85 },
              { name: "Linux", level: 90 }
            ]}
          />

          {/* Tools & Practices */}
          <SkillCard
            icon="bi-tools"
            title="Tools & Practices"
            skills={[
              { name: "Git & GitHub", level: 95 },
              { name: "System Design", level: 90 },
              { name: "Clean Architecture", level: 90 },
              { name: "Agile / Scrum", level: 85 },
              { name: "Mentoring & Code Review", level: 90 }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
