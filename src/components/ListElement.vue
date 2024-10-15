<script setup lang="ts">
import { MaterialSymbol } from '@dbetka/vue-material-symbols';
import type { IconsProp } from '@dbetka/vue-material-symbols/dist/jscache/icons-names';

const props = defineProps<{
    icon?: IconsProp | '' | null | undefined,
    image?: string,
    header: string,
    subheader?: string
}>()
</script>

<template>
    <div class="list-element">
        <div v-if="icon || image" class="list-element-left">
            <MaterialSymbol class="list-element-left-icon" v-if="icon" :name="icon"/>
            <img draggable="false" class="list-element-left-image" v-else-if="image" :src="image"/>
        </div>
        <div class="list-element-text">
            <h5 class="list-element-text-header">{{header}}</h5>
            <h6 class="list-element-text-subheader" v-if="subheader">{{subheader}}</h6>
        </div>
    </div>
</template>