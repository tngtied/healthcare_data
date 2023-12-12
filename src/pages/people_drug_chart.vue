<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

import act2 from "../act2.json"; 

export default defineComponent({
	name: 'user_act_chart',
	extends: Line,
	props : {
        user_id : String,
    },
	data(){
		return {
			avg : act2[this.user_id],
		}
	},
	mounted () {
		var labels1 = ['0h',"1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h",
        "13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"];
		var avg_time = ["0H","1h","2h","3h","4h","5h","6h","7h",1,"9h","10h","11h","12h",
        "13h","14h","15h","16h","17h","18h",1,"20h","21h","22h","23h"];
		// Overwriting base render method with actual data.
		this.renderChart({
        labels :  labels1,
        datasets: [
            {
                label : 'drug_time',
                data : avg_time,
                fill : false,
                responsive: false,
                backgroundColor:'rgb(255, 99, 132)',
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