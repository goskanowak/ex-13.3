process.stdin.setEncoding('utf-8'); // enkodowanie pobieranych danych (progra rozumie o co nam chodzi)

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!');
        }
    }
}); // nasłuchujemy zdarzenie odczytu i wtedy wykonuje funkcje, zmienna z metodą .read() ma za zadanie odczytać co użytkownik podał na wejściu, medtoda if jeżeli wartość jest inna niż null, ma wyświetlić. warunek sprawdza czy komenda podana przez użytkownika jest poprawna. metoda trim - usówa białe znaki.

