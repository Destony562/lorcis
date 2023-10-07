document.addEventListener("DOMContentLoaded", function () {
    const captions = document.querySelectorAll(".caption");
    const promptElement = document.getElementById('popupteg');

    captions.forEach(caption => {
        caption.addEventListener("click", function () {
            // Копируем текст подписи в буфер обмена
            const textToCopy = this.getAttribute('alt');
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
        });
    });

    promptElement.addEventListener("click", function () {

        const textToCopy = this.textContent;
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        const popupMessage = document.createElement('div');
        popupMessage.textContent = 'Скопировано.';
        popupMessage.classList.add('popup-message');
        document.body.appendChild(popupMessage);
        setTimeout(() => {
            popupMessage.style.opacity = '1';
        }, 10);
        setTimeout(() => {
            popupMessage.style.opacity = '0';
            setTimeout(() => {
                popupMessage.remove();
            }, 300);
        }, 1100);


    });
});

// Получаем все элементы с классом "art"
const artElements = document.querySelectorAll('.art');

// Получаем всплывающее окно, изображение и текст внутри него
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage'); // Элемент изображения
const popupText = document.getElementById('popupText');
const closeButton = document.getElementById('closeButton')
// Добавляем обработчики событий для каждого элемента с классом "art"
artElements.forEach((artElement) => {
    const image = artElement.querySelector('img');
    image.addEventListener('click', (event) => {
        // Остановка всплытия события, чтобы избежать обработки клика на родительском элементе
        event.stopPropagation();
        
        // Получаем изображение и текст из атрибутов
        const imageSrc = image.src;
        const altText = image.getAttribute('alt');
        const tegText = image.getAttribute('tag');
        
        // Устанавливаем изображение и текст во всплывающем окне
        popupImage.src = imageSrc;
        popupText.textContent = altText;
        popupteg.textContent = tegText;
        
        // Показываем всплывающее окно
        popup.style.display = 'flex';
        setTimeout(() => {
            popup.style.opacity = '1';
        }, 10);
    });
});

// Добавляем обработчик события для закрытия всплывающего окна
closeButton.addEventListener('click', () => {
    popup.style.opacity = '0';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
});

// Находим все элементы с классом "caption"
const captionElements = document.querySelectorAll('.caption');

// Добавляем обработчик события для клика на элементах с классом "caption"
captionElements.forEach((captionElement) => {
    captionElement.addEventListener('click', () => {
        const altText = captionElement.textContent; // Получаем текст элемента
        // Создаем элемент для всплывающего сообщения
        const popupMessage = document.createElement('div');
        popupMessage.textContent = 'Скопировано.';
        popupMessage.classList.add('popup-message');

        // Добавляем элемент в body
        document.body.appendChild(popupMessage);
        setTimeout(() => {
            popupMessage.style.opacity = '1';
        }, 10);
        setTimeout(() => {
            popupMessage.style.opacity = '0';
            setTimeout(() => {
                popupMessage.remove();
            }, 300);
        }, 1100);

    });
});


