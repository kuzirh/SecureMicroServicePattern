# Infrastructure

In this project we will be making use of AWS services and resources in order to build applications, or at least I will be coming from this mindset as I design the secure patterns. In this section we will go deeper into what we use to create and configure our architecture programmatically, and touch on the corresponding security checks that are performed at this stage of an application.

## AWS CloudFormation

CloudFormation is an AWS service that allows developers and architects alike deploy resources in the cloud programmatically through the use of templates written in JSON or YAML. The templates are so very aptly named "CloudFormation Templates" and they are deployed to the AWS service "AWS CloudFormation". CloudFormation's job is to take in these templates and convert them to infrastructure in AWS. I used these templates a lot in my professional life for building applications, mostly microservices. There is a limitation to using CloudFormation templates in that you have to know the YAML or JSON syntax. In the next section I will detail what we are using in this project.

## AWS Cloud Development Kit (AWS CDK)

The AWS Cloud Development Kit or CDK, is a library of API's that are used to create resources in AWS. As explained above, CloudFormation templates can be used to define architecture that will be deployed to AWS. The AWS CDK serves as a sort of wrapper for CloudFormation in that a developer is able to write code in their native languages (i.e. java, python, javascript) and then transformed into CloudFormation templates. My native language is TypeScript so you will see that the architecture (CDK code) and the business logic (Lambda Function code) will be in this language.

## Microservices

For this project we are aiming to build a simple microservice in AWS, in order to do so I think we should spend some time on what a microservice actually is. Microservice or microservice architecture is a building pattern that breaks an application up into it's component services. Each of these components are thought of as independent of each other, but are used in such a way to make up the business logic or flow of an application; Read more about microservices [here](https://aws.amazon.com/microservices/).

## Baby Steps (Simple Example)

Now that we know what building architecture we are planning to use for the project, let me give an example of what would be typically built in AWS as a microservice. Let's say I own a cereal rating website, and there are a ton of features and functions of this site. One feature of this site is the ability to rate a cereal from 0-10, and this feature is the microservice we are going to blow up and take a look at. If you open this image up in a new tab [here](../docs//Images//microservice.JPG) you will see a flow diagram with 3 steps.

1. User rates a cereal between 0-10 on RateMyCereal.com
1. The rating is bundled up in an http request and sent to API Gateway
1. API Gateway receives the request and triggers a lambda to run
   - Lambda has business logic to take the rating and save it to the cereal rating database

## Constructs

This example of a microservice above is just one feature of my cereal rating application, one of hundreds of things I can have the application do for the user. All of the other actions that one can think of like, changing password, changing avatar, rating or commenting on a cereal are all possible microservices that are built by the application engineers. A lot of these microservices are made up of the same components (Lambda, Dynamo, API Gateway) so because of this we will be building out applications out of reusable architecture components or constructs. Each construct will lay out a basic resource in AWS that a user can import into their stack or application and modify to suit their needs.
