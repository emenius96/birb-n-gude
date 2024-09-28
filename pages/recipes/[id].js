import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Recipe.module.css'

export default function Recipe() {
  const router = useRouter()
  const { id } = router.query
  const [showPopup, setShowPopup] = useState(false)

  const handlePopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.recipeCard} onClick={handlePopup}>
        <img src="/images/spaghetti-bolognese.jpg" alt="Spaghetti Bolognese" />
        <h2>Spaghetti Bolognese</h2>
      </div>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupBackground} onClick={handleClosePopup} />
          <div className={styles.popupContent}>
            <h2>Spaghetti Bolognese</h2>
            <p>This is where the full recipe details would go.</p>
          </div>
        </div>
      )}
    </div>
  )
}