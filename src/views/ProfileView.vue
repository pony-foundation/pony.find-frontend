<script setup lang="ts">

</script>

<template>
    <div>
        <v-card
        class="mx-auto"
        prepend-avatar="https://www.thispersondoesnotexist.com/"
        subtitle="ВЛАД КОТ, Россия, 25 лет"
        title="Активная анкета"
      >
        <v-card-actions>
            <v-btn text="Редактировать" block border/>
        </v-card-actions>
      </v-card>
      <v-card>
        <v-list lines="two">
            <v-list-item
                title="Отложенные"
                subtitle="Сохраненные анкеты"
                prepend-icon="mdi-star"
            ></v-list-item>
            <v-divider/>
            <v-list-item
                title="Настройки"
                subtitle="Основные настройки и так далее"
                prepend-icon="mdi-cog"
            ></v-list-item>
            <v-divider/>
            <v-list-item
                title="FAQ"
                subtitle="а че и как тут вообще??? че??? вы кто"
                prepend-icon="mdi-help"
            ></v-list-item>
            <v-divider/>
            <v-list-item
                title="О Мини-приложении"
                subtitle="Копирайты и бла бла бла"
                prepend-icon="mdi-information-outline"
            ></v-list-item>
        </v-list>
      </v-card>
    </div>
</template>
