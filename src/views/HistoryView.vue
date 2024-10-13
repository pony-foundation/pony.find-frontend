<script setup lang="ts">
</script>

<template>
    <div>
        <v-list lines="two">
            <v-list-subheader>Сегодня</v-list-subheader>
            <template v-for="n in 3" :key="n">
                <v-list-item
                    :title="'Влад Кот ' + n"
                    subtitle="Лайк"
                    :prepend-avatar="'https://randomuser.me/api/portraits/women/'+n+'.jpg'"
                ></v-list-item>
                <v-divider/>
            </template>
            <v-list-subheader>Вчера</v-list-subheader>
            <template v-for="n in 3" :key="n">
                <v-list-item
                    :title="'Влад Кот ' + n"
                    subtitle="Лайк"
                    :prepend-avatar="'https://randomuser.me/api/portraits/women/'+n+'.jpg'"
                ></v-list-item>
                <v-divider/>
            </template>
            <v-list-subheader>3 октября</v-list-subheader>
            <template v-for="n in 3" :key="n">
                <v-list-item
                    :title="'Влад Кот ' + n"
                    subtitle="Лайк"
                    :prepend-avatar="'https://randomuser.me/api/portraits/women/'+n+'.jpg'"
                ></v-list-item>
                <v-divider/>
            </template>
        </v-list>
    </div>
</template>
