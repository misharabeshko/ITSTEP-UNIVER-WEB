import { itemsData } from './items.data.js'
import { ItemComponent } from './item.component/item.component.js'

import styles from './items.module.css'


export const ItemsComponent = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles['section-title']}>Featured Products</h2>
            <div className={styles['products-grid']}>
                {itemsData.map((el, index) => (
                    <ItemComponent key={index} item={el} />
                ))}
            </div>
        </div>
    );
};