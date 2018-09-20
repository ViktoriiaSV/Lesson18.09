$(function(){
    $('#vorota div').click(function(){
        let check;
        let mess;
        $('#ball').animate({
            left: $(this).offset().left + "px",
            top: $(this).offset().top + "px"
        }, 900)
        $('#gp').css({
            backgroundImage:
            "url('GP.png')"
        })
        check = catchBall();
        setTimeout(function(){
              if($(this).hasClass(check)){
            alert('loser')
        }
        else{
            alert('gooooool')
        }
          
        },1000)
    
    })
    function catchBall(){
        let t = Math.floor(Math.random()*4)+1;
//        let posL, posT;
        if(t==1){
            $('#gp').css({
                transform: "rotate(-45deg)"
            })
//            posL = 40;
//            posT = 40;
        }
        let cl = ".ch"+t;
        $('#gp').animate({
            left: $(cl).offset().left+"px",
            top: $(cl).offset().top+"px"
        }, 900)
        return cl.slice(1);
        
        
    }
})

