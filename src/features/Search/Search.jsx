
// import { useState } from 'react'
// import styles from './search.module.css'
// import { useSelector } from 'react-redux'
// export const Search = () => {

//     const [text, setText] = useState("")
//     const list = useSelector(a => a.medicines)
//     const handleSearch = (e) => {
//         e.preventDefault()
//     }
//     console.log(list, text)

//     return <>
//         <div>
//             <input
//                 type="search" className={styles.search}
//                 placeholder='What are you looking for...'
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             />
//             {
//                 list.filter(m => m.name.startsWith(text)).map(elm => <div key={elm.id}>
//                         <p>
//                 </div>)
//             }
//             {/* <button>Find</button> */}
//         </div>
//     </>
// }