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

      const resumeShow = () => {
        // $('#home').hide()
        $('#bio').hide()
        $('#projects').hide()
        $('#resume').show()
        $('#hobbies').hide()
      }
        $('#rButton').on('click', resumeShow)

        const projectsShow = () => {
          // $('#home').hide()
          $('#bio').hide()
          $('#projects').show()
          $('#resume').hide()
          $('#hobbies').hide()
        }
          $('#pButton').on('click', projectsShow)


    $('.change').on('click', function() {
        if( $('body').hasClass('dark')) {
            $('body').removeClass('dark');
        } else {
            $('body').addClass('dark');
        }
 });

    // const dropDown = () => {
    //   $('.menu').toggle(function() {
    //     $('.menu').css('display', 'block')
    //   })
    // }
    // $('btn').on('click', dropDown)

    // $('.hide').on('click', hide())
})