import Controller from '@ember/controller';
import exportToPdf from '../mixins/export-to-pdf';
import pdfMake from 'ember-pdfmake';

export default Controller.extend(exportToPdf, {


    actions: {
            exportAsPdf() {
            //pdfMake.createPdf({content: 'This is an sample PDF printed with pdfMake '}).download();
            //this.actions.exportPDF();
            let args = {id: 'container'}
            const docDefinition = this.pdfForElement(args);
            pdfMake.createPdf(docDefinition).download(this.get('filename'));
        }
    },

});
