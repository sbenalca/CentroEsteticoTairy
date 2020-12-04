  var stepper4
  var stepperForm
  
  document.addEventListener('DOMContentLoaded', function () {
    
    stepper4 = new Stepper(document.querySelector('#process'))
  

    var btnNextList = [].slice.call(document.querySelectorAll('.btn-success'))
    var btnPrevList = [].slice.call(document.querySelectorAll('.btn-secondary'))
  
    btnNextList.forEach(function (btn) {
      btn.addEventListener('click', function () {
        stepper4.next()
      })
    })

    btnPrevList.forEach(function (btn) {
        btn.addEventListener('click', function () {
          stepper4.previous()
        })
      })

  })
  