fetch('/books').then((res) => res.json()).then((result) => showBooks(result));
