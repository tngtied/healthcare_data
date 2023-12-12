<script>
import { defineComponent } from 'vue'
import { Pie } from 'vue3-chart-v2'

import act2 from "../act2.json"; 

export default defineComponent({
	name: 'user_act_chart',
	extends: Pie,
	props : {
        user_id : String,
    },
	data(){
		return {
			avg : act2[this.user_id],
		}
	},
	mounted () {
		console.log(this.avg)

		var labels1 = [];
		var avg_time = [];

		for(var i of this.avg){
            var count_avg = i[1]-i[0]+1;
            labels1[labels1.length] = i[2];
            avg_time[avg_time.length] = count_avg;
        }
		
		// Overwriting base render method with actual data.
		this.renderChart({
			labels :  labels1,
			datasets: [
				{
					label : 'user_act_time',
					data : avg_time,
					backgroundColor: [
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
						'rgb(255, 205, 86)',
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
						'rgb(255, 205, 86)',
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
						'rgb(255, 205, 86)',
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
						'rgb(255, 205, 86)',
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
						'rgb(255, 205, 86)',
						'rgb(255, 99, 132)',
						'rgb(54, 162, 235)',
						'rgb(255, 205, 86)',
						
					],
				}
			]
		})
	},
	methods : {
        change() {
            console.log(this.avg)

			var labels1 = [];
			var avg_time = [];

			for(var i of this.avg){
				var count_avg = i[1]-i[0]+1;
				labels1[labels1.length] = i[2];
				avg_time[avg_time.length] = count_avg;
			}
        }
    },
})
</script>