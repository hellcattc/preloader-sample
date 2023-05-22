import { useCallback, useState } from "react"

const useMockLoading = (time = 3000) => {
    const [loading, setLoading] = useState(false)
    const startLoading = useCallback(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, time)
    }, [setLoading])
    return [loading, startLoading]
}

export default useMockLoading