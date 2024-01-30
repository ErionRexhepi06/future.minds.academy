function changeHeight(elementId, value) {
    const resizableElement = document.getElementById(elementId);

    const heightValue = Math.min(100, Math.max(0, value));
    resizableElement.style.height = heightValue + '%';

    resizableElement.title = `Height: ${heightValue}%`;
}