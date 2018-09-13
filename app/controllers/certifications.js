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
            let args = {id: 'certification-container'}
            const docDefinition = this.pdfForElement(args);
            const filename = "certifications.pdf";
            pdfMake.createPdf(docDefinition).download(filename);
        },
        addCertification() {
            let addCertification = this.get('newCertification');
            let newCertification = this.store.createRecord('certification', {
                title: addCertification,
                catagory: "DevOps"
            })
            newCertification.save();
        },
        deleteIsClicked() {
            this.toggleProperty('deleteIsClicked');
        },
        deleteIsDone() {
            this.toggleProperty('deleteIsClicked');
        }
    }
});
