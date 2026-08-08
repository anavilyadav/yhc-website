import styles from "@/app/appointment/appointment.module.css";

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "For All Patients",
    items: [
      "All current and recent blood test reports, scan reports, X-rays or biopsy reports",
      "A written list of ALL medicines you currently take — name, dose, and since when",
      "Previous consultation letters or specialist prescriptions",
      "A brief written timeline of your illness — when it started, how it progressed, what has been tried",
      "Family medical history — what conditions parents, grandparents and siblings have or had",
    ],
  },
  {
    title: "For Skin Disease Patients",
    items: [
      "Clear photographs of the affected skin areas — in natural daylight, without filters",
      "Photos showing earlier stages if the condition has changed over time",
      "Any biopsy or patch test results",
    ],
  },
  {
    title: "For Kidney / Renal Patients",
    items: [
      "Latest creatinine, urea, eGFR, uric acid blood reports",
      "24-hour urine protein reports if done",
      "Nephrologist's consultation notes",
    ],
  },
  {
    title: "For Children (Autism, Development, Genetics)",
    items: [
      "Birth history — normal delivery or C-section, birth weight, any complications",
      "Developmental milestone chart — when the child sat, walked, spoke first words",
      "School or therapist reports — speech therapist, occupational therapist, special educator",
      "Any genetic test reports — chromosomal analysis, specific gene tests",
    ],
  },
  {
    title: "For Women's Health Cases",
    items: [
      "Menstrual cycle history — regularity, pain, flow details",
      "Hormone blood test reports — FSH, LH, AMH, thyroid, prolactin if done",
      "Ultrasound reports — pelvic, transvaginal",
    ],
  },
];

export function PreparationChecklist() {
  return (
    <section className={styles.section} id="preparation">
      <div className="container">
        <div className={styles.sectionHeading}>
          <h2>Come Prepared — Get the Most From Your Consultation</h2>
          <p>
            The quality of your prescription depends directly on the quality
            of information we receive. Please bring or prepare the following
            before your consultation:
          </p>
        </div>
        <div className={styles.checklistGrid}>
          {GROUPS.map((group, index) => (
            <div
              className={styles.checklistGroup}
              key={group.title}
              // Odd number of groups (5) in a 2-column grid leaves the last
              // one stranded alone with an empty gap beside it — span it
              // full-width instead so the row reads intentionally.
              style={index === GROUPS.length - 1 ? { gridColumn: "1 / -1" } : undefined}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.emotionalNote}>
            <p>
              <strong>Important — what homeopathy asks that other doctors don&apos;t:</strong>{" "}
              Be prepared to talk about things that may seem unrelated to
              your medical condition — your sleep patterns, your food
              preferences and cravings, how you handle stress, your fears,
              your emotional responses to situations, and your general
              temperament. In classical homeopathy, these are medically
              essential — they help us find the remedy that matches YOU, not
              just your disease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
