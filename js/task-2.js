const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesItem = images.map(image => `<li><img src = "${image.url} " alt = "${image.alt}"></li >`).join('');

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', imagesItem);

const imagesForStyles = document.querySelectorAll('img');

imagesForStyles.forEach(imagesForStyle => {
  imagesForStyle.style.width = '360px';
  imagesForStyle.style.height = '300px';
});

const body = document.querySelector('body');

body.style.width = '1168px';
body.style.marginLeft = 'auto';
body.style.marginRight = 'auto';

gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.listStyleType = 'none';
gallery.style.gap = '24px';
gallery.style.rowGap = '48px';
