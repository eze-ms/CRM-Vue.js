<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router'

    const props = defineProps({
        cliente: {
            type: Object
        }
    })

    defineEmits(['actualizar-estado', 'eliminar-cliente'])

    const nombreCliente = computed (() => {
        return props.cliente.nombre + ' ' + props.cliente.apellido
    })

    const estadoCliente = computed (() => {
        return props.cliente.estado
    })

</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ nombreCliente }}</p>
            <p class="text-gray-500">{{ cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente.company }}</p>
            <p class="text-gray-600">{{ cliente.position }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            <button
                class="inline-flex items-center justify-center rounded-full px-2 text-xs font-semibold leading-5 w-20" 
                :class="[estadoCliente ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800']"
                @click="$event => $emit('actualizar-estado', 
                    {id: cliente.id, estado: cliente.estado})"
            >
                {{ estadoCliente ? 'Active' : 'Inactive'}}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink 
                :to="{ name: 'editar-cliente', params: { id: cliente.id } }"
                class="w-20 rounded-xl px-2 py-1 text-xs font-semibold leading-5 bg-indigo-100 text-indigo-600 hover:text-indigo-100 hover:bg-indigo-600 mr-5"
                >
                    Edit
            </RouterLink>

            <button
                class="rounded-xl px-2 text-xs font-semibold leading-5 bg-red-100 text-botonEliminar hover:text-red-100 hover:bg-botonEliminar"
                @click="$event => $emit('eliminar-cliente', cliente.id)"
            >
                Delete
            </button>
        </td>
    </tr>
</template>