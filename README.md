# Resume static JS version

Это статическая версия сайта для GitHub Pages.

## Что положить в репозиторий

- `index.html`
- `404.html`
- `app.js`
- `content.js`
- папку `static/` с твоим текущим `style.css` и ассетами

## Что больше не нужно для GitHub Pages

- `main.py`
- `templates/`
- `data/content.py`
- FastAPI / uvicorn

## Локальный запуск

Лучше не открывать файл двойным кликом, а запустить простой сервер:

```bash
python -m http.server 8000
```

Потом открыть:

```text
http://localhost:8000
```

## Маршруты

- `/ru/main`
- `/ru/hard`
- `/ru/soft`
- `/ru/projects`
- `/ru/experience`
- `/ru/contact`
- `/en/main`
- `/en/hard`
- и т.д.

`404.html` нужен для GitHub Pages, чтобы прямые ссылки вроде `/ru/hard` тоже открывались.
