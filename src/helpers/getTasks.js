const priorities = ["LOW", "MEDIUM", "HIGH"];
const categories = ["TODO", "INPROGRESS", "DONE"];
const tasksTitle = [
  "Зупинити Російський Вторгнення в Україну",
  "Підтримка Українських Захисників",
  "Захистити Україну Від Путіна та Окупантів",
  "Визволити Окуповані Території України",
  "Співпраця з Українськими Силовими Структурами",
  "Постачання Гуманітарної Допомоги Україні",
  "Розкрити Таємниці Російських Агентів в Україні",
  "Відновлення Миру та Безпеки в Україні",
  "Знайти Способи Співпраці з Міжнародними Союзниками для Підтримки України",
  "Рятування Українських Цивільних Від Окупантів",
  "Провести Міжнародну Дипломатичну Кампанію З Підтримки України",
  "Викрити Російську Пропаганду та Дезінформацію",
  "Захистити Українські Культурні Скарби",
  "Співпраця із Внутрішніми Патріотичними Силами України",
  "Знайти Розсекречені Російські Плани Окупації",
  "Рятувати Українських Журналістів від Переслідування",
  "Закрити Російські Канали Фінансування Тероризму",
  "Підтримка Українських Волонтерів та Медичних Груп на Фронті",
  "Розслідування Російських Кібератак на Україну",
  "Спостерігати за Рухоми Російських Військ на Межі",
  "Захистити Українські Святині від Руйнувань",
  "Врятувати Українських Полонених Від Окупантів",
  "Постачання Бойової Техніки для Українських Захисників",
  "Розкрити Таємниці Спеціальних Операцій Російських Сил",
  "Співпраця із Міжнародними Організаціями з Прав Людини",
  "Знайти Заборонені Російські Зброї в Україні",
  "Відновлення Українського Економічного Розвитку",
  "Захистити Прикордонні Села та Міста від Атак",
  "Підготовка Українських Захисників до Масштабної Операції",
  "Врятувати Українську Культурну Спадщину в Криму",
  "Закрити Російські Канали Доступу до Секретних Даних",
  "Заспокоїти Публіку",
  "Знищення Військ Таноса",
  "Викрадення Інфініті Каменів",
  "Подорож у минуле або майбутнє",
  "Запобігти Розширенню Таноса",
  "Скасувати Часові Зміни",
  "Захистити Лідерів Світу",
  "Врятувати В'язнів Таноса",
  "Вирушити на Космічний Корабель Таноса",
  "Зламати Коди Таноса",
  "Знайти Завісу Зі Світу Таноса",
  "Використовувати Магію",
  "Захопити Секретні Зброї Таноса",
  "Співпрацювати з Іншими Групами Героїв",
  "Розкрити Таємниці Таноса",
  "Підготувати Пастки",
  "Знайти Інших Перців",
  "Підкріпити Захисні Лінії",
  "Спостерігати За Діями Таноса",
  "Звернутися до Верховних Сил",
  "Відправити Розвідку на Територію Таноса",
  "Підготувати Військові Запаси",
  "Запустити Спеціальний Комп'ютерний Аналіз",
  "Захистити Землю Від Прибульців",
  "Співпрацювати із ШПЕРІ",
  "Розкрити Плани Таноса",
  "Рятувати Міста від Руйнувань",
  "Захистити Світ Від Загибелі",
  "Приготувати Артефакти для Битви",
  "Відновити Сили та Енергію",
  "Збудувати Неймовірний Збройний Комплекс",
  "Призупинити Інтелектуальну Маширу",
  "Захоплення Багатства Таноса",
  "Рятування Загубленого Екіпажу",
  "Знайти Втрачені Артефакти",
  "Розкрити Внутрішню Зраду",
  "Видалити Програмування Службових Роботів",
  "Співпраця з Ворожими Фракціями",
  "Врятувати Доцільних Зі Світу",
  "Захопити Плани Інфільтрації Таноса",
  "Відновлення Зв'язку із Втраченими Героями",
  "Зупинити Вплив Ментальних Спроб Таноса",
  "Знищення Заздрісних Клонів",
  "Підготовка Битви на Висоті",
  "Вивчення Античних Ритуалів",
  "Відкрити Портал до Іншого Виміру",
  "Співпрацювати із Другорядними Супергероями",
  "Провести Підготовку До Атаки",
  "Врятувати Полонених Воїнів",
  "Знайти Загублені Записи",
  "Розплутати Головоломки Таноса",
  "Підготувати Велику Битву",
  "Використовувати Змінюючі Формулації",
  "Знайти Ворожий Шпигунський Загін",
  "Розшифрувати Таємні Послання",
  "Відкрити Таємні Коди Артефактів",
  "Захистити Незвичайні Енергетичні Джерела",
  "Зупинити Вторгнення Землю",
  "Захопити Змінений Генетичний Код",
  "Знайти Втрачені Відомості Таноса",
  "Закрити Портал До Аду",
  "Врятувати Ветеранів Битв",
  "Співпраця з Природними Силами",
  "Захистити Важливі Досягнення Людства",
  "Провести Секретний Експеримент",
  "Відновлення Втрачених Пам'ятей",
  "Врятувати Викрадених Учених",
  "Підготовити Величезні Блокпости",
  "Захопити Відомості Про Тайні Експерименти",
  "Врятувати В'язнів Військових Лабораторій",
  "Зупинити Руйнування Міст",
  "Вивчення Невідомих Способів",
  "Співпраця з Духами Попередніх Героїв",
  "Захопити Сховані Запаси Технологій",
  "Рятувати Загублені Містечка",
  "Знищити Реактивний Енергетичний Збройний Комплекс",
  "Видалити Вірусні Загрози",
  "Захистити Порядок В Галактиці",
  "Запобігти Вторгненню З Інших Галактик",
  "Врятувати В'язнів З Ультрасекретних Фасиліті",
  "Співпрацювати з Загадковим Союзом",
  "Провести Геологічний Аналіз Землі",
  "Знайти Відсутніх Дослідників",
  "Розкрити Загадкові Формули Таноса",
  "Підготовка Для Масштабної Битви",
  "Захопити Захисні Артефакти",
  "Знайти Відсутніх Героїв",
  "Використовувати Секретні Суперсили",
  "Відновити Зв'язок З Іншими Реаліті",
  "Зупинити Хаос В Паралельних Світах",
  "Захопити Таємниці З Іншого Часу",
  "Врятувати Залізничну Систему",
  "Співпраця З Таємним Братством",
  "Захистити Міжнародні Запаси Енергії",
  "Підготовити Величезний Щит",
  "Знайти Загублені Архіви",
  "Розкрити Секрети Забороненої Магії",
  "Вивчення Технологій Іншого Світу",
  "Захопити Віруси В Інфекційних Лабораторіях",
  "Рятувати Ветеранів Війни З Таносом",
  "Знайти Втрачені Карти З Золотими Скарбами",
  "Закрити Таємничі Портали",
  "Врятувати В'язнів Підземель Замку Таноса",
  "Співпраця з Високорозвиненими Технологіями",
  "Підготовка До Грандіозної Інтегральної Атаки",
  "Захистити Таємничі Реліквії",
  "Видалити Неймовірно Небезпечний Вірус",
  "Знайти Величезний Запас Енергії",
  "Розкрити Загадкові Ворожі Плани",
  "Врятувати В'язнів Від Загибелі",
  "Знайти Втрачені Військові Дані",
  "Закрити Секретні Інтердименсіональні Портали",
  "Співпраця з Іншими Галактичними Расами",
  "Провести Підготовку Для Гігантської Битви",
  "Захистити Важливі Військові Документи",
  "Запустити Програму Реставрації Мистецтва",
  "Рятувати Загублені Легенди",
  "Знайти Прихований Ворожий Арсенал",
  "Відновити Зміст Втраченого Книжкового Коду",
  "Знищити Величезний Ворожий Танк",
  "Підготовка Для Великої Міжгалактичної Атаки",
  "Захистити Важливі Земельні Ресурси",
  "Врятувати В'язнів Військових Лікарень",
  "Знайти Величезний Резерв Енергії",
  "Закрити Портал До Іншої Реальності",
  "Співпраця з Секретним Агентством",
  "Розкрити Таємниці Магічних Артефактів",
  "Провести Археологічні Розкопки",
  "Захистити Найважливіші Технології",
  "Відновити Зв'язок із Втраченими Лабораторіями",
  "Знищити Ворожий Збройний Арсенал",
  "Використовувати Високотехнологічний Аналіз",
  "Знайти Втрачені Артефакти Мистецтва",
  "Захистити Природні Резервуари Енергії",
  "Запобігти Вторгненню З Іншої Діме",
];

function getTasks(taskCount, owners, startMonth, endMonth) {
  const startYear = 2023;
  const tasks = [];

  function generateRandomTime() {
    const hour = String(Math.floor(Math.random() * 24)).padStart(2, "0");
    const minute = String(Math.floor(Math.random() * 60)).padStart(2, "0");
    return `${hour}:${minute}`;
  }

  function generateRandomDate(month) {
    const year = parseInt(month.split("-")[0]);
    const randomMonthNum = parseInt(month.split("-")[1]);
    const day = String(Math.floor(Math.random() * 30) + 1).padStart(2, "0");
    return `${year}-${String(randomMonthNum).padStart(2, "0")}-${day}`;
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  for (let i = 0; i < taskCount; i++) {
    const title = getRandomElement(tasksTitle);
    const start = generateRandomTime();

    let end;
    do {
      end = generateRandomTime();
    } while (end <= start);

    const priority = getRandomElement(priorities);
    const startYear = parseInt(startMonth.split("-")[0]);
    const endYear = parseInt(endMonth.split("-")[0]);

    const randomYear =
      Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const randomMonthNum = Math.floor(Math.random() * 12) + 1; // Генерируем месяц от 1 до 12

    const month = randomYear + "-" + String(randomMonthNum).padStart(2, "0");
    console.log("month :>> ", month);
    const date = generateRandomDate(month);
    const category = getRandomElement(categories);
    const owner = owners;

    const task = {
      title: title,
      start: start,
      end: end,
      priority: priority,
      date: date,
      category: category,
      owner: owner,
    };

    tasks.push(task);
  }
  console.log("tasks :>> ", tasks);
  return tasks;
}

module.exports = getTasks;
