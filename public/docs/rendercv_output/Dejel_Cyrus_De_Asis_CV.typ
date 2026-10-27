// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Dejel Cyrus De Asis",
  footer: context { [#emph[Dejel Cyrus De Asis -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Oct 2026] ],
  locale-catalog-language: "en",
  page-size: "us-letter",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: true,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 79, 144),
  colors-headline: rgb(0, 79, 144),
  colors-connections: rgb(0, 79, 144),
  colors-section-titles: rgb(0, 79, 144),
  colors-links: rgb(0, 79, 144),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "Source Sans 3",
  typography-font-family-name: "Source Sans 3",
  typography-font-family-headline: "Source Sans 3",
  typography-font-family-connections: "Source Sans 3",
  typography-font-family-section-titles: "Source Sans 3",
  typography-font-size-body: 10pt,
  typography-font-size-name: 30pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.4em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: true,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: false,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: true,
  header-connections-display-urls-instead-of-usernames: false,
  header-connections-separator: "",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_partial_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.3em,
  sections-space-between-regular-entries: 1.2em,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0.2cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: true,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0cm,
  entries-highlights-bullet:  "•" ,
  entries-highlights-nested-bullet:  "•" ,
  entries-highlights-space-left: 0.15cm,
  entries-highlights-space-above: 0cm,
  entries-highlights-space-between-items: 0cm,
  entries-highlights-space-between-bullet-and-text: 0.5em,
  date: datetime(
    year: 2026,
    month: 10,
    day: 21,
  ),
)


= Dejel Cyrus De Asis

#connections(
  [#connection-with-icon("location-dot")[Negros Occidental, Philippines]],
  [#link("mailto:deasisdejel08@gmail.com", icon: false, if-underline: false, if-color: false)[#connection-with-icon("envelope")[deasisdejel08\@gmail.com]]],
  [#link("https://linkedin.com/in/Dejel-Cyrus-De-Asis", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[Dejel-Cyrus-De-Asis]]],
  [#link("https://github.com/dejely", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[dejely]]],
)


== Summary

Computer Science student at the University of the Philippines building full-stack, AI-assisted systems that turn operational workflows into automated, dashboard-driven platforms.

Built HERMES, a Supabase-backed reporting and monitoring platform that ingests chat-based reports through the Meta Messenger API and routes them into centralized role-based dashboards.

Experienced with API integrations, LLM workflows on AWS, real-time data pipelines, and cloud deployment; led DevOps and production shipping for a hackathon AI product within a 4-hour window.

Hackathon champion and runner-up who works independently or in teams, documents systems clearly, and designs for process consistency and scalability.

== Achievements

#regular-entry(
  [
    #strong[AI SUMMIT Reed Elsevier PH Hackathon 2026]

    - 1st runner-up with team Popcorn Prophets in the Reed Elsevier Philippines AI Summit hackathon.

    - Led DevOps and deployment, shipping an AI-powered product to production within a 4-hour development window.

  ],
  [
    October 2026

  ],
)

#regular-entry(
  [
    #strong[Quantum and Cybersecurity CTF Hackathon 2026]

    - Champion of the quantum-themed cybersecurity CTF.

    - Solved quantum problems that involved investigating qubit behavior.

    - Solved cryptography questions that involved quantum mechanics.

  ],
  [
    July 2026

  ],
)

#regular-entry(
  [
    #strong[TrackTech CSS Hackathon]

    - Champion for building Manobela, a real-time driver monitoring system focused on drowsiness and distraction detection using computer-vision signals.

    - Designed and implemented a mobile-to-cloud monitoring pipeline using lightweight telemetry transmission and cloud-assisted processing.

  ],
  [
    Jan 2025

  ],
)

#regular-entry(
  [
    #strong[Hack4Gov]

    - 1st runner-up and top-performing participant in Hack4Gov 2025 cybersecurity competition.

    - Competed in cybersecurity challenges involving network analysis, digital forensics, cryptography, web exploitation, and Linux-based investigation workflows.

  ],
  [
    Jan 2025

  ],
)

== Projects

#regular-entry(
  [
    #strong[#link("https://project-hermes-drrm.vercel.app")[HERMES]]

    - Built an internal-style operations platform with centralized dashboards for real-time incident intake, monitoring, and evaluation.

    - Automated the intake workflow by converting unstructured Messenger chat reports into structured records via API integration, reducing manual triage.

    - Designed the Supabase\/PostgreSQL data model and role-based access for coordinators and responders, with status tracking across the report lifecycle.

    - Enabled low-connectivity communication through Meta Messenger for areas with limited telco infrastructure.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[#link("https://sackto.vercel.app")[SACKTO IRPC]]

    - Built an operations platform for the Iloilo Rice Processing Complex covering online booking of drying and milling, palay selling with quotes, and rice purchasing with live pricing.

    - Added an SMS command interface (book, check status, get prices and quotes, cancel) so farmers without mobile data can use the same workflows.

    - Provided staff sign-in for internal operations, supporting scheduling and customer transactions in one system.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[#link("https://manobela.vercel.app")[Manobela]]

    - Architected a mobile-to-cloud pipeline processing facial landmark telemetry at \~15 FPS, with lightweight transmission to cut bandwidth and device load.

    - Built FastAPI services and Azure-backed processing for real-time drowsiness and distraction detection with live feedback and session insights dashboards.

    - Champion project of the TrackTech CSS Hackathon.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/dejely/Scan-a-Delegate")[Scan a Delegate]]

    - Developed a blockchain-based voting platform with tamper-resistant vote tracking and transparent record management.

    - Implemented Solidity smart contracts and test workflows on the Ethereum Sepolia network.

  ],
  [
  ],
)

== Education

#education-entry(
  [
    #strong[University of the Philippines], Computer Science

  ],
  [
    Miagao, Iloilo

    Aug 2024 – present

  ],
  degree-column: [
    #strong[BS]
  ],
)

#education-entry(
  [
    #strong[Dr. Vicente F. Gustilo Memorial National High School], Science, Technology, Engineering, and Mathematics

    - Conducted research on a semi-autonomous multi-sensory waste segregation robot capable of classifying hazardous, recyclable, biodegradable, and non-biodegradable waste.

  ],
  [
    Cadiz, Negros Occidental

    Dec 2022 – June 2024

  ],
  degree-column: [
    #strong[SHS]
  ],
)

== Skills

#strong[AI & Automation:] LLM workflows (AWS), prompt-based applications, API-driven automation, GitHub Actions, Messenger API bots

#strong[Backend, APIs & Data:] Supabase, PostgreSQL, Firebase, Node.js, FastAPI, REST APIs, webhooks, database design

#strong[Frontend & Dashboards:] React, TypeScript, Expo \/ React Native, HTML, CSS

#strong[Cloud & DevOps:] AWS, Microsoft Azure, Docker, Vercel, CI\/CD

#strong[Languages:] Python, TypeScript, JavaScript, Java, C\/C++, SQL, Solidity

#strong[Tools:] Git, GitHub, Linux, API Testing, technical documentation

== Certificates

#regular-entry(
  [
    #strong[#link("https://certificates.aisingapore.org/certificate-verification/36D9D57-36D9CF8-35E0DBC")[NAISC Certificate]]

    - Completed training related to AI, LLMs, and AWS-based implementation.

  ],
  [
    Singapore (Online)

    Jan 2025

  ],
)

#regular-entry(
  [
    #strong[#link("https://www.credly.com/badges/8dc5198b-69e0-46e7-b61f-6a9f401bb483/linked_in_profile")[Introduction to Cloud 101]]

    - Completed foundational training in AWS Cloud infrastructure, cloud services, and cloud computing concepts.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[#link("https://www.credly.com/badges/b215a3f2-99bd-4a5e-b3c9-cffeaf025bdb/linked_in_profile")[Introduction to AWS Security]]

    - Completed foundational training in AWS cloud security, including IAM and SIEM concepts.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[#link("https://www.credly.com/badges/e55b29ad-0b10-498a-8e92-db6f7b4f8df9/linked_in_profile")[ISC2 Candidate]]

    - Pursuing a cybersecurity Certificate to a COMPTIA Security+ transition certification

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[#link("https://www.linkedin.com/posts/dejel-cyrus-de-asis-9567172b0_im-happy-to-share-that-ive-obtained-a-new-activity-7459197931393368064-QHMg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErbWZIB_EGM2r85zRMA7_PSOjcokZk88Hw")[Software Architecture & System Design Foundations]]

    - Completed training in software architecture and system design foundations.

  ],
  [
  ],
)

== Experience

#regular-entry(
  [
    #strong[Independent Software Developer]

    - Built internal-style web and mobile tools (dashboards, budgeting, reporting, monitoring) with React, TypeScript, Python, Expo, Supabase, PostgreSQL, and Firebase.

    - Integrated third-party APIs and cloud services, designed relational schemas, and automated repetitive workflows end to end.

    - Wrote clear technical documentation and structured processes so projects could be handed off and extended.

  ],
  [
    Jan 2018 – present

    8 years 10 months

  ],
)

#regular-entry(
  [
    #strong[National AI Student Challenge 2025 - AWS Regional LLM League]

    - Implemented and deployed LLM-supported workflows using AWS-based tools and cloud infrastructure.

    - Built foundational knowledge in AI systems, prompt-based applications, and cloud-supported LLM workflows.

  ],
  [
  ],
)

#regular-entry(
  [
    #strong[CTF Player and Cybersecurity Learner]

    - Competed in cybersecurity competitions covering network analysis, forensics, cryptography, and web exploitation.

    - Conducted authorized security assessments of web systems, documenting risks and reporting through proper channels; this security-minded approach carries into safe API and data handling.

  ],
  [
    Jan 2024 – present

    2 years 10 months

  ],
)
