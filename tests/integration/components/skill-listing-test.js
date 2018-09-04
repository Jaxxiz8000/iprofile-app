import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | skill-listing', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function (){
    this.skill = EmberObject.create({
      title: 'Java',
      catagory: 'Development'
    });
  });

  test('should display skill details', async function(assert) {
    await render(hbs`{{skill-listing skill=skill}}`);
    assert.equal(this.element.querySelector('.skill-listing h3').textContent.trim(),'Java', 'title: Java');
    assert.equal(this.element.querySelector('.skill-listing catagory').textContent.trim(),'Development', 'catagory: Development');

  });
});
