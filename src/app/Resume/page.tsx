"use client";
import React from "react";
import styles from "./resume.module.css";
import { DiGithubBadge } from "react-icons/di";
import Link from "next/link";
function App() {
  const downloadResume = () => {
    // You can add the download functionality here
    alert("Downloading your resume...");
  };
  const downloadPdf = () => {
    // Replace the URL with the actual PDF file URL you want to download
    alert("Downloading your cv das...");
    const pdfUrl = 'https://drive.google.com/file/d/1Ww3M0HSc65x_AdyW-umlXtL_naWziEil/view?usp=sharing';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Shubham_Das_Cv.pdf';
    link.click();
  };
  return (
    <section className={styles.section}>
      <div className={styles.resume_heading}>My Resume</div>
      <div className={styles.resume}>
        <div className={styles.left_section}>
          <div className={styles.profile_picture}>
            <img className={styles.img} src={process.env.NEXT_PUBLIC_IMG_KEY} />
          </div>
          <div className={styles.contact_info}>
            <h2 className={styles.name}>Shubham Das</h2>
            <p>Email: shubham78das@gmail.com</p>
            <p>
              LinkedIn:{" "}
              <a className={styles.a} href="https://www.linkedin.com/in/shubham-das-03554023b/" target="_blank">
                Shubham DAS
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a className={styles.a} href="https://github.com/Das0078" target="_blank">
                Das0078
              </a>
            </p>
            <p>Superset ID: 4535160</p>
          </div>
          <div className={styles.academic_info}>
            <h2 className={styles.h2}>Academic Performance</h2>
            <p>Adamas University</p>
            <p>Degree: Master of Computer Application</p>
            <p>CGPA: 9.19</p>
          </div>
          <a
            href="/das_cv1.pdf"
            className={styles.download_button}
            onClick={downloadResume}
            download
          >
            Download Resume
          </a>
        </div>

        <div className={styles.right_section}>
          <div className={styles.work_experience}>
            <h2 className={styles.section_heading}>Work Experience</h2>
            <div className={styles.experience_item}>
              <strong className={styles.strong}>Web Developer</strong>
              <br />
              LIRICA TECH SOLUTION
              <br />
              Date: AUG 2023 - AUG 2023
              <br />
              Description: get the certified trainng of front-end development
              projects with backend development, implemented responsive web
              designs, and collaborated with the development team.
            </div>
          </div>

          <div className="projects">
            <h2 className={styles.section_heading}>Projects</h2>
            <div className={styles.project_item}>
              <strong className={styles.strong}>Portfolio Website</strong>
              <br />
              Description: Developed a personal portfolio website using Next.js
              and showcased my work, skills, and contact information.<br/>
              <Link href={"https://github.com/Das0078/das_portfolio.git"} target="_blank">
                <DiGithubBadge color={"#184e77"} size={30} />
              </Link>
            </div>
            <div className={styles.project_item}>
              <strong className={styles.strong}>e_mentor-online portal for mentorship</strong>
              <br />
              Description: Developing an robust MERN stack app where mentor and
              mentees can communicate in an enhanced way. Providing the users an
              in-build chat system,chat bot (openai) and video caling system
              that can serves you a better environment. and also performance
              analyzer where mentor can easily observe their mentees progress
              and health with better UI.<br/>
              <Link href={"https://github.com/Das0078/E_mentor.git"} target="_blank">
                {" "}
                <DiGithubBadge color={"#184e77"} size={30} />
              </Link>
            </div>
            <div className={styles.project_item}>
              <strong className={styles.strong}>Video Calling App</strong>
              <br />
              Description: Building an MERN stack video calling app where users
              can enjoy group or one to one calling with in-build chat system
              also where user can store their notes in database along with their
              histories of calls.<br/>
              <Link href={"https://github.com/Das0078/SRAS_VIDEO_CONF.git"} target="_blank">
                {" "}
                <DiGithubBadge color={"#184e77"} size={30} />
              </Link>
            </div>
            <div className={styles.project_item}>
              <strong className={styles.strong}>Chat_PoP-Real time chat application</strong>
              <br />
              Description: creating a real time MERN stack chat application. The
              main feature of this app will be that it will provide a better way
              to store the chat in database. Where the authorised user can
              export and import the chats in better json readable format.
              <br/>
              <Link href={"https://github.com/Das0078/Chat_Pop"} target="_blank">
                {" "}
                <DiGithubBadge color={"#184e77"} size={30} />
              </Link>
            </div>
            <div className={styles.project_item}>
              <strong className={styles.strong}>Erail-Online railway ticket booking system</strong>
              <br />
              Description:By using HTML5, CSS3 (bootstrap), JAVASCRIPT and PHP,
              MySql i have builded a system where user can easily book there
              tickets by selectig there source and destination (in India) and
              availability of trains. User can also check there recent history
              of there booking.<br/>
              <Link href={"https://github.com/Das0078/Railway_ticket_booking_system"} target="_blank"><DiGithubBadge color={"#184e77"} size={30} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
