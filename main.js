$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#cancel-button').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const linkNovaImagem = $('#pegar-link-imagem').val();
        const novoItem = $('<li style= "display: none"></li>');
        $(`<img src="${linkNovaImagem}" >`).appendTo(novoItem);
        $(`
            <div class="image-overlay-link">
                <a href="${linkNovaImagem}" target = "_blank" tittle="ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);

        $('#pegar-link-imagem').val('');
    })
    
})