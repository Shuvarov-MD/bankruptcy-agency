function sendForm() {
  const forms = document.querySelectorAll('form');

  forms.forEach((item) => {
    const checkbox = item.querySelector('.form__checkbox');
    const checkboxLabel = item.querySelector('.form__personal-data .form__label');
    const inputTel = item.querySelector('input[type="tel"]');
    const button = item.querySelector('button[type="submit"]');
    const buttonText = button.textContent;

    item.addEventListener('submit', (event) => {
      event.preventDefault();

      inputTel.style.borderColor = '';
      checkboxLabel.style.color = '';

      if (checkbox.checked && inputTel.value.length === 18) {
        const preload = createPreloader();
        let formData = new FormData(item);

        formData = Object.fromEntries(formData);
        button.textContent = '';
        preload.classList.add('sk-three-bounce');
        button.append(preload);

        createRequest(formData).then((response) => {
          if (!response.ok) {
            throw new Error('Status network not ok');
          }

          if (document.querySelector('.popup__content--active')) {
            closePopup();
          }

          preload.classList.remove('sk-three-bounce');
          button.textContent = buttonText;
          showPopup('thanks');
          setTimeout(closePopup, 3000);
        }).catch((error) => {
          console.error(error);
          preload.classList.remove('sk-three-bounce');
          button.textContent = 'Произошла ошибка...';

          setTimeout(() => {
            button.textContent = buttonText;
          }, 2000);
        });

        inputTel.value = '';
        checkbox.checked = false;
      } else {
        if (!checkbox.checked) checkboxLabel.style.color = '#ff0c0a';
        if (inputTel.value.length !== 18) inputTel.style.borderColor = '#ff0c0a';
      }
    });
  });
}

sendForm();
