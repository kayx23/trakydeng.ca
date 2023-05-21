---
title: GaTech CS Courses & Projects (Part 1)
date: "2021-12-11T22:39:00"
template: "post"
draft: false
slug: "gatech-cs-course-projects"
category: "Blog"
tags:
  - "Computer Networks"
  - "Security"
description: "Fall 2021 semester reflection and course projects"
---

<br>

Fall 2021 was my first semester in the Master in CS program at Georgia Tech. I took [Network Security](https://omscs.gatech.edu/cs-6262-network-security) and [Computer Networks](https://omscs.gatech.edu/cs-6250-computer-networks) while working a full-time job. 

While it is commonly advised against to take two courses at the same time due to [workloads](https://omscentral.com/courses), I think I had sufficient fundamentals and interests lying around these subjects to go for the combination... as long as my schedule doesn't blow up unexpectedly. I did experience a minor burnout towards the end but most things went as planned, thankfully. 

### My background before taking the courses: 
* Proficiency in Python. Comfortable picking apart a medium-sized codebase. 
* Growing experience in full-stack web development and asynchronous javascript. 
* Got my CompTIA [Network+](https://www.credly.com/badges/161f89a6-a17b-4c5c-aa90-f72e004b4c0b/public_url) and [Security+](https://www.credly.com/badges/467fb46a-2d5c-4392-8d03-3478b74a6a49) earlier in the year.
* Got more [hands on pen-test experiences](https://elearnsecurity.com/product/ejpt-certification/) when getting my [eJPT](https://www.dropbox.com/s/e5kdjh4l1usvu8b/eJPT.pdf?dl=0).
* Did a couple more tryhackme boxes and understand the general methodologies to look for vulnerabilities and exploit them. 

<div style='width:300px'>
<img src='/media/tryharder.png'>
<figcaption>✌️</figcaption>
</div>


## Network Security

Course link: [CS6262](https://omscs.gatech.edu/cs-6262-network-security)

This course, imho, should be more accurately called _Network and Application Security_. It covers a variety of network attacks, such as DDOS, Botnet, BGP Hijacking, and DNS Poisoning, as well as application attacks, such as XSS, SQLi, tabnabbing, and Android malware. 


**Project 1** was about vulnerability scanning, fingerprinting, and launching a [shellshock attack](https://en.wikipedia.org/wiki/Shellshock_(software_bug)) on a CGI-based web server to achieve remote code execution (RCE). The requirement is to use both manually crafted payload and Metasploit to exploit the machine, escalate privileges, and find some flags.  

**Project 2** was about Malware Analysis in Windows, Linux, and Android. I have never worked with Android-anything before, other than knowing Android apps are written in Rust a lot these days and Java, so the Android portion of the project was by far my favourite. I got to decode the app with `Apktool`, do static code analysis to look for snippet that get triggered conditionally and contacts a C&C server, modify the source code, rebuild & sign the apk, and run it on an emulator. It was pretty neat :D

**Project 3** was about web app exploitation, where my web dev background comes in handy. A vulnerable website was purposely set up (like [DVWA](https://dvwa.co.uk)) for us to exploit with XSS, CSRF, [ReDoS (Regular Expression Denial of Service)](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS), and more. I had fun injecting my [tabnabbing](https://en.wikipedia.org/wiki/Tabnabbing) implementation into the vulnerable server via XSS (can't open source my code due to academy integrity). The project also includes a task to pivot and scan the internal network using the exploited machine, and analyze the security implications of the [Content Security Policies (CSPs)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) during static code analysis. 

**Project 4** was about identifying network attacks by conducting packet analyses in Wireshark and writing [Snort rules](https://www.snort.org/) to block off the unwanted traffic (e.g. DDOS, Botnet, XSS, Bruteforce attack). 

**Project 5** was about anomaly detection with ML models and evading the trained model using the [polymorphic blending attack](https://www.cc.gatech.edu/fac/Wenke.Lee/papers/usenix_security_2006.pdf). The core idea is to train a ML model using the normal traffic, so that any traffic with traits deviating from the baseline should be flagged by the model. To evade the detection, we need to implement a polymorphic blending attack (e.g. via byte substitution and padding) so that malicious payload gets processed and have a normal byte frequency like the regular traffic, which can go undetected. 

Besides the projects, the course itself was taught like a survey course that touches on a variety of topics, with weekly open-book quizzes. The recorded lectures were succinct and straight to the point - great for people with some knowledge in the topics or serving as a starting point for more in-depth research. 

## Computer Networks

Course link: [CS6250](https://omscs.gatech.edu/cs-6250-computer-networks)

I have a mixed opinion about this course's material. I did well carrying with my knowledge from Network+, but for someone coming in with zero computer networks background and not know what they're looking at, the course material could be difficult to digest at times due to its delivery this semester. It'd be a good idea to leverage external resources. 

This course has five projects and two exams. 

**Project 1** was about implementing a simplified distributed version of the [Spanning Tree Protocol (STP)](https://en.wikipedia.org/wiki/Spanning_Tree_Protocol) that can be run on any arbitrary topology of layer 2 devices in Python. Distributed algorithm needs to implemented on each switch without knowing the entire topology. Communications between switches are simulated until the algorithm converges to a single solution. In my opinion, this project challenges students more on their DS&A. 

**Project 2** moves one layer up the OSI model to layer 3 to implement an Interior Gateway Protocal (IGP), [Distance Vector](https://www.wikiwand.com/en/Distance-vector_routing_protocol) routing protocol. This is also implemented as a distributed algorithm that runs on routers within the same AS. Topologies come with weighted, directed links as a reflection of the business relationships between ASes. Similar to the previous project, this one was also in Python and challenges students more on their DS&A. 

**Project 3** focuses on implementing a firewall using the [Software-Defined Networks (SDN)](https://en.wikipedia.org/wiki/Software-defined_networking) principle, specifically with the [POX OpenFlow SDN Framework](https://noxrepo.github.io/pox-doc/html/#); writing firewall rule sets; defining the switches topology, and simulating the traffic using [mininet](http://mininet.org) to validate the effectiveness of the firewall implementation and the correctness of the rules. 

**Project 4** was on the topic of BGP Hijacking. Interesting enough, I was working on this project when [Facebook disappeared from the Internet](https://blog.cloudflare.com/october-2021-facebook-outage/) for an afternoon due to BGP misconfiguration. BGP Hijacking can happen a couple ways: an AS can advertise a shorter path to an AS, a more defined IP prefix, a prefix it doesn't own, and more. The result is traffic is re-routed, eavesdropped, and/or manipulated, causing security concerns and sometimes disruption of services. This project requires a network diagram to demonstrate the attack scenario and implementation by configuring bgpd and routing entries in zebra. 

<div style='width:300px'>
<img src='/media/bgph.png'>
<figcaption>Project Network Diagram... Terrible resolution to protect academic integrity</figcaption>
</div>
<br>

**Project 5** was about analyzing BGP cache using [BGPStream Python API](https://bgpstream.caida.org/docs/api/pybgpstream/_pybgpstream.html). Some of the tasks include calculating unique IP prefixes announced per origin AS; identifying [BGP Remote Triggered Blackholing (RTBH)](https://datatracker.ietf.org/doc/html/rfc5635) events and measuring the event duration by identifying announcement with [community](https://datatracker.ietf.org/doc/html/rfc7999#section-2) tags and explicit/implicit Withdrawal of the prefixes blackholed. This ended up to be a time-consuming project (most people spent 30-40 hours) due to project requirement ambiguities. I would classify this as a data analytics exercise to understand BGP records better and understand what metrics can be generated.

## Wrapping Up & Next Step

My final project grade was just released as I'm writing this... perfect wrap for both courses! I'm likely taking the next semester off to spend more time learning about work-related tech stacks/tools (not sure yet) and other stuff that interests me. 

And of course, savour a break to take care of my mental and physical health. Life is long  ;D

I hope you do too & happy holidays ❤️ 

<br>
<div style='width:250px;background-color:transparent'>
<img src='/media/see-you-next-year.png'>
</div>
<br>

<br>

