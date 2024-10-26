<script setup lang="ts">
import MainNavigationBar from '@/components/MainNavigationBar.vue';
import List from '@/components/List.vue';
import ListElement from '@/components/ListElement.vue';
import ListElementButton from '@/components/ListElementButton.vue';
</script>

<template>
    <div>
        <main>
            <List>
                <ListElement image="https://derpicdn.net/img/2024/10/13/3462871/large.png" subheader="ВЛАД КОТ, Россия, 25 лет" header="Активная анкета" :solid='true'>
                    <template v-slot:actions>
                        <ListElementButton icon="person_edit">Редактировать</ListElementButton>
                        <ListElementButton icon="person_edit" disabled>Поменять</ListElementButton>
                    </template>
                </ListElement>
                <ListElement icon="star_border" subheader="Сохраненные анкеты" header="Отложенное" :solid='true'/>
                <ListElement icon="settings" subheader="Основные настройки и так далее" header="Настройки" :solid='true'/>
                <ListElement icon="question_mark" subheader="А че и как тут вообще??? Че??? Вы кто" header="FAQ" :solid='true'/>
                <ListElement icon="info" subheader="Копирайты и бла бла бла" header="О мини приложении" :solid='true'/>
            </List>
        </main>
        <MainNavigationBar :selected="2"/>
    </div>
</template>
