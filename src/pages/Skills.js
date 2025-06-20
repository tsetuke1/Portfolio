const Skills = () => {
  const skills = ["React", "Node.js", "MongoDB", "SQL", "C#", "Azure", "Power Platform"];
  return (
    <section style={{ padding: "2rem" }}>
      <h2>My Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {skills.map((skill, index) => (
          <span key={index} style={{ background: "#eee", padding: "0.5rem 1rem", borderRadius: "20px" }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
export default Skills;
