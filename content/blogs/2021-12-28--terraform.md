---
title: Terraform 101 with AWS EC2
date: "2021-12-24T16:40:00"
template: "post"
draft: false
slug: "terraform-state"
category: "Blog"
tags:
  - "Cloud"
  - "Infrastructure"
  - "DevOps"
  - "Terraform"
description: "See how the declarative design comes into play"
---

<br>

## Overview
[Terraform](https://github.com/hashicorp/terraform) is an open-source **infrastructure-as-code (IaC)** tool created by HashiCorp written in Go. The tool helps to codify the infrastructure lifecycle (e.g. provision, update, destroy) in a human-readable format. It supports [multiple cloud platforms](https://registry.terraform.io/browse/providers). 

Terraform takes a **declarative** approach to IaC. Users declare the **end state** of the resource in [HCL](https://www.terraform.io/language); the tool will provision/update the resource accordingly, converging to the declared state. An alternative approach is **imperative**, which works by sequentially executing the instruction set from users (think synchronous programming). 

In layman's terms, the declarative approach focuses on the **WHAT** and the imperative approach focuses on the **HOW**. 

In the rest of the article, we will go through a quick example of managing an AWS EC2 instance with Terraform, and see how the declarative design comes into play. 


## Getting Started
Suppose the Terraform CLI is installed (if not, go [here](https://learn.hashicorp.com/tutorials/terraform/install-cli)). 

Let's spin up a free-tier eligible Amazon Linux instance in `us-east-2`. 

First, find the [AMI (Amazon Machine Image)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) and instance type:


<div style='width:750px'>
<img src='/media/search-ami.png'>
<figcaption>pick a kernel and architecture</figcaption>
</div>
<br>

<div style='width:750px'>
<img src='/media/freetier-t2-micro.png'>
<figcaption>find the free-tier instance type</figcaption>
</div>
<br>
<br>

Next, make a directory and create a terraform configuration file `main.tf` with the following: 

```hcl

terraform {
  // specifies what provider plugins to download
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }
  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "us-east-2"
}

resource "aws_instance" "test_amazon_linux_freetier" {
  // previously found ami and instance type
  ami           = "ami-002068ed284fb165b"
  instance_type = "t2.micro"

  tags = {
    Name = "FreeTierAmazonLinux"
  }
}
```
<br>

Let's initiate terraform in this directory with `terraform init`. 

To validate the configuration, we can run `terraform validate`. 

To view the changes to infra, we can run `terraform plan`. This is useful in reviewing planned changes to accept/reject them before carrying out the plan.

<div style='width:750px'>
<img src='/media/terraform-plan.png'>
<figcaption>terraform plan</figcaption>
</div>
<br>


Time for the plan to come true! Run `terraform apply`. 


<div style='width:640px'>
<img src='/media/ec2-created-cli.png'>
<figcaption>applied successfully</figcaption>
</div>
<br>

<div style='width:730px'>
<img src='/media/ec2-created-console.png'>
<figcaption>verifying the deployment in AWS console</figcaption>
</div>
<br>

Everything looks good!

## What happens if we manually modify the resource?

Let's try manually editing the instance name on the console from _FreeTierAmazonLinux_ to _RandomName_.

<div style='width:730px'>
<img src='/media/change-ec2-name.png'>
<figcaption>Randomly Changing a Random Name to a RandomName</figcaption>
</div>
<br>

What's going to happen if we run `terraform apply` now? 

Will it provision a new EC2 instance? (Hint: Nope)

Recall that terraform is declarative - the config file declares the **end state** of the resource. Now that the actual instance config has changed due to the manual editing, if we run `terraform apply` again, terraform should compare the actual infrastructure state with the declared state (tracked in `terraform.tfstate` file), detect the differences in instance name, and modify it back.

Let's see it in action: 

<div style='width:750px'>
<img src='/media/tf-state-changes.png'>
<figcaption>terraform apply after the manual renaming</figcaption>
</div>
<br>

As expected, terraform picked up the state differences. Once the plan is accepted by the user, it changes the resource name back to _FreeTierAmazonLinux_. 


## Destroying the Resource

Destroying the resource couldn't be easier - because the states are tracked, you can just run `terraform destroy` in the current directory. Terraform will look at the state and figure out what to destroy. 

Now, what if we delete the resource _manually_ before running `terraform destroy`? Will it cause a conflict of some sort?

Your guess is as good as mine but let's mess it up together. 

<div style='width:750px'>
<img src='/media/ec2-terminate.png'>
<figcaption>terminate the instance in AWS Console</figcaption>
</div>
<br>

<div style='width:700px'>
<img src='/media/changed-outside-of-terraform.png'>
<figcaption>detected changes outside of terraform due to state differences</figcaption>
</div>
<br>

<div style='width:630px'>
<img src='/media/nothing-to-destroy.png'>
<figcaption>therefore, nothing to destroy</figcaption>
</div>
<br>

Nothing's messed up. Terraform detected that the resource was modified outside of terraform and there is nothing to destroy. It simply updated the `terraform.tfstate` to mark this state update. 

## Final Words
Hope you enjoy the read! This was a terraform 101 session for me as well. If you have any feedback about the content, please feel free to open an issue/PR under this blog's [repo](https://github.com/Kayx23/trakydeng.com). 


[Merry Chrysler!](https://youtu.be/_Z-Nu351j58)

<br>
