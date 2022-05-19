export type AddressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}

export type ContactType = {
    id: number
    name: string,
    email: string,
    address: AddressType
}
export type PostType = {
    title: string,
    body: string,
}
export type SocialType = {
    id: number,
    icon: string,
    path: string
}