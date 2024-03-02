function getRandomSizeInRem() {
    return Math.floor(Math.random() * 5) + 1; 
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function createBubble() {
    var bubble = document.createElement('div');
  
    bubble.className = 'bubble';
  
    var maxWidth = window.innerWidth - 100; 
    var maxHeight = window.innerHeight - 100; 
    bubble.style.left = Math.random() * maxWidth + 'px'; 
    bubble.style.top = Math.random() * maxHeight + 'px'; 
  
    var size = getRandomSizeInRem();
    bubble.style.width = size + 'rem';
    bubble.style.height = size + 'rem';
  
    bubble.style.opacity = 0.7;
  
    bubble.style.backgroundColor = getRandomColor();
  
    document.getElementById('bubble-container').appendChild(bubble);
  }
  
  for (var i = 0; i < 300; i++) {
    createBubble();
  }
  