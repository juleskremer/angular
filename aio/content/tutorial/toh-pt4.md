<!-- @title
Services -->

@intro
Create a reusable service to manage the hero data calls.

@description


As the Tour of Heroes app evolves, you'll add more components that need access to hero data.

Instead of copying and pasting the same code over and over, you'll create a single reusable data service and inject it into the components that need it. Using a separate service keeps components lean and focused on supporting the view, and makes it easy to unit-test components with a mock service.
<<<<<<< HEAD

<<<<<<< HEAD
## Creating a hero service

The stakeholders want to show the heroes in various ways on different pages. Users can already select a hero from a list. Soon you'll add a dashboard with the top performing heroes and create a separate view for editing hero details. All three views need hero data.

At the moment, the `HeroesComponent` defines mock heroes for display. However, defining heroes is not the component's job, and you can't easily share the list of heroes with other components and views. In this page, you'll move the hero data acquisition business to a single service that provides the data and share that service with all components that need the data.

### Create the HeroService

Using the Angular CLI, create a service called `hero`.

<code-example language="sh" class="code-shell">

  ng generate service hero

</code-example>

<div class="l-sub-section">

<<<<<<< HEAD
The naming convention for service files is the service name in lowercase followed by `.service`. For a multi-word service name, use lower [dash-case](guide/glossary). For example, the filename for `SpecialSuperHeroService` is `special-super-hero.service.ts`.
=======
=======
=======
>>>>>>> formatting changes chp 1-4

## Creating a hero service

The stakeholders want to show the heroes in various ways on different pages. Users can already select a hero from a list. Soon you'll add a dashboard with the top performing heroes and create a separate view for editing hero details. All three views need hero data.

At the moment, the `HeroesComponent` defines mock heroes for display. However, defining heroes is not the component's job, and you can't easily share the list of heroes with other components and views. In this page, you'll move the hero data acquisition business to a single service that provides the data and share that service with all components that need the data.

### Create the HeroService

Using the Angular CLI, create a service called `hero`.

<code-example language="sh" class="code-shell">

  ng generate service hero

</code-example>
>>>>>>> updating first few sections with CLI

<div class="l-sub-section">

<<<<<<< HEAD
The naming convention for service files is the service name in lowercase followed by `.service`.
For a multi-word service name, use lower [dash-case](guide/glossary#dash-case).
For example, the filename for `SpecialSuperHeroService` is `special-super-hero.service.ts`.
<<<<<<< HEAD
>>>>>>> docs(aio) - Fixed link to the glossary dash-case term (#18311)
=======
=======
The naming convention for service files is the service name in lowercase followed by `.service`. For a multi-word service name, use lower [dash-case](guide/glossary). For example, the filename for `SpecialSuperHeroService` is `special-super-hero.service.ts`.
>>>>>>> formatting changes chp 1-4
>>>>>>> formatting changes chp 1-4

</div>

<<<<<<< HEAD
The `HeroService` class should look like the below.

<<<<<<< HEAD
<code-example path="toh-pt4/app/hero.service.1.ts" region="new-service" title="src/app/hero.service.ts (starting point)" linenums="false">
=======

The `HeroService` class should look like the below.

<code-example path="toh-pt4/src/app/hero.service.1.ts" region="empty-class" title="src/app/hero.service.ts (starting point)" linenums="false">
>>>>>>> updating first few sections with CLI
=======
The `HeroService` class should look like the below.

<code-example path="toh-pt4/app/hero.service.1.ts" region="new-service" title="src/app/hero.service.ts (starting point)" linenums="false">
>>>>>>> restructure of tutorial for appshell

</code-example>

### Injectable services
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

Notice that the new service includes the Angular `Injectable` function as an import and is applied to that function as an `@Injectable()` decorator.

The `@Injectable()` decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.

Although the `HeroService` doesn't have any dependencies at the moment, applying the `@Injectable()` decorator ​from the start ensures consistency and future-proofing.
=======
=======
>>>>>>> restructure of tutorial for appshell
=======

>>>>>>> formatting changes chp 1-4
Notice that the new service includes the Angular `Injectable` function as an import and is applied to that function as an `@Injectable()` decorator.

The `@Injectable()` decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.

<<<<<<< HEAD
Although the `HeroService` doesn't have any dependencies at the moment,
applying the `@Injectable()` decorator ​from the start ensures
consistency and future-proofing.
>>>>>>> updating first few sections with CLI
=======
Although the `HeroService` doesn't have any dependencies at the moment, applying the `@Injectable()` decorator ​from the start ensures consistency and future-proofing.
>>>>>>> formatting changes chp 1-4


### Getting hero data

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> formatting changes chp 1-4
Add a `getHeroes()` method stub.

=======
>>>>>>> restructure of tutorial for appshell
<code-example path="toh-pt4/app/hero.service.1.ts" region="get-heroes-stub" title="src/app/hero.service.ts (getHeroes stub)" linenums="false">

</code-example>

<<<<<<< HEAD
<<<<<<< HEAD
The `HeroService` could get `Hero` data from anywhere&mdash;a web service, local storage, or a mock data source. Removing data access from the component means you can change your mind about the implementation anytime, without touching the components that need hero data.

### Move the mock hero data

Cut the `HEROES` array from `heroes.component.ts` and paste it to a new file in the `app` folder named `mock-heroes.ts`. Additionally, you will need to import the `Hero` class because the heroes array uses the `Hero` class.
=======
The `HeroService` could get `Hero` data from anywhere&mdash;a
web service, local storage, or a mock data source.
Removing data access from the component means
you can change your mind about the implementation anytime,
without touching the components that need hero data.

### Move the mock hero data
Cut the `HEROES` array from `heroes.component.ts` and paste it to a new file in the `app` folder named `mock-heroes.ts`.
Additionally, you will need to import the `Hero` class because the heroes array uses the `Hero` class.
>>>>>>> restructure of tutorial for appshell
=======
The `HeroService` could get `Hero` data from anywhere&mdash;a web service, local storage, or a mock data source. Removing data access from the component means you can change your mind about the implementation anytime, without touching the components that need hero data.

### Move the mock hero data

Cut the `HEROES` array from `heroes.component.ts` and paste it to a new file in the `app` folder named `mock-heroes.ts`. Additionally, you will need to import the `Hero` class because the heroes array uses the `Hero` class.
>>>>>>> formatting changes chp 1-4

<code-example path="toh-pt4/src/app/mock-heroes.ts" title="src/app/mock-heroes.ts">

<<<<<<< HEAD
<<<<<<< HEAD
The `HEROES` constant is exported so it can be imported elsewhere, such as the `HeroService`.

<<<<<<< HEAD
In `heroes.component.ts`, where you cut the `HEROES` array, change `heroes` property to be an uninitialized array reference.
=======
In `app.component.ts`, where you cut the `HEROES` array,
=======

The `HEROES` constant is exported so it can be imported elsewhere, such as the `HeroService`.

In `heroes.component.ts`, where you cut the `HEROES` array,
>>>>>>> restructure of tutorial for appshell
change `heroes` property to be an uninitialized array reference.
>>>>>>> updating first few sections with CLI
=======
</code-example>

The `HEROES` constant is exported so it can be imported elsewhere, such as the `HeroService`.

In `heroes.component.ts`, where you cut the `HEROES` array, change `heroes` property to be an uninitialized array reference.
>>>>>>> formatting changes chp 1-4

<code-example path="toh-pt4/app/heroes.component.1.ts" region="heroes-prop" title="src/app/heroes/heroges.component.ts (heroes property)" linenums="false">

</code-example>


### Return mocked hero data
<<<<<<< HEAD
=======

Back in the `HeroService`, import the mock `HEROES` and return it from the `getHeroes()` method. The `HeroService` looks like this:
>>>>>>> formatting changes chp 1-4

<<<<<<< HEAD
Back in the `HeroService`, import the mock `HEROES` and return it from the `getHeroes()` method. The `HeroService` looks like this:
=======
<code-example path="toh-pt4/app/hero.service.1.ts" region="service-1" title="src/app/hero.service.ts" linenums="false">
>>>>>>> restructure of tutorial for appshell

<code-example path="toh-pt4/app/hero.service.1.ts" region="service-1" title="src/app/hero.service.ts" linenums="false">

</code-example>

### Import the hero service
<<<<<<< HEAD
=======
You're ready to use the `HeroService` in other components, starting with `HeroesComponent`.
>>>>>>> restructure of tutorial for appshell

Import the `HeroService` in the `HeroesComponent` so that you can reference it in the code.

<code-example path="toh-pt4/app/heroes.component.1.ts" linenums="false" title="src/app/heroes/heroes.component.ts (hero-service-import)" region="hero-service-import">

</code-example>


### Don't use *new* with the *HeroService*
<<<<<<< HEAD
<<<<<<< HEAD
=======
How should the `HeroesComponent` acquire a runtime concrete `HeroService` instance?
>>>>>>> restructure of tutorial for appshell

How should the `HeroesComponent` acquire a runtime concrete `HeroService` instance? You could create a new instance of the `HeroService` with `new` like this:

<<<<<<< HEAD
<code-example path="toh-pt4/app/heroes.component.1.ts" region="new-service" linenums="false">
=======
<code-example path="toh-pt4/app/heroes.component.1.ts" region="new-service" title="src/app/heroes/heroes.component.ts" linenums="false">
>>>>>>> restructure of tutorial for appshell
=======

How should the `HeroesComponent` acquire a runtime concrete `HeroService` instance? You could create a new instance of the `HeroService` with `new` like this:

<code-example path="toh-pt4/app/heroes.component.1.ts" region="new-service" linenums="false">
>>>>>>> formatting changes chp 1-4

</code-example>

However, this option isn't ideal for the following reasons:

* The component has to know how to create a `HeroService`.
If you change the `HeroService` constructor,
you must find and update every place you created the service.
Patching code in multiple places is error prone and adds to the test burden.
* You create a service each time you use `new`.
What if the service caches heroes and shares that cache with others?
You couldn't do that.
* With the `HeroesComponent` locked into a specific implementation of the `HeroService`,
switching implementations for different scenarios, such as operating offline or using
different mocked versions for testing, would be difficult.


### Inject the *HeroService*

Instead of using the *new* line, you'll add two lines.

 * Add a constructor that also defines a private property.
 * Add to the component's `providers` metadata.

Add the constructor:

<code-example path="toh-pt4/app/heroes.component.1.ts" region="ctor" title="src/app/heroes/heroes.component.ts (constructor)">

</code-example>

The constructor itself does nothing. The parameter simultaneously defines a private `heroService` property and identifies it as a `HeroService` injection site.
<<<<<<< HEAD

Now Angular knows to supply an instance of the `HeroService` when it creates an `HeroesComponent`.

<<<<<<< HEAD
The *injector* doesn't know yet how to create a `HeroService`. If you ran the code now, Angular would fail with this error:
=======
The constructor itself does nothing. The parameter simultaneously
defines a private `heroService` property and identifies it as a `HeroService` injection site.

Now Angular knows to supply an instance of the `HeroService` when it creates an `HeroesComponent`.

The *injector* doesn't know yet how to create a `HeroService`.
If you ran the code now, Angular would fail with this error:
>>>>>>> updating first few sections with CLI

<code-example format="nocode">
<<<<<<< HEAD

  EXCEPTION: No provider for HeroService! (HeroesComponent -> HeroService)
=======
=======

Now Angular knows to supply an instance of the `HeroService` when it creates an `HeroesComponent`.

The *injector* doesn't know yet how to create a `HeroService`. If you ran the code now, Angular would fail with this error:

<code-example format="nocode">

>>>>>>> formatting changes chp 1-4
  EXCEPTION: No provider for HeroService! (HeroesComponent -> HeroService)

<<<<<<< HEAD
To teach the injector how to make a `HeroService`,
add the following `providers` array property to the bottom of the component metadata
in the `@Component` call.
>>>>>>> restructure of tutorial for appshell

</code-example>

<<<<<<< HEAD
=======
</code-example>

>>>>>>> formatting changes chp 1-4
To teach the injector how to make a `HeroService`, add the following `providers` array property to the bottom of the component metadata in the `@Component` call.

=======
>>>>>>> restructure of tutorial for appshell
<code-example path="toh-pt4/app/heroes.component.1.ts" linenums="false" title="src/app/heroes/heroes.component.ts (providers)" region="providers">

</code-example>

<<<<<<< HEAD
<<<<<<< HEAD
The `providers` array  tells Angular to create a fresh instance of the `HeroService` when it creates a `HeroesComponent`. The `HeroesComponent`, as well as its child components, can use that service to get hero data.
=======

The `providers` array  tells Angular to create a fresh instance of the `HeroService` when it creates a `HeroesComponent`.
The `HeroesComponent`, as well as its child components, can use that service to get hero data.
>>>>>>> restructure of tutorial for appshell
=======
The `providers` array  tells Angular to create a fresh instance of the `HeroService` when it creates a `HeroesComponent`. The `HeroesComponent`, as well as its child components, can use that service to get hero data.
>>>>>>> formatting changes chp 1-4

{@a child-component}


<<<<<<< HEAD
<<<<<<< HEAD
### *getHeroes()* in the *HeroesComponent*

=======
### *getHeroes()* in the *AppComponent*
>>>>>>> updating first few sections with CLI
=======
### *getHeroes()* in the *HeroesComponent*
<<<<<<< HEAD
>>>>>>> restructure of tutorial for appshell
=======

>>>>>>> formatting changes chp 1-4
The service is in a `heroService` private variable.

Create a function to retrieve the heroes:

<code-example path="toh-pt4/app/heroes.component.1.ts" linenums="false" title="src/app/heroes/heroes.component.ts (getHeroes)" region="getHeroes">

</code-example>

{@a oninit}

### The *ngOnInit* lifecycle hook
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> formatting changes chp 1-4
`HeroesComponent` should fetch and display hero data with no issues.
>>>>>>> restructure of tutorial for appshell

<<<<<<< HEAD
`HeroesComponent` should fetch and display hero data with no issues.

=======
>>>>>>> formatting changes chp 1-4
You might be tempted to call the `getHeroes()` method in a constructor, but a constructor should not contain complex logic, especially a constructor that calls a server, such as a data access method. The constructor is for simple initializations, like wiring constructor parameters to properties.

To have Angular call `getHeroes()`, you can implement the Angular *ngOnInit lifecycle hook*.
Angular offers interfaces for tapping into critical moments in the component lifecycle:
at creation, after each change, and at its eventual destruction.

Each interface has a single method. When the component implements that method, Angular calls it at the appropriate time.

<<<<<<< HEAD
<<<<<<< HEAD
Write an `ngOnInit` method with the initialization logic inside. Angular will call it
at the right time. In this case, initialize by calling `getHeroes()`.

<code-example path="toh-pt4/app/heroes.component.1.ts" linenums="false" title="src/app/heroes/heroes.component.ts (ng-on-init)" region="ng-on-init">
=======


<!--Here's the essential outline for the `OnInit` interface (don't copy this into your code):

<code-example path="toh-pt4/src/app/app.component.1.ts" region="on-init" title="src/app/app.component.ts" linenums="false">

</code-example>-->


Import the `OnInit` symbol from the `@angular/core` library.
<code-example path="toh-pt4/src/app/app.component.ts" region="oninit-declaration" title="src/app/app.component.ts (ng-on-init)" linenums="false">
</code-example>

Add the implementation for the `OnInit` interface to your export statement:

<code-example format="nocode">
  export class AppComponent implements OnInit {}
</code-example>



Write an `ngOnInit` method with the initialization logic inside. Angular will call it
at the right time. In this case, initialize by calling `getHeroes()`.


<code-example path="toh-pt4/src/app/app.component.1.ts" linenums="false" title="src/app/app.component.ts (ng-on-init)" region="ng-on-init">
>>>>>>> updating first few sections with CLI
=======
Write an `ngOnInit` method with the initialization logic inside. Angular will call it
at the right time. In this case, initialize by calling `getHeroes()`.

<code-example path="toh-pt4/app/heroes.component.1.ts" linenums="false" title="src/app/heroes/heroes.component.ts (ng-on-init)" region="ng-on-init">
>>>>>>> restructure of tutorial for appshell

</code-example>

The app should run as expected, showing a list of heroes and a hero detail view
when you click on a hero name.
<<<<<<< HEAD
=======

<<<<<<< HEAD
Here are the code files discussed in this page.
>>>>>>> updating first few sections with CLI

=======
>>>>>>> formatting changes chp 1-4
Here are the code files discussed on this page and your app should look like this <live-example></live-example>.

<code-tabs>

  <code-pane title="src/app/hero.service.ts" path="toh-pt4/src/app/hero.service.ts">

  </code-pane>

  <code-pane title="src/app/heroes/heroes.component.ts" path="toh-pt4/src/app/heroes/heroes.component.ts">

  </code-pane>

  <code-pane title="src/app/mock-heroes.ts" path="toh-pt4/src/app/mock-heroes.ts">

  </code-pane>

</code-tabs>



## Summary

* You created a service class that can be shared by many components.
* You used the `ngOnInit` lifecycle hook to get the hero data when the `HeroesComponent` activates.
* You defined the `HeroService` as a provider for the `HeroesComponent`.
* You created mock hero data and imported them into the service.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
* You designed the service to return a Promise and the component to get the data from the Promise.
=======
>>>>>>> restructure of tutorial for appshell

Your app should look like this <live-example></live-example>.



<div class="l-sub-section">



Read more about dependency injection in the [Dependency Injection](guide/dependency-injection) page.

</div>


<div class="l-sub-section">



Read more about lifecycle hooks in the [Lifecycle Hooks](guide/lifecycle-hooks) page.

</div>

>>>>>>> updating first few sections with CLI
=======
>>>>>>> formatting changes chp 1-4
