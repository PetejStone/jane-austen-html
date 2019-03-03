
const overlay = document.querySelector('.overlay');
const carousel = document.querySelector('.carousel').children;
const worksImg = document.querySelector('.works').children;
const main = document.querySelector('main');
const body = document.querySelector('body');
const close = document.querySelectorAll('.close');
const left = document.querySelector('.left').children[0];
const right = document.querySelector('.right').children[0];
const child = document.querySelectorAll('.child');

let counter = 0; //counter tracker for arrow clicks
//opens overlay of works when image is clicked
for (let i=0; i < worksImg.length; i++) {

  //let counter = 0;
  //console.log(counter);

// overlay is displayed and content behind is locked from scrolling
  worksImg[i].addEventListener('click', ()=> {
      counter = i;
      console.log(counter);
      if (counter === 5) {

        right.style.display = 'none';//hide arrow at last child
      }

      if (counter === 0) {

        left.style.display = 'none';//hide arrow at last child
      }

      //don't display right arrow if last item

      overlay.style.display = 'block';
      body.style.overflow = 'hidden';
      carousel[counter].style.display = 'block';

      //right arrow functionality



  }//end of workImg event listener

)}// end of for loop of workImg

//right arrow functionality
right.addEventListener('click', ()=> {
  left.style.display = 'block'; //display left arrow
  child[counter].style.display = 'none';//current element disappears
  counter += 1;//add one to counter
  console.log(counter);
  child[counter].style.display = 'block'; //next element appears


   //console.log(counter);
    if (counter === 5) {

      right.style.display = 'none';//hide arrow at last child
    }
})// end of right arrow function


left.addEventListener('click', ()=> {
  right.style.display = 'block'; // display right arrow
  child[counter].style.display = 'none';//current element disappears
  counter -= 1;//subtract one from counter
  child[counter].style.display = 'block';//previous element disappears


  if (counter === 0) {
    left.style.display = 'none';//hide arrow at first child
  }
  return counter;
})// end of left arrow function





//close button functionality
for (let i=0; i < close.length; i++) {
  close[i].addEventListener('click', ()=> {
    body.style.overflow = 'scroll';
    carousel[i].style.display = 'none';
    child[i].style.display = 'none';
    overlay.style.display = 'none';
    right.style.display = 'block'; //reset arrow display
    right.style.display = 'block'; //reset arrow display
    counter = 0;
    console.log(counter);
  })

}


//phone js

// overlay is displayed and content behind is locked from scrolling
  worksImg[i].addEventListener('touch', ()=> {
      counter = i;
      console.log(counter);
      if (counter === 5) {

        right.style.display = 'none';//hide arrow at last child
      }

      if (counter === 0) {

        left.style.display = 'none';//hide arrow at last child
      }

      //don't display right arrow if last item

      overlay.style.display = 'block';
      body.style.overflow = 'hidden';
      carousel[counter].style.display = 'block';

      //right arrow functionality



  }//end of workImg event listener

)}// end of for loop of workImg

//right arrow functionality
right.addEventListener('touch', ()=> {
  left.style.display = 'block'; //display left arrow
  child[counter].style.display = 'none';//current element disappears
  counter += 1;//add one to counter
  console.log(counter);
  child[counter].style.display = 'block'; //next element appears


   //console.log(counter);
    if (counter === 5) {

      right.style.display = 'none';//hide arrow at last child
    }
})// end of right arrow function


left.addEventListener('touch', ()=> {
  right.style.display = 'block'; // display right arrow
  child[counter].style.display = 'none';//current element disappears
  counter -= 1;//subtract one from counter
  child[counter].style.display = 'block';//previous element disappears


  if (counter === 0) {
    left.style.display = 'none';//hide arrow at first child
  }
  return counter;
})// end of left arrow function





//close button functionality
for (let i=0; i < close.length; i++) {
  close[i].addEventListener('touch', ()=> {
    body.style.overflow = 'scroll';
    carousel[i].style.display = 'none';
    child[i].style.display = 'none';
    overlay.style.display = 'none';
    right.style.display = 'block'; //reset arrow display
    right.style.display = 'block'; //reset arrow display
    counter = 0;
    console.log(counter);
  })

}
