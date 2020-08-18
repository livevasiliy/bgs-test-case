# Тестевое задание для компании ООО BGS Group

#### Тестовое задание: 

Создать приложение Профиль пользователя.

Пользователь при запуске приложения видит форму авторизации, вводит логин-пароль, попадает на страницу своего профиля с данными: имя, имейл, фото.

Ответы всех запросов (авторизация, получение данных) имитируются (mock).

Требования

1.Использование vuejs

2.Использование nuxtjs

3.Использование vuetify (дизайн значения не имеет)

## Начало работы

Для начало работы убедитесь, что у вас установлен Node.js & npm (по желанию yarn)

В терминале наберите следующие команды:
```bash
$ node -v
$ npm -v 
$ yarn -v # если установка будет производиться, через yarn
```

Если консоле показывают версии, наберите следующие команды: 

``` bash
# установка зависимостей
$ npm install # или $ yarn install

# serve with hot reload at localhost:3000 - dev версия проекта 
$ npm run dev # или $ yarn dev
# в другой консоли запустите 
$ npm run json-server # или $ yarn json-server - для запуска mock REST API 
mock REST API будет доступен на localhost:4000


# build for production and launch server - prod версия проекта
$ npm run build # или $ yarn build
$ npm start # или $ yarn start

# generate static project - сгенерировать статику
$ npm run generate # или $ yarn generate 
```

##### Mock REST API
>/users - получение списка всех пользователей <br/>
>/users/id - получение пользователя по ID

Более детальную информацию ищите на [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

