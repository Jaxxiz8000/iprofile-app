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
        let args = {id: 'pstatement-container'}
        const docDefinition = this.pdfForElement(args);
        const filename = "personal-statement.pdf";
        pdfMake.createPdf(docDefinition).download(filename);
        }
    },
});
