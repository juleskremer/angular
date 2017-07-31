@title
Multiple Components

@intro
Refactor the master/detail view into separate components.

@description


At the moment, the `HeroesComponent` displays both the list of heroes and the selected heroe's details. As the application grows, it will not be maintainable to keep all features in one component.

You'll need to break it up into sub-components, each focused on a specific task or workflow.
Eventually, the `AppComponent` could become a simple shell that hosts those sub-components.

In this page, you'll take the first step in that direction by carving out the hero details into a separate, reusable component.


<font color="red">TODO:  THE LIVE EXAMPLES NEED TO BE FIXED THROUGHOUT</font>
When you're done with this page, the app should look like this <live-example></live-example>.

## Make a hero detail component

Using the Angular CLI, generate a new component named `hero-detail`.

<code-example language="sh" class="code-shell">

  ng generate component hero-detail

</code-example>

### Hero detail template

To move the hero detail view to the `HeroDetailComponent`, cut the hero detail _content_ from the bottom of the `HeroesComponent` template and replace the boilerplate text in the `HeroDetailComponent`'s template.

The `HeroDetailComponent` has a _hero_, not a _selected hero_. Replace the word, "selectedHero", with the word, "hero", everywhere in the template. When you're done, the new template should look like this:


<code-example path="toh-pt3/src/app/hero-detail/hero-detail.component.html" region="template" title="src/app/hero-detail/hero-detail.component.html" linenums="false">

</code-example>



### Add the *hero* property

The `HeroDetailComponent` template binds to the component's `hero` property.
Add that property to the `HeroDetailComponent` class like this:

<code-example path="toh-pt3/app/hero-detail.component.1.ts" region="hero" title="src/app/hero-detail/hero-detail.component.ts (hero property)">

</code-example>

The `hero` property is typed as an instance of `Hero`. The `Hero` class is still in the `heroes.component.ts` file. Now there are two components that need to reference the `Hero` class. 

The Angular [style guide](guide/styleguide#rule-of-one "Style guide: rule of one") recommends one class per file.

Move the `Hero` class from `app.component.ts` to its own `hero.ts` file by creating a new class called `hero`.

<code-example language="sh" class="code-shell">

  ng generate class hero

</code-example>

Move the `Hero` class definition from `app.component.ts` into the new `hero.ts` file

<code-example path="toh-pt3/src/app/hero.ts" title="src/app/hero.ts" linenums="false">

</code-example>

Now that the `Hero` class is in its own file, the `AppComponent` and the `HeroDetailComponent` have to import it.

Add the following `import` statement near the top of the `app.component.ts`.

<code-example path="toh-pt3/src/app/app.component.ts" region="hero-import" title="src/app/app.component.ts" linenums="false">
</code-example>

Add the following `import` statement near the top of the `hero-detail.component.ts` file.

<code-example path="toh-pt3/src/app/heroes/heroes.component.ts" region="import-hero" linenums="false">

</code-example>



### The *hero* property is an *input* property

Later in the tutorial, the parent `AppComponent` will tell the child `HeroDetailComponent` which hero to display by binding its `selectedHero` to the `hero` property of the `HeroDetailComponent`. The binding will look like this:

<code-example path="toh-pt3/app/heroes-component.1.html" region="hero-detail-binding" linenums="false">

</code-example>

Putting square brackets around the `hero` property, to the left of the equal sign (=), makes it the *target* of a property binding expression. You must declare a *target* binding property to be an *input* property. Otherwise, Angular rejects the binding and throws an error.

First, amend the `@angular/core` import statement to include the `Input` symbol.

<code-example path="toh-pt3/src/app/hero-detail/hero-detail.component.ts" region="import-input" title="src/app/hero-detail/hero-detail.component.ts (excerpt)" linenums="false">

</code-example>

Then declare that `hero` is an *input* property by preceding it with the `@Input` decorator that you imported earlier.

<code-example path="toh-pt3/src/app/hero-detail/hero-detail.component.ts" region="hero" title="src/app/hero-detail/hero-detail.component.ts (excerpt)" linenums="false">

</code-example>

The `hero` property is the only thing in the `HeroDetailComponent` class. All it does is receive a hero object through its `hero` input property and then bind to that property with its template.

Here's the complete `HeroDetailComponent`.

<code-example path="toh-pt3/src/app/hero-detail.component.ts" title="src/app/hero-detail.component.ts">

</code-example>




## Declare _HeroDetailComponent_ in the _AppModule_
Every component must be declared in one&mdash;and only one&mdash;NgModule.

Open `app.module.ts` in your editor and import the `HeroDetailComponent` so you can refer to it.

<<<<<<< HEAD
<code-example path="toh-pt3/src/app/app.module.ts" region="hero-detail-import" title="src/app/app.module.ts">

</code-example>



Add `HeroDetailComponent` to the module's `declarations` array.


<<<<<<< HEAD
<code-example path="toh-pt3/src/app/app.module.ts" region="declarations" title="src/app/app.module.ts" linenums="false">
=======
<code-example path="toh-pt3/app/heroes-component.1.html" region="hero-details" title="heroes.component.html (excerpt)" linenums="false">
>>>>>>> updating services section for cli

</code-example>



In general, the `declarations` array contains a list of application components, pipes, and directives that belong to the module.
A component must be declared in a module before other components can reference it.
This module declares only the two application components, `AppComponent` and `HeroDetailComponent`.

<div class="l-sub-section">



Read more about NgModules in the [NgModules](guide/ngmodule "NgModules") guide.


</div>



{@a add-hero-detail}



## Add the _HeroDetailComponent_ to the _AppComponent_

The `AppComponent` is still a master/detail view.
It used to display the hero details on its own, before you cut out that portion of the template.
Now it will delegate to the `HeroDetailComponent`.


Recall that `hero-detail` is the CSS [`selector`](tutorial/toh-pt3#selector "HeroDetailComponent selector")
in the `HeroDetailComponent` metadata.
That's the tag name of the element that represents the `HeroDetailComponent`.

Add a `<hero-detail>` element near the bottom of the `AppComponent` template,
where the hero detail view used to be.

Coordinate the master `AppComponent` with the `HeroDetailComponent`
by binding the `selectedHero` property of the `AppComponent`
=======
The `HeroesComponent` is still a master/detail view. It used to display the hero details on its own, before you cut out that portion of the template. Now it will delegate to the `HeroDetailComponent`.

Add an `<app-hero-detail>` element near the bottom of the `HeroesComponent` template,
where the hero detail view used to be.  Coordinate the master `HeroesComponent` with the `HeroDetailComponent` by binding the `selectedHero` property of the `HeroesComponent`
>>>>>>> formatting changes chp 1-4
to the `hero` property of the `HeroDetailComponent`.

<code-example path="toh-pt3/app/app.component.1.html" region="hero-detail-binding" title="app.component.html (excerpt)" linenums="false">

</code-example>

<<<<<<< HEAD


Now every time the `selectedHero` changes, the `HeroDetailComponent` gets a new hero to display.
=======
Now, every time the `selectedHero` changes, the `HeroDetailComponent` gets a new hero to display.
>>>>>>> formatting changes chp 1-4

The revised `AppComponent` template should look like this:

<<<<<<< HEAD

<code-example path="toh-pt3/app/app.component.1.html" region="hero-detail-template" title="app.component.html" linenums="false">
=======
<code-example path="toh-pt3/app/heroes-component.1.html" region="hero-detail-template" title="heroes.component.html" linenums="false">
>>>>>>> updating services section for cli

</code-example>


<<<<<<< HEAD


=======
>>>>>>> formatting changes chp 1-4
## What changed?
As [before](tutorial/toh-pt2), whenever a user clicks on a hero name,
the hero detail appears below the hero list.
But now the `HeroDetailView` is presenting those details.

Refactoring the original `AppComponent` into two components yields benefits, both now and in the future:

1. You simplified the `AppComponent` by reducing its responsibilities.

1. You can evolve the `HeroDetailComponent` into a rich hero editor
without touching the parent `AppComponent`.

1. You can evolve the `AppComponent` without touching the hero detail view.

1. You can re-use the `HeroDetailComponent` in the template of some future parent component.

Here are the code files discussed on this page and your app should look like this <live-example></live-example>.

<code-tabs>

<<<<<<< HEAD
  <code-pane title="src/app/app.component.ts" path="toh-pt3/src/app/app.component.ts">

  </code-pane>

  <code-pane title="src/app/hero.ts" path="toh-pt3/src/app/hero.ts">

  </code-pane>

  <code-pane title="src/app/app.module.ts" path="toh-pt3/src/app/app.module.ts">

  </code-pane>

  <code-pane title="src/app/hero-detail/hero-detail.component.ts" path="toh-pt3/src/app/hero-detail/hero-detail.component.ts">

  </code-pane>

  <code-pane title="src/app/hero-detail/hero-detail.component.html" path="toh-pt3/src/app/hero-detail/hero-detail.component.html">
=======
  <code-pane title="src/app/hero.ts" path="toh-pt3/src/app/hero.ts">
  
  </code-pane>

  <code-pane title="src/app/heroes/heros-component.ts" path="toh-pt3/src/app/heroes/heroes.component.ts">
  
  </code-pane>

  <code-pane title="src/app/heroes/heros-component.html" path="toh-pt3/src/app/heroes/heroes.component.html">
  
  </code-pane>

  <code-pane title="src/app/hero-detail/hero-detail.component.ts" path="toh-pt3/src/app/hero-detail/hero-detail.component.ts">
  
  </code-pane>

  <code-pane title="src/app/hero-detail/hero-detail.component.html" path="toh-pt3/src/app/hero-detail/hero-detail.component.html">
  
  </code-pane>
>>>>>>> formatting changes chp 1-4

  </code-pane>
</code-tabs>



## Summary

* You created a reusable component.
* You learned how to make a component accept input.
<<<<<<< HEAD
* You learned to declare the required application directives in an NgModule. You
listed the directives in the `@NgModule` decorator's `declarations` array.
* You learned to bind a parent component to a child component.

<font color="red">THE LIVE EXAMPLES NEED TO BE UPDATED</font>
Your app should look like this <live-example></live-example>.
=======
* You learned to bind a parent component to a child component.
>>>>>>> formatting changes chp 1-4
