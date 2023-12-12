avg = [[0,5,"취침"],[6,18,"휴식"],[19,19,"TV시청"],[20,21,"휴식"],[22,23,"취침"]];
avg_data = [];

console.log("this.avg:",this.avg);

for(var i of this.avg){
    console.log("i:",i);
    var count_ave = i[1]-i[0]+1;
    for(var jj = 0; jj < count_ave; jj++){
        this.avg_data += [i[2]];
    }
}
console.log("this.avg_data",this.avg_data)