<script>
  import PushFold from './pages/PushFold.vue'
  import MainTable from './pages/MainTable.vue'
  MainTable
  export default {
  name: 'Home',
  components: {
    PushFold,
    MainTable
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

</style>
