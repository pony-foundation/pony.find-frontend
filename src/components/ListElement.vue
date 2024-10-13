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
        <div>
            <MaterialSymbol v-if="icon" :name="icon"/>
            <img v-else-if="image" :src="image"/>
        </div>
        <div>
            <h5>{{header}}</h5>
            <h6 v-if="subheader">{{subheader}}</h6>
        </div>
    </div>
</template>