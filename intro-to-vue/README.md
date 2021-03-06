# Intro to Vue

Projects from [Vue Mastery](https://www.vuemastery.com/courses/intro-to-vue-js/) first free lesson.

---

## Intro

In order to add Vue.js to our application, we need to add the script, e.g.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

```js
 // Vue instance: Pass an Options object that will form the data
var app = new Vue({
    el: '#app', // link from the script to the DOM by id
    data: {
        product: 'Socks'
    }
})
```

Note that Vue is reactive. This means that if we change the `data` variable, it will automatically be replaced anywhere it is referenced in the DOM.

## Attribute Binding

Using `v-bind` we will create a bind between the data and the attribute we want it to be bound to, e.g. `v-bind:src` in an `img`. It binds an attribute to an expression dynamically.

This feature is so common that there is a shorthand for it, which is just putting the colons: `:src`.

## Conditional Rendering

In our `data` we can add boolean variables. Those can shape what we render in the DOM by using the tags `v-if="dataBool"` and `v-else="dataBool`.

Note that we can also put expressions in the conditions `v-if="myVar > x"` and use more conditions with `v-else-if`.

Moreover, it is important to know where to use `v-if`. What it actually does is removing the whole element from the DOM. If we are making appear / disappear some elements a lot, it's better to use `v-show`, which only toggles visibility.

## List Rendering

To loop over the elements of a list we can use `v-for="myList"`, so

```html
<ul>
    <li v-for="elem in list">{{ elem }}</li>
</ul>
```

## Event Handling

To interact, for example, with buttons we can use `v-on:click="expression"`, which will respond to the event of clicking. However, it's a better practice to define methods. The same way that the options object can have `data`, it can also contain `methods`:

```js
data: [...],
methods: {
    addToCart: function() {
        this.cart += 1
    }
}
```

Again, as `v-on` is so common you can also use `@click` or `@mouseover`, etc.

## Class & Style Binding

The same way that we bind on data, we can also bind css styles. The best approach is to define a whole json object with the different configurations and link it directly:

```html
<span style="styleObject"></span>
[...]
data: {
    styleObject: {
        color: 'red',
        fontSize: '13px'
    }
}
```

Note that we can also dynamically bind a class, for example to disable a button:

```html
<button :class="{ disabledButton: !inStock }">myButton</button>
```

As with styles, we can also bind an object or an array of classes. Moreover, we could even use conditionals:

```html
<div :class="[isActive ? activeClass : '']"></div> 
```

## Computed Properties

Similar to methods, we can also add a `computed` set to the options to do small calculation on data objects:

```js
computed: {
    title() {
        return this.brand + ' ' + this.product
    }
}
```

An important aspect of computed properties is that their value is cached. It gets recomputed one any of its values changes. This makes it more performant than methods to use expensive operations accessed multiple times.

## Components

They are blocks of code that are thought to be reused and make our code more modular. We can set components inside other components.

We can think of those as small subsets of the main Vue object. Therefore, we can put in them the same options object: data, methods, computed... However, there are two major differentiating factor.

When talking about components, we can define in them a `template` option, where we will put the HTML code that will be rendered in that component. Also, the data object needs to be modified. It becomes a function that `returns` our data. This way, different components can handle their own data.

Finally, we may need to send custom data to specific components. This is done via `props`. We can define the elements that we expect to receive, their types and if they are required to run or not. Note that the `props` need to be bound to the component, so we add `:` before each passed prop. An example of using a `<parent>` would be as follows:

```html
<div id="app">
    <product :myProp="someVal"></product>
</div> 
```

```js
Vue.component('product', {
    props: {
        myProp: {
            type: <type>,
            required: <true or false>
        }
      }
    },
    template: `some html`,
    data() {
        return {
            [...]
        }
    },
    methods: [...],
    computed: [...]
    ...
```

## Communicating Events

How do we handle data change from within different components? In the same way that we can pass data down via `props`, we also have a way to let the parent know that an event happened. To do so, we can use `this.$emit('some-event')`. However, we still have to let the parent know what to do with this event:

```html
<parent @some-event="some-method"></parent>
```


