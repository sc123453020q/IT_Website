import "./Event.css";

export default function Workshop01() {
  return (
    <section className="event-detail-section">
      <div className="event-detail-container">

        <div className="event-detail-header">
          <span>SEMINAR & WORKSHOP</span>

          <h1>
            Workshop 01
          </h1>

          <p>
            A practical learning experience designed to
            develop technical and professional skills.
          </p>
        </div>

        <div className="event-detail-content">

          <div className="event-detail-image">
            <div className="event-detail-image-placeholder">
              WORKSHOP IMAGE
            </div>
          </div>

          <div className="event-detail-writeup">
            <span>ABOUT THE EVENT</span>

            <h2>
              Learn. Build. Grow.
            </h2>

            <p>
              Write the complete information about the seminar
              or workshop here. Include the topic, speaker,
              date, venue and purpose of the event.
            </p>

            <p>
              Add information about the activities conducted,
              student participation and the knowledge gained
              during the session.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}