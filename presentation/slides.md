## The new Angular router

### Ken Rimple, Chariot Solutions

March 24, 2015
PhillyJS


## Topics

* What the heck is Angular doing?

* A brief catchup on Angular 2 from ng-conf

* So, that routing...

* What works, what doesn't yet


## What the heck is Angular doing?

* Mighty morphin' JS rangers

* The world is changing (LOTR)

  * To ECMAScript 6 classes, other features

  * Embracing web components

  * Embracing Shadow DOM

  * Embracing one-way binding

  * Embracing better templating syntax


## Angular 2 design goals

* Build framework in ES6

* Provide ultimate modularity using the ES 6 module loading system

* Everythning is a component that has

  * Javascript code

  * A template

* Angular 2 components are specialized web components

* Interop with standard web components is going to be easy


## Do away with two-way data binding internals

* Two-way binding causes a digest loop

  * Are we done yet?  How about now? Now?

  * Cycles are performance killers

* So we killed that, now all digests are top-down one-tiem traversals

* Wait to see how this ends up


## An Angular component


## An Angular template


## The template un-discombobulator slide


## How we mount and route to components in Angular 2


## But wait, we want to see it on Angular 1


## Set up router on Angular 1.x


## The AppController component


## The bootstrapping process


## Defining project structure


## Defining routes


## Handling parameters


## Handling multiple view areas


## Challenges with view area layouts


## What works, what doesn't


## Long-term migration strategies

* Angular 1.x applications could host routers that serve 2.x components

* Angular 2.x applications could host legacy 1.x components

* This was discussed but no code is extant

* It's a wait-and-see game


## Angular 1.x and the new router - timelines

* Router will be compatible with Angular 1.4

* Should be released in April (hopefully)

* This router will evolve for Angular 1.5, etc., and provide features to
  access Angular 2.x components too

* Documentation is lacking


