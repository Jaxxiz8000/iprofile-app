export default function() {
  this.namespace = '/api';

  let certifications = [{
    type: 'certifications',
    id: 4,
    attributes: {
      title: 'Docker',
      catagory: 'Development'
      }
    }, {
    type: 'certifications',
    id: 2,
    attributes: {
      title: 'Agile Scrum Master',
      catagory: 'Management'
      }
    }, {
    type: 'certifications',
    id: 3,
    attributes: {
      title: 'AWS Developer',
      catagory: 'DevOps'
    }
  }];

  let skills = [{
    type: 'skill',
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

  // let personal_information = [{
  //   type: 'personal-information',
  //   id: 1,
  //   attributes: {
  //     firstName: 'James',
  //     secondName: 'Scott',
  //     jobTitle: 'Engineer'
  //   }
  // }];

// this.get('/skills', function(db, request) {
//   if(request.queryParams.title !== undefined) {
//     let filteredSkills = skills.filter(function(i) {
//       return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
//     });
//     return { data: filteredSkills };
//   } else {
//     return { data: skills }
//   }
// }); 

this.get('/skills');

this.post('/skills');
  

  // end of skills.

  // this.get('/certifications', function() {
  //   return { data: certifications }
  // });

  this.get('/certifications');
  this.post('/certifications');

  this.get('/personal-information', function() {
    return { data: [{
      type: "personal-information",
      id: 1,
      attributes: {
        firstname: 'James',
        secondname: 'Scott',
        jobtitle: 'Engineer'
      }
    }]
   };
  });

  this.get('/personal-statements', function() {
    return { data: [{
      type: "personal-statement",
      id: 1,
      attributes: {
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
        }
      }] 
    };
  });

  // this.get('/past-project-exps', function() {
  //   return { data: [
  //     {
  //       type: 'past-project-exps',
  //       id: 1,
  //       attributes: {
  //         rolename: "DevOps Engineer",
  //         roledescription: "worked as an engineer for a firm"
  //       }
  //     }, {
  //       type: 'past-project-exps',
  //       id: 2,
  //       attributes: {
  //         rolename: "Project Manager",
  //         roledescription: "worked as an manager for a firm"
  //       }
  //     }, {
  //       type: 'past-project-exps',
  //       id: 3,
  //       attributes: {
  //         rolename: "Java Engineer",
  //         roledescription: "worked as an engineer for a firm"
  //       }
  //     }]
  //   };
  // });
  this.get('/past-project-exps');
  this.post('/past-project-exps');
}
