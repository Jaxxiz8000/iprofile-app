import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('full-profile');
  this.route('skills');
  this.route('certifications');
  this.route('personal-information');
  this.route('personal-statement');
  this.route('past-project-exp');
});

export default Router;
