// Function to open a specific pop-up and display the overlay
function openPopup(popupId) {
    const popupContainer = document.getElementById(`popupContainer${popupId}`);
    const overlay = document.getElementById('overlay');

    popupContainer.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close a specific pop-up and hide the overlay
function closePopup(popupId) {
    const popupContainer = document.getElementById(`popupContainer${popupId}`);
    const overlay = document.getElementById('overlay');

    popupContainer.style.display = 'none';
    overlay.style.display = 'none';
}

// Event listener to open a specific pop-up when clicking the icon
function addOpenPopupEventListener(iconId, popupId) {
    const openPopupIcon = document.getElementById(iconId);

    openPopupIcon.addEventListener('click', () => {
        openPopup(popupId);
    });
}

// Event listener to close a specific pop-up when clicking the close button
function addClosePopupEventListener(closeBtnId, popupId) {
    const closePopupBtn = document.getElementById(closeBtnId);

    closePopupBtn.addEventListener('click', () => {
        closePopup(popupId);
    });
}

// Event listener to close a specific pop-up when clicking outside the pop-up
function addClosePopupOnOverlayClickListener(popupId) {
    const overlay = document.getElementById('overlay');

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closePopup(popupId);
        }
    });
}

// Initialize event listeners for each pop-up (1 to 4)
addOpenPopupEventListener('openPopupIcon1', 1);
addOpenPopupEventListener('openPopupIcon2', 2);
addOpenPopupEventListener('openPopupIcon3', 3);
addOpenPopupEventListener('openPopupIcon4', 4);

addClosePopupEventListener('closePopup1', 1);
addClosePopupEventListener('closePopup2', 2);
addClosePopupEventListener('closePopup3', 3);
addClosePopupEventListener('closePopup4', 4);

addClosePopupOnOverlayClickListener(1);
addClosePopupOnOverlayClickListener(2);
addClosePopupOnOverlayClickListener(3);
addClosePopupOnOverlayClickListener(4);
