//call back

function name(name){
    console.log('hello ' + name);
}

function string (tenlot, ten, prinTName){
    let c = tenlot + ' ' + ten;
    prinTName(c);
}

string('Hoang', 'Anh', name)

//call back hell

function callback1(ansang){
    ansang();
}

function callback2(uongnuoc){
    uongnuoc();
}

function callbackhell(){
    callback1(
        function(){
            callback2(
                function(){
                    console.log('An no qua')
                }
            )
        }
    )
}
callbackhell();

