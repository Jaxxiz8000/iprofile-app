import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | past-project-exp', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:past-project-exp');
    assert.ok(route);
  });
});