export default function Loading({what}:{what : string}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            fontFamily: "sans-serif",
        }}>
            <div style={{
                width: "50px",
                height: "50px",
                border: "6px solid #ccc",
                borderTop: "6px solid #0070f3",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
            }}></div>
            <p className="text-2xl mt-5">Loading {what}...</p>
        </div>
    );
}



