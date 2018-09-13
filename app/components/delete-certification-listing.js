import Component from '@ember/component';

export default Component.extend({
    actions: {
        deleteCertification(certification) {
            let deleteId = certification.get('id');
            let certificaionToDelete = this.store.find('certification', deleteId);
            certificaionToDelete.destroyRecord();
        }
    }  
});
