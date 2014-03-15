#Окружение для сборки front-end 

##Установка:
1. npm install -g grunt-cli
2. npm install

##Запуск
grunt

##В проект включены плагины
1. jade - https://github.com/gruntjs/grunt-contrib-jade
2. less - https://github.com/gruntjs/grunt-contrib-less
3. csso - https://github.com/t32k/grunt-csso
4. jshint - https://github.com/gruntjs/grunt-contrib-jshint
5. concat - https://github.com/gruntjs/grunt-contrib-concat
6. uglify - https://github.com/gruntjs/grunt-contrib-uglify
7. imagemin - https://github.com/gruntjs/grunt-contrib-imagemin
8. connect - https://github.com/gruntjs/grunt-contrib-connect
9. watch - https://github.com/gruntjs/grunt-contrib-watch

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
