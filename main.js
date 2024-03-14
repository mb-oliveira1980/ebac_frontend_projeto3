$("document").ready(function(){
    $("form").on("submit", function(evento){
        evento.preventDefault()
    })

    $("#telefone").mask("(00)00000-0000", {placeholder:"(__) _____-____"})
    
})