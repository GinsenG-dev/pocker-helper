<script>
  import PushFold from './pages/PushFold.vue'
  import MainTable from './pages/MainTable.vue'
  import LogoBottom from './pages/Logo/LogoBottom.vue';
  
  export default {
  name: 'Home',
  components: {
    PushFold,
    MainTable,
    LogoBottom
  }
};
</script>

<template>
  <div className="gMain">
    <div className="sComponents">
      <PushFold />
    </div>
    <div className="sComponents">
      <MainTable />
    </div>
  </div>
  <div className="lComponents">
      <LogoBottom />
  </div>
</template>

<style>

.gMain{
  display: flex;
  justify-content: center;
  text-align: center;
}
.sComponents{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 50px;
}
.lComponents{
  display: flex;
  justify-content: left;
  text-align: left;
  margin-left: 50px;
}

</style>
