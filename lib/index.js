export default (function () {
    var name = 'liuliu';
    var a = 'ewqewqewq';
    var fun = function fun() {
        var e = 123;
        console.log(e);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(500);
            }, 5000);
        });
    };
    fun().then(function (data) {
        console.log(data);
    });
    console.log(name);
});