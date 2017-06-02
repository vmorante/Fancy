'use strict';

(function() {
    window.service.productos.getProductos({
        // limit: document.getElementById('movies').dataSet.length
        //limit: $('#producto').data('newPosts')
        limit: 2
    }).then(function(responses) {

        var html = responses.reduce(function(total, response, index, list) {

            return '<div  class="panel panel-default">' +
                '<div class="panel-body"> <picture>' +
                ' <source srcset="' + responses[1].images.md[0] + '" media="(max-width: 480px)"> ' +
                ' <source srcset=" ' + responses[1].images.xs[0] + '" media="(min-width: 481px) and (max-width: 960px)">' +
                ' <img  class="imagen1" src=" ' + responses[1].images.lg[0] + ' ">  </div> </picture>' +
                ' <div class="panel-footer"> ' +
                ' <a href="#myModal" data-toggle="modal" data-target="#myModal">' + responses[1].name + '</a>' +
                ' <button type="button" class="btn btn-info ">' + responses[1].price + '$</button>' +
                '<button type="button" class="btn btn-default btn-lg ">' +
                ' <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>' + responses[1].likes +
                '  </button> ' +
                '</div> </div>' +
                '<div class="row">' +
                '<div class="col-lg-6 col-md-6 col-xs-12">' +
                '<div  class="panel panel-default">' +
                '<div class="panel-body"> <picture>' +
                ' <source srcset="' + responses[2].images.md[0] + '" media="(max-width: 480px)"> ' +
                ' <source srcset=" ' + responses[2].images.xs[0] + '" media="(min-width: 481px) and (max-width: 960px)">' +
                ' <img  class="imagen" src=" ' + responses[2].images.lg[0] + ' ">  </div> </picture>' +
                ' <div class="panel-footer"> ' +
                ' <a href="#myModal" data-toggle="modal" data-target="#myModal">' + responses[1].name + '</a>' +
                ' <button type="button" class="btn btn-info ">' + responses[2].price + '$</button>' +
                '<button type="button" class="btn btn-default btn-lg ">' +
                ' <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>' + responses[1].likes +
                '  </button> ' +
                '</div> </div> </div>' +
                '<div class="col-lg-6 col-md-6 col-xs-12">' +
                '<div  class="panel panel-default">' +
                '<div class="panel-body"> <picture>' +
                ' <source srcset="' + responses[3].images.md[0] + '" media="(max-width: 480px)"> ' +
                ' <source srcset=" ' + responses[3].images.xs[0] + '" media="(min-width: 481px) and (max-width: 960px)">' +
                ' <img  class="imagen" src=" ' + responses[3].images.lg[0] + ' ">  </div> </picture>' +
                ' <div class="panel-footer"> ' +
                ' <a href="#myModal" data-toggle="modal" data-target="#myModal">' + responses[3].name + '</a>' +
                ' <button type="button" class="btn btn-info ">' + responses[3].price + '$</button>' +
                '<button type="button" class="btn btn-default btn-lg ">' +
                ' <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>' + responses[3].likes +
                '  </button> ' +
                '</div> </div> </div>'




        }, '');
        $('#producto').append(html);
        // console.log(html);
        // moviesDragInit();
    }).catch(function() {
        console.log(arguments);

    });

})();