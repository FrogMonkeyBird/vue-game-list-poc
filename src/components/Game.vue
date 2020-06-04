<template>
    <article role="button" v-if="gameData" class="game" v-bind:class="{ 'game--hot': gameData.hot }" v-on:click="$emit('show-game', gameData)">
        <div class="game__content">
            <div class="game__new" v-if="isNew">New</div>
            <div class="game__image ratio ratio--1-1 placeholder">
                <img v-bind:src="gameData.picture" v-bind:alt="gameData.title + ' game image'">

                <p class="game__jackpot">
                    <span>Jackpot</span> {{gameData.jackpot}}
                    <span class="game__star" v-if="gameData.hot"></span>
                </p>
            </div>
            <h3>{{ gameData.title }}</h3>
            <div class="game__desc">{{gameData.description | truncate(100)}}</div>
        </div>
    </article>
</template>
<script>
export default {
    name: 'Game',
    props: {
        gameData: Object,
        isNew: Boolean
    }
};
</script>

<style src="../scss/components/game.scss" lang="scss" scope></style>
