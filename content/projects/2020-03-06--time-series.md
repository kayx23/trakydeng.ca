---
title: Time Series Modelling of Lake Erie Water Levels
date: "2020-03-26T10:31:00"
template: "post"
draft: false
slug: "time-series-modelling"
category: "Project"
tags:
  - "Time Series"
  - "Modelling"
  - "Statistics"
  - "R"
description: "Time Series Modelling (Seasonal ARIMA) of Lake Erie Water Levels in R"
---

<a href="https://github.com/Kayx23/TimeSeries-LakeErie/blob/master/Lake_Erie_80-20.md" target="_blank">
<img src="https://img.shields.io/static/v1?label=Source&message=Available&color=Green&style=plat-square&logo=github">
</a>

<br>
<br>

This was the final group project of the [Time Series course](https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=41&coid=216270) I took during Winter 2020 at McMaster University, in which we modelled the Lake Erie water levels from 1921 to 1970 (public dataset) in R. Project received 95% grade.

Observing the seasonal trends and non-seasonal autocorrelation at many lags in the data, it was deemed suitable to fit the data with [Seasonal ARIMA (SARIMA)](https://online.stat.psu.edu/stat510/lesson/4/4.1) models. 

Two SARIMA models were selected to proceed to the prediction stage for their lower [AICs](https://en.wikipedia.org/wiki/Akaike_information_criterion), as well as the number of parameters in the model, with respect to the [Principle of Parsimony](https://www.oreilly.com/library/view/the-r-book/9780470510247/ch009-sec004.html). 

Both models were used to perform a 10-year prediction; both predicted similarly and reasonably in the end. 

<div width="64px">
<a href="https://github.com/Kayx23/TimeSeries-LakeErie/blob/assets/Poster.pdf" target="_blank">
<img src="/media/ts-poster.png">
</a>
</div>

<br>