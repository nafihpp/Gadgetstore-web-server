import "./ErrorLayout.css"

export const ErrorLayout = ({ message }) => {
    return (
        <div className="error-container">
            <h1>{message}</h1>
        </ div>
    )
}
