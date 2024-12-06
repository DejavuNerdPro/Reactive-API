interface User{
    id:number,
    member_id:number,
    role_id:number,
    password:string,
    oauth_id:string,
    provider:string,
    createdAt:Date,
    updatedAt:Date
}

export default User;