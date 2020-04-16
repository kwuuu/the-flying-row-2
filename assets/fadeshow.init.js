$(function(){
  $(".main-image").fadeShow({
    speed: 5000,
    images: [
      'assets/images/heroshot/rotator/1.jpg',
      'assets/images/heroshot/rotator/2.jpg',
      'assets/images/heroshot/rotator/3.jpg',
      'assets/images/heroshot/rotator/4.jpg',
      'assets/images/heroshot/rotator/5.jpg',
      'assets/images/heroshot/rotator/6.jpg',
      'assets/images/heroshot/rotator/7.jpg',
      'assets/images/heroshot/rotator/8.jpg'
             ]
  });
  // get rid of fallback background image that lives behind the rotator
  $(".main-image").css("background-image", "none")
});