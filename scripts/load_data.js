
function parseData() {
  var table = [
    ["Иванов Иван Иванович", "ул. Пушкина, д. 10, кв. 5", "+7 (123) 456-78-90", "2023-02-15", 100500, "example1@example.com", "Samsung Galaxy S21", false],
    ["Петров Петр Петрович", "ул. Лермонтова, д. 25, кв. 12", "+7 (123) 456-78-91", "2023-02-15", 999, "example2@example.com", "Apple iPhone 13", true],
    ["Сидорова Анна Викторовна", "ул. Гагарина, д. 1, кв. 3", "+7 (123) 456-78-92", "2023-02-15", 4500, "example3@example.com", "Xiaomi Redmi Note 10", false],
    ["Кузнецова Оксана Николаевна", "ул. Тургенева, д. 15, кв. 9", "+7 (123) 456-78-93", "2023-02-15", 300, "example4@example.com", "Samsung Galaxy A52", true],
    ["Григорьева Екатерина Сергеевна", "ул. Чехова, д. 5, кв. 17", "+7 (123) 456-78-94", "2023-02-15", 1250, "example5@example.com", "Apple iPhone SE (2020)", false],
    ["Николаев Михаил Владимирович", "ул. Кирова, д. 50, кв. 1", "+7 (123) 456-78-95", "2023-02-15", 10400, "example6@example.com", "Xiaomi Mi 11 Lite", true],
    ["Васильева Татьяна Олеговна", "ул. Ленина, д. 10, кв. 7", "+7 (123) 456-78-96", "2023-02-15", 2700, "example7@example.com", "Samsung Galaxy S20 FE", false],
    ["Калинина Елена Ивановна", "ул. Маяковского, д. 30, кв. 2", "+7 (123) 456-78-97", "2023-02-15", 8000, "example8@example.com", "Apple iPhone 12", true],
    ["Гусев Сергей Викторович", "ул. Баррикад, д. 11, кв. 8", "+7 (123) 456-78-98", "2023-02-15", 680, "example9@example.com", "Xiaomi Redmi 9", false],
    ["Алексеев Алексей Алексеевич", "ул. Толстого, д. 5, кв. 8", "+7 (123) 456-78-93", "2023-02-14", 10000, "example4@example.com", "Google Pixel 6", false],
    ["Смирнова Ольга Ивановна", "ул. Достоевского, д. 3, кв. 9", "+7 (123) 456-78-94", "2023-02-13", 5000, "example5@example.com", "Samsung Galaxy A52", false],
    ["Кузнецов Константин Константинович", "ул. Пушкина, д. 10, кв. 1", "+7 (123) 456-78-95", "2023-02-13", 20000, "example6@example.com", "iPhone 12 Pro", true],
    ["Новикова Надежда Андреевна", "ул. Чехова, д. 12, кв. 7", "+7 (123) 456-78-96", "2023-02-12", 1500, "example7@example.com", "Xiaomi Mi 11 Lite", false],
    ["Морозов Михаил Викторович", "ул. Карамзина, д. 8, кв. 3", "+7 (123) 456-78-97", "2023-02-12", 30000, "example8@example.com", "OnePlus 9 Pro", false],
    ["Зайцева Елена Сергеевна", "ул. Тургенева, д. 4, кв. 6", "+7 (123) 456-78-98", "2023-02-11", 1000, "example9@example.com", "Samsung Galaxy S20 FE", true],
    ["Калинина Анастасия Петровна", "ул. Гоголя, д. 14, кв. 8", "+7 (123) 456-78-99", "2023-02-11", 8000, "example10@example.com", "iPhone XR", false]
  ];
  return table;
}

addEventListener("load", () => {
  console.log("load_data");
  sessionStorage['data'] = JSON.stringify(parseData());
});