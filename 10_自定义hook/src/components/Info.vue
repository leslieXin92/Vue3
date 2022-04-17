<template>
    <h1>current mouse coordinate is：</h1>
    <h2>X：{{ coordinate.x }}</h2>
    <h2>Y：{{ coordinate.y }}</h2>
</template>

<script>
import useCoordinate from '../hooks/useCoordinate'

export default {
    name: 'Info',
    setup () {
        const coordinate = useCoordinate()

        return { coordinate }
    },

}
</script>