import Controller from '@ember/controller';
import exportToPdf from '../mixins/export-to-pdf';
import pdfMake from 'ember-pdfmake';

export default Controller.extend(exportToPdf, {
    isShowingModal: false,
    actions: {
      toggleModal: function() {
        this.toggleProperty('isShowingModal');
      },
      exportAsPdf() {
        let args = {id: 'past-project-exp-container'}
        const docDefinition = this.pdfForElement(args);
        const filename = "pastProjectExp.pdf";
        pdfMake.createPdf(docDefinition).download(filename);
        },
        addPastProjectExp() {
          let addRoleName = this.get('newRoleName');
          let addDescription = this.get('newRoleDesc')
          let newPastProjectExp = this.store.createRecord('past-project-exp', {
              rolename: addRoleName,
              roledescription: addDescription
          })
          newPastProjectExp.save();
      },
      deleteIsClicked() {
          this.toggleProperty('deleteIsClicked');
      },
      deleteIsDone() {
          this.toggleProperty('deleteIsClicked');
      },
      toggleChildren() {
        this.toggleProperty('toggleChildren');
      }
    },
});
