<script setup lang="ts">

import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const data = ref([
      {
        label:'1-0',
        level:1,
        open:true,
        children:[{
          label:'1-0-0',
          level:2,
          open:!true,
          children:[{

              label:'1-0-0-1',
              level:3,
          }]
          
        },
        {
          label:'1-0-1',
          level:2
          
        },
        {
          label:'1-0-2',
          level:2
          
        },
        
        ]

      },
        {
        label:'1-1',
        level:1,
        open:true,
        children:[{
          label:'1-1-0',
          level:2,
         open:true,
          children:[{

              label:'1-1-0-1',
              level:3,
          }]
          
        },
        {
          label:'1-1-1',
          level:2
          
        },
        {
          label:'1-1-2',
          level:2
          
        },
        
        ]

      }



    ]);
</script>

<template>
  <div>
    <h1>组件测试场景</h1>
  </div>

  <d-tree-test :data="data"></d-tree-test>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
