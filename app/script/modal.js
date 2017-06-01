'use strict';

(function() {
    window.service.productos.getProducto({
        // limit: document.getElementById('movies').dataSet.length
        //limit: $('#producto').data('newPosts')
        //id: 1
    }).then(function(responses, html) {
        var hola = Object.values(responses);
        console.log(typeof(hola))

        // var r = JSON.parse(responses);
        var html = function(total, response, index, list) {
            console.log(response);
            console.log(total);
            console.log(index)
            console.log(list)
            return '<div class="row">' +
                '<div class="col-lg-8">' +
                ' <img class="imagenPrincipal" src="' + responses.images.xs[0] + '">' +
                ' </div>' +

                '<div class="col-lg-4"> ' +
                '<div id="comprar" class="panel panel-default">' +
                '<div class="panel-body"> ' +
                '<p> ' + responses.name + '</p>' +
                ' <b>' + responses.price + '</b>' +
                '<p><button type="button" class="btn btn-success">Éxito</button></p>' +
                ' <button type="button" class="btn btn-default btn-lg "> ' +
                '   <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>' + responses.likes + 'K' +
                ' </button> ' +
                '</div>' +
                ' </div> ' +
                ' </div>' +
                ' </div>' +
                '<div> ' +
                '<img class=" imagenSecundaria"  src="' + responses.images.xs[1] + '">' +
                '<img class=" imagenSecundaria"  src="' + responses.images.xs[2] + '">' +
                '<img class=" imagenSecundaria"  src="' + responses.images.xs[3] + '">' +
                '<img class=" imagenSecundaria"  src="' + responses.images.xs[1] + '">' +
                ' </div>'

            ;

        };
        $('#detalleProducto div').append(html);
        //console.log(html);
        // moviesDragInit();
    }).catch(function() {
        console.log(arguments);

    });
    // $('#detalleProducto div').append(html);

})();