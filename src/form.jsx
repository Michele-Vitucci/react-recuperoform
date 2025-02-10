import { useState } from "react"


function Welcome({name}) {

    return(
        <p>welcome {name}!</p>

    )
    
}

function InteractiveWelcome () {

    const [name,setName]= useState("")

    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <Welcome name= {name}/>
        </div>
    )
    
}

export {Welcome,InteractiveWelcome};

