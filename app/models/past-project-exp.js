import DS from 'ember-data';

export default DS.Model.extend({
    rolename: DS.attr(),
    roledescription: DS.attr()
});
