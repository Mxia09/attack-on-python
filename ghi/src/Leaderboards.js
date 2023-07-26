import { useState, useEffect } from "react"


function Leaderboards(props) {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const url = 'http://localhost:8000/api/users'
                const response = await fetch(url)
                if (response.ok) {
                    const data = await response.json()
                    setUserList(data);
                } else {
                    console.error(response);
                    props.setShowToast(true);
                    props.setToastVariant('danger')
                    props.setToastMessage('No scores at this time')
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [props])


    let tableRows;
    if (userList.length > 0) {
        tableRows = userList.map(user => {
            return (
                <tr key={user.id} className="col">
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.first_name}</td>
                </tr>
            )
        })
    } else {
        tableRows = (
            <tr>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
            </tr>
        )
    }
    console.log(props)
    return (
        <div className="text-center">
            <div style={{ position: 'fixed', right: 0, width: 200 }}>
                {props.toast}
            </div>

            <h1 style={{ marginTop: 20 }}>Leaderboards</h1>

            <div className="d-flex justify-content-center align-items-center" style={{ margin: 20 }}>
                <table className="table table-bordered table-striped " style={{ width: 500 }}>
                    <thead className="">
                        <tr className="table-dark">
                            <th scope='col'>Rank</th>
                            <th scope='col'>Username</th>
                            <th scope='col'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboards
