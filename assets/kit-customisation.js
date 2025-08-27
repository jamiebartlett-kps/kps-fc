document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.product-form__customisation');
    var form = button && button.closest('.kit-customisation-form');
    if (!button || !form) return;

    // Create or select the customisation content div
    var customContent = form.querySelector('.kit-customisation-fields');

    button.addEventListener('click', function () {
        if (customContent.style.display === 'none') {
            customContent.style.display = 'block';
            customContent.style.overflow = 'hidden';
            customContent.style.transition = 'max-height 0.4s ease';
            customContent.style.maxHeight = '0px';
            // Force reflow
            void customContent.offsetWidth;
            customContent.style.maxHeight = customContent.scrollHeight + 'px';
        } else {
            customContent.style.transition = 'max-height 0.4s ease';
            customContent.style.maxHeight = '0px';
            setTimeout(function () {
                customContent.style.display = 'none';
            }, 400);
        }
    });

    // Populate form fields when player is selected
    var playerSelect = form.querySelector('#kit-customisation-player');
    var nameInput = form.querySelector('#kit-customisation-name');
    var numberInput = form.querySelector('#kit-customisation-number');

    if (playerSelect && nameInput && numberInput) {
        playerSelect.addEventListener('change', function () {
            var selected = playerSelect.options[playerSelect.selectedIndex];
            var playerName = selected.getAttribute('data-name') || '';
            var playerNumber = selected.getAttribute('data-number') || '';
            if (playerName && playerNumber) {
                nameInput.value = playerName;
                numberInput.value = playerNumber;
                nameInput.disabled = true;
                numberInput.disabled = true;
            } else {
                nameInput.value = "";
                numberInput.value = "";
                nameInput.disabled = false;
                numberInput.disabled = false;
            }

        });
    }

    // Listen for changes on all kit customisation fields
    var customisationFields = form.querySelectorAll('.kit-customisation-fields input, .kit-customisation-fields select');
    customisationFields.forEach(function(field) {
        field.addEventListener('change', function() {
            // Get the metafield image URL from the hidden div
            var nameInput = form.querySelector('#kit-customisation-name');
            var numberInput = form.querySelector('#kit-customisation-number');
            var backImage = document.querySelector('#back-image');

            let imageUrl = `${backImage.getAttribute('data-image')}&lettering=${nameInput.value}&numbering=${numberInput.value}`

            // Find the main image in the media gallery and update its src
            var galleryImg = document.querySelector('.product__media-list .product__media-item img');
            if (galleryImg) {
                galleryImg.src = imageUrl + '&v=' + new Date().getTime();
                if (galleryImg.hasAttribute('srcset')) {
                    galleryImg.removeAttribute('srcset');
                }
            }
        });
    });
});
