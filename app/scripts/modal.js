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
            //console.log(response);

            return '<div class="row">' +
                '<div class="col-lg-8">' +

                ' <picture >' +
                ' <source srcset="' + responses.images.md[0] + '" media="(max-width: 480px)"> ' +
                ' <source srcset=" ' + responses.images.xs[0] + '" media="(min-width: 481px) and (max-width: 960px)">' +
                ' <img id="1" class="imagenPrincipal" src=" ' + responses.images.lg[0] + ' ">  </picture> </div>' +


                '<div class="col-lg-4"> ' +
                '<div id="comprar" class="panel panel-default">' +
                '<div class="panel-body"> ' +
                '<p> ' + responses.name + '</p>' +
                ' <b>' + responses.price + '$</b>' +
                '<p><button type="button" class="btn btn-success">Add add to cart</button></p>' +
                ' <button type="button" class="btn btn-default btn-lg "> ' +
                '   <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>' + responses.likes + 'K' +
                ' </button> ' +
                '</div>' +
                ' </div> ' +
                ' </div>' +
                ' </div>' +
                '<div> ' +
                '<img id="2" class=" imagenSecundaria"  src="' + responses.images.xs[1] + '"onClick="cambiar(1,2)">' +
                '<img id="3" class=" imagenSecundaria"  src="' + responses.images.xs[2] + '"onClick="cambiar(1,3)">' +
                '<img  id="4" class=" imagenSecundaria"  src="' + responses.images.xs[0] + '"onClick="cambiar(1,4)">' +
                '<img id="5" class=" imagenSecundaria"  src="/resources/javi.png" onClick="cambiar(1,5)">' +
                ' </div>'

            ;

        };
        $('#detalleProducto').append(html);
        //console.log(html);
        // moviesDragInit();
    }).catch(function() {
        console.log(arguments);

    });
    // $('#detalleProducto div').append(html);

})();