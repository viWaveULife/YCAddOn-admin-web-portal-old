<template>
  <div class="dashboard-container">
    <a-page-header title="健康服務">
      <template #tags>
        <QuestionCircleOutlined />
      </template>
    </a-page-header>
    <a-row :gutter="8">
      <a-col :xs="24" :sm="4" :md="2" :lg="2" :xl="2" style="margin: auto">
        <label>查詢範圍:</label>
      </a-col>
      <a-col :xs="24" :sm="18" :md="20" :lg="20" :xl="20">
        <storeSelector @get-value="handleGetStoreValue" />
      </a-col>
      <a-col span="2">
        <a-button type="primary">查詢</a-button>
      </a-col>
    </a-row>

    <a-row :gutter="[16, 16]" style="margin-top: 12px">
      <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <a-card>
          <div class="card-title">
            <CheckCircleOutlined />
            單日量測人數
          </div>
          <div class="card-content">
            <p>80</p>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <a-card>
          <div class="card-title">
            <BarChartOutlined />
            單日量測記錄數
          </div>
          <div class="card-content">
            <p>110</p>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <a-card>
          <div class="card-title">
            <InfoCircleOutlined />
            單日異常記錄
          </div>
          <div class="card-content">
            <p>80</p>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <a-card>
          <div class="card-title">本月量測人述及服務分布</div>
          <div class="card-content">
            <p>80</p>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <a-card>
          <div class="card-title">量測項目占比</div>
          <div class="card-content">
            <p>80</p>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <a-card>
          <div class="card-title">服務方案占比</div>
          <div class="card-content">
            <p>80</p>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import {
    QuestionCircleOutlined,
    CheckCircleOutlined,
    InfoCircleOutlined,
    BarChartOutlined,
  } from '@ant-design/icons-vue'
  import storeSelector from '@/components/StoreSelector.vue'
  export default {
    name: 'Dashboard',
    components: {
      QuestionCircleOutlined,
      CheckCircleOutlined,
      InfoCircleOutlined,
      BarChartOutlined,
      storeSelector,
    },
    setup() {
      let filterStore = {}
      const handleGetStoreValue = (value) => {
        filterStore = value
      }

      return {
        filterStore,
        handleGetStoreValue,
      }
    },
  }
</script>
<style lang="less">
  .dashboard-container {
    margin-top: 0;
    height: 100vh;
    background-size: cover;
    .ant-card {
      border-radius: 10px;
      text-align: center;
      min-height: 200px;
      position: relative;
      align-items: center;
      @title-font-size: 26px;
      .card-title {
        font-weight: 500;
        font-size: @title-font-size;
        line-height: @title-font-size;
        letter-spacing: 0.2px;
        vertical-align: middle;
      }
      .card-content {
        display: inline-block;
        position: absolute;
        top: calc((100% - @title-font-size - 24px) / 2);
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        > p {
          font-size: 36px;
          font-weight: 300;
        }
      }
    }
  }
</style>
