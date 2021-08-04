const btns = document.querySelectorAll('button');
const comment = document.querySelector('.comment');
const username = document.querySelector('.name');
const jobTitle = document.querySelector('.job-title');
const picture = document.querySelector('.picture');

const testimonials = [
  {
    username: 'Tanya Sinclair',
    jobTitle: 'UX Engineer',
    comment:
      '  “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ',
    picture: './images/image-tanya.jpg',
  },
  {
    username: 'John Tarkpor',
    jobTitle: 'Junior Front-end Developer',
    comment:
      ' “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ',
    picture: './images/image-john.jpg',
  },
];

btns.forEach(function (btn) {
  btn.addEventListener('click', () => {
    switchTestimonial();
  });
});

let num = 1;
function switchTestimonial() {
  if (num >= testimonials.length) {
    num = 0;
  }
  comment.innerText = testimonials[num].comment;
  username.innerText = testimonials[num].username;
  jobTitle.innerText = testimonials[num].jobTitle;
  picture.src = testimonials[num].picture;

  num++;
}
