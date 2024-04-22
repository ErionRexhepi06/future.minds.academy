let body = document.body

document.addEventListener("DOMContentLoaded", function () {
    let sidebarBtn = document.getElementById('sidebarBtn');
    let leftSide = document.querySelector('.left-side');
    let mainNavItems = document.querySelectorAll('.main-nav');

    let isToggled = false;

    // Toggle sidebar
    sidebarBtn.addEventListener('click', function () {
        let elementsToHide = document.querySelectorAll('#goingToHide');

        elementsToHide.forEach(element => {
            element.style.transition = 'display 0.5s';
            element.style.display = isToggled ? 'block' : 'none';
        });

        leftSide.style.transition = 'flex 0.5s';
        leftSide.style.flex = isToggled ? '2' : '.6';

        if (isToggled) {
            sidebarBtn.textContent = 'more_vert';
            mainNavItems.forEach(function (item) {
                item.style.pointerEvents = 'auto';
            });
        } else {
            sidebarBtn.textContent = 'menu_open';
            mainNavItems.forEach(function (item) {
                item.style.pointerEvents = 'none';
            });
        }

        isToggled = !isToggled;
    });
});

// Dropdown
document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.getElementById('dropdown');
    let content = document.getElementById('dropdownContent');

    dropdown.addEventListener('click', function (event) {
        content.classList.toggle('show');
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            content.classList.remove('show');
        }
    });
});

//Notifications
document.addEventListener("DOMContentLoaded", function () {
    let content = document.getElementById('dropdownContent');
    let notificationNumber = document.getElementById('notificationNumber');

    let notifications = [
        "John Doe sent a message",
        "Someone viewed your profile",
        "John Doe sent a message",
        "Someone viewed your profile",
        "Another message"
    ];

    function setNotificationsInLocalStorage(notifications) {
        localStorage.setItem('notifications', JSON.stringify(notifications));
    }

    function getNotificationsFromLocalStorage() {
        return JSON.parse(localStorage.getItem('notifications')) || [];
    }

    function generateNotificationsHTML() {
        content.innerHTML = '';

        notifications.forEach(notification => {
            let link = document.createElement('a');
            link.className = 'border-rad-02em';
            link.href = '#';
            link.textContent = notification;
            content.appendChild(link);
        });
    }

    function updateNotificationNumber() {
        if (notifications.length > 0) {
            notificationNumber.style.display = 'inline-block';
            notificationNumber.textContent = notifications.length;
        } else {
            notificationNumber.style.display = 'none';
        }
    }

    generateNotificationsHTML();
    updateNotificationNumber();
});


//Subnavs
document.addEventListener('click', function (event) {
    let clickedElement = event.target;
    let subNavs = document.querySelectorAll('.sub-nav');
    let dropdownIcons = document.querySelectorAll('.arrow-drop-down');

    if (!clickedElement.closest('.sub-nav') && !clickedElement.closest('.main-nav')) {
        subNavs.forEach(function (subNav) {
            subNav.style.display = 'none';
            subNav.classList.remove('open');
        });
        dropdownIcons.forEach(function (icon) {
            icon.classList.remove('rotate-icon');
        });
    }
});

function toggleSubNav(event) {
    let clickedLi = event.currentTarget;
    let clickedSubNav = clickedLi.querySelector('.sub-nav');
    let dropdownIcon = clickedLi.querySelector('.arrow-drop-down');

    let openSubNav = document.querySelector('.sub-nav.open');
    let openDropdownIcon = document.querySelector('.arrow-drop-down.rotate-icon');

    if (openSubNav && openDropdownIcon) {
        if (openSubNav === clickedSubNav) {
            openSubNav.style.display = 'none';
            openSubNav.classList.remove('open');
            openDropdownIcon.classList.remove('rotate-icon');
            return; 
        }
        openSubNav.style.display = 'none';
        openSubNav.classList.remove('open');
        openDropdownIcon.classList.remove('rotate-icon');
    }

    if (clickedSubNav && dropdownIcon) {
        if (clickedSubNav.classList.contains('open')) {
            clickedSubNav.style.display = 'none';
            clickedSubNav.classList.remove('open');
            dropdownIcon.classList.remove('rotate-icon');
        } else {
            clickedSubNav.style.display = 'block';
            clickedSubNav.classList.add('open');
            dropdownIcon.classList.add('rotate-icon');
        }
    }
}


//sidebar in smaller screen sizes
let menuBtn = document.getElementById('menuIcon');
let sideBar = document.querySelector('.sidebar');
let settingsButtonUnder600 = document.getElementById('settingsButtonBelow600');

menuBtn.onclick = function() {
    sideBar.classList.toggle('hide-below-1000px');
    menuBtn.classList.toggle('menu-icon-active');
    if (menuBtn.textContent === 'menu') {
        menuBtn.textContent = 'close';
        settingsButtonUnder600.style.display = 'none'; 
    } else {
        menuBtn.textContent = 'menu';
        settingsButtonUnder600.style.display = ''; 
    }

    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = ''; 
    } else {
        document.body.style.overflow = 'hidden';
    }

    sideBar.classList.toggle('slide-in-left');
    menuBtn.classList.toggle('slide-in-left');
};


//The cards
