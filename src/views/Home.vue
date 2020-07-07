<template>
  <div class="home">
    <TopView></TopView>
    <SalesView></SalesView>
    <MapView></MapView>
    <BottomView></BottomView>
  </div>
</template>

<script>
import TopView from '@/components/TopView'
import BottomView from '@/components/BottomView'
import SalesView from '@/components/SalesView'
import MapView from '@/components/MapView'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView

  }
}
</script>

<style>
  .home {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
