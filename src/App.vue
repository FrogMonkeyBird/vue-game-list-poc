<template>
    <main id="app" class="app" v-bind:class="{ 'app--dark-mode': isDarkMode }" >
        <header class="header h-pad v-pad">
            <div>
                <h1>{{ msg }}</h1>
                <p>({{ subtext }})</p>
                <button
                class="btn btn__switch"
                v-bind:class="{ 'on': isDarkMode }"
                v-on:click="isDarkMode = !isDarkMode">
                    <span class="btn__label">{{!isDarkMode ? "Dark Mode" : "Light Mode"}}</span>
                </button>
            </div>
        </header>
        <div class="grid h-pad v-pad">

            <Game
            v-for="data in gamesByDecendingDates"
            v-bind:key="data.id"
            v-bind:gameData="data"
            v-bind:isNew="data.index == newGame.index"
            v-on:show-game="onShowGame"
            />
        </div>

        <GameModal v-if="showModal" @close="showModal = false" v-bind:gameData="activeGame" />
    </main>
</template>

<script>
// Temporary solution for importing data.
// Should be replaced with an API-call of sorts,
// fetching and replacing data on a timed interval.
import data from './assets/games.json';
import Game from './components/Game';
import GameModal from './components/GameModal';

export default {
    name: 'App',
    components: {
        Game,
        GameModal
    },
    methods: {
        onShowGame: function (data) {
            this.showModal = true;
            this.activeGame = data;
        }
    },
    computed: {
        gamesByDecendingDates: function() {
            return this.gamesData.slice(0).sort((a, b) => new Date(b.created) - new Date(a.created));
        },
        newGame: function() {
            return this.gamesData.reduce((a, b) => (new Date(a.created) > new Date(b.created)) ? a : b);
        }
    },
    data() {
        return {
            msg: 'Vue Game List',
            subtext: 'Prove of Concept',
            gamesData: data,
            activeGame: {},
            showModal: false,
            isDarkMode: false
        };
    }
};
</script>

<style src="./scss/main.scss" lang="scss"></style>
