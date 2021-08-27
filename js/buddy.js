const loadPersons = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayPersons(data))
}
loadPersons()
const displayPersons = data => {
    // console.log(data.results)
    const persons = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const person of persons) {
        // console.log(person.picture.large)
        const p = document.createElement('p');
        p.innerText = `Name: ${person.name.title} ${person.name.first}  ${person.name.last}  Identity: ${person.picture.large}`;
        buddiesDiv.appendChild(p);
    }
}