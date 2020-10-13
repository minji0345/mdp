var time = 20;
var min = " ";
var sec = " ";

allowDrop = function(event) {
    event.preventDefault();
    };
    
    dropItem = function(event) {
        var _targetEle = event.target;
        var _id = event.dataTransfer.getData('text');
        var _moveEle = document.getElementById(_id );
        _targetEle.before(_moveEle);
    };
    
    dragStart = function(event) {
        var _thisEle = ev.target;
        var _thisId = _thisEle.id;
        _thisEle.classList.add('is-dragging');
        //클래스 조절가능
        event.dataTransfer.setData('text/plain', _thisId);
    };
    
    dragEnd = function(event) {
        var _thisEle = event.target;
        _thisEle.classList.remove('is-dragging');
    };

var x = setInterval(function() {
    // min = parseInt(time/60); 분을 계산할 필요는 없으니까?
    sec = time % 60;

    document.getElementById("timer").innerHTML = `${sec}sec`;
    time--;

    if (time < 0 ) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = `Time out`;}
    }, 1000);
    