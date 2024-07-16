<script setup>
    import { onMounted, reactive } from 'vue'
    import { FormKit } from '@formkit/vue'
    import { useRouter, useRoute } from 'vue-router'
    import ClienteService from '../services/ClienteService'
    import RouterLink from '../components/UI/RouterLink.vue'
    import Heading from '../components/UI/Heading.vue'

    const router = useRouter()
    const route = useRoute()

    const { id } = route.params

    const formData = reactive({})
    
    onMounted(() => {
        ClienteService.obtenerCliente(id)
            .then(({data}) => {
                Object.assign(formData, data)
            })
            .catch(error => console.log(error))          
    })
    

    defineProps({
        titulo: {
            type: String
        }
    })

    const handleSubmit = (data) => {
        ClienteService.actualizarCliente(id, data)
            .then(() => router.push({name: 'listado-clientes'}))
            .catch(error => console.log(error))
    }
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink 
        to="listado-clientes"
      >
        Return
      </RouterLink>
    </div>

    <Heading>{{ titulo }}</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit 
            type="form"
            submit-label="Save"
            incomplete-message="No se pudo enviar el mensaje"
            @submit="handleSubmit"
            :value="formData"
        >
          <FormKit 
            type="text"
            label="First Name"
            name="nombre"
            placeholder="Client's first name"
            validation="required"
            :validation-messages="{ required: 'The client\'s first name is required' }"
            v-model="formData.nombre"

          />

          <FormKit 
            type="text"
            label="Last Name"
            name="apellido"
            placeholder="Client's last name"
            validation="required"
            :validation-messages="{ required: 'The client\'s last name is required' }"
            v-model="formData.apellido"
            
          />

          <FormKit 
            type="email"
            label="Email"
            name="email"
            placeholder="Client's email"
            validation="required|email"
            :validation-messages="{ required: 'The client\'s email is required', email: 'Please enter a valid email' }"
            v-model="formData.email"
            
          />

          <FormKit 
            type="tel"
            label="Phone"
            name="phone"
            placeholder="Client's phone: XXX-XXX-XXXX"
            validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{ matches: 'The format is not valid' }"
            v-model="formData.phone"
          />

          <FormKit 
            type="text"
            label="Company"
            name="company"
            placeholder="Company"
            v-model="formData.company"
          />
          
          <FormKit 
            type="text"
            label="Position"
            name="position"
            placeholder="Position"
            v-model="formData.position"
          />
          <!-- Slot para el botón de envío personalizado -->
          <template v-slot:submit>
            <button 
              type="submit" 
              class="rounded bg-backGround text-white py-2 px-5 text-sm shadow tracking-wide hover:bg-primaryColorHover"
            >
              Save
            </button>
          </template>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
  .formkit-wrapper {
    max-width: 100%;
  }
</style>
