# DiDe – Digital Diary & Task Organizer

**DiDe** — это прогрессивное веб-приложение для ведения цифрового дневника, планирования задач и управления повседневной жизнью. Приложение поддерживает работу в офлайн-режиме, локальное хранение данных и мультиязычность. Также предусмотрена возможность синхронизации с Google Диском (на этапе разработки).

---

## 🚀 Возможности

- Ведение дневника и задач
- Создание и управление заметками, счётчиками, таймерами
- Перемещение и изменение размеров блоков
- Полноценная офлайн-работа
- Поддержка мультиязычности (i18n)
- Локальное хранение данных с помощью IndexedDB (через Dexie)
- Поддержка drag-and-drop интерфейса
- Гибкая архитектура с возможностью масштабирования

---

## 🛠️ Стек технологий

### Frontend

| Технология                  | Назначение                                     |
|----------------------------|------------------------------------------------|
| **React 19**               | Основной фреймворк интерфейса                  |
| **React Router DOM 7**     | Маршрутизация между экранами                  |
| **TypeScript**             | Статическая типизация                         |
| **Dexie + IndexedDB**      | Локальное хранение пользовательских данных    |
| **React-RND**              | Перемещение и изменение размеров блоков       |
| **i18next + react-i18next**| Мультиязычность и перевод интерфейса          |
| **Web Vitals**             | Метрики производительности приложения         |

### Инструменты разработки

- **VS Code** — основной редактор кода  
- **npm** — установка зависимостей и запуск  
- **Git** — контроль версий  
- **Postman** *(при необходимости API)* — тестирование REST-запросов  
- **Google Cloud Console** *(планируется)* — регистрация приложения и подключение Google API

---

## 🗃 Структура и данные

Все пользовательские данные хранятся в **IndexedDB** через библиотеку **Dexie**, что обеспечивает:

- мгновенную загрузку и сохранение без сервера
- безопасность (все данные локальны)
- поддержку офлайн-доступа

---

## 📦 Установка и запуск

1. Установите зависимости:

```bash
npm install
```

2. Запустите приложение:

```bash
npm start
```

3. Приложение будет доступно по адресу:

```
http://localhost:3000
```



---

## 📌 Примечание

Проект находится на стадии активной разработки. Планируется:

- подключение синхронизации через Google Drive API  
- расширение набора блоков (например, трекеры привычек, календари, бюджет)  
- мобильная адаптация интерфейса  
- экспорт и импорт данных в формате JSON и PDF  

---

## 🤝 Автор

**DiDe** — авторское приложение для личной эффективности.  
Идея, проектирование, код и UI — Сарычева Мария.
