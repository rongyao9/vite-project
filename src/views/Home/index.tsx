import {defineComponent,ref, render} from 'vue'
export default defineComponent({
    name:'home',
    setup(){
        const title = ref<string>('这是个标题')
        const renderContent = ()=>{
            return ( <h1>{title.value}</h1>)
        }
        return renderContent
    }
})