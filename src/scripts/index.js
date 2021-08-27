const next = document.querySelector('.e-photo-slider__arrows-right'),
      prev = document.querySelector('.e-photo-slider__arrows-left'),
      slidesWrapper =document.querySelector('.e-wrapper'),
      slidesField = document.querySelector('.e-slider'),
      height = window.getComputedStyle(slidesWrapper).height,
      slides = document.querySelectorAll('.e-section__content'),
      photoSliderWrapper = document.querySelector('.photo-slider-wrapper'),
      photoSlider = document.querySelector('.e-section__photo-slider'),
      width = window.getComputedStyle(photoSlider).width,
      photo = document.querySelectorAll('.photo');

let offset = 0,
    photoOffset = 0;

slidesField.style.height = 100 * slides.length + '%';
photoSliderWrapper.style.width = 100 * slides.length + '%';

slides.forEach(slide => {
    slide.style.height = height;
});

photo.forEach(slide => {
    slide.style.width = width;
});
next.addEventListener('click', ()=>{
    if(offset == +height.slice(0, height.length -2) * (slides.length - 1)){
        // offset = 0; 
    } else{
        offset += +height.slice(0, height.length -2);
    }
    slidesField.style.transform = `translateY(-${offset}px)`;


    if(photoOffset == +width.slice(0, width.length -2) * (slides.length - 1)){
        // photoOffset = 0;
    } else{
        photoOffset += +width.slice(0, width.length -2);
    }
    photoSliderWrapper.style.transform = `translateX(-${photoOffset}px)`;

    arrowUse(photoOffset);
});

prev.addEventListener('click', ()=>{
    if(offset == 0){
        // offset = +height.slice(0, height.length -2) * (slides.length - 1);  
    } 
    else{
        offset -= +height.slice(0, height.length -2);
    }
    slidesField.style.transform = `translateY(-${offset}px)`;


    if(photoOffset == 0){
        // photoOffset = +width.slice(0, width.length -2) * (slides.length - 1); 
    } 
    else{
        photoOffset -= +width.slice(0, width.length -2);
    }
    photoSliderWrapper.style.transform = `translateX(-${photoOffset}px)`;

    arrowUse(photoOffset);
});

//

function arrowUse(photoOffset) {
    if(photoOffset == 0) {
        prev.classList.add('hidden-arrow');
        next.classList.remove('hidden-arrow');
    }

    if (photoOffset == +width.slice(0, width.length -2) * (slides.length - 1)){
        next.classList.add('hidden-arrow');
        prev.classList.remove('hidden-arrow');
    }

    if(photoOffset != 0 && photoOffset != +width.slice(0, width.length -2) * (slides.length - 1)){
        prev.classList.remove('hidden-arrow');
        next.classList.remove('hidden-arrow');
    }
}