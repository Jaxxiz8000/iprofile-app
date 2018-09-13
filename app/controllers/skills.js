import Controller from '@ember/controller';
import exportToPdf from '../mixins/export-to-pdf';
import pdfMake from 'ember-pdfmake';

export default Controller.extend(exportToPdf, {
    isShowingModal: false,
    deleteIsClicked: false,
    actions: {
      toggleModal: function() {
        this.toggleProperty('isShowingModal');
      },
      exportAsPdf() {
        let args = {id: 'skills-container'}
        const docDefinition = this.pdfForElement(args);
        const filename = "skills.pdf";
        pdfMake.createPdf(docDefinition).download(filename);
        },
        addSkill() {
            let addSkill = this.get('newSkill');
            let newSkill = this.store.createRecord('skill', {
                title: addSkill,
                catagory: "Programming"
            })
            newSkill.save();
        },
        deleteIsClicked() {
            this.toggleProperty('deleteIsClicked');
        },
        deleteIsDone() {
            this.toggleProperty('deleteIsClicked');
        }
    },
});
