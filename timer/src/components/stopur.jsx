import { useEffect, useState } from "react"


 export function Stopur() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)


    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todo/1")
    //     .then((res) => res.json())
    //     .then((data) => setData(data));
      
    // }, [])


    useEffect(() => {
        if (count === 5) {
            alert (`Du har klikket 5 gange`)
        }
    }, [count])

    return (
        <>
        <h1>Helllo World</h1>
        <button onClick={() => setCount((prevCount) => prevCount+1) }>Count: {count} </button>
       </>
    );
}
