#Окружение для сборки front-end 

##Установка:
1. npm install -g grunt-cli
2. npm install

##Запуск
grunt

##В проект включены плагины
1. jade - https://github.com/gruntjs/grunt-contrib-jade
2. less - https://github.com/gruntjs/grunt-contrib-less
3. autoprefixer - https://github.com/nDmitry/grunt-autoprefixer
4. csso - https://github.com/t32k/grunt-csso
5. jshint - https://github.com/gruntjs/grunt-contrib-jshint
6. concat - https://github.com/gruntjs/grunt-contrib-concat
7. uglify - https://github.com/gruntjs/grunt-contrib-uglify
8. imagemin - https://github.com/gruntjs/grunt-contrib-imagemin
9. connect - https://github.com/gruntjs/grunt-contrib-connect
10. watch - https://github.com/gruntjs/grunt-contrib-watch

##Папки проекта
Исходники (source):

1. source/templates - jade-шаблоны
2. source/css - содержит less-файлы
3. source/img - изображения
4. source/js - js-файлы

Скомпилированные файлы (destination):

1. destination - скомпилированные html-файлы
2. destination/css - скомпилированные css
3. destination/img - минифицированные изображения
4. destination/js - минифицированные js

##Дополнительно
При запуске окружения, стартует локальный сервер по адресу http://localhost:3000/

При обновлении jade- less- js-файлов или изображений, система автоматически перекомпилирует измененные файлы и обновляет страницу в браузере.
