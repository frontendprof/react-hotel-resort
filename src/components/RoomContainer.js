
import React from 'react'
import { withRoomConsumer } from '../context'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from "../components/Loading"



function RoomContainer({context}){
    const {loading,sortedRooms,rooms}=context;
    if(loading){
        return <Loading />
    }
    return(
        <>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </>
    )
}


export default withRoomConsumer(RoomContainer)








// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {value=>{
//                 const {loading,sortedRooms,rooms}=value;
//                 if(loading){
//                     return <Loading />
//                 }
//                 return(
//                     <div>
//                         Hello from Room Container 
//                         <RoomFilter rooms={rooms}/>
//                         <RoomList rooms={sortedRooms}/>
//                     </div>
//                 )
//             }}
//         </RoomConsumer>

//     )
// }
