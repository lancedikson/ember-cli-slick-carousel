# ember-cli-slick-carousel
[![Code Climate](https://codeclimate.com/github/igorpreston/ember-cli-slick-carousel/badges/gpa.svg)](https://codeclimate.com/github/igorpreston/ember-cli-slick-carousel)

This addon is drop-in and ready-to-use solution for integrating [Slick.js](http://kenwheeler.github.io/slick/) carousel into your Ember app. All features of the carousel are supported.

## Installation

```
ember install ember-cli-slick-carousel
```

## How-to-use
```
{{#slick-carousel
  class="ember-carousel"
  autoplay=true
  autoplaySpeed=2000
  slidesToShow=1
  slidesToScroll=1
  dots=true
  fade=true}}
  <div><img src="http://placehold.it/300?text=Slide+1"></div>
  <div><img src="http://placehold.it/300?text=Slide+2"></div>
  <div><img src="http://placehold.it/300?text=Slide+3"></div>
{{/slick-carousel}}
```
Look up [Slick settings attributes](https://github.com/kenwheeler/slick) to customize component behavior.
Also, do not forget to customize slider with CSS as you like.

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
