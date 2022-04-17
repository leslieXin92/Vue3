import { reactive, onMounted, onBeforeUnmount } from 'vue'

export default function () {
    const coordinate = reactive({
        x: 0,
        y: 0
    })

    function getCurCoordinate (e) {
        console.log(e.pageX, e.pageY)
        coordinate.x = e.pageX
        coordinate.y = e.pageY
    }

    onMounted(() => {
        window.addEventListener('click', getCurCoordinate)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', getCurCoordinate)
    })

    return coordinate
}