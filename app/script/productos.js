'use strict';

(function() {
    window.service.productos.getProductos({
        // limit: document.getElementById('movies').dataSet.length
        //limit: $('#producto').data('newPosts')
        limit: 2
    }).then(function(responses) {
        //console.log(responses);
        var html = responses.reduce(function(total, response, index, list) {
            console.log(arguments);
            return total + '<div class="panel-body"> <img src=" ' +
                response.images.lg[0] + ' ">  </div> ' +
                ' <div class="panel-footer"> ' +
                ' <a href="#myModal" data-toggle="modal" data-target="#myModal">"' + response.name + '"</a>' +
                ' <button type="button" class="btn btn-info ">Info</button>' +
                '<button type="button" class="btn btn-default btn-lg ">' +
                ' <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>"' + response.likes +
                ' " </button> ' +
                '</div>';
        }, '');
        $('#producto div').append(html);
        console.log(html);
        // moviesDragInit();
    }).catch(function() {
        console.log(arguments);

    });

})();