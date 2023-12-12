<template>
    <div>
        <h1 class="padding30"><b>AI비서 순이</b></h1>

        <div class="alert alert-secondary" role="alert">
            AI비서 순이와의 대화로 종합 건강관리를 받으세요!
        </div>
        <div>
            <div v-if="love >= 50" class="emoji" style="float: left;">😃</div>
            <div v-else class="emoji" style="float: left;">😭</div>
            <div>
                <p style="text-align : left; font-size : 20px;">순이와의 호감도: {{love}} % </p>
                <p>{{user_id}}님의 주당 평균 대화 횟수는 {{aveMsgCount[user_id]}} 번 입니다.</p>
            </div>
        </div>

        <hr>

        <div>
            <div v-if="slangUser[user_id] == true" class="emoji" style="float: left;">😭</div>
            <div v-else class="emoji" style="float: left;">😃</div>
            <div>
                <p v-if="slangUser[user_id] == true" style="text-align : left; font-size : 20px;">{{feedback[0]}}</p>
                <p v-else style="text-align : left; font-size : 20px;">{{feedback[1]}}</p>
                <p v-if="slangUser[user_id] == true">이번 달 부정적 피드백이 있었습니다.</p>
                <p v-else>이번 달 순이는 행복했습니다!</p>
            </div>
        </div>
        
    </div>
    
</template>

<script>

export default {
    name: "Sunipage",
    // 필요 변수 임포트
    props : {
        user_id : String,
        slangUser : Object,
        aveMsgCount : Object,
        love : Number
    },
    data(){
        return {
            period : [["2021.10.01","2021.10.15"]],
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
.emoji {
    font-size: 50px;
}
</style>