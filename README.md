[![Build status](https://ci.appveyor.com/api/projects/status/lrolvw5sf7fgw879/branch/master?svg=true)](https://ci.appveyor.com/project/nagraiv/unit-test-mocking/branch/master)

# Домашнее задание к лекции «Unit-тестирование» [ссылка](https://github.com/netology-code/ajs-homeworks/tree/ajs8/test-ci).

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: ESLint не должен выдавать ошибок.

**Важно**: Jest должен обеспечивать 100% покрытие по строкам для тестируемых вами функций.

**Важно**: Ко всем задачам должен быть подключен Appveyor и выставлен бейджик статуса.

**Важно**: используйте `import`/`export` а не `require`.

## Описание установки

```shell
npm init
# При инициалиализации в качестве тестовой команды указать:
# test command: jest --coverage
npm install --save-dev jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

Не забудьте про `babel.config.json` и `.browserslistrc`.

В `babel.config.json`:
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.22"
      }
    ]
  ]
}

```

Запуск тестов:
```shell
npm test
```

---

## Mocking (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Вы написали функцию, которая взаимодействует с функцией `fetchData` (достаточно тяжёлой, т.к. взаимодействует с удалённым веб-сервером). Вы хотите протестировать свою функцию (в том числе на то, как она обрабатывает ошибки) и, чтобы «отвязаться» от этой тяжёлой зависимости, решили использовать механизм «mocking'а».

### Описание

```javascript
// Демо-реализация функции fetchData (модуль http):
export default function fetchData(url) {
  throw new Error('Mock this!');
}
```

```javascript
// Ваша функция:
import fetchData from './http';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  
  // TODO: логика обработки
  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`; 
  }
  
  return `Информация об уровне временно недоступна`;
}
```

Сделайте моки для функции `fetchData` и напишите тесты таким образом, чтобы обеспечить 100% покрытие тестами функции `getLevel` по строкам.

**Обратите внимание**: тесты вам надо писать для функции `getLevel`

---
