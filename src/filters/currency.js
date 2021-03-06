export default function (num) {
    const n = Number(num)

    if (isNaN(n)) {
        return ''
    }

    return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        return (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c)
    })}`
}
