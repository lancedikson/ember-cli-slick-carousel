/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'slick-carousel',
  'Integration: SlickCarouselComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#slick-carousel}}
      //     template content
      //   {{/slick-carousel}}
      // `);

      this.render(hbs`{{slick-carousel}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
