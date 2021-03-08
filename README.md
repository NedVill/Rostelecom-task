## Тестовое задание для Ростелеком ИТ

* Ответы на задачи в файле tasks.js
* "Авторизация" в чате - test, test

## Напишите код, который при клике на любой div внутри root будет выводить в консоль его id.

```javascript
<div id="root" style="background: red;">
  root
  <span id="id1" style="background: lightblue;">
    id1
  </span>
  <div id="id2" style="background: green;">
    id2
    <div id="id3" style="background: yellow;">
      id3
    </div>
  </div>
</div>
```

## Напишите код, который сделает из массива объект

```javascript
var arr = [{ name: "width", value: 10 }, { name: "height", value: 20 }];

console.log(createObj(arr)); // {width: 10, height: 20}
```

## Что вернёт этот код

```javascript
console.log(typeof (function() {})()); // ??
```

## Используя функцию foo выведите в консоль слово "Hello"

```javascript
function foo() {
  return this.name;
}
```

## Модифицируйте код что бы вывод в консоль был от 0 до 10

```javascript
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
```

## Реализуйте сортировку пузырьком

Функция bubleSort должна быть чистой

```javascript
function bubleSort(arr) {}

const arr = [5, 2, 7, 0, 3, 1];
const sortedArr = bubleSort(arr);
console.log(sortedArr); // [0, 1, 2, 3, 5, 7]
```

# Тестовая задача

Реализовать групповой чат в реальном времени.

Требования:

- Удобный интерфейс
- Авторизация пользователем
- Отправка сообщений пользователем
- Просмотр пользователей комнаты
- Для реализации ограничиться использование библиотеки  React.

Будет плюсом:

* Все компоненты приложения покрыты снапшот и юнит тестами

Для реализации входящих сообщений, предоставлен модуль `WebsocketMockAdapter`

При создании объект начинает оповещение через функцию подписчика переданного первым аргументов в конструктов раз в n милисекунд переденными вторым аргументом (по умолчанию 1000)

```javascript
const mocker = new WebsocketMockAdapter(subscriber, deelay);
// после этого начинает раз в deelay милисекунд вызывать
// subscriber c с данными о новом сообщении
```

Пример объекта сообщения:

```javascript
{
  date: 1574901168738;
  id: "327a8179-bab9-4da7-9c61-e6925f32934c";
  text: "corrupti voluptas eius";
  user_id: "42b6cb19-32b5-4977-b3ef-7cfa1cb6f16d";
}
```

Так же экземпляр `WebsocketMockAdapter` умеет возвращать всех пользователей чата.

```javascript
{
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/sharvin/128.jpg";
  name: "Justice";
  secname: "Wiegand";
  user_id: "0e20aa95-40a8-4a17-8ce7-a7b318bb9b65";
}
```

### Авторизация
Если пользователь не авторизован, ему показывается компонент авторизации.
Форма авторизации обрабатывает ввод логина и пароля, если логит и пароль не совпадают то 
показывать ошибку авторизации: "Некорекные данные авторизации", если пользователь успешно
авторизовался то при перезагрузке страницы ему не должна показываться форма авторизации, а он должен вместо этого увидеть страницу чата.
