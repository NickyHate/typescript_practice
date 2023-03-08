interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'
const myName: PersonKeys = 'name'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}
// Создаём тип с такими же ключами как у User, не включая _id, createdAt
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>

// Создаём тип как тип User, забирая только ключи 'name', 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

