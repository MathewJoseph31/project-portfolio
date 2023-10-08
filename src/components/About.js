import React from "react";

import "../css/About.css";

function About(props) {
  return (
    <article className="about">
      <main className="about__main">
        <section className="about__main__image">
          <img alt="profile pic" src={require(`../assets/Mathewphoto1.jpg`)} />
        </section>
        <section className="about__main__description">
          Mathew Joseph is a Software Professional based in Long Grove, IL, USA.
          He is currently a Founding Software Engineer at{" "}
          <a
            href="https://scuoler.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scuoler.com
          </a>
          . Prior to this, he held positions such as Lead/Senior Application
          Developer in New York (2017-2022). Before that, he was a Post Doctoral
          Fellow at the{" "}
          <a
            href="https://www.cse.iitb.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Computer Science & Engineering (CSE)
          </a>{" "}
          department at{" "}
          <a
            href="https://www.iitb.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indian Institute of Technology (IIT) Bombay
          </a>{" "}
          (IITB), Mumbai as part of project XDATA. He completed his PhD in
          Information Technology from{" "}
          <a
            href="https://www.disi.unitn.it/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DISI
          </a>
          ,{" "}
          <a
            href="https://www.unitn.it/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Trento
          </a>
          , Italy in April, 2015 and worked in{" "}
          <a
            href="https://www.fbk.eu/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FBK-IRST
          </a>
          , Trento, Italy during his PhD. Some of his interests/competencies are
          - Backend development using Node JS/.Net/Java, Web Development using
          HTML, CSS, Javascript, Express JS, React JS, Database programming
          using - Postgresql, SQL Server, SSIS, Matillion, Talend, Oracle,
          PLSQL, Snowflake, MySQL-Workbench, MongoDB, Cloud Development using
          AWS Lambda, S3, SQS, SNS, Google cloud functions, pubsub, Data
          Warehousing/Integration. He also has R&D experience as a
          project/research associate in the{" "}
          <a
            href="https://www.fbk.eu/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FBK-IRST
          </a>
          , Trento, Italy. He completed his Masters in Technology (M.Tech) in
          Cyber Security from{" "}
          <a
            href="https://www.amrita.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amrita University
          </a>
          , India in 2008. He is also an{" "}
          <a
            href="https://iecs.unitn.it/international/ambassadors"
            target="_blank"
            rel="noopener noreferrer"
          >
            ambassador
          </a>{" "}
          for his alma mater,{" "}
          <a
            href="https://www.unitn.it/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Trento
          </a>
          , Italy.
        </section>
      </main>
    </article>
  );
}

export default About;
