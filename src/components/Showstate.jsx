import { useState } from 'react'

function Showstate() {
    const [showtag, setShowtag] = useState(true);

    return (
        <div>
            <button onClick={() => setShowtag(!showtag)}>کلیک کنیدبرای

                {showtag && <span>مخفی شدن </span>}
                {showtag || <span>نمایش دادن</span>}

            </button>
            {showtag && <p>درحال نمایش</p>}

        </div>

    )
}

export default Showstate