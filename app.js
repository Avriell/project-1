$(() => {
//   $('#home').hide()
  $('#bio').hide()
  $('#projects').hide()
  $('#resume').hide()

  const homeShow = () => {
    $('#home').show()
    $('#bio').hide()
    $('#projects').hide()
    $('#resume').hide()
  }
  $('#hButton').on('click', homeShow)

  const bioShow = () => {
    // $('#home').hide()
    $('#bio').show()
    $('#projects').hide()
    $('#resume').hide()
  }
    $('#bButton').on('click', bioShow)

    
    $('.change').on('click', function() {
        if( $('body').hasClass('dark')) {
            $('body').removeClass('dark');
        } else {
            $('body').addClass('dark');
        }
 });
    $('.hide').on('click', hide())
})