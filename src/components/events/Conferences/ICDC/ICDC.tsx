import { 
  LuSparkles, 
  LuCpu, 
  LuBrain, 
  LuCloud, 
  LuShieldCheck, 
  LuVideo, 
  LuGlobe, 
  LuPresentation, 
  LuCalendar
} from "react-icons/lu";
import "./ICDC.css";

export default function ICDC({ hideHeader = false }: { hideHeader?: boolean }) {
  const highlights = [
    {
      icon: LuPresentation,
      title: "Insightful Invited Talks",
      desc: "Delivered by world-renowned researchers, academicians, and industry pioneers."
    },
    {
      icon: LuSparkles,
      title: "Innovative Technical Sessions",
      desc: "Peer-reviewed paper presentations highlighting breakthrough research and novel algorithms."
    },
    {
      icon: LuVideo,
      title: "Hybrid Event Format",
      desc: "Seamless physical and virtual interactive sessions enabling global collaboration."
    },
    {
      icon: LuGlobe,
      title: "Global Participation",
      desc: "Delegates, researchers, and keynote speakers from premier institutions worldwide."
    }
  ];

  const tracks = [
    {
      icon: LuBrain,
      title: "AI And Robotics",
      desc: "Machine Learning, Deep Learning, Autonomous Systems, Computer Vision, and Neural Networks.",
      tag: "Track 01"
    },
    {
      icon: LuCpu,
      title: "Image Processing And NLP",
      desc: "Computer Vision, Pattern Recognition, Natural Language Processing, and Computational Linguistics.",
      tag: "Track 02"
    },
    {
      icon: LuCloud,
      title: "Cloud Computing And Big Data Analytics",
      desc: "Distributed Systems, Cloud Architecture, Edge Computing, Data Mining, and Analytics.",
      tag: "Track 03"
    },
    {
      icon: LuShieldCheck,
      title: "Cyber Security, Blockchain And IoT",
      desc: "Network Security, Cryptography, Smart Contracts, Embedded Systems, and Internet of Things.",
      tag: "Track 04"
    }
  ];

  return (
    <section className="icdc-section">
      <div className="icdc-container">

        {/* HERO / HEADER */}
        {!hideHeader && (
          <div className="icdc-header">
            <span className="icdc-badge">
              <LuCalendar className="inline-block mr-1 text-sm" /> INTERNATIONAL CONFERENCE
            </span>

            <h1>
              ICDC
            </h1>

            <p className="icdc-subtitle">
              International Conference on Computational Intelligence, Data Science and Cloud Computing
            </p>
          </div>
        )}

        {/* MAIN CONTENT GRID: IMAGE + ABOUT WRITEUP */}
        <div className="icdc-content">
          <div className="icdc-image-wrapper">
            <div className="icdc-image-card">
              <img
                src="/images/ICDC.jpg"
                alt="ICDC - International Conference on Computational Intelligence, Data Science and Cloud Computing"
                className="icdc-img"
              />
              <div className="icdc-image-overlay">
                <span className="icdc-img-tag">IEM-ICDC Conference</span>
              </div>
            </div>
          </div>

          <div className="icdc-writeup">
            <span className="icdc-writeup-tag">ABOUT THE EVENT</span>

            <h2>
              Enticing Interest in Next-Gen Technologies
            </h2>

            <p>
              International Conference on Computational Intelligence, Data Science and Cloud Computing is an endeavour in enticing interest for Computational Intelligence and Data Science applications in diverse domains.
            </p>

            <p>
              As the world is moving towards industry 4.0, Computational Intelligence, Data Science and Cloud Computing are becoming more and more relevant in our society in all possible ways.
            </p>

            <p>
              The most substantial new findings about AI and Robotics, Image processing and NLP, Cloud Computing and big data analytics as well as in Cyber security, Blockchain and IoT and various allied fields will be presented in the three-day event.
            </p>
          </div>
        </div>

        {/* OFFICIAL CALL FOR PAPERS POSTER SECTION */}
        <div className="icdc-poster-section">
          <div className="icdc-section-title">
            <span>OFFICIAL ANNOUNCEMENT</span>
            <h3>Call for Papers &amp; Conference Poster</h3>
          </div>

          <div className="icdc-poster-card">
            <div className="icdc-poster-image-container">
              <img 
                src="/images/ICDC2.jpg" 
                alt="IEM-ICDC Call for Papers Official Poster" 
                className="icdc-poster-img"
              />
            </div>

            <div className="icdc-poster-info">
              <span className="icdc-poster-badge">SUBMISSIONS OPEN</span>
              <h2>IEM-ICDC 2027</h2>
              <p className="icdc-poster-desc">
                5th International Conference on Computational Intelligence, Data Science and Cloud Computing. Organized by Dept. of Information Technology &amp; Dept. of CSE, IEM Kolkata.
              </p>

              <div className="icdc-poster-dates">
                <h4>Important Dates</h4>
                <ul>
                  <li><strong>Dec 10, 2026:</strong> Deadline for full paper submission</li>
                  <li><strong>Feb 04, 2027:</strong> Acceptance Notification</li>
                  <li><strong>Feb 10, 2027:</strong> Paper Registration Deadline</li>
                  <li><strong>Feb 20, 2027:</strong> Camera Ready Submission</li>
                  <li><strong>Mar 02, 2027:</strong> Presentation Submission</li>
                </ul>
              </div>

              <div className="icdc-poster-actions">
                <a 
                  href="https://easychair.org/conferences/?conf=iemicdc2027" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icdc-btn-primary"
                >
                  Submit Paper (EasyChair)
                </a>
                <a 
                  href="https://iemicdc.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icdc-btn-secondary"
                >
                  Official Website &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS / EVENT FEATURES */}
        <div className="icdc-features-section">
          <div className="icdc-section-title">
            <span>KEY HIGHLIGHTS</span>
            <h3>Event Characteristics</h3>
          </div>

          <div className="icdc-highlights-grid">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="icdc-highlight-card">
                  <div className="icdc-icon-box">
                    <IconComp />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TRACKS & TOPICS */}
        <div className="icdc-tracks-section">
          <div className="icdc-section-title">
            <span>CONFERENCE TRACKS</span>
            <h3>Major Tracks and Topics</h3>
          </div>

          <div className="icdc-tracks-grid">
            {tracks.map((track, idx) => {
              const TrackIcon = track.icon;
              return (
                <div key={idx} className="icdc-track-card">
                  <div className="icdc-track-header">
                    <span className="icdc-track-tag">{track.tag}</span>
                    <div className="icdc-track-icon">
                      <TrackIcon />
                    </div>
                  </div>
                  <h4>{track.title}</h4>
                  <p>{track.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}