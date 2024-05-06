
interface ITitle {
    fontSize?: string, 
    fontWeight?: string,
    color?: string,
    marginBotton?: string,
    children: React.ReactNode
}

export default function Title(props:ITitle) {
    return (
        <>
        <h1 style={props}>{props.children}</h1>
        </>
    )
}