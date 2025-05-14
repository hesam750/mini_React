import { useState } from "react";   

function Title (){

    const [count, setCount] = useState(0);

    return(
         
        <div>
            <p>تعداد: {count}</p>
            <button onClick={() => setCount(count + 1) }> افزایش</button>
            <button onClick={() => setCount(count => count - 1) }> کاهش </button>
            <button onClick={() => setCount(count => count + 5) }> 5 افزایش</button>
        </div>



    )



}
export default Title;