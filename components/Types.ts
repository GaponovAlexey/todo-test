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
}

export interface DbTypePosts {
  posts: DbType[]
  slice?: any
}
