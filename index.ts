type User = {
    type: string;
    name: string;
    age: number;
    occupation: string;
}

type Admin = {
    type: string;
    name: string;
    age: number;
    role: string;
}

const persons: Array<User | Admin> = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
    
function isAdmin(person: User | Admin) {
    return person.type === 'admin';
}
    
function isUser(person: User | Admin) {
    return person.type === 'user';
}
    
function logPerson(person: User | Admin) {
    let additionalInformation: string = '';
    
    if (isAdmin(person)) {
    additionalInformation = person.role;
    }
    
    if (isUser(person)) {
    additionalInformation = person.occupation;
    }
    
    console.log( `- ${person.name}, ${person.age}, ${additionalInformation}`);
}
    
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
    
console.log('Users:');
persons.filter(isUser).forEach(logPerson);