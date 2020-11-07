const word = document.querySelector('#fname');

const letter = document.querySelector('#lname');

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {

    const a = word.value;
    const b = letter.value;

    var count = 0;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] == b)
            count++;
    }
    alert(count);

    e.preventDefault();
})






