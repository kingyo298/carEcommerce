<template>
  <div class="card m-2" style="width: 18rem;">
      <div class="card-body">
          <img :src="car.imgUrl" class="card-img-top" alt="...">
          <h5 class="card-title pt-2">{{car.name}}</h5>
          <p class="card-text">Category: {{car.category}}</p>
          <p class="card-text">Price: {{car.price | currency}}</p>
          <p class="card-text">Date: {{car.date}}</p>
      </div>
  </div>
</template>
<script>
export default {
  props:['car']
}
</script>
