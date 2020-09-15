import React, { useEffect, useState } from 'react'
import "./TinderCards.css";
import TinderCard from 'react-tinder-card'
import axios from '../axios'

function TinderCards() {
    const [people,setPeople] = useState([])

    useEffect(() => {
        async function fetchApi(){
            const res= await axios.get('/tinder/cards')
            setPeople(res.data)
        }
        fetchApi()
    }, [])

    const swiped=(direction,nameToDelete)=>{
        console.log('removing'+nameToDelete)
    }

    const outOfFrame=(name)=>{
        console.log(name+ "left the screen!!!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards-container">

            {people.map(person=>{
                return(
                   <TinderCard 
                   className="swipe"
                   key={person.name}
                   preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                   >
                       <div
                       style={{backgroundImage:`url(${person.img})`}}
                        className="card">
                            <h3>{person.name}</h3>
                       </div>
                       
                        </TinderCard>
                )
            })}
            </div>
        </div>
    )
}

export default TinderCards
