import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    title() {
        return faker.list.random("AWS", "JAVA", "PHP", "AGILE") ();
    },
    catagory() {
        return faker.list.random("DevOps", "Engineer", "Management") ();
    }
});
