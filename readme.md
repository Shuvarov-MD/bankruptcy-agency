# Агентство по банкротству
## О проекте
Сайт, созданный только в учебных целях и написанный на чистом и валидном **HTML**, **CSS** и **JS**. Для проверки **JS** используется [ESLint](https://eslint.org/) от Airbnb, а для поддержки **JS** старыми браузерами используется [Babel](https://babeljs.io/). В качестве сборщика проекта используется [Gulp](https://gulpjs.com/).

**NPM-пакеты**, используемые в `gulpfile.js`:
* [gulp](https://www.npmjs.com/package/gulp)
* [gulp-file-include](https://www.npmjs.com/package/gulp-file-include)
* [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
* [gulp-rename](https://www.npmjs.com/package/gulp-rename)
* [gulp-concat](https://www.npmjs.com/package/gulp-concat)
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
* [gulp-babel](https://www.npmjs.com/package/gulp-babel)
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
* [del](https://www.npmjs.com/package/del)
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
* [browser-sync](https://www.npmjs.com/package/browser-sync)

## Запуск
Для запуска проекта необходимо использовать команду `start`:

```npm run start```

В результате происходит объединение **HTML-файлов**, расположенных в `./src/html`, **JS-файлов**, расположенных в `./src/js/modules`, и запускается сервер для отслеживания изменений на основе **Browser-sync**.

## Сборка проекта
Для сборки проекта необходимо использовать команду `build`:

```npm run build```

В результате происходит перенос проекта в папку `./build`, а именно минимизированных файлов **HTML**, **CSS**, **JS** и изображений, файлов со шрифтами и **PHP**-файлов.

## Лицензия
Лицензия отсутсутвует.