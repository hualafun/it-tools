<script setup lang="ts">
import { compareSync, hashSync } from 'bcryptjs';
import { useThemeVars } from 'naive-ui';
import { useCopy } from '@/composable/copy';

const themeVars = useThemeVars();

const input = ref('');
const saltCount = ref(10);
const hashed = computed(() => hashSync(input.value, saltCount.value));
const { copy } = useCopy({ source: hashed, text: 'Hashed string copied to the clipboard' });

const compareString = ref('');
const compareHash = ref('');
const compareMatch = computed(() => compareSync(compareString.value, compareHash.value));
</script>

<template>
  <div class="flex gap-4 max-2xl:flex-col flex-row">
    <c-card class="flex-1" title="Hash">
      <c-input-text
        v-model:value="input"
        placeholder="加密的字符串..."
        raw-text
        label="加密的字符串: "
        label-position="left"
        label-width="120px"
        mb-2
      />
      <n-form-item label="Salt 计数: " label-placement="left" label-width="120">
        <n-input-number v-model:value="saltCount" placeholder="Salt rounds..." :max="10" :min="0" w-full />
      </n-form-item>
      <c-input-text :value="hashed" readonly text-center />
      <c-button @click="copy()"> 复制 hash </c-button>
    </c-card>
    <c-card class="flex-1" title="将字符串与哈希值进行比较">
      <n-form label-width="120">
        <n-form-item label="你的字符串: " label-placement="left">
          <c-input-text v-model:value="compareString" placeholder="需要对比的字符串..." raw-text />
        </n-form-item>
        <n-form-item label="你的 Hash: " label-placement="left">
          <c-input-text v-model:value="compareHash" placeholder="需要对比的哈希值..." raw-text />
        </n-form-item>
        <n-form-item label="是否匹配 ? " label-placement="left" :show-feedback="false">
          <div class="compare-result" :class="{ positive: compareMatch }">
            {{ compareMatch ? '是' : '否' }}
          </div>
        </n-form-item>
      </n-form>
    </c-card>
  </div>
</template>

<style lang="less" scoped>
.compare-result {
  color: v-bind('themeVars.errorColor');

  &.positive {
    color: v-bind('themeVars.successColor');
  }
}
</style>
