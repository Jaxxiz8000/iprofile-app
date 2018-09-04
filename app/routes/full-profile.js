import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('skill');
    //     return [{
    //         id: 1,
    //         title: 'Java',
    //         catagory: 'Development'
    //     }, {
    //         id: 2,
    //         title: 'PHP',
    //         catagory: 'Development'

    //     }, {
    //         id: 3,
    //         title: 'AWS',
    //         catagory: 'DevOps'
    //     }]
    }
});
