<template>
    <div class="row" :class="className">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['className']
}
</script>