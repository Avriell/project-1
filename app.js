$(() => {
//   $('#home').hide()
  $('#bio').hide()
  $('#projects').hide()
  $('#resume').hide()
  $('#hobbies').hide()

  const homeShow = () => {
    $('#home').show()
    $('#bio').hide(1000)
    $('#projects').hide(1000)
    $('#resume').hide(1000)
    $('#hobbies').hide(1000)
  }
  $('#hButton').on('click', homeShow)

  const bioShow = () => {
    // $('#home').hide()
    $('#bio').show(400)
    $('#projects').hide(1000)
    $('#resume').hide(1000)
    $('#hobbies').hide(1000)
  }
    $('#bButton').on('click', bioShow)

    const hobShow = () => {
      // $('#home').hide()
      $('#bio').hide(1000)
      $('#projects').hide(1000)
      $('#resume').hide(1000)
      $('#hobbies').show(400)
      
    }
      $('#hobButton').on('click', hobShow)

      const resumeShow = () => {
        // $('#home').hide()
        $('#bio').hide(1000)
        $('#projects').hide(1000)
        $('#resume').show(400)
        $('#hobbies').hide(1000)
      }
        $('#rButton').on('click', resumeShow)

        const projectsShow = () => {
          // $('#home').hide()
          $('#bio').hide(1000)
          $('#projects').show(400)
          $('#resume').hide(1000)
          $('#hobbies').hide(1000)
        }
          $('#pButton').on('click', projectsShow)


    $('.change').on('click', function() {
        if( $('body').hasClass('dark')) {
            $('body').removeClass('dark');
        } else {
            $('body').addClass('dark');
        }
 });

    
    $('.hidden').click(
      function () {
        $('.hidden').prepend('<img src="rat-fight.gif" class="remove"/> <p <a href="#" class="remove">REMOVE ME!</a></p>').delay(6000).hide(500)
      }
    )
    // $('.remove').on('click', function() {
    //   $('.remove').remove()
    // })
    

    // const dropDown = () => {
    //   $('.menu').toggle(function() {
    //     $('.menu').css('display', 'block')
    //   })
    // }
    // $('btn').on('click', dropDown)

    // $('.hide').on('click', hide())
})