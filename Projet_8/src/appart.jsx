export default function Appart() {
    return (
        <div className="infos-id">
            {jsonData.map((data, i) => (
                <div className="card-infos" key={i}>
                    <div className="img-id">
                        <img src={data.cover} alt={data.title} />
                    </div>
                    <div>
                        <div className="left-side">
                            <h3>{data.cover}</h3>
                            <p>{data.location}</p>
                            <div className="tags">
                                <p>{data.tags}</p>
                            </div>
                            <div>
                                <p>Dexcription</p>
                            </div>
                        </div>
                        <div className="right-side">
                            <div>
                                <p>{data.name}</p>
                                <img src={data.picture}></img>
                            </div>
                            /* Ratings */

                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}
