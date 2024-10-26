<script setup lang="ts">
import { MaterialSymbol } from '@dbetka/vue-material-symbols';
import type { IconsProp } from '@dbetka/vue-material-symbols/dist/jscache/icons-names';

const props = defineProps<{
    icon?: IconsProp | '' | null | undefined,
    image?: string,
    header: string,
    subheader?: string,
    solid: Boolean
}>()
</script>

<template>
    <div :class='["list-element", solid?"list-element-solid":""]'>
        <div class="list-element-body">
            <div v-if="icon || image" class="list-element-body-left">
                <MaterialSymbol class="list-element-body-left-icon" v-if="icon" :name="icon"/>
                <img draggable="false" class="list-element-body-left-image" v-else-if="image" :src="image"/>
            </div>
            <div class="list-element-body-text">
                <h5 class="list-element-body-text-header">{{header}}</h5>
                <h6 class="list-element-body-text-subheader" v-if="subheader">{{subheader}}</h6>
            </div>
        </div>
        <div class="list-element-actions">
            <slot name="actions"/>
        </div>
    </div>
</template>