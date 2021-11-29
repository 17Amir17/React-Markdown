import '../styles/window.css'

function Window(props){
    return(
        <div className='window'>
            <div className='window-header'>{props.name}</div>
        </div>
    )
}

export default Window;