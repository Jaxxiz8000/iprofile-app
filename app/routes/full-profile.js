import Route from '@ember/routing/route';
import RSVP  from 'rsvp';

export default Route.extend({
    model() {
        // return this.store.findAll('skill');
        return RSVP.hash({
            skills: this.store.findAll('skill'),
            certifications: this.store.findAll('certification'),
            personal_information: this.store.findAll('personal-information'),
            personal_statement: this.store.findAll('personal-statement'),
            past_project_exp: this.store.findAll('past-project-exp')
        });
    }
});
