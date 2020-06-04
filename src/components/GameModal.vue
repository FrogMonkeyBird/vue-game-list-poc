<template>
    <transition :duration="{ enter: 200, leave: 800 }" name="modal" >
        <div class="modal">
            <div class="modal__box">
                <div class="game__content">
                    <div class="game__image ratio ratio--1-1 placeholder">
                        <img v-bind:src="gameData.picture" v-bind:alt="gameData.title + ' game image'">

                        <p class="game__jackpot">
                            <span> Jackpot</span> {{gameData.jackpot}}
                            <span class="game__star" v-if="gameData.hot"></span>
                        </p>
                    </div>
                    <h2>{{ gameData.title }} <div class="game__date">Created: <time>{{gameData.created}}</time></div></h2>

                    <div class="game__desc">{{gameData.description}}</div>
                </div>
                <button class="btn__close" @click="$emit('close')"></button>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'GameModal',
    props: {
        gameData: Object
    }
};
</script>

<style src="../scss/components/modal.scss" lang="scss" scope></style>
