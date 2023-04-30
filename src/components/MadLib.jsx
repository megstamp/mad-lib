export default function Madlib({ nounOne, adj, verb, nounTwo }) {

    return(
        <>
        <h2> The Mona Lisa</h2>

        <p> After hiding the painting in his <span>{nounOne}</span> for two years he 
        grew <span>{adj}</span> and tried to <span>{verb}</span> it to a <span>{nounTwo}</span> in Florence, but was caught.</p>
        </>
    )
}