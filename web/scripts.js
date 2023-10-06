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

            // Добавляем класс для выделения элемента
            this.parentElement.classList.add("selected");

            // Убираем класс выделения через 1 секунду
            setTimeout(() => {
                this.parentElement.classList.remove("selected");
            }, 1000);
        });
    });
});

// Получаем все элементы с классом "art"
const artElements = document.querySelectorAll('.art');

// Получаем всплывающее окно и текст внутри него
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');

// Добавляем обработчики событий для каждого элемента с классом "art"
artElements.forEach((artElement) => {
    artElement.addEventListener('click', () => {
        // Получаем текст из атрибута "alt" изображения внутри текущего элемента
        const altText = artElement.querySelector('img').getAttribute('alt');
        
        // Устанавливаем текст во всплывающем окне
        popupText.textContent = altText;

        // Показываем всплывающее окно
        popup.style.display = 'block';
    });
});

// Добавляем обработчик события для закрытия всплывающего окна
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});
