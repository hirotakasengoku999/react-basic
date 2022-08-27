import React, {useState, useEffect} from 'react';

const BasicUseEfect = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState("");
    useEffect(() => {
        console.log("useEffect invoked");
    }, [count]);

    return (
        <div>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Count: {count}</button>
            <input value={item} onChange={evt=>setItem(evt.target.value)} />
        </div>
    )
}

export default BasicUseEfect
