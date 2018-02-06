//导出一个模块，得到一个函数
//module:模块
//exports:导出
module.exports = function(grunt){
    //说明grunt初始化配置
    grunt.initConfig({
        //说明一个动作；进行文件的合并
        concat:{
            //进行文件合并的一些可选设置
            options:{
                //文件信息说明
                banner:'/*智游教育  clock js文件 version 1.0.0*/\n',
            },
            //说明文件合并的src原始文件，dest目的文件
            dist:{
                src:['public/js/control.js',
                'public/js/diamond.js',
                'public/js/dot.js',
                'public/js/second.js',
                'public/js/minute.js',
                'public/js/hour.js',
                'public/js/clock.js'],
                dest:'public/js/myClock.js',
            },
        },

       //文件的压缩 
       uglify:{
           //目标
           my_target:{
               //文件说明
                files:{
                    //压缩之后的文件 : [等待压缩的文件1,等待压缩文件2,....]
                    'public/js/myClock.min.js':['public/js/myClock.js'],
                },
           },
       },
    })

    //加载grunt的插件模块
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    //注册任务
    //para1：任务名称
    //para2：任务组成部分 
    grunt.registerTask('default',['concat','uglify'])
}
//终端执行grunt命令