'use strict';
(function() {

    var service = {
        root: '../resources/mocks/list.json',
        root2: '../resources/mocks/item.json',
        getProducto: getProducto,
        getProductos: getProductos,
        // createPhoto: createPhoto,
        // updatePhoto: updatePhoto,
        // deletePhoto: deletePhoto
    };

    function getProducto() {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: service.root2
        });
    }

    function getProductos(params) {
        params = params || {};
        params.limit = params.limit || 2;
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: service.root + '?_limit=' + 0
        });
    }

    // function createPhoto(data) {
    //     return $.ajax({
    //         type: 'POST',
    //         contentType: 'application/json; charset=utf-8',
    //         url: service.root + '/photos',
    //         data: JSON.stringify(data)
    //     });
    // }

    // function updatePhoto(id, data) {
    //     data = data || {};
    //     return $.ajax({
    //         type: 'PUT',
    //         contentType: 'application/json; charset=utf-8',
    //         url: service.root + '/photos/' + id,
    //         data: JSON.stringify(data)
    //     });
    // }

    // function deletePhoto(id) {
    //     return $.ajax({
    //         type: 'DELETE',
    //         url: service.root + '/photos/' + id
    //     });
    // }

    window.service = window.service || {};
    window.service.productos = service;

})();