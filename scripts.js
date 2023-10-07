document.addEventListener("DOMContentLoaded", function () {
    const captions = document.querySelectorAll(".caption");

    captions.forEach(caption => {
        caption.addEventListener("click", function () {
            // Копируем текст подписи в буфер обмена
            const textToCopy = this.innerText;
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
        });
    });
});

// Получаем все элементы с классом "art"
const artElements = document.querySelectorAll('.art');

// Получаем всплывающее окно, изображение и текст внутри него
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage'); // Элемент изображения
const popupText = document.getElementById('popupText');

// Добавляем обработчики событий для каждого элемента с классом "art"
artElements.forEach((artElement) => {
    const image = artElement.querySelector('img');
    image.addEventListener('click', (event) => {
        // Остановка всплытия события, чтобы избежать обработки клика на родительском элементе
        event.stopPropagation();
        
        // Получаем изображение и текст из атрибутов
        const imageSrc = image.src;
        const altText = image.getAttribute('alt');
        const tegText = image.getAttribute('teg');
        
        // Устанавливаем изображение и текст во всплывающем окне
        popupImage.src = imageSrc;
        popupText.textContent = altText;
        popupteg.textContent = tegText;
        
        // Показываем всплывающее окно
        popup.style.display = 'block';
    });
});

// Добавляем обработчик события для закрытия всплывающего окна
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Находим все элементы с классом "caption"
const captionElements = document.querySelectorAll('.caption');

// Добавляем обработчик события для клика на элементах с классом "caption"
captionElements.forEach((captionElement) => {
    captionElement.addEventListener('click', () => {
        const altText = captionElement.textContent; // Получаем текст элемента
        // Создаем элемент для всплывающего сообщения
        const popupMessage = document.createElement('div');
        popupMessage.textContent = 'лора скопирована';
        popupMessage.classList.add('popup-message');

        // Добавляем элемент в body
        document.body.appendChild(popupMessage);

        // Устанавливаем таймер для скрытия сообщения через 1 секунду
        setTimeout(() => {
            popupMessage.remove();
        }, 1000);
    });
});

