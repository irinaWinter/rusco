(function () {

  var main = document.querySelector('.page-main');

  var openPopup = function (popup) {
    main.appendChild(popup);

    var buttonClose = popup.querySelector('.close-button-js');
    buttonClose.addEventListener('click', function () {
      buttonCloseClickHandler(popup);
    });
  };

  var closePopup = function (popup) {
    popup.remove();
  }

  var buttonCloseClickHandler = function (popup) {
    closePopup(popup);
  };

  var successMessageTemplate = document.querySelector('#success')
    .content
    .querySelector('.popup');
  var successMessage = successMessageTemplate.cloneNode(true);

  var buttonOkClickHandler = function (popup) {
    closePopup(popup);
  };

  var showSuccessMessage = function () {
    closePopup(request);
    openPopup(successMessage);

    var buttonOk = successMessage.querySelector('.popup-section__button--success');
    buttonOk.addEventListener('click', function() {
      buttonOkClickHandler(successMessage);
    });
  }

  var dataList = '';

  var buttonSubmitClickHandler = function (evt) {
    evt.preventDefault();

    if (Array.from(dataList).every(function(item) {
      return item.value;
    })) {
      requestSection.classList.remove('popup-error');
      showSuccessMessage();
    } else {
      requestSection.classList.remove('popup-error');
      requestSection.offsetWidth = requestSection.offsetWidth;
      requestSection.classList.add('popup-error');
    }
  }

  var getConsultationButton = document.querySelector('.get-consultation-js');
  var requestTemplate = document.querySelector('#request')
    .content
    .querySelector('.popup');
  var request = requestTemplate.cloneNode(true);
  var requestSection = '';

  var getConsultationButtonClickHandler = function () {
    openPopup(request);
    dataList = request.querySelectorAll('.request-form__input');
    requestSection = request.querySelector('.popup-section');

    var buttonSubmit =  request.querySelector('.submit-form-js');
    buttonSubmit.addEventListener('click', function (evt) {
      buttonSubmitClickHandler(evt);
    })
  };

  getConsultationButton.addEventListener('click', function () {
    getConsultationButtonClickHandler();
  });
})();
