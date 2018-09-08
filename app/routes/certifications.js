import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('certification');
    //     return [{
    //         id: 1,
    //         title: 'Linux',
    //         catagory: 'Development'
    //     }, {
    //         id: 2,
    //         title: 'Agile Scrum Certification',
    //         catagory: 'Development'

    //     }, {
    //         id: 3,
    //         title: 'AWS Developer',
    //         catagory: 'DevOps'
    //     }]
    }
});
