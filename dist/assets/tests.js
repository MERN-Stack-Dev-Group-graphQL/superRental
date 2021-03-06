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
