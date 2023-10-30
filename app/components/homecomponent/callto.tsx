import "./callto.scss"

const Callto = () => {
    return (
        <section className="callto-action">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto text-center">
                        <h3>Newsletter Subscription</h3>
                        <p>Get updated with latest news</p>
                        <form className="newsletter" action="#">
                            <input type="text" placeholder="Enter your Email" />
                            <button type="submit"><i className="fa-solid fa-location-arrow"></i>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Callto