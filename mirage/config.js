export default function() {
  this.namespace = '/api';

  let skills = [{
    type: 'skills',
    id: 1,
    attributes: {
      title: 'Java',
      catagory: 'Development'
      }
    }, {
    type: 'skills',
    id: 2,
    attributes: {
      title: 'PHP',
      catagory: 'Development'
      }
    }, {
    type: 'skills',
    id: 3,
    attributes: {
      title: 'AWS',
      catagory: 'DevOps'
    }
  }];

this.get('/skills', function(db, request) {
  if(request.queryParams.title !== undefined) {
    let filteredSkills = skills.filter(function(i) {
      return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
    });
    return { data: filteredSkills };
  } else {
    return { data: skills }
  }
}); 
  

  // end of skills.
}
