import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import './styles/ProtectedPage.css'

const ProtectedRoutes = () => {

    const trainerName = useSelector(store => store.trainerName)

    if (trainerName.length > 2) {
        return (
            <div className="prot">
                <header>
                    <div className="circle1__header"></div>
                    <div className="circle2__header"></div>
                    <figure className="title__header">
                        <img src='../assets/images/titlePoke.png' alt="titlePoke" />
                    </figure>
                </header>
                <Outlet/>
            </div>
          )
    } else {
        return (
            <Navigate to='/' />
        )
    }
}
export default ProtectedRoutes