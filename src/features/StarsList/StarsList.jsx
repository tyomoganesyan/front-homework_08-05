import { useDispatch, useSelector } from "react-redux"
import styles from './starslist.module.css'
import { rateMedicine } from "../MedicineList/medicinelist.slice"

export const StarList = ({ item_id, initialRate }) => {

    const dispatch = useDispatch()
    const arr = [1, 2, 3, 4, 5]
    const handleRate = (rate) => {
        dispatch(rateMedicine({ rate, item_id }))
    }
    return <>
        <div>
            {
                arr.map(star => <img key={star}
                    onClick={() => handleRate(star)}
                    src={initialRate  >= star ? "src/public/star_colored.png" : "src/public/star_uncolored.png"}
                />)
            }
        </div>
    </>
}