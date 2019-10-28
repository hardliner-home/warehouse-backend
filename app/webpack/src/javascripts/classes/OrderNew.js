import axios from 'axios';

export default class OrderNew {

    constructor($scope) {
        // console.log('OrderNew >>> ', $scope)

        this.StoreOrdersWarehouseIdSelector = $scope.find('#store_orders_warehouse_id')
        this.previousValue = this.StoreOrdersWarehouseIdSelector.val()

        this.StoreOrdersWarehouseIdSelector[0].addEventListener('change', () => {

            if (this.previousValue !== this.StoreOrdersWarehouseIdSelector.val()) {

                axios.get(`/warehouses/${this.StoreOrdersWarehouseIdSelector.val()}/products`, {
                    params: {
                        warehouse_id: this.StoreOrdersWarehouseIdSelector.val()
                    }
                })
                    .then((response) => {
                        console.log(response);
                        // console.log(JSON.parse(response));
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally( () => {
                        // always executed
                    });
            }
        })


        //1. find needed warehouse from $scope via jQuery find method
        //2. add event handler to change event
        //3. On change send axios call to BE and fetch new Products according selected warehouse
        //4. Set new options list to Product SelectBox
    }


    fetchProducts() {
        // axios.get()
    }

};