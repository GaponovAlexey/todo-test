export interface TypeData {
  userId: number
  id: number
  title: string
  completed: boolean
}
export interface DbType {
  id: number
  title: string
  body: string
  toggle: boolean
}

export interface DbTypePosts {
  posts: DbType[]
  slice?: any
  length?: any
}
