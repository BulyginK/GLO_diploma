const sertificates = () => {
    const sertificateDocuments = document.querySelectorAll('.sertificate-document');

    const modalBlock = document.createElement('img');
    modalBlock.style.display = 'block';
    modalBlock.style.position = 'fixed';
    modalBlock.style.top = '50%';
    modalBlock.style.left = '50%';
    modalBlock.style.zIndex = '9999';
    modalBlock.style.transform = 'translate(-50%, -50%)';    
    modalBlock.style.maxHeight = '95%';    

    sertificateDocuments.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();

            const modalOverlay = document.querySelector('.overlay');
            let href = e.target.closest('.sertificate-document').getAttribute('href');
            
            let clone = modalOverlay.cloneNode(true);
            modalBlock.setAttribute('src', href);
            
            elem.append(modalBlock);
            elem.append(clone);
            clone.style.display = 'block';

            modalBlock.addEventListener('click', () => {
                modalBlock.style.display = 'none';
                console.log(clone);
            })
        })
    });

    
}

export default sertificates