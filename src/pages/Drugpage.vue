<template>
    <div>
            <h1  class="padding30"><b>{{user_id}}님의 약 복용정보</b></h1>
            <p>
                <user_drug_chart :user_id = "user_id" :user_drug = "aveMedTime[user_id]"/>
            </p>

            <h5 v-if="aveMedTime[user_id] == 0">
                {{user_id}}님은 평균적으로 오전 12시에 약을 복용합니다.
            </h5>
            <h5 v-else-if ="aveMedTime[user_id] < 12">
                {{user_id}}님은 평균적으로 오전 {{ aveMedTime[user_id] }}시에 약을 복용합니다.
            </h5>
            <h5 v-else-if ="aveMedTime[user_id] == 12">
                {{user_id}}님은 평균적으로 정오 12시에 약을 복용합니다.
            </h5>
            <h5 v-else>
                {{user_id}}님은 평균적으로 오후 {{ aveMedTime[user_id] - 12 }}시에 약을 복용합니다.
            </h5>

        <hr class="rotate">
            <h1  class="padding30"><b>사람들의 약 복용정보</b></h1>

            <p>
                <people_drug_chart :user_id = "user_id"/>
            </p>
            <h5>
                사람들은 평균적으로 오전 {{ people_drug_time[0] }}시, 
                오후 {{ people_drug_time[1]-12 }}시에 약을 복용합니다.
            </h5>

    </div>
    
</template>

<script>
import user_drug_chart from './user_drug_chart.vue'
import people_drug_chart from './people_drug_chart.vue'

export default {
    name: "Drugpage",
    // 필요 변수 임포트
    props : {
        user_id : String,
        aveMedTime : Object,
        people_drug_time : Object
    },
    data(){
        return {
        }
    },
    methods : {
    },
    components: {
        user_drug_chart,
        people_drug_chart
    }
}
</script>

<style>
.rotate {
    transform: rotate(-2deg);
    margin : 50px;
}

h5 {
    margin : 50px;
}

</style>