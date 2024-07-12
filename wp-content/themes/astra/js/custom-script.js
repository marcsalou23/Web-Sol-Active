document.addEventListener('DOMContentLoaded', function () {
    var clickableContainers = document.querySelectorAll('.uagb-container-clickable');

    clickableContainers.forEach(function (container) {
        container.addEventListener('click', function () {
            var url = container.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});