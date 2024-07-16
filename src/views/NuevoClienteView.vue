<script setup>
  import { FormKit } from '@formkit/vue'
  import { useRouter } from 'vue-router'
  import ClienteService from '../services/ClienteService'
  import RouterLink from '../components/UI/RouterLink.vue'
  import Heading from '../components/UI/Heading.vue'

  const router = useRouter()

  defineProps({
    titulo: {
      type: String
    }
  })

  const handleSubmit = (data) => {
      data.estado = 1
      ClienteService.agregarCliente(data)
      .then(respuesta => {
        console.log(respuesta);
        // Redireccionar
        router.push({ name: 'listado-clientes' })
      })
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
          submit-label="Add Client"
          incomplete-message="No se pudo enviar el mensaje"
          @submit="handleSubmit"   
        >

          <FormKit 
            type="text"
            label="First Name"
            name="nombre"
            placeholder="Client's first name"
            validation="required"
            :validation-messages="{ required: 'The client\'s first name is required' }"
          />

          <FormKit 
            type="text"
            label="Last Name"
            name="apellido"
            placeholder="Client's last name"
            validation="required"
            :validation-messages="{ required: 'The client\'s last name is required' }"
          />

          <FormKit 
            type="email"
            label="Email"
            name="email"
            placeholder="Client's email"
            validation="required|email"
            :validation-messages="{ required: 'The client\'s email is required', email: 'Please enter a valid email' }"
          />

          <FormKit 
            type="tel"
            label="Phone"
            name="phone"
            placeholder="Client's phone: XXX-XXX-XXXX"
            validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{ matches: 'The format is not valid' }"
          />

          <FormKit 
            type="text"
            label="Company"
            name="company"
            placeholder="Company"
          />
          
          <FormKit 
            type="text"
            label="Position"
            name="position"
            placeholder="Position"
          />

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
