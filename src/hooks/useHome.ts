import {ref} from 'vue'

export default function useHome (){

    const title = ref<String>('这个是标题')

    return {
        title
    }
}