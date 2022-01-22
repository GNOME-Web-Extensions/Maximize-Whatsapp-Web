const checkExist = setInterval(() => {
    const classElement = document.getElementsByClassName("_1XkO3")[0];

    if (classElement != null) {
        classElement.style = 'width: 100vw; height: 100vh; position: unset'
        clearInterval(checkExist);
    }
}, 100);
