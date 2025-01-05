# Imperial Dating System

Цей проект демонструє поточну дату та час у двох форматах:
1. **Сучасний формат** — звичний для нас формат дати та часу.
2. **Imperial Dating System** — система датування, яка використовується у всесвіті Warhammer 40,000.

Також проект включає **Imperial Time**, який показує час у межах поточної частини року (Year Fraction), поділеної на 1000 частин.

---

## Що таке Imperial Dating System?

Imperial Dating System — це спосіб запису дат, який використовується у Імперіумі Людства у всесвіті Warhammer 40,000. Вона включає:
- **Year Fraction**: частина року, поділена на 1000 частин (000-999). Кожна частина триває приблизно 8,76 години.
- **Year**: останні три цифри року (наприклад, 023 для 2023 року).
- **Millennium**: тисячоліття, у якому відбувається подія (наприклад, M3 для 2023 року).

Формат Imperial Date виглядає так:  
`Year Fraction.Year.Millennium`  
Наприклад: `549.023.M3`

---

## Що таке Imperial Time?

Imperial Time — це час у межах поточної частини року (Year Fraction). Він відображається у форматі:  
`Year Fraction:Години:Хвилини:Секунди`

Наприклад:  
`549:06:45:12` означає:
- `549` — поточна частина року (Year Fraction).
- `06` — години у межах цієї частини.
- `45` — хвилини.
- `12` — секунди.

---

## Як це працює?

Проект використовує JavaScript для розрахунку поточної дати та її конвертації у Imperial Dating System та Imperial Time. Основна логіка знаходиться у файлі `script.js`.

### Основні функції:
1. **getModernDate()**: повертає поточну дату та час у звичному форматі.
2. **getImperialDate()**: конвертує поточну дату у формат Imperial Dating System.
3. **getImperialTime()**: конвертує поточний час у формат Imperial Time.

---

## Як використовувати?

1. Відкрийте сторінку проекту за посиланням, наданим GitHub Pages.
2. На сторінці відобразиться:
   - Поточна дата та час у сучасному форматі.
   - Відповідна дата у Imperial Dating System.
   - Поточний час у форматі Imperial Time.
   - Пояснення, як працює Imperial Dating System та Imperial Time.

---

## Як розгорнути проект локально?

1. Клонуйте репозиторій:
   ```bash
   git clone https://github.com/ваш-нікнейм/Imperial-Dating-System.git
   ```
2. Відкрийте папку проекту:
   ```bash
   cd Imperial-Dating-System
   ```
3. Відкрийте файл `index.html` у вашому браузері.

---

## Технології
- **HTML**: структура сторінки.
- **CSS**: стилізація сторінки (готичний шрифт, кольори, градієнтний фон).
- **JavaScript**: розрахунок та оновлення дати та часу в реальному часі.

---

## Автор
Kostya Voorhees

---

## Ліцензія
Цей проект розповсюджується під ліцензією MIT. Детальніше дивіться у файлі [LICENSE](LICENSE).

---

## Подяка
- **Google Fonts** за готичний шрифт [MedievalSharp](https://fonts.google.com/specimen/MedievalSharp).
- Всесвіт **Warhammer 40,000** за натхнення.

---

## Посилання
- [GitHub Repository](https://github.com/kosvoorhees92/Imperial-Dating-System)
- [GitHub Pages](https://kosvoorhees92.github.io/Imperial-Dating-System)
