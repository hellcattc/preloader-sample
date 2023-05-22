import { Preloader } from "../components/Preloader"
import { useCallback } from "react"

const usePreloader = (loading) => {
    return useCallback(() => {
        if (loading == true) return <Preloader/>
    }, [loading])
}

export default usePreloader