let appender = (appendee,...items) => {
    items.forEach(item=> appendee.appendChild(item))
}
export default appender