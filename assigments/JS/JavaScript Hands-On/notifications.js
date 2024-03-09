function startNotification(text) {
  localStorage.setItem('originalTitle', document.title);
  localStorage.setItem('originalFavicon', getFavicon());

  // Change the favicon to bell.ico
  setFavicon('bell.ico');

  let interval = setInterval(() => {
      let isNotificationActive = localStorage.getItem('isNotificationActive') === 'true';
      if (isNotificationActive) {
          document.title = text;
          setFavicon('bell.ico');
      } else {
          document.title = localStorage.getItem('originalTitle');
          setFavicon(localStorage.getItem('originalFavicon'));
      }
      localStorage.setItem('isNotificationActive', !isNotificationActive);
  }, 1000);

  localStorage.setItem('notificationInterval', interval.toString());
}



function endNotification() {
  let interval = localStorage.getItem('notificationInterval');
  clearInterval(parseInt(interval));

  let originalTitle = localStorage.getItem('originalTitle');
  let originalFavicon = localStorage.getItem('originalFavicon');
  document.title = originalTitle;
  setFavicon(originalFavicon);
}

function getFavicon() {
  let favicon = document.querySelector('link[rel="icon"]');
  return favicon ? favicon.getAttribute('href') : 'default.ico';
}

function setFavicon(icon) {
  let favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
      favicon.setAttribute('href', icon);
  } else {
      let newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = icon;
      document.head.appendChild(newFavicon);
  }
}
