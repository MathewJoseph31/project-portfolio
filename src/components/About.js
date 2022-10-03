import React from "react";

import "../css/About.css";

function About() {
  return (
    <div className="about">
      <img
        alt="profile pic"
        src={require(`../assets/Mathewphoto1.jpg`)}
        className="about__image"
      />
      <main className="about__description">
        Mathew Joseph is a Software Professional based in Syracuse, NY, USA. He
        is currently a Founding Software Engineer at Scuoler.com. Prior to this,
        he held positions such as Lead Data Engineer, ETL/Application developer,
        Web Technologist in Syracuse, New York (2017-2022). Prior to this, he
        was a Post Doctoral Fellow at the Computer Science & Engineering (CSE)
        department at Indian Institute of Technology (IIT) Bombay (IITB), Mumbai
        as part of project XDATA. He completed his PhD in Information Technology
        from DISI, University of Trento, Italy in April, 2015 and worked in
        FBK-IRST, Trento, Italy during his PhD. Some of his
        interests/competencies are - Web Development, Javascript, HTML, CSS,
        Node JS, Express JS, React JS, Postgresql, Snowflake Cloud
        Datawarehouse, SSIS, Matillion ETL, Oracle PL/SQL, PostgreSQL, MS SQL
        Server 2017 SSIS, MySQL-Workbench, Talend ETL tool, AWS S3/Lambda, Java,
        .Net, Data Warehousing/Integration, Dimensional Modeling etc. He also
        has R&D experience as a project associate in the FBK-IRST, Trento,
        Italy. He completed his Masters in Technology (M.Tech) in Cyber Security
        from Amrita University, India in 2008. He is also an ambassador for his
        alma mater, University of Trento, Italy.
      </main>
    </div>
  );
}

export default About;
