# Secure Micro Services

## Description:

It is a common trend in the technology industry for companies to be moving away from hosting their own applications. With this we see the uprise in distributed services through the use of cloud platforms such as Amazon Web Services.

This project aims to take a common technology stack that would be expected to be seen in the wild and build a secure software development pattern around it.

## Inspiration:

I want to help the community and contribute back where I can. I have spent a lot of time in the realm of DevOps specifically in security automations and want to provide value in this regard. I also strive to save the common man as much time as possible, I have learned how to save a ton of time and headaches and would love a chance to share.

## Structure:

The structure of the project will be rather simple, it will consist of the following components.

- GitHub Actions Pipeline
  - Linting
  - Unit Testing
  - Infrastructure as Code Scan
  - SBOM Generation (Software Composition Analysis)
  - Semgrep Scan (SAST)
  - OWASP ZAP Scan (DAST)
- AWS CDK Library
  - Lambda
  - API Gateway
  - etc...
- Housekeeping Scripts
  - Clean up
  - Local Tests
  - Build
  - Deploy

## Technology Stack:

- TypeScript [More Info](https://www.typescriptlang.org/)
- NodeJS [More Info](https://nodejs.org/en/about/)
- AWS Cloud Development Kit [More Info](https://aws.amazon.com/cdk/)
