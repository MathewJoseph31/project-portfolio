import React from "react";

import partialMark from "../assets/partialMarking.png";
import mcq from "../assets/mcq.png";

import "../css/Project.css";

function Project(props) {
  return (
    <div className="Project">
      <section>
        <h3>Scuoler LMS for Schools/Universities</h3>
        <strong>Link:</strong>{" "}
        <a href="https://scuoler.com">https://scuoler.com</a>
        <br />
        <strong>Technologies:</strong> HTML, CSS, Javascript, React, Node,
        Express, Rest APIs, PostgreSQL, Sockets.IO, Web RTC, Fontawsome,
        Material UI
        <br />
        <strong>Projects Description</strong> Scuoler is learning management
        system (LMS) for education environments. Being nostalgic of long years
        spent in academia brought the desire to develop this App (from Scratch).
        Existing tools such as Moodle, Blackboard, Canvas etc. are built using
        old technologies and has sev- eral drawbacks. We implemented game based
        techniques with realtime video calling, screensharing features to better
        engagement and collaboration of students and teachers. Feature for
        automatically grading student tests and quizes. Textual indexing,
        dynamic search feature was implemented using Generalized Inverted Index
        (GIN), Stemming supported in PostgreSQL. Chat feature implemented using
        Sockets.IO, Web RTC libraries. Frontend in Html, Css, React, Backend
        using Node, Express JS, Security using Json Web tokens (JWT), bcrypt,
        crypto-js, Morgan logging library. Database in PostgreSQL. Hired/managed
        couple of developers for the project.
        <iframe
          src="https://www.youtube.com/embed/mv6OLu7okKI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <hr />
      <section>
        <h3>Business Intelligence Cloud platform</h3>
        <strong>Link:</strong>{" "}
        <a href="https://www.raymourflanigan.com">
          https://www.raymourflanigan.com
        </a>
        <br />
        <strong>Technologies:</strong> HTML, CSS, Javascript, React, Node,
        Webpack, Snowflake Cloud Datawarehouse, SQL Server Integration/Reporting
        Services, Matillion ETL, Dimensional Modeling, ETL, SQL, Datamigration,
        Oracle PL/SQL, Datawarehousing, Tableau (basic knowledge), Amazon S3
        Cloud store, AWS Lambda, Toad for Oracle, Oracle 8i/10g, MS SQL Server
        2017, Transact SQL, Python stack, Perl, Docker containers
        <br />
        <strong>Projects Description:</strong> The project involved building a
        cloud based Business Intelligence (BI) platform from scratch. Being one
        of the founding members, tasks involved designing and imple- menting the
        cloud based data warehouse using Snowflake/Amazon S3 using dimensional
        modeling, star schema architecture for efficient data processing,
        creating the ETL specification document and the logical model that maps
        the existing DB fields to the fields in the target schema. BI report-
        ing/visualization and analytics. Implementing ETL packages, Change Data
        Capture (CDC) schemes using PLSQL triggers, the integration layer,
        extending and modifying the existing Oracle PL/SQL ERP system called
        GERS, writing PL/SQL procedures and MS Transact SQL functions, packages,
        jobs, SQL plus reports to enable the integration. Building proof of
        concept (POC) visualization screens using Tableau and Sql Server
        Reporting Services. Implemented jobs for data migration from existing
        legacy 8i/10g database (backend of the GERS ERP System of Raymour and
        Flanigan sales system) and other source databases in MS SQL Server using
        SSIS/Matillion jobs scheduled on the SQL server agent. Gained expertise
        in batch extract, incremental/lambda extract using CDC tables using
        sequence number/load time stamp. Writing regexp based pattern matching
        algorithms in PLSQL/Perl for syntactic approximate keyword based
        searching. Building lambda functions using .Net/Python on AWS Cloud
        platforms such as AWS Lambda. Once the BI platform was operational,
        focused on creating Web Apps using Web Technologies (HTML, CSS,
        Javascript, React JS, JSX, Bootstrap UI, Jquery, Webpack bundler, Node
        JS) over ASP.net controllers to interact/update data in the
        datawarehouse in order to mitigate manual processes. Designed and
        implemented several UI Screens for maintaining the data tables in the
        datawarehouse.
      </section>
      <hr />
      <section>
        <h3>XData</h3>
        <strong>Link:</strong>{" "}
        <a href="https://www.cse.iitb.ac.in/infolab/xdata/">
          https://www.cse.iitb.ac.in/infolab/xdata/
        </a>
        <br />
        <strong>Technologies:</strong> Java, JSP, JQuery, Html, CSS, SQL, JSQL
        parser, Dhtml - Xchart/tree JS library, PostgreSQL, Subversion, Git -
        Github, Gitlab
        <br />
        <strong>Projects Description:</strong> The XData project aims at
        building an automated SQL query grading software tool for verifying
        student/programmer written SQL queries against a SQL query provided by
        Instructor/Tester, which is assumed to be correct. Full stack
        development for the project in Java/JEE, HTML, CSS, PostgreSQL. Use of
        formal verification techniques like satisfiability module theory (SAT)
        techniques for SQL query verification. Also used information retrieval
        techniques such a Edit distance similarity to find semantic similarity
        of SQL queries. Reimplementing the query processing module, extending
        the JSQL parser to support queries having nested with clauses, natural
        outer joins, array overlap/containment operators. Extended query
        (pre)processing module by removing redundant tables in SQL queries,
        (outer) joins, nonrecursive With clause elimination, conversion of
        selection/having clause predicates to a standard form where &gt;, &lt;
        operators are converted to less than equal to, great than equal to
        operators by changing the values of the associated operands depending on
        the precision of the corresponding attributes, support the ORDER BY
        clauses and the distinction of subqueries that have ALL/ANY
        quantification.
        <img src={partialMark} alt="Partial Marking Interface" />
      </section>
      <hr />
      <section>
        <h3>Contextualized Knowledge Repository</h3>
        <strong>Link:</strong>{" "}
        <a href="https://www.fbk.eu/en/">https://www.fbk.eu/en/</a>
        <br />
        <strong>Technologies:</strong> Java/J2EE (Struts, Swing, JGraph, Apache
        Solr), Eclipse, Tomcat, Subversion, Apache Ant, OWL/RDF/SPARQL, Sesame
        rdf4J graph database(DB) library, Owlim graph DB library, JAWS Wordnet
        API, OWL API graph DB library, Apache Jena graph DB library
        <br />
        <strong>Projects Description:</strong> The project was initiated for
        building a framework for modeling and repre- senting context in graph
        shaped data formats such as RDF/OWL/XML. Also implement efficiently
        storage/search/querying of contextualized data. Developing the core API
        and UI interfaces using Java Swing, Struts, Servlets, Apache Solr,
        Tomcat and visualizing the stored data using charting, visualization API
        (JGraph) for analysis. Assisted in implemented the module that indexes
        RDF files onto an Apache Solr server, which is then used for keyword
        search. An RDF File is scanned for entities (potentially any
        RDF:Resource), and for each entity, fields such as RDF:Description,
        RDF:Comment, RDF:Label, its type - the information of whether it is a
        class, property, or an individual, its unique id (URI), its provenance -
        the name of the source file in which appears are used to form a single
        Solr document that is added to the Solr Server. Indexed document server
        can be keyword searched leveraging the advanced search features of Solr
        that includes stemming using porter’s algorithm, removal of delimiters,
        stopwords, duplicates, case conversion, whitespace removal. Keyword
        expansion was enabled using expanding the search keywords using
        synonyms, hypernyms, and hyponyms from the wordnet dictionary.
        Experimentation with large datasets, tab- ulation, documenting,
        visualization of obtained results ( some KPIs were average chase
        computation time, membership detection time, and query response time).
        Developed various techniques and pro- cedures for deductive closure
        computation of graphs with extended Datalog+- rules (forall-existential
        rules). Research efforts led to the development of a novel
        contextualized RDF/OWL system, called a (unrestricted) quad-system, on
        which complexity of query answering is Undecidable in the most general
        case. Developed less expressive fragments called safe, csafe, and
        cguarded quad-systems, for which combined complexity of query entailment
        is 3EXPTIME-complete, 2EXPTIME-complete, and 2EXPTIME respectively.
        Various lower bound complexities were obtained by reduction of the word
        problem of a double exponentially and single exponentially space bounded
        alternating turing machine (ATM) respectively. <br />
        <img src={mcq} alt="Partial Marking Interface" />
      </section>
      <hr />
      <section>
        <h3>Multilingual Graph Databases</h3>
        <strong>Link:</strong>{" "}
        <a href="https://www.dfki.de/en/web">https://www.dfki.de/en/web</a>
        <br />
        <strong>Technologies:</strong> Java, Sesame rdf4J graph DB library,
        Apache Jena, OWLIM Graph DB library
        <br />
        <strong>Projects Description:</strong> The project was focused on
        building a platform for the storage/querying of knowledge in
        heterogeneous (multiple) knowledge representation languages (OWL, RDF,
        Datalog etc.). Experimentation with large datasets, visualization of
        obtained results (closure size), using graph visualization package using
        tikz library. Collaborated in developing a semantics called ‘reduct-
        semantics’ for approximating an OWL ontology as an RDF graph. Using
        reduct-semantics, forward reasoning can be done on OWL ontologies as the
        deductive closure is guaranteed to be finite. The system was implemented
        and tested on industry strength RDF and OWL ontologies.
      </section>
      <hr />
    </div>
  );
}

export default Project;
