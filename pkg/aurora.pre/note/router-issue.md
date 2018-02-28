# Lazy Routes
- *issue type:* Question/Feature Request

## Versions
```sh
├── @stencil/core@0.0.5
└── @stencil/router@0.0.16
```

## Question
How can I declare routes, which can only match, if no other route in the current route set matches?

## Current
The current behavior seems to be:
Juxtapose the corresponding components if multiple routes match.

However, I cannot find a documented way to «ungreedify» `url` match expressions.

## Illustrative
How I would expect things to work:
```html
<stencil-router>
    <stencil-route url="/" exact={!0} component="aurora-landing" />
    <stencil-route url="/doc" component="aurora-doc" />
    <stencil-route url="/xmp" component="aurora-xmp" />
    <stencil-route url="/bar" exact={!0} component="aurora-bar" />
    <stencil-route url="/bar/index" component="aurora-bar" />
    <stencil-route url="/bar/:path" lazy={!0} component="aurora-bar-error" />
    <stencil-route url="/:path" lazy={!0} component="aurora-error" />
</stencil-router>
```
