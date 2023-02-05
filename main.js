
function clockPainting() {
    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours();
    
    var ctx = document.getElementById("sandbox").getContext("2d");
    ctx.save(); // помещаем текущий контекст в стэк
    
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    
    ctx.strokeStyle = "black";
    ctx.fillStyle = "red";
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    
    ctx.save();
    ctx.beginPath();
    
    for (var i = 0; i < 12; i++) {
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(140, 0);
    ctx.lineTo(160, 0);
    }
    
    ctx.stroke(); // нарисовали то, что ранее описали
    ctx.restore(); // достаем последний сохраненный контекст из стэка
    
    ctx.save();
    // рисуем часовую стрелку, вращая холст
    ctx.rotate(
    (Math.PI / 6) * sec + (Math.PI / 360) * min + (Math.PI / 21600) * sec
    );
    ctx.lineWidth = 13;
    ctx.clearRect(0, 0, 100, 100);
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    
    // линия почти до часовых меток
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.save();
    
    // минутная стрелка
    
    
    ctx.restore();
     
    ctx.save();
    // рисуем часовую стрелку, вращая холст
    ctx.translate(250, 250);
    ctx.rotate(
    (Math.PI / 6) * min + (Math.PI / 360) * min + (Math.PI / 21600) * sec
    );
    ctx.lineWidth = 5;
  
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    
    // линия почти до часовых меток
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
    ctx.restore();
    ctx.save();
    

    ctx.translate(250, 250);
    ctx.rotate(
    (Math.PI / 6) * min + (Math.PI / 360) * sec + (Math.PI / 21600) * sec
    );
    ctx.lineWidth = 5;
  
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    
    // линия почти до часовых меток
    ctx.lineTo(70, 0);
    ctx.stroke();
    ctx.restore();
    ctx.restore();

    }

    
    window.onload = function () {
    setInterval(clockPainting, 1000); // функция, перерисовывающая часы
    //через равные промежутки времени
  
    };