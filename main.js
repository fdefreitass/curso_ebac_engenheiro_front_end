$(document).ready(function () {
    $("#btn_head").click(function () {
        $('form').slideDown();
    })
    $("#btn_rst").click(function () {
        $('form').slideUp();
    })
    $('form').on('submit', function (e) {
        e.preventDefault();
        const newImg = $("#new-img").val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src="${newImg}" />`).appendTo(newItem);
        $(`
            <div class="overlay">
                <a href="${newImg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver Imagem em tamanho real
                </a>
            </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $("#new-img").val('');
    })
});