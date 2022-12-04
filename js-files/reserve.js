function handleLogin(e){
    //retrieving form from event
    const form = e.target.elements;
    //prevents the page from refreshing
    e.preventDefault();
    //receives values from the form
    const name = form.name.value;
    const contact = form.contact.value;
    const pax = form.pax.value;
    const date = form.date.value;
    const time = form.time.value;
    //creates a reservation object
    const output = {
      name,contact,pax,date,time
    };
    //logs the reservation
    console.log(output);
    alert("Reservation Success!")
    return output;
  }

const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
      el: '.swiper-scrollbar',
  },

  autoplay: {
      delay: 3000,
  },
});
  