const btns = document.querySelectorAll('button');

btns.forEach(function (btn) {
  btn.addEventListener('click', () => {
    switchTestimonial();
  });
});

const comment = document.querySelector('.comment');
const name = document.querySelector('.name');
const jobTitle = document.querySelector('.job-title');
const picture = document.querySelector('.picture');

function switchTestimonial() {
  comment.innerText =
    ' “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ';
  name.innerText = 'John Tarkpor';
  jobTitle.innerText = 'Junior Front-end Developer';
  picture.src = './images/image-john.jpg';
}
