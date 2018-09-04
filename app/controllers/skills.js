import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByName(param) {
            if (param !== '') {
                return this.store
                .query('skill', { title: param }).then((results) => {
                    return {query: param, results: results};
                });
            }
            else {
                return this.store
                .findAll('skill').then((results) => {
                return { query: param, results: results };        
                });
            }
        }
    }
});
