import Tiempo from "./tiempo.js";
import Fecha from "./fechaRest.js";
import ElementoPedido from "./elementoPedido.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";
import Pedido from "./pedido.js";
import Restaurante from "./restaurant.js";


class Main {
    constructor() {
      this.pedido = new Pedido(
        new Fecha(22, 1, 2020),
        new Tiempo(5, 23, 'PM'),
        new Cliente('Kenia',
          new Direccion('Punta Diamante', 24, 'Paola', 20, 'Colima', 'Colima'),
          3121135597));
  
      this.restau = new Restaurante('Holaa', "jii", '¿Tienes hambre?');
    }
  
  
    testElementoPedido() {
      let x = new ElementoPedido(new Producto("Pizza", new Precio(2500.5)), 2);
      console.log(x.getDescripcion());
    }
  
    testPedido() {
      console.log(this.pedido.getNumeroElementos());
      console.log(this.pedido.getCostoTotal());
      console.log(this.pedido.getProductos());
      console.log(this.pedido.getResumen());
    }
  
    agregarElemento() {
      let elem1 = new ElementoPedido(new Producto('Tostadas', new Precio(45.5)), 2);
      let elem2 = new ElementoPedido(new Producto('Flautas', new Precio(12.5)), 4);
      this.pedido.agregarElemento(elem1);
      this.pedido.agregarElemento(elem2);
      this.pedido.listarElementos();
    }
  
    testRestaurante() {
      this.restau.registrarProductos(new Producto('Tostadas', new Precio(200.500)));
      this.restau.registrarProductos(new Producto('Flautas', new Precio(25.500)));
      this.restau.listarProductos();
  
  
      let pedido1 = new Pedido(
        new Fecha(15, 12, 2019),
        new Tiempo(8, 15, 'PM'),
        new Cliente('Edson', new Direccion('Punta Diamante', 24, 'Karla', 20, 'Colima', 'Colima'), 3121222343));
  
      let elem1 = new ElementoPedido(new Producto('Pizza hawaiana', new Precio(45.5)), 6);
      let elem2 = new ElementoPedido(new Producto('Pizza mexicana', new Precio(12.5)), 8);
      pedido1.agregarElemento(elem1);
      pedido1.agregarElemento(elem2);
  
      let pedido2 = new Pedido(
        new Fecha(14, 2, 2020),
        new Tiempo(10, 15, 'AM'),
        new Cliente('Jonny', new Direccion('Diamante', 14, 'Kenia', 20, 'Mina', 'Punta Diamante'), 386647));
  
      let elem4 = new ElementoPedido(new Producto('sopitos', new Precio(102.500)), 4);
      let elem3 = new ElementoPedido(new Producto('pozole', new Precio(25.500)), 10);
      pedido2.agregarElemento(elem3);
      pedido2.agregarElemento(elem4);
  
      this.restau.registrarPedido(pedido1);
      this.restau.registrarPedido(pedido2);
  
      this.restau.listarPedidos();
  
    }
  }
  
  let app = new Main();
  
  app.testRestaurante();