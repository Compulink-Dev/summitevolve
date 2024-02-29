import { useRouter } from "next/navigation";
import axios from "axios";

export const logout = async () => {
    const router = useRouter()
    try {
        await axios.get('/api/users/logout');
        router.push('/login')
    } catch (error: any) {
        console.log(error.message)

    }

}