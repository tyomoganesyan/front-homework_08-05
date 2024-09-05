import { useDispatch, useSelector } from "react-redux"
import styles from './medicinelist.module.css'
import { StarList } from "../StarsList/StarsList";
import { useState } from "react";


export const MedicineList = () => {
    const list = useSelector(a => a.medicines);
    const [text, setText] = useState("")
    // const handleSearch = (e) => {
    //     setText(e.target.value)
    //     list.filter(m => m.name.startsWith(text))
    // }
    return <>
        <div className={styles.wrapper}>
            <div>
                <input
                    type="search" className={styles.search}
                    placeholder='What are you looking for...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            {
                text ? list.filter(m => m.name.toLowerCase().startsWith(text.toLowerCase())).map(elm => <div key={elm.id} className={styles.item}>
                    <img src={elm.image} className={styles.img} alt={elm.name} />
                    <h4>{elm.name}</h4>
                    <StarList item_id={elm.id} initialRate={elm.rate} />
                </div>) :
                    list.map(elm => <div key={elm.id} className={styles.item}>
                        <img src={elm.image} className={styles.img} alt={elm.name} />
                        <h4>{elm.name}</h4>
                        <StarList item_id={elm.id} initialRate={elm.rate} />
                    </div>
                    )

            }
        </div>
    </>
}