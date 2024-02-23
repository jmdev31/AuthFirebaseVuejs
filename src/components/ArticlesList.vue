<template>
    <div class="container list row m-auto">
        <h1>Articles LIST</h1>
        <div class="col-md-6">
            <ul class="list-group">
                <li
                    class="list-group-item" :class="{ active: index === currentIndex }"
                    v-for="(unArticle, index) in articles"
                    :key="index" @click="setActiveArticle(unArticle, index)">{{ unArticle.title }}
                </li>
            </ul>
            <button @click="removeAllArticles" class="m-3 btn btn-sm btn-danger">Tout Suppr.</button>
        </div>
        <div class="col-md-6">
            <div v-if="currentArticle">
                <!--<article-details :article="currentArticle" @refreshList="refreshList"></article-details>-->
            </div>
            <div v-else>
                <p>Veuillez selectionner un article.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import {computed, watch, onMounted, onUpdated, onBeforeUnmount, ref} from 'vue'

let articles = ref([]);
const currentArticle = ref(null);
const currentIndex = ref(null);
const onDataChange = (items) => {
    let _articles = [];
    items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _articles.push({
            key: key,
            title: data.title,
            description: data.description,
            published: data.published,
        });
    });
    articles = _articles;
}

const props = defineProps({
    // v-model
    modelValue: {
        default: '',
    },
});

const emit = defineEmits({
    // v-model event with validation
    'update:modelValue': (value) => value !== null,
});

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
});

const stopWatch = watch(
    () => props.modelValue, async (_newValue, _oldValue) => {
        // do something
    },
    {
        immediate: true
    }
);

onMounted(() => {
    console.log('mounted dans Artticle LIST  ');
    // ArticleDataService.getAll().on('value', onDataChange)
});

onUpdated(() => {
});

onBeforeUnmount(() => {
    stopWatch();
});

</script>

<style scoped lang="css">
</style>