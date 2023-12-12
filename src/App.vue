<template>
<!-- 1.제목 -->
  
<!-- 2.상단 네이게이션 탭 -->
<header style="">
  <div class="nav nav-tabs menu">
    <h4 class="m-3 logo"> 순이 </h4>
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="#" @click="change(1)" >{{ menus[0] }}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link"  href="#" @click="change(2)" >{{ menus[1] }}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" @click="change(3)" >{{ menus[2] }}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" @click="change(4)" >{{ menus[3] }}</a>
    </li>

    <div class="input-group">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="reload()">새로고침</button>
      <input type="text" class="form-control" placeholder="id 입력" aria-label="id 입력" aria-describedby="button-addon2" v-model="user_id">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="change(1)">검색</button>
    </div>
  </div>
</header>

<!-- 3.각자 상세페이지 4개를 라우팅 없이 구현
  페이지별 필요한 변수들 보내줌
    1.메인페이지:당신의 생활패턴
    2.약복용정보 페이지
    3.AI비서 순이 페이지
    4.대화분석 페이지
-->
  <div class="padding30" v-if="page_num != 0">
    <Mainpage :user_id = "user_id" :act2 = "act2" :user_most_participate = "user_most_participate" v-if="page_num == 1"></Mainpage>
    <Drugpage :user_id = "user_id" :aveMedTime = "aveMedTime" :people_drug_time = "people_drug_time"  v-if="page_num == 2"></Drugpage>
    <Sunipage :user_id = "user_id" :aveMsgCount = "aveMsgCount" :slangUser = "slangUser" :love = "love" v-if="page_num == 3"></Sunipage>
    <Talkpage :user_id = "user_id" :RecentlyMsg = "RecentlyMsg" v-if="page_num == 4"></Talkpage>

  </div>

</template>


<script>
  // 데이터 json 임포트
  import act2 from "./act2.json"; 
  import aveMsgCount from "./aveMsgCount.json"; 
  import RecentlyMsg from "./RecentlyMsg2.json"; 
  import slangUser from "./slangUser.json"; 
  import aveMedTime from "./aveMedTime.json"


  // 상세 페이지들 임포트
  import Drugpage from "./pages/Drugpage.vue";
  import Mainpage from "./pages/Mainpage.vue";
  import Sunipage from "./pages/Sunipage.vue";
  import Talkpage from "./pages/Talkpage.vue";

  export default {
    name: 'App',
    data(){
      return {
        user_id : "",

        act2 : act2,
        aveMsgCount : aveMsgCount,
        RecentlyMsg : RecentlyMsg,
        slangUser : slangUser,
        aveMedTime  : aveMedTime,
        user_most_participate : [],
        love : 0,
        MedTimeL : {},

        user_act2 : act2[this.user_id],
        period : [["2021.10.01","2021.10.15"]],
        people_drug_time : [-1,-1],
        menus : ['당신의 생활패턴', '약 복용정보', 'AI비서 순이', '대화분석'],
        page_num : 0,
        
      }
    },
    methods : {
      reload(){
        window.location.reload();
      },
      // 페이지 넘어갈 때마다 실행하는 함수
      change(num){
        this.page_num = num;
        
        // ***************1)호감도 구하는 함수
        if (this.aveMsgCount[this.user_id] <=33){
          this.love = this.aveMsgCount[this.user_id]*3;
        } else {
          this.love = 100;
        }

      // **********************2)유저가 가장 많이 참여중인 항목 저장하는 함수
        this.user_most_participate = []
        var most_acts = {}
        for(var i = 0; i < act2[this.user_id].length; i++){
          var now_act = act2[this.user_id][i][2]
          // 취침 제외
          if(now_act != "취침" & now_act != "낮잠"){

            // 해당 활동을 딕셔너리로 전환
            var now_t = (act2[this.user_id][i][1]-act2[this.user_id][i][0]+1)
            if(Object.keys(most_acts).includes(now_act) == false){
              most_acts[now_act] = now_t
            } else {
              most_acts[now_act] += now_t
            }
          }
        }
        // 딕셔너리를 밸류값 기준으로 정렬
        var max_times = Object.values(most_acts).sort();
        var max_time = max_times.pop() //최대 시간

        for(var a in most_acts){
          if(most_acts[a] == max_time){
            this.user_most_participate.push(a)
          }
        }

        if (this.user_most_participate == []){
          this.user_most_participate == ["None"]
        }
        

        // *************3)사람들 약먹는 평균시간찾기******************
        // 시간별 딕셔너리생성
        this.MedTimeL = {}
        for(var j = 0; j < 24; j++){
          this.MedTimeL[j] = 0
        }

        

        // 시간별 갯수세기->딕셔너리
        var people_value = Object.values(aveMedTime)

        for(var p = 0; p < people_value.length; p++){
          this.MedTimeL[people_value[p]] += 1
        }

        // 딕셔너리를 밸류값 기준으로 정렬
        var max_Mtimes = Object.values(this.MedTimeL)

        var max_MtimeAM = 0;
        for(var am of max_Mtimes.slice(1,12)){
          if(max_MtimeAM <= parseInt(am)){
            max_MtimeAM = parseInt(am)
          }
        }

        var max_MtimePM = 0;
        for(var pm of max_Mtimes.slice(12,24) + [max_Mtimes[0]]){
          if(max_MtimePM <= parseInt(pm)){
            max_MtimePM = parseInt(pm)
          }
        }

        // console.log("MedTimeL",this.MedTimeL)
        // console.log("max_Mtimes",max_Mtimes)
        // console.log("max_Mtime",max_MtimeAM, max_MtimePM)

        for(var m in this.MedTimeL){
          // am
          if(this.MedTimeL[m] == String(max_MtimeAM)){
            this.people_drug_time[0] = m
          }
          // pm
          if(this.MedTimeL[m] == String(max_MtimePM)){
            this.people_drug_time[1] = m
          }
        }
      },
    },
    components: {
      // 세부 페이지 별 컴포넌트화
      Drugpage,
      Mainpage,
      Sunipage,
      Talkpage
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  color: white;
}

.menu {
  background: rgb(51, 51, 51);
  border-radius: 10px;
  color: white;
}

.menu a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.rotate {
  transform: rotate(-2deg);
}
.padding30 {
  padding : 30px;
}

.page {
  padding : 30px;
}

</style>
