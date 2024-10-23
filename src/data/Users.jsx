const users = [
    {user: 'user', pass : 'pass', role: 'user', token: 'user'},
    {user: 'admin', pass : 'admin', role: 'admin', token: 'admin'},
    {user: 'guest', pass : 'guest', role: 'guest', token: 'guest'},
]

export function verifyUser(user, pass) {
    const userFound = users.find( (u) => { 
        return u.user === user && u.pass === pass
    }) // found: object (mem. addr.), not found: null(0) 

    return userFound ? {role: userFound.role, token: userFound.token} : null
}