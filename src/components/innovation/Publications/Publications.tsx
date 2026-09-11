"use client";

import { useState } from "react";

import "./Publications.css";

type PublicationType = "faculty" | "student";

const facultyConference = [
  {
    no: 1,
    topic:
      "The Visual Assistant - Image-to-Speech Generator",
    authors:
      "Amrit Raj; Sanchita Ghosh; Bharat Gupta",
    venue:
      "7th International Conference for Convergence in Technology (I2CT), Pune, Maharashtra",
  },
  {
    no: 2,
    topic:
      "A Novel Handoff Algorithm for 5G",
    authors:
      "Prithwijit Mukherjee, Sanchita Ghosh, Anisha Halder Roy",
    venue:
      "International Conference on Computers and Devices for Communication",
  },
  {
    no: 3,
    topic:
      "Predictive Analysis for Financial Forecasting - Past and Present",
    authors:
      "Partha Sarathi Paul, Dr. Rajendrani Mukherjee",
    venue: "-",
  },
  {
    no: 4,
    topic:
      "Secure Blockchain: Assessing Specific Security Threats",
    authors:
      "Ananya, G., Priyanjali, D., Baisakhi, D., Abhishek, D.",
    venue:
      "Lecture Notes on Data Engineering and Communications Technologies",
  },
  {
    no: 5,
    topic:
      "A Unique Approach for Detection and Removal of Key Loggers",
    authors:
      "Kedia, M.K., Das, B.",
    venue:
      "Lecture Notes on Data Engineering and Communications Technologies",
  },
  {
    no: 6,
    topic:
      "Deep Learning Approaches to Improve Effectiveness and Efficiency for Time Series Prediction",
    authors:
      "Ali, D., Tiwari, N., Das, B., Bhanja, S., Das, A.",
    venue:
      "Lecture Notes on Data Engineering and Communications Technologies",
  },
  {
    no: 7,
    topic:
      "IoT-Blockchain Integration: The Way Ahead",
    authors:
      "Ray, P.P., Bhargavi, Das, B., Das, A.",
    venue:
      "Lecture Notes on Data Engineering and Communications Technologies",
  },
  {
    no: 8,
    topic:
      "An Analysis of Energy Consumption of Blockchain Mining and Techniques to Overcome It",
    authors:
      "Eshani, G., Rajdeep, D., Shubhankar, R., Baisakhi, D.",
    venue:
      "Lecture Notes on Data Engineering and Communications Technologies",
  },
  {
    no: 9,
    topic:
      "A Critical Review on Quantum Cryptography",
    authors:
      "P. Roy, S. Sahoo, A.K. Mandal, I. Basu",
    venue:
      "Journal of Quantum Computing",
  },
  {
    no: 10,
    topic:
      "Offline Signature Verification System using Ensemble Learning",
    authors:
      "Avijit Bose, Aniket Paul, Debanjan Bhattacharya, Dipannita Ghosh Sneha, Satyajit Chakrabarti",
    venue: "AdComSys 2024",
  },
  {
    no: 11,
    topic:
      "A Food Supply Chain for Internet of Health Things using Blockchain",
    authors:
      "Puja Das, Amrita Haldar, Moutushi Singh, and Deepsubhra Guha Roy",
    venue: "ICNSBT 2023",
  },
  {
    no: 12,
    topic:
      "A Blockchain-Based Secure Approach to Access Genomic Data using Smart Contracts",
    authors:
      "Puja Das, Moutushi Singh, Kajari Sur",
    venue: "DoSIER 2023",
  },
  {
    no: 13,
    topic:
      "An Innovative Deep-Learning Approach for Classifying Ayurvedic Medicinal Plants",
    authors:
      "Puja Das, Rakhi Bharadwaj, Moutushi Singh",
    venue:
      "International Conference on Science of Rudraksh-2023",
  },
  {
    no: 14,
    topic:
      "Early Prediction of Cataract using Convolutional Neural Network",
    authors:
      "Shuvam Chakraborty, Susovan Jana",
    venue:
      "IEEE Devices for Integrated Circuit (DevIC), 2023",
  },
  {
    no: 15,
    topic:
      "An Integrated Framework for Smart Monitoring of Orange Orchard",
    authors:
      "Shuvam Chakraborty, Susovan Jana",
    venue:
      "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech) - IEMENTech2023",
  },
  {
    no: 16,
    topic:
      "A Secure Text Steganography Using Randomized Mathematical Functions and LSB",
    authors:
      "Sakyojit Banerjee, Samanawaya Datta, Dipanjan Ghosh, Susovan Jana",
    venue:
      "7th International Conference on Electronics, Materials Engineering & Nano-Technology (IEMENTech) - IEMENTech2024",
  },
  {
    no: 17,
    topic:
      "The Future of IoT and IoT Authentication",
    authors:
      "Kajari Sur, Pallab Maity, Indranil Mukhopadhyay",
    venue: "IEM ECON 2023",
  },
  {
    no: 18,
    topic:
      "Pose, Expression, Illumination Invariant 3D Face Recognition based on Transfer Learning",
    authors:
      "Koushik Dutta, Vishesh Mohanty, Animesh Dutta, Aritra Biswas, Rohan Sutradhar, Prathama Sarkar, Ondrej Krejcar, and Debotosh Bhattacharjee",
    venue:
      "2nd International Conference on Data, Electronics and Computing (ICDEC-2023)",
  },
  {
    no: 19,
    topic:
      "Prediction of S-Palmitoylation Sites in the Male/Female Mouse using Protein Language Model",
    authors:
      "Tapas Chakroborty, Anirban Das, Soumyendu Sekhar Bandyopadhyay, Anup Kumar Halder, Jakub Wlodarczyk, and Subhadip Basu",
    venue:
      "4th International Conference on Frontiers in Computing and Systems (COMSYS-2023)",
  },
];

const facultyJournal = [
  {
    no: 1,
    topic:
      "Robotics in Medical Domain: The Future of Surgery, Healthcare and Imaging",
    authors:
      "Anisha Halder Roy, Sanchita Ghosh, Bharat Gupta",
    journal:
      "Wireless Personal Communications",
    volume: "132(4)",
    pages: "2885-2903",
    indexing: "SCI, SCOPUS",
  },
  {
    no: 2,
    topic:
      "Exploring Appropriate ERP Framework towards Indian Small and Medium Enterprises using Decision Tree",
    authors:
      "Dr. Sanchita Ghosh, Avik Basu",
    journal:
      "International Journal of Business Intelligence and Data Mining",
    volume: "21",
    pages: "4",
    indexing: "Scopus",
  },
  {
    no: 3,
    topic:
      "An Integrated Framework for Quality Evaluation of Fruits and Vegetable Store Located in the Supermarket Under Utopian Environment",
    authors:
      "Susovan Jana, Bijan Sarkar, Ranjan Parekh, Surajit Nath",
    journal:
      "International Journal of Industrial Engineering: Theory, Applications, and Practice",
    volume: "30",
    pages: "51-66",
    indexing: "SCIE, SCOPUS",
  },
  {
    no: 4,
    topic:
      "Efficient Data Mining Model for Question Retrieval and Question Analytics using Semantic Web Framework in Smart E-Learning Environment",
    authors:
      "Subhabrata Sengupta, Anish Banerjee, Satyajit Chakrabarti",
    journal:
      "International Journal of Emerging Technologies in Learning",
    volume: "17",
    pages: "4-17",
    indexing: "Scopus",
  },
  {
    no: 5,
    topic:
      "Relevant Influence of Semantic Web Framework on Smart E-Learning Environment",
    authors:
      "Subhabrata Sengupta, Anish Banerjee, Satyajit Chakrabarti",
    journal:
      "International Journal of Emerging Technologies in Learning",
    volume: "Vol. 16 Issue 17",
    pages: "p177-190",
    indexing: "-",
  },
  {
    no: 6,
    topic:
      "Accuracy Enhancement of Epileptic Seizure Detection: A Deep Learning Approach with Hardware Realization of STFT",
    authors:
      "Sai Manohar Beeraka, Abhash Kumar, Mustafa Sameer, Sanchita Ghosh & Bharat Gupta",
    journal:
      "Circuits, Systems, and Signal Processing",
    volume: "41",
    pages: "461–484",
    indexing: "SCI",
  },
  {
    no: 7,
    topic:
      "An Innovative Approach of Selecting Cloud Provider through Service Level Agreements",
    authors:
      "Aveek Basu, Dr. Sanchita Ghosh, Dr. Sraboni Dutta",
    journal:
      "International Journal of Business Information Systems",
    volume: "-",
    pages: "-",
    indexing: "Scopus",
  },
  {
    no: 8,
    topic:
      "Exploring Appropriate ERP Framework towards Indian Small and Medium Enterprises using Decision Tree",
    authors:
      "Aveek Basu, Dr. Sanchita Ghosh, Dr. Sraboni Dutta",
    journal:
      "International Journal of Business Intelligence and Data Mining",
    volume: "-",
    pages: "-",
    indexing: "Scopus",
  },
  {
    no: 9,
    topic:
      "Analysing the Cloud Efficacy by Fuzzy Logic",
    authors:
      "Aveek Basu, Dr. Sanchita Ghosh, Dr. Sraboni Dutta",
    journal:
      "International Journal of Business Information Systems",
    volume: "-",
    pages: "-",
    indexing: "Scopus",
  },
  {
    no: 10,
    topic:
      "MLWR-2PAKA: A Hybrid Module LearningWithRounding-Based Authenticated Key Agreement Protocol for Two-Party Communication",
    authors:
      "Swagatam Basu, Kübra Seyhan, SK Hafizul Islam, Sedat Akleylek",
    journal:
      "IEEE Systems Journal (Early Access)",
    volume: "-",
    pages: "6093-6103",
    indexing: "IEEE, SCOPUS",
  },
  {
    no: 11,
    topic:
      "Collaborative Data Gathering and Recharging using Multiple Mobile Vehicles in Wireless Rechargeable Sensor Network",
    authors:
      "Rupayan Das, Dinesh Dash",
    journal:
      "International Journal of Communication Systems",
    volume: "-",
    pages: "1-26",
    indexing: "SCIE, SCOPUS",
  },
  {
    no: 12,
    topic:
      "Integral Cryptanalysis: A New Key Determination Technique for 3-phase Kuznyechik Encryption",
    authors:
      "Rupayan Das et al.",
    journal:
      "Engineering Research Express, IOP Science",
    volume: "5",
    pages: "1-11",
    indexing: "ESCI, SCOPUS",
  },
  {
    no: 13,
    topic:
      "Joint On-demand Data Gathering and Recharging by Multiple Mobile Vehicles in Delay Sensitive WRSN using Variable Length GA",
    authors:
      "Rupayan Das, Dinesh Dash",
    journal:
      "Computer Communication, Elsevier",
    volume: "204",
    pages: "130-146",
    indexing: "SCIE, SCOPUS",
  },
  {
    no: 14,
    topic:
      "Chromatographic Method Development for Simultaneous Determination of Serotonin, Melatonin, and L-tryptophan: Mass Transfer Modeling, Chromatographic Separation Factors, and Method Prediction by Artificial Neural Network",
    authors:
      "Dipshikha Tamili, Susovan Jana, Paramita Bhattacharjee",
    journal:
      "Journal of Chemometrics",
    volume: "-",
    pages: "-",
    indexing: "SCI",
  },
  {
    no: 15,
    topic:
      "Exploring PBCA Rules for One and Two Fixed Points",
    authors:
      "Baisakhi Das, Mamata Dalui, Mousumi Saha, Kasturi Ghosh, Nilanjana Das and Biplab K Sikdar",
    journal:
      "Journal of Complex Systems",
    volume: "-",
    pages: "-",
    indexing: "ESCI, SCOPUS",
  },
  {
    no: 16,
    topic:
      "SSKA: Secure Symmetric Encryption Exploiting Kuznyechik Algorithm for Trustworthy Communication",
    authors:
      "Rupayan Das, Angshuman Khan, Rajeev Arya, Boykuziev Ilkhom, Abdurakhimov Bakhtiyor, Nuriddin Safoyev and Zarif Khudoykulov",
    journal:
      "International Journal of System Assurance Engineering and Management, Springer",
    volume: "-",
    pages: "-",
    indexing: "ESCI, SCOPUS",
  },
  {
    no: 17,
    topic:
      "A Proximal Policy Optimization with Curiosity Algorithm for Virtual Drone Navigation",
    authors:
      "Rupayan Das, Angshuman Khan, Gunjan Paul",
    journal:
      "Engineering Research Express, IOP Science",
    volume: "-",
    pages: "-",
    indexing: "Scopus",
  },
  {
    no: 18,
    topic:
      "Block-A-City: An Agricultural Application Framework using Blockchain for Next Generation Smart Cities",
    authors:
      "Puja Das, Moutushi Singh, Dimitrios A. Karras and Deepsubhra Guha Roy",
    journal:
      "IETE Journal of Research",
    volume: "-",
    pages: "-",
    indexing: "Scopus",
  },
  {
    no: 19,
    topic:
      "Blockchain for Healthcare using Deep Learning",
    authors:
      "Puja Das, Moutushi Singh",
    journal:
      "Journal of Multimedia Information System",
    volume: "17(2)",
    pages: "121-130",
    indexing: "SCI",
  },
  {
    no: 20,
    topic:
      "Modelling of InAs Nanowire and MOSFET under Phonon Emission and Absorption by using NEGF Formalism",
    authors:
      "Kaushik Mazumdar, Subindu Saha, Sk Rejuan Ali",
    journal:
      "Superlattices and Microstructures",
    volume: "150",
    pages: "106758",
    indexing: "-",
  },
  {
    no: 21,
    topic:
      "FuzzyPPI: Large-Scale Interaction of Human Proteome at Fuzzy Semantic Space",
    authors:
      "Anup Kumar Halder, Soumyendu Sekhar Bandyopadhyay, Witold Jedrzejewski, Subhadip Basu, Jacek Sroka",
    journal:
      "IEEE Transactions on Big Data (IF: 7.2)",
    volume: "-",
    pages: "1-12",
    indexing: "-",
  },
];

const studentConference = [
  {
    no: 1,
    topic:
      "Early Prediction of Cataract using Convolutional Neural Network",
    authors: "Shuvam Chakraborty, Susovan Jana",
    venue: "DevIC 2023",
  },
  {
    no: 2,
    topic:
      "An Integrated Framework for Smart Monitoring of Orange Orchard",
    authors: "Shuvam Chakraborty, Susovan Jana",
    venue: "IEMENTech2023",
  },
  {
    no: 3,
    topic:
      "A Secure Text Steganography Using Randomized Mathematical Functions and LSB",
    authors:
      "Sakyojit Banerjee, Samanawaya Datta, Dipanjan Ghosh, Susovan Jana",
    venue: "IEMENTech2023",
  },
  {
    no: 4,
    topic:
      "A Secure Softwarized Blockchain-based Federated Health Alliance for Next Generation IoT Networks",
    authors:
      "Puja Das, Moutushi Singh and Deepsubhra Guha Roy",
    venue:
      "IEEE Globecom Workshops (GC Wkshps)",
  },
  {
    no: 5,
    topic:
      "A Food Supply Chain for Internet of Health Things using Blockchain",
    authors:
      "Puja Das, Amrita Haldar, Moutushi Singh, and Deepsubhra Guha Roy",
    venue: "ICNSBT 2023",
  },
  {
    no: 6,
    topic:
      "A blockchain-based secure approach to access genomic data using smart contracts",
    authors:
      "Puja Das, Moutushi Singh, Kajari Sur",
    venue: "DoSIER 2023",
  },
  {
    no: 7,
    topic:
      "An Innovative Deep-Learning approach for classifying Ayurvedic Medicinal",
    authors:
      "Puja Das, Rakhi Bharadwaj, Moutushi Singh",
    venue:
      "International Conference on Science of Rudraksh-2023",
  },
  {
    no: 8,
    topic:
      "The Visual Assistant - Image-to-Speech Generator",
    authors:
      "Amrit Raj, Sanchita Ghosh, Bharat Gupta",
    venue:
      "2023 IEEE 3rd International Conference on Sustainable Energy and Future Electric Transportation (SEFET)",
  },
];

const studentJournal = [
  {
    no: 1,
    topic:
      "Relevant Influence of Semantic Web Framework on Smart E-Learning Environment",
    authors:
      "Subhabrata Sengupta, Anish Banerjee, Satyajit Chakrabarti",
    journal:
      "International Journal of Emerging Technologies in Learning",
    volume: "Vol. 16 Issue 17",
    pages: "177-190",
  },
  {
    no: 2,
    topic:
      "Data Mining Model for Question Retrieval and Question Analytics using Semantic Web Framework in Smart E-Learning Environment",
    authors:
      "Anish Banerjee, Subhabrata Sengupta",
    journal:
      "International Journal of Emerging Technologies in Learning",
    volume: "17",
    pages: "4 - 17",
  },
];

export default function Publications() {

  const [selected, setSelected] =
    useState<PublicationType | null>(null);

  return (
    <div className="publications-wrapper">

      {/* Header */}

      <div className="publications-heading">

        <span>
          RESEARCH CONTRIBUTIONS
        </span>

        <h2>
          Publications
        </h2>

        <p>
          Explore research publications contributed by
          faculty members and students.
        </p>

      </div>


      {/* Buttons */}

      <div className="publication-buttons">

        <button
          type="button"
          className={
            selected === "faculty"
              ? "publication-button active"
              : "publication-button"
          }
          onClick={() => setSelected("faculty")}
        >
          Faculty Publications
        </button>

        <button
          type="button"
          className={
            selected === "student"
              ? "publication-button active"
              : "publication-button"
          }
          onClick={() => setSelected("student")}
        >
          Student Publications
        </button>

      </div>


      {/* Tables */}

      {selected && (
        <div className="publication-results">

          {selected === "faculty" && (
            <>
              <h3>
                Faculty: Conference Publications
              </h3>

              <div className="publication-table-wrapper">

                <table className="publication-table">

                  <thead>
                    <tr>
                      <th>Sl. No.</th>
                      <th>Topic of Publication</th>
                      <th>Authors</th>
                      <th>Conference Name</th>
                    </tr>
                  </thead>

                  <tbody>

                    {facultyConference.map((item) => (
                      <tr key={item.no}>
                        <td>{item.no}</td>
                        <td>{item.topic}</td>
                        <td>{item.authors}</td>
                        <td>{item.venue}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>


              <h3>
                Faculty: Journal Publications
              </h3>

              <div className="publication-table-wrapper">

                <table className="publication-table">

                  <thead>
                    <tr>
                      <th>Sl. No.</th>
                      <th>Topic of Publication</th>
                      <th>Authors</th>
                      <th>Journal Name</th>
                      <th>Volume</th>
                      <th>Pages</th>
                      <th>Indexing</th>
                    </tr>
                  </thead>

                  <tbody>

                    {facultyJournal.map((item) => (
                      <tr key={item.no}>
                        <td>{item.no}</td>
                        <td>{item.topic}</td>
                        <td>{item.authors}</td>
                        <td>{item.journal}</td>
                        <td>{item.volume}</td>
                        <td>{item.pages}</td>
                        <td>{item.indexing}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>
            </>
          )}


          {selected === "student" && (
            <>
              <h3>
                Students: Conference Publications
              </h3>

              <div className="publication-table-wrapper">

                <table className="publication-table">

                  <thead>
                    <tr>
                      <th>Sl. No.</th>
                      <th>Topic of Publication</th>
                      <th>Authors</th>
                      <th>Conference Name</th>
                    </tr>
                  </thead>

                  <tbody>

                    {studentConference.map((item) => (
                      <tr key={item.no}>
                        <td>{item.no}</td>
                        <td>{item.topic}</td>
                        <td>{item.authors}</td>
                        <td>{item.venue}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>


              <h3>
                Students: Journal Publications
              </h3>

              <div className="publication-table-wrapper">

                <table className="publication-table">

                  <thead>
                    <tr>
                      <th>Sl. No.</th>
                      <th>Topic of Publication</th>
                      <th>Authors</th>
                      <th>Journal Name</th>
                      <th>Volume</th>
                      <th>Pages</th>
                    </tr>
                  </thead>

                  <tbody>

                    {studentJournal.map((item) => (
                      <tr key={item.no}>
                        <td>{item.no}</td>
                        <td>{item.topic}</td>
                        <td>{item.authors}</td>
                        <td>{item.journal}</td>
                        <td>{item.volume}</td>
                        <td>{item.pages}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>
            </>
          )}

        </div>
      )}

    </div>
  );
}