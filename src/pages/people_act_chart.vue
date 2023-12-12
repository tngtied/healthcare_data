<script>
import { defineComponent } from 'vue'
import { Pie } from 'vue3-chart-v2'

export default defineComponent({
  name: 'people_act_chart',
  extends: Pie,
  data(){
    return {
      avg : [[0,5,"취침"],[6,18,"휴식"],[19,19,"TV시청"],[20,21,"휴식"],[22,23,"취침"]],
    }
  },
  mounted () {
    var labels1 = [ "취침", "휴식", "TV시청", "휴식", "취침" ];
    var avg_time = [ 6, 13, 1, 2, 2 ];
    
    // Overwriting base render method with actual data.
    this.renderChart({
      labels :  labels1,
      datasets: [
        {
          label : 'GitHub Commits',
          data : avg_time,
          backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
            'rgb(0, 99, 132)',
						'rgb(255, 99, 132)',
					],
        }
      ]
    })
  }
})
</script>