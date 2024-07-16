import api from "@/lib/axios"

// Centralizando URL's que realice las peticiones a la API

export default {
  obtenerClientes() {
    return api.get('/clientes')
  },
  agregarCliente(data) {
    return api.post('/clientes', data)
  },
  obtenerCliente(id) {
    return api.get('/clientes/' + id)
  },
  actualizarCliente(id, data) {
    return api.patch('/clientes/' + id, data) // patch realiza cambio parciales y push remplaza el objecto con la información que se está pasando
  },
  cambiarEstado(id, data) {
    return api.patch('/clientes/' + id, data) 
  },
  eliminarCliente(id){
    return api.delete('/clientes/' + id)
  }
}
