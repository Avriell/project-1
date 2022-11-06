$(() => {
//   $('#home').hide()
  $('#bio').hide()
  $('#projects').hide()
  $('#resume').hide()
  $('#hobbies').hide()

  const homeShow = () => {
    $('#home').show()
    $('#bio').hide()
    $('#projects').hide()
    $('#resume').hide()
    $('#hobbies').hide()
  }
  $('#hButton').on('click', homeShow)

  const bioShow = () => {
    // $('#home').hide()
    $('#bio').show()
    $('#projects').hide()
    $('#resume').hide()
    $('#hobbies').hide()
  }
    $('#bButton').on('click', bioShow)

    const hobShow = () => {
      // $('#home').hide()
      $('#bio').hide()
      $('#projects').hide()
      $('#resume').hide()
      $('#hobbies').show()
    }
      $('#hobButton').on('click', hobShow)


    $('.change').on('click', function() {
        if( $('body').hasClass('dark')) {
            $('body').removeClass('dark');
        } else {
            $('body').addClass('dark');
        }
 });
    $('.hide').on('click', hide())
})