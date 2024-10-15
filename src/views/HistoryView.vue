<script setup lang="ts">
import HistoryDate from '@/components/HistoryDate.vue';
import HistoryStatus from '@/components/HistoryStatus.vue';
import List from '@/components/List.vue';
import ListElement from '@/components/ListElement.vue';
import MainNavigationBar from '@/components/MainNavigationBar.vue';

</script>

<template>
    <div>
        <main>
            <List>
                <HistoryDate :date="new Date('2024-10-14')"/>
                <HistoryStatus image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryStatus status="true" image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryStatus image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryStatus status="true" image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryStatus status="true" image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryStatus status="true" image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryDate :date="new Date('2024-10-10')"/>
                <HistoryStatus image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryStatus image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryStatus image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryStatus image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryDate :date="new Date('2023-10-10')"/>
                <HistoryStatus image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
                <HistoryStatus image="https://derpicdn.net/img/2024/10/15/3464549/large.png" name="АНТИ ВЛАД КОТ"/>
            </List>
        </main>
        <MainNavigationBar :selected="1"/>
    </div>
</template>