%==============================================================================
% MONTASSAR NAWARA — CV v3 (Backend + AI Version)
%==============================================================================

\documentclass[10pt, a4paper]{article}

\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage[a4paper, top=1.0cm, bottom=1.0cm, left=1.4cm, right=1.4cm]{geometry}
\usepackage{hyperref}
\usepackage[dvipsnames]{xcolor}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage{array}
\usepackage{tabularx}
\usepackage{fontawesome5}
\usepackage{microtype}
\usepackage{parskip}
\usepackage{ragged2e}

\definecolor{primary}{HTML}{1A1A2E}
\definecolor{accent}{HTML}{2563EB}
\definecolor{muted}{HTML}{6B7280}
\definecolor{ACCENT}{HTML}{2563EB}

\hypersetup{
  colorlinks=true,
  urlcolor=accent,
  linkcolor=accent,
  pdfauthor={Montassar Nawara},
  pdftitle={Montassar Nawara — Backend \& AI Engineer},
}

\pagestyle{empty}
\setlength{\parindent}{0pt}
\setlength{\parskip}{0pt}
\setlength{\tabcolsep}{0pt}

\titleformat{\section}
  {\normalsize\bfseries\color{primary}\uppercase}
  {}
  {0em}
  {}
  [{\color{accent}\titlerule[0.5pt]}]

\titlespacing{\section}{0pt}{6pt}{3pt}

\newcommand{\entryheader}[4]{%
  \begin{tabularx}{\linewidth}{@{}X r@{}}
    \textbf{\color{primary}#1} \textcolor{muted}{\small $\cdot$ #3} &
    \textcolor{muted}{\small #4} \\
    \textcolor{muted}{\small\itshape #2} & \\
  \end{tabularx}%
  \vspace{0pt}%
}

\newcommand{\projectheader}[2]{%
  \begin{tabularx}{\linewidth}{@{}X r@{}}
    \textbf{\color{primary}#1} &
    \textcolor{muted}{\small #2} \\
  \end{tabularx}%
  \vspace{0pt}%
}

\newenvironment{cvlist}{%
  \begin{itemize}[
    leftmargin=1.1em,
    itemsep=0.5pt,
    parsep=0pt,
    topsep=2pt,
    label={\color{accent}\small$\bullet$}
  ]
}{%
  \end{itemize}\vspace{1pt}%
}

\newcommand{\sectionvspace}{\vspace{3pt}}

%==============================================================================
\begin{document}

%------------------------------------------------------------------------------
% HEADER
%------------------------------------------------------------------------------
\begin{center}
  {\LARGE\bfseries\color{primary} MONTASSAR NAWARA}

  \vspace{3pt}

  {\normalsize\bfseries\color{accent}
    Backend \& AI Engineer
    {\color{muted}$\cdot$}
    Go
    {\color{muted}$\cdot$}
    Distributed Systems
    {\color{muted}$\cdot$}
    Machine Learning
    {\color{muted}$\cdot$}
    REST APIs
  }

  \vspace{5pt}

  \small
  \faEnvelope~\href{mailto:montasar.nawara@gmail.com}{montasar.nawara@gmail.com}
  \quad\textcolor{muted}{|}
  \faPhone~\href{tel:+21622403279}{+216 22 403 279}
  \quad\textcolor{muted}{|}
  \faGithub~\href{https://github.com/Montassarnawara}{github.com/Montassarnawara}
  \quad\textcolor{muted}{|}
  \faLinkedin~\href{https://www.linkedin.com/in/montassar-nawara-963a87350}{linkedin.com/in/montassar-nawara}
  \quad\textcolor{muted}{|}
  \faGlobe~\href{https://montassarnawara.me}{montassarnawara.me}
\end{center}

\vspace{3pt}

%------------------------------------------------------------------------------
% SUMMARY
%------------------------------------------------------------------------------
\section{Professional Summary}

Computer engineering student at ENSI (2nd year) with two hands-on internships
in high-performance backend engineering and applied AI systems.
Built a production-grade Go + Hazelcast REST API achieving \textbf{$<$5\,ms} response time,
and deployed an end-to-end ML pipeline on embedded hardware achieving
\textbf{$\sim$82\% F1-score}. Comfortable across the full stack — from
distributed backend architecture and API design to ML model integration and
cloud deployment. Seeking a backend or AI engineering internship to build
reliable, scalable, production-ready systems.

\sectionvspace

%------------------------------------------------------------------------------
% EXPERIENCE
%------------------------------------------------------------------------------
\section{Experience}

%--- DotCom en premier pour cette version ---
\entryheader
  {DotCom}
  {Nabeul, Tunisia}
  {Backend Development Intern}
  {Jul 2025 -- Aug 2025}

\begin{cvlist}
  \item Designed and built a \textbf{high-performance REST API} in Go backed by
        \textbf{Hazelcast} distributed in-memory data management — response time
        optimized to \textbf{$<$5\,ms} through in-memory preloading, local caching,
        and compilation tuning.
  \item Implemented \textbf{secure access control} mechanisms: API key validation,
        endpoint-level protection, and authentication middleware for production
        data exposure.
  \item Conducted systematic \textbf{load testing and benchmarking} under concurrent
        request scenarios to validate performance targets.
  \item Applied \textbf{Gob serialization} to minimize memory usage and reduce
        inter-node latency across distributed Hazelcast clusters.
  \item Containerized the full service stack with \textbf{Docker} for reproducible
        deployment and environment consistency.
\end{cvlist}

\textcolor{muted}{\small\textit{Stack:}} {\small Go $\cdot$ Hazelcast $\cdot$ Docker $\cdot$ fasthttp $\cdot$ Gob Serialization $\cdot$ REST APIs}

\vspace{5pt}

\entryheader
  {ENSI Research Laboratory}
  {Tunis, Tunisia}
  {AI \& Embedded Systems Research Intern}
  {Jun 2025 -- Aug 2025}

\begin{cvlist}
  \item Designed an end-to-end \textbf{ML pipeline for audio classification} achieving
        \textbf{$\sim$82\% F1-score} on verbal aggression detection — from DSP feature
        extraction to multi-class model training and embedded deployment.
  \item Developed \textbf{REST APIs} enabling real-time communication between the
        ML inference layer and an embedded video-capture system.
  \item Optimized inference for \textbf{ESP32} hardware constraints — reduced memory
        footprint and latency for production edge deployment.
\end{cvlist}

\textcolor{muted}{\small\textit{Stack:}} {\small Python $\cdot$ scikit-learn $\cdot$ Audio DSP $\cdot$ MFCC $\cdot$ REST APIs $\cdot$ ESP32}

\sectionvspace

%------------------------------------------------------------------------------
% PROJECTS
%------------------------------------------------------------------------------
\section{Selected Projects}

%--- Khayyata en premier pour cette version ---
\projectheader
  {Khayyata Platform — Full-Stack Artisan Marketplace}
  {\href{https://github.com/Montassarnawara}{github.com/Montassarnawara}}

\begin{cvlist}
  \item Built a \textbf{scalable full-stack marketplace} connecting customers with
        local artisans — high-performance \textbf{Go backend} with optimized query
        and caching layers.
  \item Deployed cloud infrastructure on \textbf{AWS} with global content delivery
        via \textbf{Cloudflare} CDN for low-latency asset serving worldwide.
  \item Designed a responsive \textbf{React} frontend with clean component
        architecture and API integration.
\end{cvlist}

\textcolor{muted}{\small\textit{Stack:}} {\small React $\cdot$ Go $\cdot$ AWS $\cdot$ Cloudflare $\cdot$ REST APIs}

\vspace{5pt}

%--- GOB Agent ---
\projectheader
  {GOB Agent — Embedded AI Voice Multi-Agent System}
  {\href{https://github.com/Montassarnawara}{github.com/Montassarnawara} $\cdot$ Private}

\begin{cvlist}
  \item Architected a \textbf{multi-agent AI system} integrating STT, intent
        classification, LLM inference, and TTS in a unified real-time pipeline
        on ESP32 — end-to-end latency under 50\,ms for classification.
  \item Engineered \textbf{offline-resilient execution}: command queuing, state
        synchronization, graceful degradation under poor connectivity.
  \item Mobile companion app in \textbf{React + Capacitor} for Android with
        wake-word detection and real-time device control via GPIO.
\end{cvlist}

\textcolor{muted}{\small\textit{Stack:}} {\small ESP32 $\cdot$ Python $\cdot$ STT/TTS $\cdot$ LLM Agents $\cdot$ React $\cdot$ Capacitor $\cdot$ Android $\cdot$ REST APIs}

\vspace{5pt}

%--- KINDR ---
\projectheader
  {KINDR — Real-Time NLP Toxicity Detection \& Rewriting}
  {\href{https://github.com/Montassarnawara/KINDR-GROUP}{github.com/Montassarnawara/KINDR-GROUP}}

\begin{cvlist}
  \item Built a \textbf{FastAPI backend} exposing a \texttt{/rewrite} endpoint
        integrating Detoxify ML classification and Groq/Llama LLM rewriting —
        returns toxicity score, label, and rewritten output in a single call.
  \item Deployed as a \textbf{Chrome Extension} (Manifest V3) with live page
        monitoring; React/TypeScript dashboard with analytics and gamification.
\end{cvlist}

\textcolor{muted}{\small\textit{Stack:}} {\small Python $\cdot$ FastAPI $\cdot$ Detoxify $\cdot$ Groq/Llama $\cdot$ NLP $\cdot$ Chrome Extension $\cdot$ React $\cdot$ TypeScript}

\vspace{5pt}

%--- Portfolio ---
\projectheader
  {montassarnawara.me — Backend \& AI Portfolio}
  {\href{https://montassarnawara.me}{montassarnawara.me}}

Personal portfolio covering backend architecture patterns, ML integration,
and embedded AI deployment with annotated code examples.

\sectionvspace

%------------------------------------------------------------------------------
% SKILLS
%------------------------------------------------------------------------------
\section{Technical Skills}

\vspace{2pt}

{\small
\begin{tabularx}{\textwidth}{@{}>{\bfseries\color{primary}}l X@{}}

Backend \& Systems &
\, Go  FastAPI $\cdot$ REST APIs \\
& \, Hazelcast $\cdot$ Distributed Systems $\cdot$ Docker \\ \\

AI \& ML  &
scikit-learn $\cdot$ TensorFlow/Keras $\cdot$ LLMs $\cdot$ NLP \\
& Audio DSP $\cdot$ MFCC $\cdot$ Computer Vision $\cdot$ pandas \\ \\

Programming &
Python $\cdot$  Go $\cdot$ C $\cdot$ C++ \\
& JavaScript $\cdot$ Java $\cdot$ PHP $\cdot$ Assembler x86/ARM \\ \\

Web &
React $\cdot$ TypeScript $\cdot$ Capacitor \\
& HTML/CSS $\cdot$ Tailwind CSS \\ \\

DevOps \& Cloud &
Docker $\cdot$ Git/GitHub $\cdot$ Linux/Bash \\
& AWS $\cdot$ Google Colab \\ \\

Embedded \& IoT &
ESP32 $\cdot$ Arduino $\cdot$ Real-Time Systems \\
& GPIO $\cdot$ Sensors $\cdot$ Actuators \\ \\

Databases &
PostgreSQL $\cdot$ MySQL $\cdot$ PL/SQL \\ \\

Engineering &
SOLID $\cdot$ Agile/Scrum $\cdot$ UML $\cdot$ LaTeX $\cdot$ Documentation \\

\end{tabularx}
}

\sectionvspace

%------------------------------------------------------------------------------
% RESEARCH
%------------------------------------------------------------------------------
\section{Research \& Publications}

\textbf{AI-Based Energy and Water Optimization for Sustainable Agriculture:
A Multi-Model Intelligent System} \hfill
\textcolor{muted}{\small Submitted $\cdot$ 2025}

\vspace{2pt}
{\small Proposed a multi-model AI architecture combining predictive ML models for
irrigation scheduling and energy optimization in smart agricultural systems.}

\sectionvspace

%------------------------------------------------------------------------------
% CERTIFICATIONS
%------------------------------------------------------------------------------
\section{Certifications}

\vspace{2pt}
{\small
Machine Learning Fundamentals $\cdot$
AI Fundamentals $\cdot$
MLOps Fundamentals $\cdot$
Containerization \& Virtualization $\cdot$
RAG with OpenAI (Azure)
}

\sectionvspace

%------------------------------------------------------------------------------
% EDUCATION
%------------------------------------------------------------------------------
\section{Education}

\entryheader
  {National School of Computer Science (ENSI)}
  {Manouba, Tunisia}
  {Engineering Degree in Computer Science — Ongoing}
  {2024 -- Present}

\vspace{2pt}

\entryheader
  {Preparatory Institute of Engineering of Nabeul}
  {Nabeul, Tunisia}
  {Preparatory Engineering — Mathematics \& Physics}
  {2021 -- 2024}

\sectionvspace

%------------------------------------------------------------------------------
% ACTIVITIES
%------------------------------------------------------------------------------
\section{Activities \& Affiliations}

\vspace{2pt}
{\small
\textbf{Member} — ENSI Robotics Club \quad\textcolor{muted}{|}
\textbf{Member} — ECPC Club (Competitive Programming) \quad\textcolor{muted}{|}
\textbf{Organizing Team} — ENSI Forum 19\textsuperscript{th} Ed. \quad\textcolor{muted}{|}
\textbf{Participant} — DataCamp AI Impact Meeting
}

\sectionvspace

%------------------------------------------------------------------------------
% LANGUAGES
%------------------------------------------------------------------------------
\section{Languages}

\vspace{2pt}
{\small
\textbf{Arabic} — Native \quad\textcolor{muted}{|}
\textbf{French} — Intermediate \quad\textcolor{muted}{|}
\textbf{English} — Intermediate \quad\textcolor{muted}{|}
\textbf{Italian} — Basic
}

\vspace{6pt}

%------------------------------------------------------------------------------
% FOOTER
%------------------------------------------------------------------------------
\begin{center}
  \textcolor{muted}{\footnotesize
    References available upon request \quad $\cdot$ \quad
    \href{https://montassar.me}{montassar.me} \quad $\cdot$ \quad
    \href{https://github.com/Montassarnawara}{github.com/Montassarnawara}
  }
\end{center}

\end{document}