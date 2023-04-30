export default function Fillin ({setNounOne, setAdj, setVerb, setNounTwo}) {

    return (
        <form>
            <label> Noun One
                <input type="text"
                    placeholder="Noun One"
                    onChange={e => setNounOne(e.target.value)} />
            </label>

        <br />

            <label> Adjective
                <input type="text"
                    placeholder="Adjective"
                    onChange={e => setAdj(e.target.value)} />
            </label>

        <br />

            <label> Verb 
                <input type="text"
                    placeholder="Verb"
                    onChange={e => setVerb(e.target.value)} />
            </label>

        <br />

            <label> Noun Two 
                <input type="text"
                    placeholder="Noun Two"
                    onChange={e => setNounTwo(e.target.value)} />
            </label>
        </form>
    )
}