import "./TechTalk.css";

export default function TechTalk() {
  return (
    <section className="tech-talk-section">
      <div className="tech-talk-container">

        <div className="tech-talk-header">
          <span>TECH TALK</span>

          <h1>
            Tech Talk 01
          </h1>

          <p>
            An interactive session focused on technology,
            innovation and industry insights.
          </p>
        </div>

        <div className="tech-talk-content">

          <div className="tech-talk-image">
            <div className="tech-talk-image-placeholder">
              TECH TALK IMAGE
            </div>
          </div>

          <div className="tech-talk-writeup">
            <span>ABOUT THE SESSION</span>

            <h2>
              Knowledge Meets Innovation
            </h2>

            <p>
              Write the complete information about this tech
              talk here. Add the speaker details, topic,
              organization, date and key highlights.
            </p>

            <p>
              You can also describe the interaction between
              students and the speaker along with the major
              takeaways from the session.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}