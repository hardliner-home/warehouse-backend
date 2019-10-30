// import axios from 'axios';

export default class OrderNew {

    constructor($scope) {
        // console.log('OrderNew >>> ', $scope)

        this.StoreOrdersWarehouseIdSelector = $scope.find('#store_orders_warehouse_id')
        this.StoreOrdersWarehousesProductSelector = $scope.find('#store_orders_product')
        this.previousValue = this.StoreOrdersWarehouseIdSelector.val()

        this.appendReceivedData = (receivedData) => {
            console.log(receivedData.length)
            this.StoreOrdersWarehousesProductSelector.empty()

            $.each(receivedData, (index, value) => {
                this.StoreOrdersWarehousesProductSelector
                    .append($("<option>", {
                        value: value.id,
                        text: value.title
                    }))
            })

        }

        this.StoreOrdersWarehouseIdSelector[0].addEventListener('change', () => {
            if (this.previousValue !== this.StoreOrdersWarehouseIdSelector.val()) {
                $.ajax({
                        type: "GET",
                        url: `/warehouses/${this.StoreOrdersWarehouseIdSelector.val()}/products`,
                        contentType: 'application/json',
                        dataType: 'json',
                        success: (receivedData) => {
                            // console.log(receivedData);
                            this.appendReceivedData(receivedData);
                        }
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
};