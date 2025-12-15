import experienceData from "@/app/data/experience";
import ExperienceItem from "./ExperienceItem";
import "@/public/css/experience.css";

export default function Experience() {
  return (
    <section id="experience" className="py-5 bg-light border-bottom">
      <div className="container py-5">

        <div className="row mb-5">
          <div className="col text-center">
            <h2 className="fw-bold">Work Experience</h2>
            <p className="text-muted">
              Professional journey, leadership, and technical impact
            </p>
          </div>
        </div>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
  }
  