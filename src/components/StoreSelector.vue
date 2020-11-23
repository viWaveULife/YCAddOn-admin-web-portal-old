<template>
  <a-row :gutter="16">
    <a-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
      <a-select
        v-model:value="filterStore.area_id"
        style="width: 100%; margin: 0 6px"
        @change="handleAreaChange"
      >
        <a-select-option value="">請選擇大分區</a-select-option>
        <a-select-option
          v-for="item in storeAreaInfo.area"
          :key="item.area_id"
          :value="item.area_id"
        >
          {{ item.area_name }}
        </a-select-option>
      </a-select>
    </a-col>
    <a-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
      <a-select
        v-model:value="filterStore.area_sub_id"
        style="width: 100%; margin: 0 6px"
        @change="handleAreaSubChange"
        :disabled="filterStore.area_id === ''"
      >
        <a-select-option value="">請選擇小分區</a-select-option>
        <a-select-option
          v-for="item in storeAreaInfo.area_sub"
          :key="item.area_sub_id"
          :value="item.area_sub_id"
        >
          {{ item.area_sub_name }}
        </a-select-option>
      </a-select>
    </a-col>
    <a-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
      <a-select
        v-model:value="filterStore.store_id"
        style="width: 100%; margin: 0 6px"
        :disabled="filterStore.area_sub_id === ''"
      >
        <a-select-option value="">請選擇門市</a-select-option>
        <a-select-option
          v-for="item in storeAreaInfo.store"
          :key="item.store_id"
          :value="item.store_id"
        >
          {{ item.store_name }}
        </a-select-option>
      </a-select>
    </a-col>
  </a-row>
</template>

<script>
  import { reactive, onMounted, watch } from 'vue'
  import axios from 'axios'
  export default {
    setup(props, { emit }) {
      const storeAreaInfo = reactive({ area: [], area_sub: [], store: [] })
      const filterStore = reactive({
        area_id: '',
        area_sub_id: '',
        store_id: '',
      })

      watch(
        () => filterStore,
        () => {
          emit('get-value', filterStore)
        },
        {
          deep: true,
        }
      )

      // 大分區選擇事件
      const handleAreaChange = (value) => {
        filterStore.area_sub_id = ''
        filterStore.store_id = ''
        if (value === '') return
        const areaFilter = storeAreaInfo.area.filter(
          (item) => item.area_id === value
        )
        storeAreaInfo.area_sub = areaFilter[0].area_sub
      }

      // 小分區選擇事件
      const handleAreaSubChange = (value) => {
        const areaFilter = storeAreaInfo.area_sub.filter(
          (item) => item.area_sub_id === value
        )
        filterStore.store_id = ''
        storeAreaInfo.store = areaFilter[0].store
      }

      // 讀取門市列表
      onMounted(() => {
        axios
          .get('https://ec.yourchance.com.tw/app/storeArea.php')
          .then((response) => (storeAreaInfo.area = response.data.area))
      })

      return {
        filterStore,
        storeAreaInfo,
        handleAreaChange,
        handleAreaSubChange,
      }
    },
  }
</script>

<style></style>
