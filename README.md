# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./design/screenshots/testimonial_slider_pc_20210826.png)
![](./design/screenshots/testimonial_slider_mobile_20210826.png)
![](./design/screenshots/testimonial_slider_mobile_v2_20210826.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SCSS
- Bootstrap
- Vanilla JS

### What I learned

Making the page fully responsive is still one of the toughest challenges for me.
Using magic css numbers like "top: 76px" and "left: 189px" is not a great way to style things but I have used them in this project.
I would need to research more on responsive design and try avoiding bad css practices.
There are only limited JS so I was able to get it thorough.

This was my first time implementing SCSS and I definitely need to keep learning it.

\_breakpoins.scss, \_mixin.scss, and main.scss

```css
$breakpoints: (
  'sm': 'screen and (max-width: 400px)',
  'md': 'screen and (max-width: 768px)',
  'lg': 'screen and (max-width: 1000px)',
  'xl': 'screen and (max-width: 1200px)',
) !default;

@mixin mq($breakpoint) {
  @media #{map-get($breakpoints, $breakpoint)} {
    @content;
  }
}

.person {
  font-size: 1.3rem;
  margin-top: 1rem;

  @include mq(md) {
    font-size: 1rem;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .name {
    margin-right: 0.5rem;
    font-weight: 700;

    @include mq(md) {
      margin-right: 0;
    }
  }

  .job-title {
    color: $gray-blue;
    font-weight: 500;
  }
}
```

Setting testimonial obj and iterating over it to change the testimonials on click

```js
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
```

### Continued development

I would like to continue learning JS and useful libraries such as React, Vue, and Node etc.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
