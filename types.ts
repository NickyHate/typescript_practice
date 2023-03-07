// Примитивные типы
// Boolean
const isFetching: boolean = true
const isLoading: boolean = false

// Number
const int: number = 42
const float: number = 4.2
const num: number = 3e10

// String
const message: string = 'Hello typescript'

// Array
const numberArr: number[] = [1, 1, 2, 3, 5, 8, 13]
// Generic тип (когда описание типа идёт в треугольных скобках)
const numberArr2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Nikita', 892121223]

// Any, позволяет переприсваивать тип
let variable: any = 42
variable = ''

// Void, когда функция ничего не возращает
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Крот')

// Never, когда функция возращает ошибку или не заканчивает своё действие
function throwError(message: string): never {
    throw new Error()
}

function infinite(): never {
    while(true){

    }
}

// Type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 123
const id2: ID = '123'

// Null и undefined обычно встречаются в таком виде
type SomeType = string | null | undefined

