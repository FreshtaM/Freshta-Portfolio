/* eslint-disable linebreak-style */
const navSlide = () => {
  const burger = document.querySelector('.humberger-menu');
  const nav = document.querySelector('.desktop-nav');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

  document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  }));
};

navSlide();

const projectSection = document.querySelector('.cards-section');
let render = '';

const projects = [
  {
  id: 0,
  title: 'GERICHT-Restaurant',
  projectDescription: 'Embark on a captivating project to develop a restaurant web application leveraging an external API. This API furnishes comprehensive data on a wide range of delectable meals. Immerse yourself in the world of culinary delights as you build a dynamic platform for restaurant exploration.',
  image: 'image/welcome.png',
  technology: [ 'Reactjs','CSS'],
  liveLink: 'https://js-capston-project.netlify.app/',
  sourceLink: 'https://github.com/FreshtaM/restuarant-modern-app.git',
},

  {
    id: 1,
    title: 'GPT-3',
    projectDescription:
      'Introducing a powerful mobile web application designed to empower you in managing your imagin effectively. With this intuitive platform, The possibilities are beyond your imagination ,Chatbots is about so opinion friends me message as delight. Whole front do of plate heard oh ought and u can see live so many other parts .',
    image: 'image/blog01 (1).png',
    technology: [ 'CSS', 'React'],
    liveLink: 'https://lucky-cupcake-6059d4.netlify.app',
    sourceLink: 'https://github.com/FreshtaM/GPT-3.git',
  },
  {
    id: 2,
    title: 'CREATIVE COMMONS',
    projectDescription: 'A dynamic website using HTML, CSS, Bootstrap, and JavaScript, showcasing my expertise in front-end development. This project demonstrates my deep understanding of fundamental web technologies and highlights my ability to build engaging and responsive web pages.',
    image: 'image/podtalk.png',
    technology: ['html', 'Bootstrap', 'JavaScript'],
    liveLink: 'https://charming-sable-a8ce77.netlify.app/',
    sourceLink: 'https://github.com/FreshtaM/podTalk.git',
  },
  {
    id: 3,
    title: 'Comfort-master',
    projectDescription: 'Discover an extensive collection of job displayed those jobs annouce through this site.This website can helpe people to Find their  DREAM JOB WITH COMPORT.And also this website is very great that make comfort to find a job and information about thier emplyee is on  screen . ',
    image: 'image/comfort-master.png',
    technology: ['html', 'Css', 'Java script', 'Scss'],
    liveLink: 'https://unrivaled-nasturtium-d10a9c.netlify.app',
    sourceLink: 'https://github.com/FreshtaM/Comfort-master.git',
  },
  {
    id: 4,
    title: 'Neurophism Calculator',
    projectDescription: 'The ultimate destination for all mathematics enthusiasts! Our website is a sleek Single Page App (SPA) featuring  page designed to calculate. Explore our curated content, solve intriguing math problems, and delve into fascinating mathematical concepts.',
    image: 'image/calculater.png',
    technology: ['html', 'Css', 'JavaSscript'],
    liveLink: 'https://coruscating-rugelach-990091.netlify.app',
    sourceLink: 'https://github.com/FreshtaM/Neurophism-Calculator.git',
  },

    {
      id: 5,
      title: 'Movie-app',
      projectDescription:'Discover the impact of a dynamic Leaderboard application displaying scores from diverse players. Effortlessly import data from the Leaderboard API to enhance the platform dynamic nature. Crafted with expertise in HTML, CSS, and JavaScript, ensuring a seamless user experience.',
      image: 'image/photo_2023-08-26_17-59-10.jpg',
      technology: ['Reactjs', 'Css', 'JavaScript'],
      liveLink: 'https://comfy-smakager-356eb3.netlify.app',
      sourceLink: 'https://github.com/FreshtaM/Movie-app.git',
      class:'movie-img',
    },
];

projects.forEach((data) => {
  render += `
    <div class="work-card" style="background-image: url(${data.image})">
      <div class="card-content flex-container">
        <h4 class="title">${data.title}</h4>
        <p>${data.projectDescription}</p>
        <ul>
          ${data.technology.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
      </div>
      <button type="button" class="card-button">See Project</button>
    </div>`;
});

projectSection.innerHTML = render;

/* single Project section modal */

const modalBtn = document.querySelector('.project-button');
const modalBg = document.querySelector('.modal-section');
const modalClose = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modalBg.style.visibility = 'visible';
  modalBg.style.opacity = 1;
});

modalClose.addEventListener('click', () => {
  modalBg.style.visibility = 'hidden';
  modalBg.style.opacity = 0;
});

/* card-modal */

const popupBtns = document.querySelectorAll('.card-button');

const popupObj = projects.reduce((obj, data, i) => {
  obj[`Project${i}`] = {
    title: data.title,
    technologies: data.technology,
    description: data.projectDescription,
    liveLink: data.liveLink,
    sourceLink: data.sourceLink,
  };
  return obj;
}, {});

const popupSection = document.createElement('section');
popupSection.className = 'popup-section';
document.body.appendChild(popupSection);

const modal = document.createElement('div');
modal.className = 'modal';
popupSection.appendChild(modal);

const newCloseImg = document.createElement('img');
newCloseImg.className = 'new-close-img';
newCloseImg.src = 'image/x-icon.png';
newCloseImg.alt = 'Close icon';
modal.appendChild(newCloseImg);

const newTitle = document.createElement('h3');
newTitle.className = 'new-title';
modal.appendChild(newTitle);

const newTechno = document.createElement('div');
newTechno.classList.add('new-techno', 'tags');
modal.appendChild(newTechno);

const modalContainer = document.createElement('div');
modalContainer.className = 'sec-container';
modal.appendChild(modalContainer);

const newProjectImg = document.createElement('img');
newProjectImg.className = 'new-project-img';
newProjectImg.alt = 'project image';
modalContainer.appendChild(newProjectImg);

const newDescription = document.createElement('p');
newDescription.className = 'new-description';
modalContainer.appendChild(newDescription);

const newBtns = document.createElement('div');
newBtns.className = 'new-btns';
modalContainer.appendChild(newBtns);

const createButton = (text, link) => {
  const button = document.createElement('a');
  button.href = link;
  button.className = 'button';
  button.textContent = text;
  button.target = '_blank';
  return button;
};

const openPopup = (index) => {
  const popupData = popupObj[`Project${index}`];
  newTitle.textContent = popupData.title;
  newTechno.innerHTML = popupData.technologies.map((tech) => `<h6>${tech}</h6>`).join('');
  newDescription.textContent = popupData.description;
  newBtns.innerHTML = '';
  newBtns.appendChild(createButton('See Live', popupData.liveLink));
  newBtns.appendChild(createButton('See Source', popupData.sourceLink));

  newProjectImg.src = projects[index].image;

  popupSection.classList.toggle('popup');
  popupSection.classList.toggle('popup-section');
};

popupBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => openPopup(index));
});

const closeBtns = document.querySelectorAll('.new-close-img');
closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => openPopup(0));
});



/* Contact Form Validation */

const emailInpute = document.querySelector('#email');
const submitBtn = document.querySelector('#submit');
const errorMessage = document.querySelector('#error-message');

const error = document.createElement('small');
error.className = 'deactive-error';
error.innerText = 'Email should be in LowerCase';
errorMessage.appendChild(error);

const failed = (event) => {
  event.preventDefault();
  error.classList.add('wrong-email');
  error.classList.remove('deactive-error');
};

const success = () => {
  error.classList.remove('wrong-email');
  error.classList.add('deactive-error');
};

submitBtn.addEventListener('click', (event) => {
  const pattern = /[A-Z]/;
  if (pattern.test(emailInpute.value)) {
    failed(event);
  } else {
    success();
  }
});

// Local Storage

const emailField = document.querySelector('#email');
const nameField = document.querySelector('#fullname');
const textField = document.querySelector('#message');
const storeds = document.querySelectorAll('.stored');
const obj = {};

storeds.forEach((item) => {
  item.addEventListener('input', () => {
    obj.email = emailField.value;

    obj.name = nameField.value;

    obj.textarea = textField.value;

    localStorage.setItem('form', JSON.stringify(obj));
  });
});

const data = JSON.parse(localStorage.getItem('form'));

window.onload = () => {
  if (data.name !== undefined) {
    nameField.value = data.name;
  }
  if (data.email !== undefined) {
    emailField.value = data.email;
  }
  if (data.textarea !== undefined) {
    textField.value = data.textarea;
  }
};