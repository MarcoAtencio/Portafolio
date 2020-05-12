var $aura = $("#aura");
var $bandera = false;

$('#e-perfil').click(function(){ 
    if($bandera ==false){
        rotate(0);
        $bandera = true;
            function rotate(degree) { 
            // For webkit browsers: e.g. Chrome
            $aura.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
            // For Mozilla browser: e.g. Firefox
            $aura.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
            if(degree < 360 ){
                // Animate rotation with a recursive call
                setTimeout(function() { rotate(++degree); });
            }
            else if(degree == 360) {
                $bandera = false;
            }
        }
    }
});


$('#e-proyectos').click(function(){
    if($bandera ==false){
        rotate(0);
        $bandera = true;
            function rotate(degree) { 
            // For webkit browsers: e.g. Chrome
            $aura.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
            // For Mozilla browser: e.g. Firefox
            $aura.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
            if(degree < 360 ){
                // Animate rotation with a recursive call
                setTimeout(function() { rotate(++degree); });
            }
            else if(degree == 360) {
                $bandera = false;
            }
        }
    }
});

$('#e-estudios').click(function(){
    if($bandera ==false){
        rotate(0);
        $bandera = true;
            function rotate(degree) { 
            // For webkit browsers: e.g. Chrome
            $aura.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
            // For Mozilla browser: e.g. Firefox
            $aura.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
            if(degree < 360 ){
                // Animate rotation with a recursive call
                setTimeout(function() { rotate(++degree); });
            }
            else if(degree == 360) {
                $bandera = false;
            }
        }
    }
});

$('#e-contacto').click(function(){
    if($bandera ==false){
        rotate(0);
        $bandera = true;
            function rotate(degree) { 
            // For webkit browsers: e.g. Chrome
            $aura.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
            // For Mozilla browser: e.g. Firefox
            $aura.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
            if(degree < 360 ){
                // Animate rotation with a recursive call
                setTimeout(function() { rotate(++degree); });
            }
            else if(degree == 360) {
                $bandera = false;
            }
        }
    }
});