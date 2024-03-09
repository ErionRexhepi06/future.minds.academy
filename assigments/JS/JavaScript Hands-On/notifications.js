
function startNotification(text) {
  let originalTitle = document.title;
  let originalFavicon = document.querySelector('link[rel="icon"]').href;

  let isNotificationActive = true;
  let interval = setInterval(() => {
      if (isNotificationActive) {
          document.title = text;
          document.querySelector('link[rel="icon"]').href = 'bell.png';
      } else {
          document.title = originalTitle;
          document.querySelector('link[rel="icon"]').href = originalFavicon;
      }
      isNotificationActive = !isNotificationActive;
  }, 1000);

  localStorage.setItem('notificationInterval', interval.toString());
}


let endNotification = () => {
  let interval = localStorage.getItem('notificationInterval');
  clearInterval(parseInt(interval));
  document.title = originalTitle;
  setFavicon(originalFavicon);
};

let getFavicon = () => {
  let favicon = document.querySelector('link[rel="icon"]');
  return favicon ? favicon.getAttribute('href') : 'default.png';
};

let setFavicon = (icon) => {
  let favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
      favicon.setAttribute('href', icon);
  } else {
      let newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = icon;
      document.head.appendChild(newFavicon);
  }
};
