function stages(){


    let divider = document.querySelector(".stages__Wrapperdivider__divider")
     let computedStyle = window.getComputedStyle(divider);
     let background = computedStyle.getPropertyValue('background');
     const img = document.querySelector(".stages__Wrapperdivider__divider__img");
     let reg = /\d\d\dpx/ig;
     let matches = background.match(reg);

     if (matches) {
         let pxValues = matches.map(match => match.replace(/px/g, ''));
         pxValues = pxValues.map(px=> +px);
         console.log(pxValues);

        img.style.left = `${pxValues[0]}px`


        
     } else {
         console.log('No matches found.');
     }

 

}
export default stages;