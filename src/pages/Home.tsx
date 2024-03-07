import React from 'react'
import './Home.css'
import ProductCart from '../components/ProductCart/ProductCart'
import { ProductsArr } from '../components/ProductsArr/ProductsArr'

type HomeProps = {
    handleTotalPrice: (productPrice: number) => void
}

const Home = ({handleTotalPrice}:HomeProps) => {
    const [moreProducts, setMoreProducts] = React.useState(false)

    const handleMoreProducts = ()=> {
        setMoreProducts((prevState)=> {
            return (
                !prevState
            )
        } )
    }

    return (
        <main>
            <section>
                <div className="phone-main d-f jc-sb align-center">
                    <div><img src="images/mobile-main.jpg" alt="mobile-main" /></div>
                    <div>
                        <h2 className="phone-main-title">Mobile World</h2>
                        <div className="phone-main-subtitle">Internet Shop</div>
                        <p className="phone-main-desc">
                            Інтернет магазин Mobile World створений в 2005 році. Безпечна попука мобільних телефонів
                            відомих брендів онлайн. Гарантія від виробника. Доставка по всій Україні!
                        </p>
                        <div className="phone-main-order">Замовлення за телефоном: <span>(044) 600-12-55</span> </div>
                    </div>
                </div>
            </section>
            <section>
                <form className="phone-action d-f align-center">
                    <label htmlFor="sort">Сортувати</label>
                    <select name="sort" id="sort">
                        <option value="rating">За рейтингом </option>
                        <option value="lowestPrice">Від дешевих до дорогих</option>
                        <option value="highestPrice">Від дорогих до дешевих</option>
                    </select>
                </form>
            </section>
            <section>
                <div className="phone-catalog">
                    <h3 className="phone-catalog-title">Смартфони в Mobile World</h3>
                    <div className="phone-catalog-box d-f">
                        {
                            moreProducts ?
                            ProductsArr.map((product, num) => (
                                <ProductCart productNum={num} handleTotalPrice={handleTotalPrice}/>
                            ))
                            : 
                            ProductsArr.slice(0, 6).map((product, num) => (
                                <ProductCart productNum={num} handleTotalPrice={handleTotalPrice}/>
                            ))
                        }
                    </div>
                    <button onClick={handleMoreProducts}>{moreProducts ? "Show less" : "Show more"}</button>
                </div>
            </section>
        </main>
    )
}

export default Home