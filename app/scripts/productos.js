'use strict';

(function() {
    window.service.productos.getProductos({
        // limit: document.getElementById('movies').dataSet.length
        //limit: $('#producto').data('newPosts')
        limit: 2
    }).then(function(responses) {

        var html = responses.reduce(function(total, response, index, list) {
            //console.log(arguments)
            console.log(list)



            return '<div class="panel-body"> <picture>' +
                ' <source srcset="' + response.images.md[0] + '" media="(max-width: 480px)"> ' +
                ' <source srcset=" ' + response.images.xs[0] + '" media="(min-width: 481px) and (max-width: 960px)">' +
                ' <img src=" ' + response.images.lg[0] + ' ">  </div> </picture>' +
                ' <div class="panel-footer"> ' +
                ' <a href="#myModal" data-toggle="modal" data-target="#myModal">"' + response.name + '"</a>' +
                ' <button type="button" class="btn btn-info ">Info</button>' +
                '<button type="button" class="btn btn-default btn-lg ">' +
                ' <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>"' + response.likes +
                ' " </button> ' +
                '</div>';
        }, '');
        $('#producto').append(html);
        // console.log(html);
        // moviesDragInit();
    }).catch(function() {
        console.log(arguments);

    });

})();