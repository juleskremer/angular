@title
<<<<<<< HEAD
Displaying A List of Heroes
=======
Displaying Hero Information
>>>>>>> restructure of tutorial for appshell

@intro
Build a selectable heroes list.

@description


In this page, you'll expand the Tour of Heroes app to display a list of heroes, and
allow users to select a hero and display the hero's details.

## Displaying heroes

To display a list of heroes, you'll add heroes to the view's template.

### Create heroes

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> formatting changes chp 1-4
Create an array of ten heroes.

<code-example path="toh-pt2/src/app/heroes/heroes.component.ts" region="hero-array" title="src/app/heroes/heroes.component.ts (hero array)">
<<<<<<< HEAD
=======
<code-example path="toh-pt2/src/app/app.component.ts" region="hero-array" title="src/app/app.component.ts (hero array)">
>>>>>>> updating first few sections with CLI
=======
>>>>>>> restructure of tutorial for appshell

</code-example>


<<<<<<< HEAD
<<<<<<< HEAD
The `HEROES` array is of type `Hero`, the class defined in the previous page. Later in this tutorial, the app will fetch the list of heroes from a web service, but for now you can display mock heroes.

### Expose heroes

Create a public property in `HeroesComponent` that exposes the heroes for binding.

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="hero-array-1" title="heroes.component.ts (hero array property)">

</code-example>

### List heroes with ngFor

Add a list of heroes immediately before the hero details using the built-in directive `*ngFor`:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="heroes-template-1" title="heroes.component.html (heroes template)" linenums="false">
=======
The `HEROES` array is of type `Hero`, the class defined in the previous page.
Later in this tutorial, the app will fetch the list of heroes from a web service, but for now you can display mock heroes.
=======
The `HEROES` array is of type `Hero`, the class defined in the previous page. Later in this tutorial, the app will fetch the list of heroes from a web service, but for now you can display mock heroes.
>>>>>>> formatting changes chp 1-4

### Expose heroes

Create a public property in `HeroesComponent` that exposes the heroes for binding.

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="hero-array-1" title="heroes.component.ts (hero array property)">

</code-example>

The `heroes` type isn't defined because TypeScript infers it from the `HEROES` array.

<<<<<<< HEAD
### Display hero names in a template
To display the hero names in an unordered list,
insert the following chunk of HTML above the hero details.
=======
Add a list of heroes immediately before the hero details using the built-in directive `*ngFor`:
>>>>>>> formatting changes chp 1-4

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="heroes-template-1" title="heroes.component.html (heroes template)" linenums="false">

</code-example>

Now you can fill the template with hero names.

### List heroes with ngFor

The goal is to bind the array of heroes in the component to the template, iterate over them, and display them individually.

Modify the `<li>` tag by adding the built-in directive `*ngFor`.

<<<<<<< HEAD
<code-example path="toh-pt2/src/app/app.component.1.html" region="heroes-ngfor-1" title="app.component.html (ngFor)">
>>>>>>> updating first few sections with CLI
=======
<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="heroes-ngfor-1" title="heroes.component.html (ngFor)">
>>>>>>> restructure of tutorial for appshell

</code-example>

<div class="l-sub-section">

<<<<<<< HEAD
<<<<<<< HEAD
The (`*`) prefix to `ngFor` is a critical part of this syntax. It indicates that `ngFor` is a structural directive. Learn more about `ngFor` at [ngFor Template Syntax](guide/template-syntax.html#!#ngFor)

</div>

=======
The (`*`) prefix to `ngFor` is a critical part of this syntax.
It indicates that the `<li>` element and its children
constitute a structural directive.

The `ngFor` directive iterates over the component's `heroes` array
and renders an instance of this template for each hero in that array.

The `let hero` part of the expression identifies `hero` as the  template input variable, which holds the current hero item for each iteration.
You can reference this variable within the template to access the current hero's properties.

</div>

Within the `<li>` tags, add content
that uses the `hero` template variable to display the hero's properties.

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="ng-for" title="heroes.component.html (ngFor template)" linenums="false">

</code-example>

>>>>>>> updating first few sections with CLI
=======
The (`*`) prefix to `ngFor` is a critical part of this syntax. It indicates that `ngFor` is a structural directive. Learn more about `ngFor` at [ngFor Template Syntax](guide/template-syntax.html#!#ngFor)

</div>

>>>>>>> formatting changes chp 1-4
When the browser refreshes, a list of heroes appears.

### Style the heroes

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> formatting changes chp 1-4
Users should get a visual cue of which hero they are hovering over and which hero is selected.

To add styles to your component, add style definitions to the component's stylesheet, `heroes.component.css`:
<<<<<<< HEAD

<code-example path="toh-pt2/src/app/heroes/heroes.component.css" title="src/app/heroes/heroes.component.css (HeroesComponent's styles)" linenums="false">
=======
To add styles to your component, add style definitions to the component's stylesheet, `app.component.css`:

<code-example path="toh-pt2/src/app/app.component.css" title="src/app/app.component.css (AppComponent's styles)" linenums="false">
>>>>>>> updating first few sections with CLI
=======

<code-example path="toh-pt2/src/app/heroes/heroes.component.css" title="src/app/heroes/heroes.component.css (HeroesComponent's styles)" linenums="false">
>>>>>>> restructure of tutorial for appshell

</code-example>

When you assign styles to a component, they are scoped to that specific component.
<<<<<<< HEAD
<<<<<<< HEAD
These styles apply only to the `HeroesComponent` and don't affect the outer HTML.


## Selecting a hero
=======
These styles apply only to the `AppComponent` and don't affect the outer HTML.
=======
These styles apply only to the `HeroesComponent` and don't affect the outer HTML.
>>>>>>> restructure of tutorial for appshell


## Selecting a hero
The app now displays a list of heroes as well as a single hero in the details view. But the list and the details view are not connected.
When users select a hero from the list, the selected hero should appear in the details view.
This UI pattern is known as "master/detail."
In this case, the _master_ is the heroes list and the _detail_ is the selected hero.
>>>>>>> updating first few sections with CLI

Next you'll connect the master to the detail through a `selectedHero` component property, which is bound to a click event.

### Handle click events
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> formatting changes chp 1-4

Add a click event binding to the `<li>` like this:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="selectedHero-click" title="heroes.component.html (template excerpt)" linenums="false">
=======
Add a click event binding to the `<li>` like this:

<<<<<<< HEAD
<code-example path="toh-pt2/src/app/app.component.1.html" region="selectedHero-click" title="app.component.html (template excerpt)" linenums="false">
>>>>>>> updating first few sections with CLI
=======
<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="selectedHero-click" title="heroes.component.html (template excerpt)" linenums="false">
>>>>>>> restructure of tutorial for appshell

</code-example>

The parentheses identify the `<li>` element's  `click` event as the target.
The `onSelect(hero)` expression calls the  `AppComponent` method, `onSelect()`,
<<<<<<< HEAD
<<<<<<< HEAD
passing the template input variable `hero`, as an argument. That's the same `hero` variable you defined previously in the `ngFor` directive.
=======
passing the template input variable `hero`, as an argument.
That's the same `hero` variable you defined previously in the `ngFor` directive.
>>>>>>> updating first few sections with CLI
=======
passing the template input variable `hero`, as an argument. That's the same `hero` variable you defined previously in the `ngFor` directive.
>>>>>>> formatting changes chp 1-4


### Add a click handler to expose the selected hero

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> formatting changes chp 1-4
You no longer need the `hero` property because you're no longer displaying a single hero; you're displaying a list of heroes. The user will be able to select one of the heroes by clicking on it. So replace the `hero` property with this simple `selectedHero` property:

<code-example path="toh-pt2/src/app/heroes/heroes.component.ts" region="selected-hero" title="src/app/heroes/heroes.component.ts (selectedHero)">

</code-example>

The hero names should all be unselected before the user picks a hero, so you won't initialize the `selectedHero` as you did with `hero`.
=======
<code-example path="toh-pt2/src/app/app.component.ts" region="selected-hero" title="src/app/app.component.ts (selectedHero)">

</code-example>

The hero names should all be unselected before the user picks a hero, so
you won't initialize the `selectedHero` as you did with `hero`.
>>>>>>> updating first few sections with CLI
=======
<code-example path="toh-pt2/src/app/heroes/heroes.component.ts" region="selected-hero" title="src/app/heroes/heroes.component.ts (selectedHero)">

</code-example>

The hero names should all be unselected before the user picks a hero, so you won't initialize the `selectedHero` as you did with `hero`.
>>>>>>> restructure of tutorial for appshell

Add an `onSelect()` method that sets the `selectedHero` property to the `hero` that the user clicks.

<code-example path="toh-pt2/src/app/heroes/heroes.component.ts" region="on-select" title="src/app/heroes/heroes.component.ts (onSelect)" linenums="false">

</code-example>

<<<<<<< HEAD
<<<<<<< HEAD
The template still refers to the old `hero` property. Bind to the new `selectedHero` property instead as follows:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="selectedHero-details" title="heroes.component.html (template excerpt)" linenums="false">
=======
The template still refers to the old `hero` property.
Bind to the new `selectedHero` property instead as follows:
=======
The template still refers to the old `hero` property. Bind to the new `selectedHero` property instead as follows:
>>>>>>> formatting changes chp 1-4

<<<<<<< HEAD
<code-example path="toh-pt2/src/app/app.component.1.html" region="selectedHero-details" title="app.component.html (template excerpt)" linenums="false">
>>>>>>> updating first few sections with CLI
=======
<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="selectedHero-details" title="heroes.component.html (template excerpt)" linenums="false">
>>>>>>> restructure of tutorial for appshell

</code-example>

### Hide the empty detail with ngIf

<<<<<<< HEAD
<<<<<<< HEAD
When the app loads, `selectedHero` is undefined. The selected hero is initialized when the user clicks a hero's name. Angular can't display properties of the undefined `selectedHero` and throws the following error, visible in the browser's console:
=======
When the app loads, `selectedHero` is undefined.
The selected hero is initialized when the user clicks a hero's name.
Angular can't display properties of the undefined `selectedHero` and throws the following error, visible in the browser's console:
>>>>>>> updating first few sections with CLI
=======
When the app loads, `selectedHero` is undefined. The selected hero is initialized when the user clicks a hero's name. Angular can't display properties of the undefined `selectedHero` and throws the following error, visible in the browser's console:
>>>>>>> formatting changes chp 1-4

<code-example format="nocode">

  EXCEPTION: TypeError: Cannot read property 'name' of undefined in [null]

<<<<<<< HEAD
<<<<<<< HEAD
Although `selectedHero.name` is displayed in the template, you must keep the hero detail out of the DOM until there is a selected hero.

Wrap the HTML hero detail content of the template with a `<div>`. Then add the `ngIf` built-in directive and set it to the `selectedHero` property of the component.

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="ng-if" title="src/app/heroes/heroes.component.html (ngIf)" linenums="false">
=======
Although `selectedHero.name` is displayed in the template,
you must keep the hero detail out of the DOM until there is a selected hero.
=======
</code-example>
>>>>>>> formatting changes chp 1-4

Although `selectedHero.name` is displayed in the template, you must keep the hero detail out of the DOM until there is a selected hero.

Wrap the HTML hero detail content of the template with a `<div>`. Then add the `ngIf` built-in directive and set it to the `selectedHero` property of the component.

<<<<<<< HEAD
<code-example path="toh-pt2/src/app/app.component.1.html" region="ng-if" title="src/app/app.component.html (ngIf)" linenums="false">
>>>>>>> updating first few sections with CLI
=======
<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="ng-if" title="src/app/heroes/heroes.component.html (ngIf)" linenums="false">
>>>>>>> restructure of tutorial for appshell

</code-example>

The app no longer fails and the list of names displays again in the browser.

<<<<<<< HEAD
<<<<<<< HEAD
When there is no selected hero, the `ngIf` directive removes the hero detail HTML from the DOM. There are no hero detail elements or bindings to worry about.
=======
When there is no selected hero, the `ngIf` directive removes the hero detail HTML from the DOM.
There are no hero detail elements or bindings to worry about.
>>>>>>> updating first few sections with CLI
=======
When there is no selected hero, the `ngIf` directive removes the hero detail HTML from the DOM. There are no hero detail elements or bindings to worry about.
>>>>>>> formatting changes chp 1-4

When the user picks a hero, `selectedHero` becomes defined and
`ngIf` puts the hero detail content into the DOM and evaluates the nested bindings.


### Style the selected hero

While the selected hero details appear below the list, it's difficult to identify the selected hero within the list itself.

In the `styles` metadata that you added above, there is a custom CSS class named `selected`.
To make the selected hero more visible, you'll apply this `selected` class to the `<li>` when the user clicks on a hero name. For example, when the user clicks "Magneta", it should render with a distinctive but subtle background color like this:

<figure>

  <img src='generated/images/guide/toh/heroes-list-selected.png' alt="Selected hero">
<<<<<<< HEAD

<<<<<<< HEAD
</figure>

In the template, add the following `[class.selected]` binding to  the `<li>`:
=======

</figure>
>>>>>>> formatting changes chp 1-4

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="class-selected-1" title="heroes.component.html (setting the CSS class)" linenums="false">
=======
In the template, add the following `[class.selected]` binding to  the `<li>`:

<<<<<<< HEAD
<code-example path="toh-pt2/src/app/app.component.1.html" region="class-selected-1" title="app.component.html (setting the CSS class)" linenums="false">
>>>>>>> updating first few sections with CLI
=======
<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="class-selected-1" title="heroes.component.html (setting the CSS class)" linenums="false">
>>>>>>> restructure of tutorial for appshell

</code-example>

When the expression (`hero === selectedHero`) is `true`, Angular adds the `selected` CSS class. When the expression is `false`, Angular removes the `selected` class.
<<<<<<< HEAD

The final version of the `<li>` looks like this:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="class-selected-2" title="heroes.component.html (styling each hero)" linenums="false">

</code-example>

Your app should look like this <live-example></live-example>. Here are the code files discussed on this page.

<code-tabs>
  <code-pane title="src/app/heroes/heroes.component.ts" path="toh-pt2/src/app/heroes/heroes.component.ts">

  </code-pane>

  <code-pane title="src/app/heroes/heroes.component.html" path="toh-pt2/src/app/heroes/heroes.component.html">

  </code-pane>

</code-tabs>

=======

The final version of the `<li>` looks like this:

<code-example path="toh-pt2/src/app/heroes/heroes.component.1.html" region="class-selected-2" title="heroes.component.html (styling each hero)" linenums="false">

</code-example>

<<<<<<< HEAD
After clicking "Magneta", the list should look like this:

<figure>
  <img src='generated/images/guide/toh/heroes-list-1.png' alt="Output of heroes list app">
</figure>

Here are the code files discussed in this page.
=======
Your app should look like this <live-example></live-example>. Here are the code files discussed on this page.
>>>>>>> formatting changes chp 1-4

<code-tabs>
  <code-pane title="src/app/heroes/heroes.component.ts" path="toh-pt2/src/app/heroes/heroes.component.ts">

  </code-pane>

  <code-pane title="src/app/heroes/heroes.component.html" path="toh-pt2/src/app/heroes/heroes.component.html">

  </code-pane>

</code-tabs>

>>>>>>> updating first few sections with CLI
## Summary

* The Tour of Heroes app displays a list of selectable heroes.
* You added the ability to select a hero and show the hero's details.
* You learned how to use the built-in directives `ngIf` and `ngFor` in a component's template.
<<<<<<< HEAD
<<<<<<< HEAD
=======

<font color="red">THE LIVE EXAMPLES NEED TO BE UPDATED</font>
Your app should look like this <live-example></live-example>.
>>>>>>> updating first few sections with CLI
=======
>>>>>>> formatting changes chp 1-4
