$(function(){

  console.log('it works')

  const mql = window.matchMedia("(max-width: 767.98px)")

  function checkBreakPoint(mql) {
    if (mql.matches) {
      console.log('sp')
    } else {
      console.log('tablet and pc')
    }
  }

  checkBreakPoint(mql)
  mql.addListener(checkBreakPoint)

});