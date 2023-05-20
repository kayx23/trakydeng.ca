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

<div>
<p class="codepen" data-height="500" data-default-tab="html,result" data-slug-hash="nYQrNP" data-editable="true" data-user="dissimulate" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid;">
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
</div>

![Tearable Mesh Animation](/media/tearable-mesh.gif)
<figcaption>https://codepen.io/dissimulate/pen/nYQrNP</figcaption>

Quite therapeutic, innit? Reminds me of a [rage room](https://en.wikipedia.org/wiki/Rage_room)... Such a stress reliever!

After spending a few minutes tearing the mesh apart and gasping at how realistic it feels, I was set off to find out how this was built. I was introduced to something called "verlet integration".

## Verlet Integration

Verlet integration is a numerical method for simulating motion and behavior of objects in real-time. The Verlet integration formula looks something like this:

```
x(t+dt) = 2*x(t) - x(t-dt) + a(t)*dt^2
```
$$
$x(t + \Delta t) = 2x(t) - x(t - \Delta t) + a(t) \Delta t^2$
$$


where x(t) is the current position of the vertex, x(t-dt) is its position at the previous time step, x(t+dt) is its predicted position at the next time step, a(t) is its current acceleration, and dt is the time step size.

Verlet integration is used to simulate the behavior of a tearable mesh by calculating the position and velocity of each point in the mesh based on the forces acting on it.  When a tear occurs, the mesh is split into two or more separate pieces, and each piece is treated as a separate object in the simulation. 

To update the positions of the vertices using Verlet integration, the following steps are typically performed:

1. Calculate the current acceleration of each vertex based on the forces acting on it.
2. Use the current position and velocity of each vertex to predict its position at the next time step using the Verlet integration formula.
3. Calculate the new acceleration of each vertex based on its predicted position and the forces acting on it at that position.
4. Use the predicted position and new acceleration to calculate a new velocity for each vertex.
5. Update the position ofeach vertex using the predicted position and the new velocity.

It can also be used to create realistic simulations of other deformable objects, such as cloth, rubber, and tissues.


![XPG3-XPG4 Base Migration Guide](/media/xpg.png)
<figcaption>(XPG3-XPG4 Base Migration Guide)</figcaption>

## Final Words 

To recap, Internationalization (I18n) and Localization (L10n) and two closely related concepts in modern software development. They are important considerations for software products built for global audiences. The specific strategy for I18n and L10n will depend on the needs and requirements of the software product, as well as the target markets and user base. 

<br>