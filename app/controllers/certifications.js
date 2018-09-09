import Controller from '@ember/controller';
import exportToPdf from '../mixins/export-to-pdf';
import pdfMake from 'ember-pdfmake';

export default Controller.extend(exportToPdf, {
    isShowingModal: false,
    actions: {
      toggleModal: function() {
        this.toggleProperty('isShowingModal');
      }
    },
    exportAsPdf() {
        let args = {id: 'certification-container'}
        const docDefinition = this.pdfForElement(args);
        const filename = "certifications.pdf";
        pdfMake.createPdf(docDefinition).download(filename);
        },
    addCertification() {
        let addCertification = this.get(newCertification);
        let newCertification = this.store.createRecord('certifications', {
            title: addCertification,
            catagory: "DevOps"
        })
        newCertification.save();
    },

});
