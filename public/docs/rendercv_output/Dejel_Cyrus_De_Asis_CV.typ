// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Dejel Cyrus De Asis",
  footer: context { [#emph[Dejel Cyrus De Asis -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in May 2026] ],
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
    month: 5,
    day: 11,
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

Computer Science student at the University of the Philippines building full-stack, AI-assisted, and real-time software systems focused on operational workflows, monitoring platforms, and automation.

Experienced with React, TypeScript, Node.js, PostgreSQL, Supabase, Expo, and cloud-assisted architectures using AWS and Microsoft Azure.

Built projects involving computer vision, cybersecurity, blockchain systems, dashboards, and mobile-to-cloud communication pipelines.

Hackathon champion and Hack4Gov awardee with hands-on experience in Linux-based development, API integration, cybersecurity labs, and systems-oriented software engineering.

== Achievements

#regular-entry(
  [
    #strong[Manobela Hackathon]

    - Champion for developing Manobela, a real-time driver monitoring system focused on drowsiness and distraction detection using computer-vision signals.

    - Designed and implemented a mobile-to-cloud monitoring pipeline using lightweight telemetry transmission and cloud-assisted processing.

  ],
  [
    Jan 2025

  ],
)

#regular-entry(
  [
    #strong[Hack4Gov]

    - Awardee and top-performing participant in Hack4Gov 2025 cybersecurity competition.

    - Competed in cybersecurity challenges involving network analysis, digital forensics, cryptography, web exploitation, and Linux-based investigation workflows.

  ],
  [
    Jan 2025

  ],
)

== Projects

#regular-entry(
  [
    #strong[#link("https://manobela.vercel.app")[Manobela]]

    - Developed a real-time driver monitoring pipeline processing facial landmark telemetry at approximately 15 FPS using computer-vision signals.

    - Built lightweight mobile-to-cloud communication workflows to reduce bandwidth usage and device-side processing overhead.

    - Integrated Microsoft Azure cloud-assisted computation for scalable real-time monitoring and analytics.

    - Implemented drowsiness and distraction detection using facial landmark analysis and real-time feedback systems.

  ],
  [
    Jan 2025 – Jan 2026

  ],
)

#regular-entry(
  [
    #strong[#link("https://project-hermes-drrm.vercel.app")[HERMES]]

    - Built a Hazard and Emergency Reporting, Monitoring, and Evaluation System for real-time disaster communication workflows.

    - Designed structured reporting pipelines capable of organizing incoming chat-based emergency reports into centralized monitoring dashboards.

    - Implemented low-connectivity communication support using Meta Messenger integration for areas with limited telco infrastructure.

  ],
  [
    Jan 2026

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/dejely/Scan-a-Delegate")[Scan a Delegate]]

    - Developed a blockchain-based voting platform focused on transparency and tamper-resistant vote tracking.

    - Implemented Solidity smart contracts and deployed testing workflows on the Ethereum Sepolia test network.

    - Explored decentralized identity verification and transparent election record management concepts.

  ],
  [
    Jan 2024 – Jan 2025

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

#strong[Languages:] Python, TypeScript, JavaScript, Java, C\/C++, SQL, Solidity

#strong[Frontend:] React, Expo, HTML, CSS

#strong[Backend & Databases:] Node.js, PostgreSQL, Supabase, Firebase, REST APIs

#strong[Cloud & DevOps:] AWS, Microsoft Azure, Docker, GitHub Actions

#strong[Cybersecurity:] Wireshark, Burp Suite, Nmap, Gobuster, Kali Linux, Autopsy, John the Ripper

#strong[AI & Automation:] OpenAI API, Claude API, Gemini API, Codex, Prompt Engineering, Workflow Automation

#strong[Tools:] Git, GitHub, Linux, VS Code, API Testing

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

    - Built web, mobile, and systems-oriented projects using React, TypeScript, JavaScript, Python, Java, C\/C++, Expo, Supabase, PostgreSQL, Firebase, and cloud platforms.

    - Designed projects involving computer vision, blockchain voting, budgeting tools, AI\/LLM implementation, cybersecurity, automation, dashboards, and full-stack development.

    - Worked with Git, GitHub, Linux environments, API integration, database design, debugging, and technical documentation.

  ],
  [
    Jan 2024 – present

    2 years 5 months

  ],
)

#regular-entry(
  [
    #strong[CTF Player and Cybersecurity Learner]

    - Participated in cybersecurity competitions and hands-on labs involving network analysis, digital forensics, cryptography, web exploitation, and Linux-based security workflows.

    - Used Wireshark, Autopsy, John the Ripper, Kali Linux, Debian Linux, Nmap, Gobuster, Burp Suite, and command-line utilities for investigation and security testing.

    - Developed practical understanding of vulnerability discovery, responsible testing, and defensive security concepts.

  ],
  [
    Jan 2024 – present

    2 years 5 months

  ],
)

#regular-entry(
  [
    #strong[National AI Student Challenge 2025 - AWS Regional LLM League]

    - Implemented and deployed LLM-supported workflows using AWS-based tools and cloud infrastructure.

    - Built foundational knowledge in AI systems, prompt-based applications, and cloud-supported LLM workflows.

  ],
  [
    Jan 2025 – May 2025

    5 months

  ],
)
