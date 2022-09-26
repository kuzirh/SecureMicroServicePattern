# Pipeline

One of the main features of this project happens to be the pipeline that the code runs through while being worked on. As teams begin to adapt the secure microservice pattern there should also be a pattern around testing, linting, and all around vetting the code before deploying to any higher environment.

## GitHub Actions

Since we are wanting to keep this project as low cost as possible, we have side with using GitHub Actions as the tooling for building our pipeline. For those that don't know, GitHub Actions is a way for developers to construct elaborate workflows on different source control management hooks i.e. code push, pull request opened, pull request merged. These workflows are used to run different jobs, where each of these jobs consists of checks that will be conducted on the code base.

## Pipeline Structure

The pipeline will be structured in such a way that the checks on the code base will progress from checking the code statically to performing more dynamic analysis. The following details the jobs that are currently included in the pipeline, and then some jobs that we are looking to add in the future.

## Jobs

- ### Prettier
  - This job's main purpose is to make sure that the code being pushed follows the code formatting for the project
    - Prettier rules can be found here: [.prettierrc.json](/src/.prettierrc.json)
  - This job makes use of the Prettier CLI tool to run the prettier check against the code base. It does this by using the prettierrc.json file above, and checks all of the files in the repo against these style guidelines.
  - If this job fails then the pipeline fails, there shouldn't exist a situation where this job fails assuming users set up their prettier configuration.
- ### Jest
  - Unit testing is integral to software, one does not know how their code will function unless they write tests for the methods.
  - We would like to have unit tests with coverage of 100% including branch coverage, but understand in some cases this may be difficult to accomplish.
  - This job will **ONLY** break the pipeline if a unit test were to fail outright.
- ### Linting
  - While Prettier was used for code formatting, I would like to make use of [eslint](https://eslint.org/) for code quality checks.
  - One code quality check that is being looked into is for TypeScript, since all of the infrastructure and lambda function code will be written in TS.
- ### Infrastructure as Code Scan (Checkov)
  - To understand this job we should explain exactly what technology we are using to create resources in AWS, that information can be found here: [INFRASTRUCTURE.md](/docs/INFRASTRUCTURE.md)
  - The Checkov tool is an open source scanner that runs static analysis against the code that is used to create resources. In this example we are creating resources using the CDK.
  - Checkov will likely be used in the following manner:
    - Job runs `cdk synth` to synthesize the TypeScript CDK code into CloudFormation templates (JSON files)
    - Job runs Checkov tool against the CloudFormation Template in `cdk.out`

## Future Jobs

- ### Static Analysis Security Testing, SAST (SEMGREP)
  - The repo will make use of the tool `Semgrep` in order to provide static analysis testing on the codebase.
- ### Dynamic Analysis Security Testing, DAST (OWASP ZAP)

**NOTE: This documentation is a living file, this means that anything written is subject to change.**

## Testing GitHub Actions

There was a need to figure out how to test the GitHub Actions locally because of the pricing model for the Actions themselves. Developers on GitHub only get so many minutes of server time to run their Actions on, so to combat this there was developed a way to run the actions locally using a tool called `Act`.

The tool makes use of Docker by pulling the source code and the GitHub Actions onto a Docker container and running the actions on the code as if it were on a GitHub Action's runner.

More documentation can be found here - [Act](https://github.com/nektos/act#readme)
