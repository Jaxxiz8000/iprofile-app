export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  server.createList('certifications', 5);

  server.createList('skills', 5);
  server.createList('past-project-exps', 5);
}
