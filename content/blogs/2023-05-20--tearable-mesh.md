---
title: Tearable Mesh & Verlet Integration
date: "2023-05-20T18:06:00"
template: "post"
draft: false
slug: "tearable-mesh"
category: "Blog"
tags:
  - "Math"
  - "Web Development"
description: "TBD"
---

<br>

I was wandering around Codepen for cool animations a while back and found a tearable mesh animation:

![Tearable Mesh Animation](/media/tearable-mesh.gif)
<figcaption>https://codepen.io/dissimulate/pen/nYQrNP</figcaption>
<br>

The code powering the animation can be found [here](https://github.com/dissimulate/Tearable-Cloth/blob/master/Cloth.js)

Quite therapeutic, right? Reminds me of a [rage room](https://en.wikipedia.org/wiki/Rage_room)... Such a stress reliever!

After spending a few minutes tearing the mesh apart and gasping at how realistic it feels, I was set off to find out how this was built.

## Verlet Integration

The underlying algorithm is called a "Verlet integration." It was proposed by a French physicist, [Loup Verlet](https://en.wikipedia.org/wiki/Loup_Verlet).

_Verlet integration_ is a [numerical method](https://en.wikipedia.org/wiki/Numerical_integration) used to integrate [Newton's equations of motion](https://en.wikipedia.org/wiki/Equations_of_motion). It can be use for simulating motion and behavior of objects in real-time, by calculating the position and velocity of each point in objects based on the forces applied. Hence, the algorithm is often used in game programming to create realistic simulations of deformable objects, such as mesh, cloth, rubber, and tissues.

There are many academic papers, blogs, and applcations available on this topic, so I won't be reiterating the math here. Here are some useful resources:

* [6.2 Verlet’s Method](https://sites.science.oregonstate.edu/~giebultt/COURSES/ph265/notes.pdf), Introduction to Computational Physics, Oregon State University
* [Verlet Integration Algorithm](https://www.ucl.ac.uk/~ucfbasc/Theory/verlet.html) by [Democritus](https://www.ucl.ac.uk/~ucfbasc/Basic/Intro.html), a molecular dynamics simulation program by the University College London (UCL)
* [Python implementaion of Verlet integration](https://github.com/austinweis/python-verlet-integration) for a tearable mesh and [its demo](https://www.youtube.com/watch?v=n9XfsSDDhCI)

## Final Words 

To recap, Internationalization (I18n) and Localization (L10n) and two closely related concepts in modern software development. They are important considerations for software products built for global audiences. The specific strategy for I18n and L10n will depend on the needs and requirements of the software product, as well as the target markets and user base. 

<br>