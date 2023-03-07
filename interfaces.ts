// Interface - некоторый тип, который служит для описания объектов или классов их полей и методов
// readonly - только для чтения
// ? - необязательный параметр
interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '',
    size: {
        width: 10,
        height: 20
    },
    color: '1'
}

const rect2: Rect = {
    id: '',
    size: {
        width: 11,
        height: 31
    }
}
rect2.color = 'black'

// Можно объявить переменную и показать каким  типов в дальнейшем она должна быть
const rect3 = {} as Rect
const rect4 = <Rect>{}

// Наследование интерфейсов
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '',
    size: {
        width: 11,
        height: 22
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// =======================
// Часто интерфейсы называют с большой буквы I
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// ===================
// Когда в объекте множество разлючных ключей и мы не можем указать их все
interface IStyles {
    [key: string]: string
}
const css: IStyles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}

