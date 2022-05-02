window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('resize', function(){
        if(window.outerWidth < 600) {
            document.querySelector('#access-item').setAttribute('class', '');
        }
        else {
            document.querySelector('#access-item').setAttribute('class', 'd-flex');
        }
        if(window.outerWidth < 570) {
            document.querySelector('#top-left-item').setAttribute('class', 'item');
            document.querySelector('#top-right-item').setAttribute('class', 'item');
            document.querySelector('#bottom-left-item').setAttribute('class', 'item');
            document.querySelector('#bottom-right-item').setAttribute('class', 'item');
        }
        else{
            document.querySelector('#top-left-item').setAttribute('class', 'col-sm-8 item');
            document.querySelector('#top-right-item').setAttribute('class', 'col-sm-3 item');
            document.querySelector('#bottom-left-item').setAttribute('class', 'col-sm-8 item');
            document.querySelector('#bottom-right-item').setAttribute('class', 'col-sm-3 item');
        }
    });
  });