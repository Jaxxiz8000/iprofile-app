import EmberObject from '@ember/object';
import ExportToPdfMixin from 'iprofile-app/mixins/export-to-pdf';
import { module, test } from 'qunit';

module('Unit | Mixin | export-to-pdf', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ExportToPdfObject = EmberObject.extend(ExportToPdfMixin);
    let subject = ExportToPdfObject.create();
    assert.ok(subject);
  });
});
