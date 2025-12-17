"use client";

import { motion } from "framer-motion";

export default function ExperienceItem({ data }) {
  return (
    <motion.div
      className="timeline-item mb-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="timeline-dot"></span>

      <div className="card border-0 shadow-sm rounded-4 p-4 ms-3">

        {/* HEADER */}
        <div className="d-flex align-items-center mb-3 gap-3">
          <img
            src={data.logo}
            alt={data.company}
            width="48"
            height="48"
            className="rounded"
          />

          <div>
            <h5 className="fw-bold mb-0">{data.role}</h5>
            <span className="text-primary fw-semibold">
             <a href={data.web_url} className="text-decoration-none" target="_blank">{data.company}</a>
            </span>
          </div>
        </div>

        {/* META */}
        <div className="text-muted small mb-3">
          {data.period} • {data.location}
        </div>

        {/* SUMMARY */}
        <p className="mb-3">{data.summary}</p>

        {/* ACHIEVEMENTS */}
        <h6 className="fw-semibold">Key Achievements</h6>
        <ul className="mb-3">
          {data.achievements?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* TECH STACK */}
        <div className="d-flex flex-wrap gap-2">
          {data.tech.map((tech, i) => (
            <span
              key={i}
              className="badge bg-light text-dark border"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}