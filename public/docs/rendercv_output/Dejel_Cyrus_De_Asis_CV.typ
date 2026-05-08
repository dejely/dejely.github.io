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
    day: 9,
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

Computer Science student at the University of the Philippines focused on building practical software systems, dashboards, automation workflows, and real-time applications for real-world operations.

Experienced in developing web and mobile applications using React, TypeScript, JavaScript, Node.js, Firebase, Supabase, PostgreSQL, Expo, AWS, and Microsoft Azure.

Uses tools such as Git, GitHub, Linux, VS Code, Docker basics, custom API webhooks, OpenAI, Claude, Gemini, and Codex to build, automate, test, document, and improve software workflows.

Applies cybersecurity, computer vision, cloud computing, AI\/LLM workflows, and QA-style thinking to create systems with clear logic, reliable data handling, and practical usability.

Champion and award-winning hackathon\/CTF participant, with achievements in Manobela Hackathon and Hack4Gov.

== Achievements

#regular-entry(
  [
    #strong[Manobela Hackathon]

    - Champion for developing Manobela, a real-time driver monitoring system focused on detecting drowsiness and distraction through computer-vision signals.

    - Contributed to the design and implementation of a mobile-to-cloud monitoring pipeline using lightweight data transmission and cloud-assisted processing.

  ],
  [
    Jan 2025

  ],
)

#regular-entry(
  [
    #strong[Hack4Gov]

    - 1st \/ awardee in Hack4Gov 2025.

    - Competed in cybersecurity challenges involving network analysis, digital forensics, cryptography, web exploitation, and Linux-based investigation workflows.

  ],
  [
    Jan 2025

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

#strong[Programming Languages:] Python, Java, C, C++, TypeScript, JavaScript, Solidity, SQL

#strong[Web and Mobile Development:] React, Expo, Node.js, Firebase, Supabase, PostgreSQL, REST APIs, HTML, CSS

#strong[Automation:] custom API webhooks, CI\/CD workflow automation, Google Workspace APIs

#strong[AI Integrations:] OpenAI, Claude API, Gemini, LLM workflows, Codex

#strong[Cloud and Infrastructure:] AWS, Microsoft Azure Cloud, Firebase, Supabase, PostgreSQL

#strong[Cybersecurity Tools:] Kali Linux, Debian Linux, Wireshark, Autopsy, John the Ripper, Nmap, Gobuster, Burp Suite

#strong[Development Tools:] Git, GitHub, Linux command line, VS Code, Docker basics, API testing tools

#strong[Field Knowledge:] Web development, mobile development, computer vision, cybersecurity, penetration testing fundamentals, blockchain technology, cloud computing, AI\/LLM implementation, automation workflows, dashboard development

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

    - Gained foundational knowledge of AWS Cloud infrastructure, cloud services, and cloud computing concepts.

  ],
  [
    Jan 2026

  ],
)

#regular-entry(
  [
    #strong[#link("https://www.credly.com/badges/b215a3f2-99bd-4a5e-b3c9-cffeaf025bdb/linked_in_profile")[Introduction to AWS Security]]

    - Trained on basic AWS cloud security, including IAM and SIEM tools.

  ],
  [
    Jan 2026

  ],
)

== Experience

#regular-entry(
  [
    #strong[CTF Player and Cybersecurity Learner]

    - Participated in cybersecurity competitions and hands-on labs involving network analysis, digital forensics, cryptography, web exploitation, and Linux-based security workflows.

    - Used tools such as Wireshark, Autopsy, John the Ripper, Kali Linux, Debian Linux, Nmap, Gobuster, Burp Suite, and command-line utilities for investigation and security testing.

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

    - Learned how large language models can be implemented, deployed, and integrated using AWS-based tools and cloud infrastructure.

    - Built foundational knowledge in AI systems, prompt-based applications, and cloud-supported LLM workflows.

  ],
  [
    Jan 2025 – May 2025

    5 months

  ],
)

#regular-entry(
  [
    #strong[Software Developer \/ Project Builder]

    - Built web, mobile, and systems-oriented projects using React, TypeScript, JavaScript, Python, Java, C\/C++, Expo, Supabase, PostgreSQL, Firebase, and cloud platforms.

    - Worked on projects involving computer vision, blockchain voting, budgeting tools, AI\/LLM implementation, cybersecurity, automation, dashboards, and full-stack development.

    - Comfortable working with Git, GitHub, Linux environments, API integration, database design, debugging, and project documentation.

  ],
  [
    Jan 2024 – present

    2 years 5 months

  ],
)

== Value Proposition

#strong[Custom Software Systems:] Builds practical web and mobile systems such as dashboards, reporting tools, monitoring platforms, finance tools, and workflow-based applications tailored to specific users or organizations.

#strong[Internal Tools and Dashboards:] Develops custom dashboards and data-staging interfaces using React, JavaScript, TypeScript, Node.js, Firebase, Supabase, and PostgreSQL to help organize information and improve operational workflows.

#strong[AI and Automation Workflows:] Uses LLM tools, API integrations, webhooks, moltworker, and Codex to explore automation for data processing, reporting, communication workflows, and repetitive operational tasks.

#strong[Real-Time and Cloud-Assisted Systems:] Works on projects involving real-time monitoring, mobile-to-cloud communication, computer vision, and cloud-assisted processing using tools such as Expo, AWS, Microsoft Azure, and Supabase.

#strong[Security-Aware Development:] Applies cybersecurity experience from CTFs and security labs to build with stronger awareness of data handling, access control, testing, and system reliability.

#strong[Reliable Data and System Logic:] Uses structured validation, QA-style testing, and Software framework workflows to improve accuracy, consistency, and reliability across software systems.

== Projects

#regular-entry(
  [
    #strong[Manobela]

    - Developed a real-time driver monitoring pipeline that processes mobile camera streams to detect drowsiness and distraction using computer-vision signals.

    - Utilized Microsoft Azure Cloud to optimize cloud-assisted computation and lightweight data transmission for computer-vision monitoring.

    - Designed the system with a focus on road safety, real-time feedback, and scalable mobile-to-cloud processing.

  ],
  [
    Jan 2025 – Jan 2026

  ],
)

#regular-entry(
  [
    #strong[HERMES]

    - Built HERMES, a Hazard and Emergency Reporting, Monitoring, and Evaluation System for real-time disaster communication and response coordination.

    - Designed the system as a communication control center that helps turn incoming reports or chat-based messages into organized emergency monitoring and evaluation workflows.

    - Built around no-signal\/no-telco subscription in mind. Able to transmit data to the database using Meta Messenger platform.

  ],
  [
    Jan 2026

  ],
)

#regular-entry(
  [
    #strong[Scan a Delegate]

    - Built a decentralized application for secure and transparent voting using blockchain technology.

    - Used Solidity smart contracts and deployed\/testing concepts on the Ethereum Sepolia test network.

    - Explored blockchain-based identity, voting transparency, and tamper-resistant record keeping.

  ],
  [
    Jan 2024 – Jan 2025

  ],
)

#regular-entry(
  [
    #strong[Derio]

    - Created a budgeting and finance-tracking tool for monitoring income and expenses from multiple sources.

    - Implemented graphing features to visualize financial activity and spending patterns.

    - Focused on making personal finance tracking easier through structured records and visual summaries.

  ],
  [
    Jan 2024

  ],
)
