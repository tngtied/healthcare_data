<template>
    <div>
            <h1  class="padding30"><b>{{user_id}}님의 생활패턴</b></h1>

            <user_act_chart :user_id = "user_id" :act2 = "act2[user_id]" />
            <br>
            <h5 v-if="user_most_participate.length > 0">
                <b>{{user_most_participate.join(', ')}} 참여도</b>
                가 가장 높아요!
            </h5>
            <h5 v-if="user_most_participate.length == 0">
                참여도가 높은 활동이 없어요!
            </h5>

        <hr>

            <h1><b>사람들의 생활패턴</b></h1><br>
            
            <people_act_chart/>

    </div>
    
</template>

<script>
import { defineComponent } from 'vue'
import people_act_chart from './people_act_chart.vue'
import user_act_chart from './user_act_chart.vue'

export default defineComponent({
    name: "Mainpage",
    // 필요 변수 임포트
    props : {
        user_id : String,
        act2 : Object,
        user_most_participate : Object
    },
    data(){
        return {
            avg : [[0,5,"취침"],[6,18,"휴식"],[19,19,"TV시청"],[20,21,"휴식"],[22,23,"취침"]],
            avg_data : [],
            avg_time : []
        }
    },
    mounted(){
        for(var i of this.avg){
            var count_avg = i[1]-i[0]+1;
            this.avg_time[this.avg_time.length] = count_avg;
            this.avg_data[this.avg_data.length] = i[2];
        }
    },
    methods : {
        stl(num1,num2) {
            return("width:" + (num2-num1)*4 + "%" )
        }
    },
    components: {
        people_act_chart,
        user_act_chart
    }
})
</script>


<style>
table {
    width:900px; 
    margin: auto;
}

.hour {
    width: 4%;
}

.point {
    background: rgb(146, 146, 213);
    border: 5%;
}
</style>