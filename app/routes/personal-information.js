import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('personal-information');
        // return [{
        //     id: 1,
        //     firstName: "John",
        //     secondName: "Barnes",
        //     jobTitle: "Software Engineer"
        // }]
    }
});
