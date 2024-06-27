// Sidebar functionality
const menuButton = document.querySelector('#menuButton');
const sidebar = document.querySelector('#sidebar');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

const expandableItems = document.querySelectorAll('.expandable');

expandableItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('expanded');
  });
});

// Notifications functionality
const notificationsIcon = document.querySelector('#notificationsIcon');
const notificationsPanel = document.querySelector('#notificationsPanel');

notificationsIcon.addEventListener('click', () => {
  notificationsPanel.classList.toggle('hidden');
});

// Load notifications from Local Storage
const notifications = JSON.parse(localStorage.getItem('notifications')) || [];

notifications.forEach(notification => {
  const notificationElement = document.createElement('div');
  notificationElement.textContent = notification;
  notificationsPanel.appendChild(notificationElement);
});
 
// Page Settings functionality
const settingsBtn = document.querySelector('#settingsBtn');
const settingsPanel = document.querySelector('#settingsPanel');

settingsBtn.addEventListener('click', () => {
  settingsPanel.classList.toggle('hidden');
});

// Load settings from Local Storage
const settings = JSON.parse(localStorage.getItem('settings')) || {};

// Apply settings
// For example, changing colors
document.body.style.backgroundColor = settings.backgroundColor || '#ffffff';

// Store settings in Local Storage
localStorage.setItem('settings', JSON.stringify(settings));
 
// Listings functionality
const listingsContainer = document.querySelector('#listings');

// Load listings from Local Storage
const listings = JSON.parse(localStorage.getItem('listings')) || [];

// Display listings
listings.forEach(listing => {
  const listingCard = document.createElement('div');
  listingCard.classList.add('listing-card');

  // Create elements for listing details (e.g., title, description, image)
  // Append elements to listingCard

  // Add delete and edit functionality
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    // Remove listing from listings array
    const index = listings.indexOf(listing);
    if (index !== -1) {
      listings.splice(index, 1);
      // Update UI and save changes to Local Storage
      renderListings();
      saveListings();
    }
  });

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    // Implement edit functionality (e.g., open modal or inline editing)
  });

  listingCard.appendChild(deleteButton);
  listingCard.appendChild(editButton);
  listingsContainer.appendChild(listingCard);
});

// Function to render listings
function renderListings() {
  listingsContainer.innerHTML = '';
  listings.forEach(listing => {
    // Create and append listingCard elements similar to above
  });
}

// Function to save listings to Local Storage
function saveListings() {
  localStorage.setItem('listings', JSON.stringify(listings));
}