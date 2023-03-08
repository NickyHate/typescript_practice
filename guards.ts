// Guards вспомогательные функции для обработки различных типов входящих данных
function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    }
    return {
        info: res.header + res.message
    }
}

// ==============

type AllertType = 'success' | 'danger' | 'warning'

function setAllertType(type: AllertType) {

}

setAllertType('success')
setAllertType('warning')
// setAllertType('default') - Значение будет не валидно