//Settings
document.addEventListener("DOMContentLoaded", function() {
    let settingsButtonAbove1000 = document.getElementById('settingsButtonAbove1000');
    let settingsButtonBelow1000 = document.getElementById('settingsButtonBelow1000');
    let settingsButtonBelow600 = document.getElementById('settingsButtonBelow600');
    let settingsWindow = document.querySelector('.settings-window');
    let closeSettingsButton = document.getElementById('closeSettingsButton');

    settingsButtonAbove1000.addEventListener('click', toggleSettingsWindow);
    settingsButtonBelow1000.addEventListener('click', toggleSettingsWindow);
    settingsButtonBelow600.addEventListener('click', toggleSettingsWindow);
    closeSettingsButton.addEventListener('click', closeSettingsWindow);

    function toggleSettingsWindow() {
        if (settingsWindow.style.display === 'none' || settingsWindow.style.display === '') {
            settingsWindow.style.display = 'block';
            settingsWindow.classList.add('slide-in-blurred-top');
            document.body.style.overflow = 'hidden';
        } else {
            settingsWindow.classList.remove('slide-in-blurred-top');
            settingsWindow.classList.add('slide-out-blurred-top');
            setTimeout(() => {
                settingsWindow.style.display = 'none';
                settingsWindow.classList.remove('slide-out-blurred-top');
            }, 500); 
            document.body.style.overflow = 'auto';
        }
    }

    function closeSettingsWindow() {
        settingsWindow.classList.remove('slide-in-blurred-top');
        settingsWindow.classList.add('slide-out-blurred-top');
        setTimeout(() => {
            settingsWindow.style.display = 'none';
            settingsWindow.classList.remove('slide-out-blurred-top');
        }, 500); 
        document.body.style.overflow = 'auto';
    }
});

//sidebar-filters
document.addEventListener("DOMContentLoaded", function() {
    let sbFiltersBox = document.querySelector('.sb-filters-box');
    let colors = ['#0f355396', 'rgba(19, 95, 19, 0.623)', 'rgba(124, 3, 28, 0.473)', 'rgba(179, 51, 4, 0.507)', 'rgba(179, 27, 179, 0.486)', 'rgba(138, 138, 23, 0.671)', 'rgba(0,0,0,0.6)'];
    let selectedColor = localStorage.getItem('selectedColor') || 'rgba(0,0,0,0.6)';

    colors.forEach(color => {
        let circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = color;
        sbFiltersBox.appendChild(circle);

        circle.addEventListener('click', function() {
            changeSidebarColor(circle, color);
        });

        if (color === selectedColor) {
            circle.style.border = '3px solid rgb(0, 202, 202)';
        }
    });

    document.querySelector('aside').style.backgroundColor = selectedColor;
    document.querySelector('aside').style.color = 'white';

    function changeSidebarColor(circle, color) {
        let previouslySelected = document.querySelector('.circle[style*="rgb(0, 202, 202)"]');
        if (previouslySelected) {
            previouslySelected.style.border = 'none';
        }
        circle.style.border = '3px solid rgb(0, 202, 202)';
        document.querySelector('aside').style.backgroundColor = color;
        document.querySelector('aside').style.color = 'white';
        localStorage.setItem('selectedColor', color);
    }
});

//sidebar-background-color
document.addEventListener("DOMContentLoaded", function() {
    let enableBackgroundCheckbox = document.getElementById('enable-background');
    let sbBackground = document.querySelector('.sb-background');
    let colors = ['white', 'black'];

    function toggleBackgroundColorChange(enable) {
        if (enable) {
            sbBackground.style.pointerEvents = 'auto';
        } else {
            sbBackground.style.pointerEvents = 'none';
            removeSelectedBorder();
        }
        localStorage.setItem('backgroundColorChangeEnabled', enable);
    }

    function removeSelectedBorder() {
        let selectedCircle = document.querySelector('.circle[style*="rgb(0, 202, 202)"]');
        if (selectedCircle) {
            selectedCircle.style.border = 'none';
        }
    }

    function changeBackgroundColor(color) {
        removeSelectedBorder();
        let selectedCircle = document.querySelector(`.circle[style*="${color}"]`);
        selectedCircle.style.border = '3px solid rgb(0, 202, 202)';
        document.querySelector('aside').style.backgroundColor = color;

        updateFontColor(color); 

        if (enableBackgroundCheckbox.checked) {
            localStorage.setItem('selectedBackgroundColor', color);
        }
    }

    function updateFontColor(color) {
        let fontColor = color === 'white' ? 'black' : 'white';
        document.querySelector('aside').style.color = fontColor;
    }

    enableBackgroundCheckbox.addEventListener('change', function() {
        toggleBackgroundColorChange(this.checked);
    });

    let backgroundColorChangeEnabled = localStorage.getItem('backgroundColorChangeEnabled');
    if (backgroundColorChangeEnabled !== null) {
        enableBackgroundCheckbox.checked = (backgroundColorChangeEnabled === 'true');
        toggleBackgroundColorChange(enableBackgroundCheckbox.checked);
    }

    if (enableBackgroundCheckbox.checked) {
        let selectedColor = localStorage.getItem('selectedBackgroundColor');
        if (selectedColor && colors.includes(selectedColor)) {
            document.querySelector('aside').style.backgroundColor = selectedColor;
            updateFontColor(selectedColor);

            let selectedCircle = document.querySelector(`.circle[style*="${selectedColor}"]`);
            if (selectedCircle) {
                selectedCircle.style.border = '3px solid rgb(0, 202, 202)';
            }
        }
    }

    colors.forEach(color => {
        let circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = color;

        circle.addEventListener('click', function() {
            if (enableBackgroundCheckbox.checked) {
                changeBackgroundColor(color);
            }
        });

        sbBackground.appendChild(circle);
    });
});

//Sidebar Image
document.addEventListener("DOMContentLoaded", function() {
    let photoUrls = [
        "./images/sidebar-1.jpg",
        "./images/sidebar-2.jpg"
    ];
    let bcgPhotoBox = document.querySelector('.bcg-photo-box');
    let asideElement = document.querySelector('aside');
    let backgroundCheckbox = document.querySelector('.sidebar-img-input input[type="checkbox"]');

    function changeSidebarBackground(url, selectedImage) {
        asideElement.style.backgroundImage = `url(${url}), none`;
        asideElement.style.backgroundSize = '100% contain'; 

        let previouslySelected = document.querySelector('.settings-img.selected');
        if (previouslySelected) {
            previouslySelected.classList.remove('selected');
        }

        selectedImage.classList.add('selected');
    }

    function handleCheckboxChange() {
        if (this.checked) {
            asideElement.style.backgroundImage = 'none';
            localStorage.removeItem('selectedBackgroundImage');
        } else {
            let selectedImage = bcgPhotoBox.querySelector('.settings-img.selected');
            if (selectedImage) {
                let url = selectedImage.style.backgroundImage.replace('url("', '').replace('")', '');
                changeSidebarBackground(url, selectedImage);
            }
        }

        localStorage.setItem('backgroundCheckboxState', this.checked);
    }

    function removeSelectedImageBorder() {
        let selectedImage = document.querySelector('.settings-img.selected');
        if (selectedImage) {
            selectedImage.classList.remove('selected');
        }
    }

    let backgroundCheckboxState = localStorage.getItem('backgroundCheckboxState');
    if (backgroundCheckboxState !== null) {
        backgroundCheckbox.checked = (backgroundCheckboxState === 'true');
        handleCheckboxChange.call(backgroundCheckbox); 
    }

    backgroundCheckbox.addEventListener('change', handleCheckboxChange);

    function handleImageClick() {
        if (!backgroundCheckbox.checked) {
            let url = this.style.backgroundImage.replace('url("', '').replace('")', '');
            changeSidebarBackground(url, this);

            localStorage.setItem('selectedBackgroundImage', url);
        }
    }

    photoUrls.forEach(function(url) {
        let span = document.createElement('span');
        span.className = 'settings-img'; 
        span.style.backgroundImage = `url(${url})`;
        bcgPhotoBox.appendChild(span);

        span.addEventListener('click', handleImageClick);
    });

    let selectedBackgroundImage = localStorage.getItem('selectedBackgroundImage');
    if (selectedBackgroundImage && photoUrls.includes(selectedBackgroundImage)) {
        let selectedImage = bcgPhotoBox.querySelector(`.settings-img[style*="${selectedBackgroundImage}"]`);
        if (selectedImage) {
            selectedImage.classList.add('selected');
            changeSidebarBackground(selectedBackgroundImage, selectedImage); 
        }
    }
    if (!backgroundCheckbox.checked && selectedBackgroundImage) {
        changeSidebarBackground(selectedBackgroundImage);
    }
});
