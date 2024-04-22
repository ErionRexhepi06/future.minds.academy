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
let cards = [
    {
        image: "./images/card-1.jpeg",
        title: "Beautiful Castle",
        description: 
        `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni esse tenetur libero
        nemo
        delectus
        nisi! Soluta harum nesciunt, quas, illo, repellendus ducimus iste consectetur
        officia
        odio
        earum
        nobis. Voluptate, magnam.`,
        price: "$899/night",
        location: "Barcelona, Spain"
    },
    {
        image: "./images/card-2.jpeg",
        title: "Office Studio",
        description: 
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eius maxime ullam
        officia
        natus
        consectetur inventore sit cupiditate quidem error magnam modi neque magni
        architecto,
        eligendi
        sapiente nobis ex maiores!`,
        price: "$1.119/night",
        location: "London, UK"
    },
    {
        image: "./images/card-3.jpeg",
        title: "Cozy 5 Star Apartment",
        description: 
        `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni esse tenetur libero
        nemo
        delectus
        nisi! Soluta harum nesciunt, quas, illo, repellendus ducimus iste consectetur
        officia
        odio
        earum
        nobis. Voluptate, magnam.`,
        price: "$459/night",
        location: "Milan, Italy"
    }
    
];

let buildCard = '';

cards.forEach(card => {
    buildCard += `
        <article class="section3-article border-rad-02em box-shadow-all4 border-rad-05em" style="flex: 1;">
         <div class="card-div flex-column-sb">
            <div class="image-area-section3">
                <img class="pointer main-img-section3 border-rad-05em" src="${card.image}">
                <div class="image-options-section3 flex-row-gap">
                    <span title="View" class="pointer material-icons gray">image</span>
                    <span title="Edit" class="pointer material-icons green">edit</span>
                    <span title="Delete" class="pointer material-icons red"><b>close</b></span>
                </div>
            </div>
            <div class="flex-column-sb">
                <div class="info-section3">
                    <h3>${card.title}</h3>
                    <p>${card.description}</p>
                </div>
                <div class="div-bottom">
                <hr>
                <div class="flex-row-sb bottom-article-section3">
                    <span>${card.price}</span>
                    <div class="font-size-08em"><span class="material-icons">location_on</span>${card.location}</div>
                </div>
                </div>
            </div>
         </div>
         <div class="after-delete-card-div"> 
           <div>  
            <i class="fas fa-plus-circle after-del-icon"></i>
            <i class="fas fa-undo after-del-icon"></i>
           </div> 
         </div>   
        </article>
    `;
});

document.querySelector('.section3-display').innerHTML = buildCard;

//image goes up by clicking on it
document.querySelectorAll('.main-img-section3').forEach(img => {
    img.addEventListener('click', function() {
        if (img.classList.contains('translated')) {
            img.style.transform = 'translateY(0)';
            img.classList.remove('translated');
        } else {
            img.style.transform = 'translateY(-2em)';
            img.classList.add('translated');
        }
    });
});

//The function for the view button
function viewCard(imageSrc) {
    if (imageSrc) {
        let imageElement = document.createElement('img');
        imageElement.src = imageSrc;
        let imageViewDiv = document.querySelector('.image-view');
        imageViewDiv.innerHTML = '';
        imageViewDiv.appendChild(imageElement);
        imageViewDiv.style.display = 'block'; 
    } else {
        console.error('Invalid image source:', imageSrc);
    }
}
document.querySelectorAll('.image-options-section3 .material-icons.gray').forEach((span, index) => {
    span.addEventListener('click', function() {
        let imageSrc = cards[index].image;
        let imageViewDiv = document.querySelector('.image-view');
        let imageViewImg = document.querySelector('.image-view img');
        imageViewImg.src = imageSrc;
        imageViewDiv.style.display = 'flex';
    });
});
document.querySelector('.image-view').addEventListener('click', function(event) {
    if (event.target.classList.contains('close-button')) {
        document.querySelector('.image-view').style.display = 'none';
    }
});

//The functions of edit button
function toggleVibrateClass(element) {
    if (element.classList.contains('vibrate-1')) {
        element.classList.remove('vibrate-1');
    } else {
        element.classList.add('vibrate-1');
    }
}

document.querySelectorAll('.image-options-section3 .material-icons.green').forEach((span, index) => {
    let cards = [...document.querySelectorAll('.section3-article')];
    let titles = document.querySelectorAll('.info-section3 h3');
    let descriptions = document.querySelectorAll('.info-section3 p');
    let card = cards[index];
    let locationIcon = card.querySelector('.bottom-article-section3 span.material-icons');

    span.addEventListener('click', function() {
        toggleVibrateClass(card);

        if (!span.classList.contains('editing')) {
            span.classList.add('editing');

            locationIcon.style.display = 'none';

            let popup = document.createElement('div');
            popup.className = 'edit-popup';
            
            let titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.value = titles[index].innerText;
            
            let descriptionTextarea = document.createElement('textarea');
            descriptionTextarea.value = descriptions[index].innerText;

            let priceInput = document.createElement('input');
            priceInput.type = 'text';
            priceInput.value = card.querySelector('.bottom-article-section3 span').innerText;

            let locationInput = document.createElement('input');
            locationInput.type = 'text';
            locationInput.value = card.querySelector('.bottom-article-section3 div').innerText;

            let confirmBtn = document.createElement('button');
            confirmBtn.innerText = 'Confirm';
            confirmBtn.className = 'edit-window-btn';
            
            confirmBtn.addEventListener('click', function() {
                titles[index].innerText = titleInput.value;
                descriptions[index].innerText = descriptionTextarea.value;
                card.querySelector('.bottom-article-section3 span').innerText = priceInput.value;
                card.querySelector('.bottom-article-section3 div').innerText = locationInput.value;

                localStorage.setItem(`title-${index}`, titleInput.value);
                localStorage.setItem(`description-${index}`, descriptionTextarea.value);
                localStorage.setItem(`price-${index}`, priceInput.value);
                localStorage.setItem(`location-${index}`, locationInput.value);

                popup.remove();
                locationIcon.style.display = 'none'; 
                span.classList.remove('editing');
                toggleVibrateClass(card); 
            });
            
            popup.appendChild(titleInput);
            popup.appendChild(descriptionTextarea);
            
            let editWindowBottom = document.createElement('div');
            editWindowBottom.className = 'edit-window-bottom';
            editWindowBottom.appendChild(priceInput);
            editWindowBottom.appendChild(locationInput);
            popup.appendChild(editWindowBottom);
            
            popup.appendChild(confirmBtn);
            
            document.body.appendChild(popup);
            
            
        } else {
            let popup = document.querySelector('.edit-popup');
            if (popup) {
                popup.remove();
            }
            
            locationIcon.style.display = '';

            span.classList.remove('editing');
            toggleVibrateClass(card); 
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section3-article').forEach((card, index) => {
        let title = localStorage.getItem(`title-${index}`);
        let description = localStorage.getItem(`description-${index}`);
        let price = localStorage.getItem(`price-${index}`);
        let location = localStorage.getItem(`location-${index}`);

        if (title && description && price && location) {
            card.querySelector('.info-section3 h3').innerText = title;
            card.querySelector('.info-section3 p').innerText = description;
            card.querySelector('.bottom-article-section3 span').innerText = price;
            card.querySelector('.bottom-article-section3 div').innerText = location;
        }
    });
});

//The function of delete button
document.addEventListener('DOMContentLoaded', () => {
    let deleteIcons = document.querySelectorAll('.material-icons.red');

    deleteIcons.forEach(icon => {
        let afterCardDel = icon.closest('.section3-article').querySelector('.after-delete-card-div');
        icon.addEventListener('click', function() {
            let cardDiv = this.closest('.card-div');
            if (cardDiv) {
                cardDiv.style.display = 'none';
                afterCardDel.style.display = 'block';
            }
        });

        afterCardDel.querySelector('.fa-undo').addEventListener('click', function() {
            afterCardDel.style.display = 'none';
            afterCardDel.closest('.section3-article').querySelector('.card-div').style.display = 'flex';
        });
    });
});
