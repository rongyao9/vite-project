import {defineComponent,ref, render} from 'vue'
import useHome from '../../hooks/useHome'
export default defineComponent({
    name:'home',
    setup(){

        const {
            title
        } = useHome()

        const renderContent = ()=>{
            return ( <h1>{title.value}</h1>)
        }
        return renderContent
    }
})