document.addEventListener('DOMContentLoaded', function () {
    const wrapTeachers = document.querySelector('.wrap__teachers');
    const items = document.querySelectorAll('.item__teachers');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            const translateValue = (i - index) * item.offsetWidth + 'px';
            item.style.transform = `translateX(${translateValue})`;
        });
    }

    function move(direction) {
        if (direction === 'left') {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
        } else {
            currentIndex = (currentIndex + 1) % items.length;
        }
        showItem(currentIndex);
    }

    document.querySelector('.right').addEventListener('click', function () {
        move('right');
    });

    document.querySelector('.left').addEventListener('click', function () {
        move('left');
    });
});