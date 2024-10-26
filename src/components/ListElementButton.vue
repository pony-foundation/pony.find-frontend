<script setup lang="ts">
import { MaterialSymbol } from '@dbetka/vue-material-symbols';
import type { IconsProp } from '@dbetka/vue-material-symbols/dist/jscache/icons-names';

const props = defineProps<{
    icon?: IconsProp | '' | null | undefined,
    disabled?: Boolean
}>();

</script>

<template>
    <button :class='["list-element-button", disabled?"disabled":""]'>
        <slot/>
    </button>
</template>