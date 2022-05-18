// создание функции отображения документа во весь экран поверх страницы
const sertificates = () => {  
    const body = document.querySelector('body');
    const sertificateDocuments = document.querySelectorAll('.sertificate-document');
    const modalOverlay = document.querySelector('.overlay');

    const modalBlock = document.createElement('div');
    const clone = modalOverlay.cloneNode(true);

    sertificateDocuments.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();

            //получение ссылки на оригинальную картинку
            let href = e.target.closest('.sertificate-document').getAttribute('href'); 
            
            const imgDocument = document.createElement('img');
            imgDocument.setAttribute('src', href);
            
            body.append(modalBlock);
            modalBlock.append(imgDocument);
            modalBlock.append(clone);

            imgDocument.style.display = 'block';
            imgDocument.style.position = 'fixed';
            imgDocument.style.top = '50%';
            imgDocument.style.left = '50%';
            imgDocument.style.zIndex = '9999';
            imgDocument.style.transform = 'translate(-50%, -50%)';    
            imgDocument.style.maxHeight = '95%';
            clone.style.display = 'block';

            modalBlock.addEventListener('click', () => {
                modalBlock.innerHTML = '';
                modalBlock.remove()
            })
        })
    });

    
}

export default sertificates