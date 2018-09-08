import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    firstname: DS.attr(),
    secondname: DS.attr(),
    jobtitle: DS.attr(),

    fullname: computed('firstName', 'secondName', function() {
        return `${this.firstname} ${this.secondname}`;
    })
});
