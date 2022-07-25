let ChangeToFarenheight = (item, values) => {
    item.addEventListener("click", () => {
        if (item.innerText === `${values[0]}ºC`) { 
            item.innerText=`${values[1]}ºF`
        } else {
            item.innerText = `${values[0]}ºC`
        }
    })
}

export default ChangeToFarenheight;