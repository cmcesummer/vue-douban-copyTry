let obj = {
  scrollTrue: false,
  scroll: function() {
    window.addEventListener('scroll', function(){
      let wsy = window.scrollY;
      _this.scrollTrue = wsy > 50;
    },false)
  }
};

export default obj
