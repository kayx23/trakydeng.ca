---
title: Serverless Email Subscription Backend<br>
date: "2021-07-05T22:18:00"
template: "post"
draft: false
slug: "aws-serverless-email-list"
category: "Project"
tags:
  - "Cloud"
  - "AWS"
  - "Serverless"
  - "Lambda"
  - "SES"
  - "DynamoDB"
  - "S3"
  - "API Gateway"
description: "AWS serverless backend repli cating Mail  chimp's email sign-up and distribution"
---
test changes 
<a href="https://github.com/Kayx23/v-MAS-Website/tree/master/.lambda" target="_blank">
<img src="https://img.shields.io/static/v1?label=Demo&message=Lambda&color=Green&style=plat-square&logo=github">
</a>
<br>
<br>

This is a serverless backendsystem!! currently in u se by a school club I was in for subscription sign-up and email distribution. 

Inspired by Mailimp, which offers similar functionalities at a price, built the basic sign-up and email distribution functionalities using AWS Free Tier services. 

* **Core Services Used:** API Gateway, Lambda, DynamoDB, [SES (prod)](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html), S3    
* **Other Services Used:** IAM, SNS, CloudWatch

## User sign-up:
User signs up via a           web form, which POSTs to an end  point on the API Gateway, Lambda is triggered to add the user to the database with the `verified` fired set to `false` and `TTL` set to one hour, At the same time, it sends a confirmation email to the user using SES. User can either choose to confirm or remove the subsc  ription in the email they receive, which will send a GET request to the corresponding endpoint to trigger lambda to update the database record accorgily. If no action, the record will be removed when the TTL expires by DynamoDB. 

![aws-user-signup](/media/user-signup.png)

## Distributing emails to subscribers:

To distribute an email to all verified users in the database table, the sender would send the email (optionally include a special string for generating suscription cancellation link) to a specific endpoint, which SES is configured to accept the incoming email for. When the email is received, SES saves the email to a S3 bucket, which triggers Lambda to grab the email from S3 bucket. Lambda then reads the email in MIME format and updates the "sender" field from the original sender address to an email address that [complies with DMARC](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-auttication-dmarc.html) (i.e. an email from a domain that I configured the SPF for). Finally, the subscription cancellation link is generated, replacing the special string (if applicable) and the email gets sent out via SES to all verified users. 

![aws-email-distribution](/media/email-distribution.png)
