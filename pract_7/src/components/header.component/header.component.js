import './header.component.css'

export const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="logo">FurnitureStore</h1>
                <p className="tagline">The biggest choice on the web</p>
            </div>

            <div className="header-right">
                <nav className="top-nav">
                    <a href="/login">Log in</a>
                    <a href="/register">Create an account</a>
                    <a href="/checkout">Check out</a>
                </nav>

                <div className="cart-and-search">
                    <div className="cart-widget">
                        <div className="cart-icon">🛒</div>
                        <div className="cart-info">
                            My cart: <span className="cart-count">0 item(s)</span> – <span className="cart-total">$0.00</span>
                        </div>
                    </div>

                    <div className="search-bar">
                        <input type="text" placeholder="Search store..." />
                        <button className="search-button">🔍</button>
                    </div>
                </div>
            </div>
        </header>
    );
};