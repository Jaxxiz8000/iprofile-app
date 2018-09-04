import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | Acceptance testing', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should list skills on the homepage', async function (assert){
    await visit('/');
    assert.equal(this.element.querySelectorAll('.skill-listing').length, 3, "Should display three listings of skills.");
  });

  test('should show full-profile as the home page', async function(assert){
    await visit('/');
    assert.equal(currentURL(), '/full-profile', 'should redirect automatically');
  });

  test('should link to skills page', async function (assert){
    await visit('/');
    await click(".menu-skills");
    assert.equal(currentURL(), '/skills', 'should navigate to skills page')
  });  

  test('should link to certifications ', async function (assert){
    await visit('/');
    await click(".menu-certifications");
    assert.equal(currentURL(), '/certifications', 'should navigate to certifications page');
  });

});
