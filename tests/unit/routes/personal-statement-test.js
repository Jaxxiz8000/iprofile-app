import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | personal-statement', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:personal-statement');
    assert.ok(route);
  });
});
