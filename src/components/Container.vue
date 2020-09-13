<template>
    <div class="container" :class="className">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['className']
}
</script>