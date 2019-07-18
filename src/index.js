let name = 'liuliu'
const a = 'ewqewqewq'
const fun = () => {
    let e = 123
    console.log(e)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(500)
        }, 5000)
    })
}
fun().then(data => {
    console.log(data)
})
console.log(name)
