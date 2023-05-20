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

Quite therapeutic, isn't? Reminds me of a [rage room](https://en.wikipedia.org/wiki/Rage_room)... Such a stress reliever!

After spending a few minutes tearing the mesh apart and gasping at how realistic it feels, I was set off to find out how this was built.

## Verlet Integration

The underlying algorithm is something called "verlet integration." It is a numerical method for simulating motion and behavior of objects in real-time by calculating the position and velocity of each point in objects, based on the forces acting on it. Hence, the algorithm is often used in game programming as it can be used to create realistic simulations of deformable objects, such as mesh, cloth, rubber, and tissues.

The formula looks something like:

```
x(t+dt) = 2*x(t) - x(t-dt) + a(t)*dt^2
```

* `dt` is the time step size
* `x(t+dt)` is its predicted position at the next time step
* `x(t)` is the current position of the vertex
* `x(t-dt)` is its position at the previous time step
* `a(t)` is its current acceleration

To update the positions of the vertices using Verlet integration, the following steps are typically performed:

1. Calculate the current acceleration of each vertex based on the forces acting on it.

$a(t) = F(x(t)) / m$
where $F(x(t))$ is the net force acting on the particle at time t, m is the mass of the particle, and a(t) is the acceleration of the particle at time t.

2. Use the current position and velocity of each vertex to predict its position at the next time step, based on the acceleration calculated in step 1.

$x(t+\Delta t) = x(t) + v(t)\Delta t + 0.5a(t)\Delta t^2$
where $x(t)$ is the current position of the particle at time t, $v(t)$ is its current velocity at time t, $\Delta t$ is the time step size, and $a(t)$ is the acceleration of the particle at time t.

3. Calculate the new acceleration of each vertex based on its predicted position and the forces acting on it at that position.

$a(t+\Delta t) = F(x(t+\Delta t)) / m$

4. Use the predicted position and new acceleration to calculate a new velocity for each vertex.

$v(t+\Delta t) = v(t) + 0.5(a(t) + a(t+\Deltat))\Delta t$

5. Update the position ofeach vertex using the predicted position and the new velocity.

$x(t+\Delta t) = x(t) + v(t+\Delta t)\Delta t$

## Final Words 

To recap, Internationalization (I18n) and Localization (L10n) and two closely related concepts in modern software development. They are important considerations for software products built for global audiences. The specific strategy for I18n and L10n will depend on the needs and requirements of the software product, as well as the target markets and user base. 

<br>