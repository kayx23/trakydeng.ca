---
title: Indeed Job Scraper
date: "2021-01-24T10:31:00"
template: "post"
draft: false
slug: "indeed-scraper"
category: "Project"
tags:
  - "Python"
  - "Web Scraping"
  - "Selenium"
  - "Scrapy"
description: "Compare different approaches to scrape job posts off Indeed Canada using Python Requests, Beautiful Soup, Selenium, and Scrapy"
---

<a href="https://github.com/Kayx23/Indeed-Scraper" target="_blank">
<img src="https://img.shields.io/static/v1?label=Source&message=Available&color=Green&style=plat-square&logo=github">
</a>
<br>

![scrape-sample](/media/indeed-scrape.png)


## ❗ Disclaimer
Please note that this was a hobby project to learn more about web scraping and anti-scraping mechanisms on job boards. I am not held responsible for any violation resulted from the direct/indirect use of my scripts or information presented here. 

## Overview
<p style="margin-bottom:0">
In this project, I made three scrapers using different libraries in an attempt to scrape Indeed Canada job posts (on Jan 23, 2020) in Ontario. The three are built respectively with:
</p>
<div style="margin-top:8px">
1. requests & bs4<br>
2. selenium & bs4<br>
3. scrapy
</div>

## Why making three scrapers?

Because my initial attempts were countered by anti-scraping mechanism, such as [Google reCAPTCHA](https://www.google.com/recaptcha/about/). 

Google reCAPTCHA throws 5 to 10 reCAPTCHAs in one setting when a large amount of requests are detected from the same address, same user agent etc. 

I first wrote the scraper with **Requests** and **bs4**, which was stopped by reCAPTCHA about 900 jobs/10 mins in. Hoping to manually resolve the reCAPTCHAs, I switched to the browser automation route with **Selenium**, adding a logic so that when Google reCAPTCHA is thrown, the program pauses and waits for the user input. The program did pause about 1000 jobs in and I was able to manually resolve the reCAPTCHAs, but for some unknown reasons, the scraper always stopped after the resolution of reCAPTCHAs. 


At this stage, there are several solutions I considered:      
* Continue to debug to figure out why the scraper was stopped after the manual resolution of reCAPTCHAs;
* Get past the reCAPTCHA with speech-to-text transcribing the audio file in the accessability option (but this is clearly an abuse of features even if it works); or 
* Rotate user agents and/or proxies to avoid triggering anti-scraping mechanism 

I decided to go with the last option. 

Instead of manually setting up user agent rotation, I found out that this could be easily set up with [Scrapy](https://scrapy.org). I [refactored my script to Scrapy](https://github.com/Kayx23/Indeed-Scraper/blob/master/scrapy/scrapy_scraper/spiders/main.py) and used Scrapy [user agent middleware](https://pypi.org/project/scrapy-user-agents/). The script successfully scraped all 1500 job posts in Ontario and took about 3 mins.

<br>
