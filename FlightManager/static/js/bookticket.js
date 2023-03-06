function filter_details_ticket() {
    let h = ''
    let str = document.getElementById('from').value
    fetch("/api/booking")
    .then(res => res.json())
    .then(data => {
        data.forEach((item, index) => {
            if(item.airlines.name.toLowerCase().includes(str.toLowerCase())) {
                 h += `<tr>
                    <td id="${index}" value="${item.name}">${item.airlines.name}</td>
                    <td id="${index}" value="${item.plane_id}">${item.plane_id}</td>
                    <td id="${index}" value="${item.departing_at}">${item.departing_at}</td>
                    <td id="${index}" value="${item.arriving_at}">${item.arriving_at}</td>
                    <td>
                        <a href="/flight/{{flights[i].id}}"
                           class="block curser-pointer flex flex-nowrap btn-choose">Chọn</a>
                    </td>
                </tr>`
            }
        })

        const address = document.getElementById('filter_flight')
        address.innerHTML = h
    })
}