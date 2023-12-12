<template>
    <div>
        <h1 class="padding30"><b>AI비서 순이와의 대화</b></h1>

        <div class="alert alert-secondary" role="alert">
            최근 순이와 이런 대화를 나눴어요!
        </div>

        <hr/>

        <div v-for="(obj,i) in this.RecentlyMsg[user_id]" :key="i">
            <div v-if="i % 2 == 0" class="alert alert-success" role="alert" style="text-align: left;">
                순이: {{obj}}
            </div>

            <div v-else class="alert alert-info" role="alert" style="text-align: right;">
                {{obj}} : {{user_id}}
            </div>
        </div>

    </div>
    
</template>

<script>

export default {
    name: "Talkpage",
    // 필요 변수 임포트
    props : {
        user_id : String,
        RecentlyMsg : Object
    },
    data(){
        return {
            love : 70,
            chat_count : 17,
            feedback : ["순이가 아파요!","순이를 아껴주셔서 감사해요!"]
        }
    },
    methods : {
    },
}
</script>

<style>
.date {
    padding: 15px;
}
.rotate {
    transform: rotate(-2deg);
}
.explain{
    background: rgb(194, 194, 194);
    padding: 20px;
}

.padding30 {
    padding: 30px;
}
</style>