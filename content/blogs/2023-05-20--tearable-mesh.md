---
title: Tearable Mesh and Verlet Integration
date: "2023-05-20T19:00:00"
template: "post"
draft: false
slug: "tearable-mesh"
category: "Blog"
tags:
  - "Modelling"
  - "Web Development"
description: "Introduce how a tearable mesh animation is built"
---

<br>

I was wandering around Codepen for cool animations a while back and found an interactive tearable mesh animation:

![Tearable Mesh Animation](/media/tearable-mesh.gif)
<figcaption>https://codepen.io/dissimulate/pen/nYQrNP</figcaption>
<br>

Therapeutic, innit? The experience reminds me of a [rage room](https://en.wikipedia.org/wiki/Rage_room)... What a stress reliever!

After spending a few minutes tearing the mesh apart and gasping at how realistic it feels, I was set off to find out more about the underlying mechanism.

## Verlet Integration

The underlying algorithm is called a _Verlet integration_. It was most recently rediscovered by a French physicist, [Loup Verlet](https://en.wikipedia.org/wiki/Loup_Verlet), for its use in molecular dynamics.

Verlet integration is a [numerical method](https://en.wikipedia.org/wiki/Numerical_integration) used to integrate [Newton's equations of motion](https://en.wikipedia.org/wiki/Equations_of_motion). It can be use for simulating motion and behavior of objects in real-time, by calculating the position and velocity of each point in objects based on the forces applied. 

The algorithm is often used in game programming to simulate realistic interactions with deformable objects and in physic systems to simualte molecular dynamics, fluid dynamics, and more.

There are many academic papers, blogs, and applcations available on this topic, so I won't be reiterating the math here. Here are some useful resources to get started:

* [6.2 Verlet’s Method](https://sites.science.oregonstate.edu/~giebultt/COURSES/ph265/notes.pdf) in Introduction to Computational Physics by Oregon State University
* [Verlet Integration Algorithm](https://www.ucl.ac.uk/~ucfbasc/Theory/verlet.html) by [Democritus](https://www.ucl.ac.uk/~ucfbasc/Basic/Intro.html), a molecular dynamics simulation program at the University College London (UCL)
* [Python implementaion of Verlet integration](https://github.com/austinweis/python-verlet-integration) for a tearable mesh and [its demo](https://www.youtube.com/watch?v=n9XfsSDDhCI)

## Final Words

There are also other numerical methods for simulating deformable objects in computer graphics, such as the [Finite Element Method (FEM)](http://viterbi-web.usc.edu/~jbarbic/femdefo/) and [Position-Based Dynamics (PBD)](https://matthias-research.github.io/pages/publications/posBasedDyn.pdf). Each has their pros and cons, and the choice of method will depend on the specific requirements of the simulation, including accuracy and computation efficiency.
