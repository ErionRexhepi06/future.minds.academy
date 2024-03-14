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

// Notifications
document.addEventListener("DOMContentLoaded", function () {
    let content = document.getElementById('dropdownContent');
    let notificationNumber = document.getElementById('notificationNumber');

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

    generateNotificationsHTML();

    function updateNotificationNumber() {
        if (notifications.length > 0) {
            notificationNumber.style.display = 'inline-block';
            notificationNumber.textContent = notifications.length;
        } else {
            notificationNumber.style.display = 'none';
        }
    }

    updateNotificationNumber();
});

//Subnavs
document.addEventListener('click', function (event) {
    let clickedElement = event.target;
    var subNavs = document.querySelectorAll('.sub-nav');
    var dropdownIcons = document.querySelectorAll('.dropdown-icon');

    if (!clickedElement.closest('.sub-nav') && !clickedElement.closest('.main-nav')) {
        subNavs.forEach(function (subNav) {
            subNav.style.display = 'none';
        });
        dropdownIcons.forEach(function (icon) {
            icon.classList.remove('rotate-icon');
        });
    }
});

function toggleSubNav(event) {
    var clickedLi = event.currentTarget;
    var clickedSubNav = clickedLi.querySelector('.sub-nav');
    var dropdownIcon = clickedLi.querySelector('.arrow-drop-down');

    if (clickedSubNav && dropdownIcon) {
        if (clickedSubNav.style.display === 'block') {
            clickedSubNav.style.display = 'none';
            dropdownIcon.classList.remove('rotate-icon');
        } else {
            clickedSubNav.style.display = 'block';
            dropdownIcon.classList.add('rotate-icon');
        }
    }
}

//Display sidebar in smaller screen sizes
let menuBtn = document.getElementById('menuIcon');
let sideBar = document.querySelector('.sidebar');

menuBtn.onclick = function() {
    sideBar.classList.toggle('hide-below-1000px');
    menuBtn.classList.toggle('menu-icon-active');
    if (menuBtn.textContent === 'menu') {
        menuBtn.textContent = 'close';
    } else {
        menuBtn.textContent = 'menu';
    }
};