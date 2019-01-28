<template>
    <div class="players-container">
        <div class="players-list">
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'players-container',
    props: ['players'],
    created() {
        console.log(this.players);
    }
}
</script>

<style>

</style>

