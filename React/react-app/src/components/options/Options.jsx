import Option from './Option'

const Options = ({options}) => {

    return(
        <div>
            {options.map((elem) => {
                return (
                    <Option option={elem} key={elem.id}/>
                )
            })}
            
        </div>
    )
}

export default Options