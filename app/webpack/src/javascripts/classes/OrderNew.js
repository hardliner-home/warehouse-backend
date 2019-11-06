// import axios from 'axios';

import $ from 'jquery';

export default class OrderNew {

    constructor($scope) {
        // console.log('OrderNew >>> ', $scope)
        this.$storeOrdersWarehouseIdSelector = $scope.find('#warehouse_warehouse');
        this.$storeOrdersWarehousesProductSelector = $scope.find('#order_product');
        const previousValue = this.$storeOrdersWarehouseIdSelector.val();

        this.$storeOrdersWarehouseIdSelector.on('change', () => {
            if (previousValue !== this.$storeOrdersWarehouseIdSelector.val()) {
                $.ajax({
                    type: 'GET',
                    url: `/warehouses/${this.$storeOrdersWarehouseIdSelector.val()}/products`,
                    dataType: 'JSON'
                }).then((receivedData) => {
                    this.appendReceivedData(receivedData);
                })

                // axios.get(`/warehouses/${this.StoreOrdersWarehouseIdSelector.val()}/products.json`, {
                //     responseType: 'json',
                //     type: 'json',
                //     headers: { 'Content-Type': 'application/json' }
                //     params: { warehouse_id: this.StoreOrdersWarehouseIdSelector.val() }
                // })
                //     .then((response) => {
                //         console.log(response.data);
                //     })
                //     .catch((error) => {
                //         // console.log(error);
                //     })
                //     .finally( () => {
                //     });
            }
        })


        //1. find needed warehouse from $scope via jQuery find method
        //2. add event handler to change event
        //3. On change send axios call to BE and fetch new Products according selected warehouse
        //4. Set new options list to Product SelectBox
    }

    appendReceivedData(receivedData) {
        // console.log(receivedData.length)
        this.$storeOrdersWarehousesProductSelector.empty();

        $.each(receivedData, (index, value) => {
            this.$storeOrdersWarehousesProductSelector
                .append($("<option>", {
                    value: value.id,
                    text: value.title
                }))
        })
    };


};