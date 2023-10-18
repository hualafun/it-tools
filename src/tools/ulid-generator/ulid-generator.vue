<script setup lang="ts">
import { ulid } from 'ulid';
import _ from 'lodash';
import { computedRefreshable } from '@/composable/computedRefreshable';
import { useCopy } from '@/composable/copy';

const amount = useStorage('ulid-generator-amount', 1);
const formats = [{ label: 'Raw（原始）', value: 'raw' }, { label: 'JSON', value: 'json' }] as const;
const format = useStorage<typeof formats[number]['value']>('ulid-generator-format', formats[0].value);

const [ulids, refreshUlids] = computedRefreshable(() => {
  const ids = _.times(amount.value, () => ulid());

  if (format.value === 'json') {
    return JSON.stringify(ids, null, 2);
  }

  return ids.join('\n');
});

const { copy } = useCopy({ source: ulids, text: 'ULIDs copied to the clipboard' });
</script>

<template>
  <div flex flex-col justify-center gap-2>
    <div flex items-center>
      <label w-75px> 数量:</label>
      <n-input-number v-model:value="amount" min="1" max="100" class="w-1/4" />
    </div>

    <c-buttons-select v-model:value="format" :options="formats" label="格式化: " label-width="75px" />

    <c-card mt-5 flex data-test-id="ulids">
      <pre m-0 m-x-auto>{{ ulids }}</pre>
    </c-card>

    <div flex justify-center gap-2>
      <c-button @click="copy()">
        复制
      </c-button>
      <c-button data-test-id="refresh" @click="refreshUlids()">
        刷新
      </c-button>
    </div>
  </div>
</template>
