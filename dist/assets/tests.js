'use strict';

define("super-rentals/tests/acceptance/super-rentals-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)("Acceptance | super rentals", function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)("visiting /", async function (assert) {
      await (0, _testHelpers.visit)("/");
      assert.equal((0, _testHelpers.currentURL)(), "/");
      assert.dom("h2").hasText("Welcome to Super Rentals!");
      assert.dom(".jumbo a.button").hasText("About Us");
      await (0, _testHelpers.click)(".jumbo a.button");
      assert.equal((0, _testHelpers.currentURL)(), "/about");
    });
    (0, _qunit.test)("visiting /about", async function (assert) {
      await (0, _testHelpers.visit)("/about");
      assert.equal((0, _testHelpers.currentURL)(), "/about");
      assert.dom("nav").exists();
      assert.dom("h1").hasText("SuperRentals");
      assert.dom("h2").hasText("About Super Rentals");
      assert.dom(".jumbo a.button").hasText("Contact Us");
      await (0, _testHelpers.click)(".jumbo a.button");
    });
  });
});
define("super-rentals/tests/integration/components/jumbo-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | jumbo", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders the content inside a jumbo header with a tomster", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Jumbo>Hello World</Jumbo>
      */
      {"id":"+Qg9uEw1","block":"{\"symbols\":[],\"statements\":[[8,\"jumbo\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Hello World\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.dom(".jumbo").exists();
      assert.dom(".jumbo").hasText("Hello World");
      assert.dom(".jumbo .tomster").exists();
    });
  });
});
define("super-rentals/tests/integration/components/rental-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | rental", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders information about a rental property", async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Rental />
      */
      {"id":"hx62gMPb","block":"{\"symbols\":[],\"statements\":[[8,\"rental\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.dom("article").hasClass("rental");
      assert.dom("article h3").hasText("Grand Old Mansion");
      assert.dom("article .detail.owner").includesText("Veruca Salt");
      assert.dom("article .detail.type").includesText("Standalone");
      assert.dom("article .detail.location").includesText("San Francisco");
      assert.dom("article .detail.bedrooms").includesText("15");
    });
  });
});
define("super-rentals/tests/integration/components/rental/image-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | rental/image', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Rental::Image />
      */
      {"id":"GMuj6wA1","block":"{\"symbols\":[],\"statements\":[[8,\"rental/image\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Rental::Image>
              template block text
            </Rental::Image>
          
      */
      {"id":"ToVlv+1c","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"rental/image\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("super-rentals/tests/test-helper", ["super-rentals/app", "super-rentals/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('super-rentals/config/environment', [], function() {
  var prefix = 'super-rentals';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
