# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://monosnap.com/file/c9bMfWGuS7n9JWzfV2zh3lovnNVUJx

# Отримуємо контакт по id
node index.js --action="get" --id=5
https://monosnap.com/file/zvrCxSKwAuqLCwwklqnjWUcr3QHHW4

# Додаємо контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/o6kTOyB2rTwaSgyODVzSUUIDi8eo50

# Видаляємо контакт
node index.js --action="remove" --id=3
https://monosnap.com/file/5p1yeXeNP5cGdr2iYHHaECsStdY2pZ