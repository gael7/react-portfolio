$(document).ready(function(){
      $('.parallax').parallax();
      $('.button-collapse').sideNav({
        closeOnClick: true,
      });
      var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'radial',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#000000', '#9e9e9e'],
                ['#37474f', '#90a4ae'],
                ['#0d47a1', '#42a5f5']
            ],
            transitionSpeed: 3000,
        }
    }
});
});
