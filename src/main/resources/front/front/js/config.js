
var projectName = '车辆充电桩';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '充电桩',
	url: './pages/chongdianzhuang/list.html'
}, 

{
	name: '充电常识',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot3l3fa/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除"],"menu":"维修员","menuJump":"列表","tableName":"weixiuyuan"}],"menu":"维修员管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"电桩类别","menuJump":"列表","tableName":"dianzhuangleibie"}],"menu":"电桩类别管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"充电桩","menuJump":"列表","tableName":"chongdianzhuang"}],"menu":"充电桩管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","修改","删除"],"menu":"充电桩报修","menuJump":"列表","tableName":"chongdianzhuangbaoxiu"}],"menu":"充电桩报修管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改","删除"],"menu":"维修回复","menuJump":"列表","tableName":"weixiuhuifu"}],"menu":"维修回复管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"充电常识","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["报修","查看"],"menu":"充电桩列表","menuJump":"列表","tableName":"chongdianzhuang"}],"menu":"充电桩模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","维修回复"],"menu":"充电桩报修","menuJump":"列表","tableName":"chongdianzhuangbaoxiu"}],"menu":"充电桩报修管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改","删除"],"menu":"维修回复","menuJump":"列表","tableName":"weixiuhuifu"}],"menu":"维修回复管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["报修","查看"],"menu":"充电桩列表","menuJump":"列表","tableName":"chongdianzhuang"}],"menu":"充电桩模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"维修员","tableName":"weixiuyuan"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","修改","删除"],"menu":"充电桩报修","menuJump":"列表","tableName":"chongdianzhuangbaoxiu"}],"menu":"充电桩报修管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"维修回复","menuJump":"列表","tableName":"weixiuhuifu"}],"menu":"维修回复管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["报修","查看"],"menu":"充电桩列表","menuJump":"列表","tableName":"chongdianzhuang"}],"menu":"充电桩模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
