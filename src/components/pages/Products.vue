<template>
    <div>
        <div class="text-right mt-4">
            <button class="btn btn-primary">Create Product</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">Category</th>
                    <th>Title</th>
                    <th width="120">Origin Price</th>
                    <th width="120">Price</th>
                    <th width="100">IsEnable</th>
                    <th width="80">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in products" :key="item.id" >
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td class="text-right">{{item.origin_price}}</td>
                    <td class="text-right">{{item.price}}</td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success">Enable</span>
                        <span v-else>Disable</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm">
                            Edit
                        </button>   
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/products`;
      const vm = this;
      console.log(process.env.API_PATH, process.env.CUSTOM_PATH);
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.products = response.data.products;
      });
    }
  },
  created() {
      this.getProducts();
  }
};
</script>