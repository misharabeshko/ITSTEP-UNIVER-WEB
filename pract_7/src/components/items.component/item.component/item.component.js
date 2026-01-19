import styles from './item.module.css';

export const ItemComponent = ({ item }) => {
    const hasSale = !!item.salePrice;

    return (
        <div className={styles['item-card']}>
            <div className={styles['image-container']}>
                <img src={item.image} alt={item.title} className={styles['item-image']} />
                {hasSale && <div className={styles['sale-badge']}>SALE</div>}
            </div>

            <h3 className={styles['item-title']}>{item.title}</h3>

            <div className={styles['price-container']}>
                {hasSale ? (
                    <>
                        <span className={styles['sale-price']}>{item.currency}{item.salePrice}</span>
                        <span className={styles['old-price']}>{item.currency}{item.price}</span>
                    </>
                ) : (
                    <span className={styles['regular-price']}>{item.currency}{item.price}</span>
                )}
            </div>
        </div>
    );
};