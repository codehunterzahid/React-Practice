import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "./quoteSlice";
import './quoteList.css'


function QuotesList() {
    const dispatch = useDispatch();

    const { quotes, loading, error } = useSelector((state) => state.quotes)

    useEffect(() => {
        dispatch(fetchQuotes());
    }, [dispatch]);

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Error: {error}</h2>

    return (

        <div className="quotes-container">
            {quotes.map((q) => (
                <div className="quote-card" key={q.id}>
                    <p className="quote-text">{q.quote}</p>
                    <h3 className="quote-author">{q.author}</h3>
                </div>
            ))}


        </div>
    )
}

export default QuotesList;