const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot3l3fa/",
            name: "springboot3l3fa",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot3l3fa/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "车辆充电桩"
        } 
    }
}
export default base
