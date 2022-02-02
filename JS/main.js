const openMenu = document.querySelector('.header-btn');
const mobileMenu = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');
const links = document.querySelectorAll('.link');
const speakerBox = document.querySelector('.speaker-box');

openMenu.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  closeBtn.classList.add('active');
  document.querySelector('body').style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.querySelector('body').style.overflow = 'auto';
  closeBtn.classList.remove('active');
});

links.forEach((link) => link.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.querySelector('body').style.overflow = 'auto';
  closeBtn.classList.remove('active');
}));

const speakers = [{
  speakerName: 'Micheal Tai',
  speakerPic: './images/speakers/photo1.png',
  speakerAlt: 'Micheal TaiHeadeshot',
  speakerOrigin: 'Proffessional  Video game player with legal development studies at the university of Nairobi',
  speakerBio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus corrupti natus consectetur, enim fugiat iusto sapiente dolores nesciunt? Cum quae fugiat iste, aliquam eligendi quo, incidunt dolore recusandae quis nihil enim magni ratione!',
},
{
  speakerName: 'Betty Michy',
  speakerPic: './images/speakers/photo2.png',
  speakerAlt: 'Betty MichyHeadeshot',
  speakerOrigin: 'Game Developer and lead developer for games such as Fortnite, Alligience and Video games advocate',
  speakerBio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus corrupti natus consectetur, enim fugiat iusto sapiente dolores nesciunt? Cum quae fugiat iste, aliquam eligendi quo, incidunt dolore recusandae quis nihil enim magni ratione!',
},
{
  speakerName: 'Yokazuka Mura',
  speakerPic: './images/speakers/photo3.png',
  speakerAlt: 'Yokazuka Mura Headeshot',
  speakerOrigin: 'The current world no.5 player at FIFA 2021 with a winning streak of 1100 games, ',
  speakerBio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus corrupti natus consectetur, enim fugiat iusto sapiente dolores nesciunt? Cum quae fugiat iste, aliquam eligendi quo, incidunt dolore recusandae quis nihil enim magni ratione!',
},
{
  speakerName: 'Doreen Benkler',
  speakerPic: './images/speakers/photo4.png',
  speakerAlt: 'Doreen Benkler Headeshot',
  speakerOrigin: 'Berkham Proffessor of Game development studies at the university of Nairobi, Game writer',
  speakerBio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus corrupti natus consectetur, enim fugiat iusto sapiente dolores nesciunt? Cum quae fugiat iste, aliquam eligendi quo, incidunt dolore recusandae quis nihil enim magni ratione!',
},
{
  speakerName: 'Brian Mulunya',
  speakerPic: './images/speakers/photo5.png',
  speakerAlt: 'Brian Mulunya Headeshot',
  speakerOrigin: 'Performer, Video Game entreprenur, The first man to win all the FIFA games in a row',
  speakerBio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus corrupti natus consectetur, enim fugiat iusto sapiente dolores nesciunt? Cum quae fugiat iste, aliquam eligendi quo, incidunt dolore recusandae quis nihil enim magni ratione!',
},
{
  speakerName: 'Johana Blaze',
  speakerPic: './images/speakers/photo6.png',
  speakerAlt: 'Johana Blaze Headeshot',
  speakerOrigin: 'Promoter, CEO of GAMERS RISING INC, Africa Division, Associate Proffessor at MIT, Author of Game Night',
  speakerBio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus corrupti natus consectetur, enim fugiat iusto sapiente dolores nesciunt? Cum quae fugiat iste, aliquam eligendi quo, incidunt dolore recusandae quis nihil enim magni ratione!',
},
];

function generateSpeaker(datas) {
  speakerBox.innerHTML = ' ';

  datas.forEach((data) => {
    const cardTemplate = `
<div class="speaker-content">
<div class="small-card"></div>
<img src="${data.speakerPic}" alt="${data.speakerAlt}">
<div class="speaker-desc">
<p class="speaker-name">${data.speakerName}</p>
<p class="speaker-origin">${data.speakerOrigin}</p>
<div class="dash-line"></div>
<p class="speaker-bio">${data.speakerBio}</p>
</div>
</div>
`;
    speakerBox.insertAdjacentHTML('afterbegin', cardTemplate);
  });
}

generateSpeaker(speakers);