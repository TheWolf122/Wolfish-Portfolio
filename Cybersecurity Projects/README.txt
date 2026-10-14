# CYBERSECURITY PROJECTS
### Anna Tuite | Computer Science Portfolio

## OVERVIEW

This portfolio brings together focused cybersecurity projects exploring
security monitoring, application security, network analysis, developer
tooling, and file integrity. My goal is to understand how security problems
arise, build tools that help identify them, and clearly explain the evidence
behind a finding.

The projects use small, controlled demonstrations and synthetic data to make
their behavior understandable and reproducible. This README describes their
intended scope; individual project documentation will track implementation
progress, setup instructions, and results.

## PROJECTS

**1. WolfWatch - Suspicious Login Detector**

A Python tool designed to analyze synthetic authentication logs and flag
three patterns: repeated failures against one account, one IP address trying
many accounts, and a successful login following repeated failures.

Planned features include configurable detection rules and a Streamlit
dashboard. Each alert will explain its trigger, show supporting events, and
suggest questions for further investigation. Labeled scenarios will include
normal activity, suspicious activity, and a false-positive example.

Skills demonstrated: Data analysis, rule-based detection, evidence-based
investigation, and the evaluation of false positives. This project connects
my analytics experience with security monitoring.

**2. OnGuard - Vulnerable vs. Secure Web App**

A small local Flask/SQLite application designed to demonstrate SQL injection
in a search feature and show how parameterized queries address the flaw.

The walkthrough will compare the same input against vulnerable and secure
implementations, showing the results alongside the relevant code. Tests will
check that ordinary searches still work and that the demonstrated injection
attempt cannot change the intended query behavior after the fix.

Skills demonstrated: Understanding application vulnerabilities, tracing
user input through code, implementing a targeted defense, and verifying
behavior with tests.

**3. PackTrace - Network Traffic Investigator**

A Python analyzer designed to process saved Zeek JSON connection logs and
flag a source contacting many destination ports within a short time window.

An adjustable threshold and an activity timeline will make the detection
logic visible. Synthetic examples will compare ordinary connections with
scan-like behavior. Findings will identify activity worth investigating;
the pattern alone does not establish malicious intent.

Skills demonstrated: Networking fundamentals, time-based analysis,
interpretation of connection metadata, and careful communication of findings.

**4. SecretSniffer - Repository Secret Scanner**

A command-line tool designed to inspect local files for likely credentials,
including private-key headers, hardcoded password assignments, and selected
token patterns.

The planned scope includes three detection rules, excluded directories, an
allowlist, and a nonzero exit code when findings occur. Reports will redact
potential secrets while showing the filename, line number, and detection
reason. Dummy credentials and harmless lookalikes will support a pre-commit
hook demonstration.

Skills demonstrated: Pattern matching, command-line development, workflow
automation, responsible handling of sensitive output, and false-positive
management. Detection coverage and limitations will be documented explicitly.

**5. TrackThePrints - File Integrity Investigator**

A tool designed to record file paths, sizes, and SHA-256 hashes, then compare
a folder against that baseline to identify added, modified, and deleted files.

Two commands will support baseline creation and verification. A fictional
incident scenario will include before-and-after folders and a short report
explaining the detected changes. Results depend on a trusted baseline and
cannot establish who changed a file.

Skills demonstrated: Cryptographic hashing, file-system operations,
reproducible comparison, and precise interpretation of integrity evidence.

## SKILLS AND FOUNDATION

Together, these projects are designed to demonstrate:

- Translating security questions into clear, testable program behavior.
- Processing logs, network metadata, source files, and file-system evidence.
- Connecting a finding to the specific data or code that supports it.
- Comparing expected behavior with suspicious or vulnerable behavior.
- Building focused tools with understandable configuration and output.
- Accounting for false positives, incomplete coverage, and uncertainty.
- Explaining both a security issue and the reasoning behind its mitigation.

## CONNECTION TO MY PROFESSIONAL GOALS

As a computer science student interested in cybersecurity, I want to combine
my programming foundation and analytics experience with practical security
problem-solving. These projects give me opportunities to investigate behavior,
find and fix problems, and communicate technical conclusions clearly.

Each project has a deliberately focused scope so its logic can be reviewed
and its results reproduced. As the portfolio develops, I aim to deepen these
skills through broader datasets, stronger testing, and more complex scenarios.

## EXPLORING THE PROJECTS

Refer to each project's documentation for its current status, dependencies,
setup instructions, demonstration data, and known limitations. Demonstrations
are intended for local, controlled environments using synthetic or dummy data.