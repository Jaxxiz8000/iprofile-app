import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('past-project-exp');
        // return [{
        //     id: 1,
        //     roleName: 'Java Engineer',
        //     roleDescription: 'Developer'
        // }, {
        //     id: 2,
        //     roleName: 'AWS Developer',
        //     roleDescription: 'Developer'
        // }, {
        //     id: 3,
        //     roleName: 'Agile Scrum Master',
        //     roleDescription: 'Scrum lead for a large team'
        // }]
    }
});
