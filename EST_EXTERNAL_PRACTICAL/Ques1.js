async function getUsers()
{
    try{
        var  result = await fetch("https://jsonplaceholder.typicode.com/users")
    }
    catch(error)    {
        console.log(error)
    }

    let data = await result.json()

    for(let i = 0;i<5;i++)
    {
        console.log(data[i].name)
    }
}
getUsers();