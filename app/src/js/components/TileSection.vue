<template>
    <div class="tile-section-container">
        <div class="tile-section-container">
            <div class="tile-section" v-for="tile in generateTilesByColorAndLevel({ color: this.color, level: 1})">
                <div>{{ tile.title }}</div>
                <img :src="tile.img" alt="">
                <div>{{ tile.owner }}</div>
            </div>
        </div>
        <div class="tile-section" v-for="tile in generateTilesByColorAndLevel({ color: this.color, level: 2})">
            <div>{{ tile.title }}</div>
            <img :src="tile.img" alt="">
            <div>{{ tile.owner }}</div>
        </div>
        <div class="tile-section" v-for="tile in generateTilesByColorAndLevel({ color: this.color, level: 3})">
            <div>{{ tile.title }}</div>
            <img :src="tile.img" alt="">
            <div>{{ tile.owner }}</div>
        </div>
        <div class="tile-section" v-for="tile in generateTilesByColorAndLevel({ color: this.color, level: 4})">
            <div>{{ tile.title }}</div>
            <img :src="tile.img" alt="">
            <div>{{ tile.owner }}</div>
        </div>
    </div>
</template>

<script>
    import { generateTilesByColorAndLevel } from '../tiles/tileUtils';

    export default {
        name: 'tile-section',
        props: ['color'],
        data() {
            return {
                generateTilesByColorAndLevel,
            };
        },
    }
</script>

<style>

</style>


