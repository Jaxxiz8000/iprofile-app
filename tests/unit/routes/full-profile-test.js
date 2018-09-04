import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | full-profile', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:full-profile');
    assert.ok(route);
  });
});
