process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (!input) return;
        
    var instruction = input.toString().trim();
    switch (instruction) {
        case '\info':
            console.log(process.env);
            break;
        case '\hi':
            process.stdout.write('Hello\n');
            break;
        case '\exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        default:
             process.stderr.write('Wrong instruction!\n');
            break;
    }
}); 
