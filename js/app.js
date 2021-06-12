const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];



const galleryList = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const overlayElm = document.querySelector('.lightbox__overlay');
const modalCurrantImg = document.querySelector('.lightbox__image');
const modalCloseBtn = document.querySelector('button[data-action="close-lightbox"]');


const maxlenght = galleryItems.length -1;
// console.log(maxlenght)


const markup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('afterbegin', markup);

function createGalleryMarkup(galleryItems) { 
  
  return galleryItems.map(({ preview, original, description }, index) => {
    return `
     <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-num="${index}"
      alt="${description}"
    />
  </a>
</li>
      `;
  }).join('');
  
}

galleryList.addEventListener('click', onClickOnImgGallery);


function onClickOnImgGallery(evt) {
   evt.preventDefault();
 
  if (!evt.target.classList.contains("gallery__image") ) {
    
    return;
    
  } else {
    modalEl.classList.add('is-open');
    modalCurrantImg.src = evt.target.dataset.source;
    modalCurrantImg.alt = evt.target.alt;
  
    window.addEventListener('keydown', onPressKeyToDoAction);
    modalEl.addEventListener('click', onClickClosedModal);
    
  }
 
}

 function onClickClosedModal(evt) {
   if (evt.target.tagName !== 'IMG') {
   
    modalEl.classList.remove('is-open');
    modalCurrantImg.src = '';
    modalCurrantImg.alt = '';
  
}
}


function onPressKeyToDoAction(evt) {

  const isActiveElm = evt.target.querySelector('.gallery__image');
  const arriveElementes = document.querySelectorAll('.gallery__image');
 
  console.log(isActiveElm.dataset.num);
 

  if (evt.code === 'ArrowLeft') {

    if (isActiveElm.dataset.num == 0) {
      return;
    }
    
    isActiveElm.dataset.num -= 1;
    
    modalCurrantImg.src = arriveElementes[isActiveElm.dataset.num].dataset.source;
    modalCurrantImg.alt = arriveElementes[isActiveElm.dataset.num].alt;
     
    
    console.log(modalCurrantImg);

  } else if (evt.code === 'ArrowRight') {
    console.log(isActiveElm.dataset.num);

    if (isActiveElm.dataset.num == maxlenght) {
        return
    }
    
       isActiveElm.dataset.num++;
   
    modalCurrantImg.src = arriveElementes[isActiveElm.dataset.num].dataset.source;
    modalCurrantImg.alt = arriveElementes[isActiveElm.dataset.num].alt;
    console.log(modalCurrantImg);
    

  } if(evt.code === 'Escape') {
     modalEl.classList.remove('is-open');
     modalCurrantImg.src = '';
     modalCurrantImg.alt = '';
     console.log(modalCurrantImg);
  } else {
    return;
   }
    
  }


