function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

  return (
    <div>
      <div className='box' style={styles} onClick={()=> props.onClick(props.id)}></div>
    </div>
  )
}

export default Box
