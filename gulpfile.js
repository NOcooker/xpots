/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp')
const typedoc = require('gulp-typedoc')
const browserSync = require('browser-sync').create()

const runTypeDoc = () => gulp
    .src(['src'])
    .pipe(typedoc({
        name: '团队常用工具库',
        out: './docs',
        // 这个文件里都是 export * from '...' 就没必要导出文档了
        exclude: ['src/index.ts', 'src/__test__', 'src/__tests__'],
        tsconfig: 'tsconfig.json',
        mode: 'file', // modules | file
        readme: './README.md', // 作为首页展示
        // theme: 'minimal'
    }))

const reload = (done) => {
    browserSync.reload()
    done()
}

const runBrowserSync = (done) => {
    browserSync.init({
        server: {
            baseDir: './docs',
        },
    })
    done()
}

const watch = () => gulp.watch(
    ['README.md', 'src/*.ts', 'src/internal/*.ts', 'src/types/*.ts'],
    gulp.series(runTypeDoc, reload)
)

gulp.task('doc', gulp.series(runTypeDoc, runBrowserSync, watch))
gulp.task('build', runTypeDoc)
