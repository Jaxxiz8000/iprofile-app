import Controller from '@ember/controller';
import exportToPdf from '../mixins/export-to-pdf';
import pdfMake from 'ember-pdfmake';

export default Controller.extend(exportToPdf, {


    actions: {
            exportAsPdf() {

            let args = {id: 'container'}
            const docDefinition = this.pdfForElement(args);
            const filename = "iprofile.pdf";
            pdfMake.createPdf(docDefinition).download(filename);
            
        }
    },

});
