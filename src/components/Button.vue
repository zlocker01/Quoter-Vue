<script setup>
    const props = defineProps(['operador']);
</script>


<template>
    <button 
        type="button"
        class="h-10 w-10 flex items-center justify-center font-bold bg-red-500 rounded-full
        hover: ring-2 hover:outline-none hover:ring-offset-2 hover:ring-red-500 text-white text-2xl"
        @click="$emit('fn')"
        >
            {{ operador }}
    </button>
</template>