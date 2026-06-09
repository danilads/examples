import os

bin_path = r"C:\Games\nf\nf.bin"
iso_path = r"C:\Games\nf\nf.iso"

print("Конвертация BIN в ISO началась... Пожалуйста, подождите.")

with open(bin_path, "rb") as f_in, open(iso_path, "wb") as f_out:
    while True:
        # Читаем сырой сектор диска (2352 байта)
        sector = f_in.read(2352)
        if not sector:
            break
        # Отрезаем 16 байт заголовка и берем следующие 2048 байт чистых данных
        f_out.write(sector[16:2064])

print(f"Готово! Чистый ISO-образ создан: {iso_path}")