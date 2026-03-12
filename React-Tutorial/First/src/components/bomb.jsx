function Arnav()
{
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>Click me</button>
            <button style={{ backgroundColor: 'green', color: 'white', padding: '10px' }} onClick={() => alert('Arnav Found')}>Click me</button>
            <button style={{ backgroundColor: 'yellow', color: 'black', padding: '10px' }}>Click me</button>
            <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>Click me</button>
        </div>
    )
}

export default Arnav;