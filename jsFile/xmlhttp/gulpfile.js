const gulp = require("gulp");


//创建任务
//转义JavaScript
//获取文件 之后将文件进行转义
//使用webpage进行转义 调用webpack 内部的规则所以需要引入config

gulp.task("webpack", () => {
    const webpack = require("webpack-stream");
    const config = require("./webpack.config.js");
    gulp.src("./index.js")
        .pipe(webpack(config))
        .pipe(gulp.dest("./js/"))
})

gulp.task("default", ["webpack"]);
gulp.task("watch", () => {
    gulp.watch("./**/*.js", ["webpack"]);
})