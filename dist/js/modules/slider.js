function slider(){
    
  var slider = tns({
      container: '.my-slider',
      controlsContainer: "#custom_controlsContainer",
      prevButton: '#prev',  
      nextButton: '#next',                           
      items: 1,
      
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 3
        }
      }
    });

    var slider = tns({
      container: '.my-slider-second',                  
      items: 1,
      controlsContainer: "#custom_controlsContainer-second",
      prevButton: '#prev-second',  
      nextButton: '#next-second',        
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 4
         
        }
      }
    });


}

export default slider;