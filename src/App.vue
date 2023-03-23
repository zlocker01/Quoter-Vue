<script setup>
    import Header from './components/Header.vue';
    import { ref, computed, watch } from 'vue';
    import Button from './components/Button.vue'
    import { calcularTotalPagar } from './helpers' //el archivo dentro se llama index, no necesita especificar ruta


    const cantidad = ref(100000);
    const meses = ref(6); 
    const total = ref(0);
    const MIN = 0;
    const MAX = 200000;
    const STEP = 1000;

    const formatearDinero = valor => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return formatter.format(valor);
    };

    watch([cantidad, meses], () => {
        total.value = calcularTotalPagar(cantidad.value, meses.value);
    });

    const pagoMensual = computed (() => {
        return total.value / meses.value;
    });

    const handleChangeDecremento = () => {
        const valor = cantidad.value - STEP;
        if( valor < MIN ){
            alert('Cantidad no valida');
            return;
        };
        cantidad.value =  valor;
    };

    const handleChangeIncremento = () => {
        const valor = cantidad.value + STEP;
        if( valor > MAX ){
            alert('Cantidad no valida');
            return;
        };
        cantidad.value =  valor;
    };

</script>

<template>
    <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header/>

        <div class="my-5">

            <div class=" flex justify-between mt-10">
                <Button :operador="'-'"
                        @fn="handleChangeDecremento"/>
                <Button :operador="'+'"
                        @fn="handleChangeIncremento"/>
            </div>

            <input type="range"
                class="w-full bg-gray-200 accent-red-500 hover:accent-red-600"
                :min="MIN"
                :max="MAX"
                :step="STEP"
                v-model.number="cantidad" 
            />

            <p class="text-center my-10 text-5xl font-extrabold text-red-600">{{formatearDinero(cantidad)}}</p>

            <h2 class="text-2xl font-extrabold text-gray-500 text-center">
                Elige un <span class="text-red-600"> Plazo</span> a pagar
            </h2>

            <select class="w-full bg-white border border-gray-300 rounded-lg text-center text-xl font-bold
            text-gray-500 mt-5"
            :value="meses"
            v-model.number="meses">
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="24">24 Meses</option>
            </select>
        </div>
        <div v-if="total > 0" class="my-5 space-y-3 bg-gray-50 p-5">
            <h2 class="text-2xl font-extrabold text-gray-500 text-center">
                Resumen <span class="text-red-600"> de pagos</span>
            </h2>
            <p class="text-xl text-gray-500 text-center font-bold">{{ meses }} Meses</p>
            <p class="text-xl text-gray-500 text-center font-bold">Total a Pagar: {{ formatearDinero(total) }} </p>
            <p class="text-xl text-gray-500 text-center font-bold">Mensualidades: {{ formatearDinero(pagoMensual) }}</p>
        </div>

        <p v-else class="text-center">Añade una cantidad y un plazo a apagar</p>
    </div>
</template>
