import { Pedido } from './pedido';
var objectArray = [
{name:"iPhone Xs", cant:5, color:"White Glass", capac:"256 GB", descr:"regalo1"},
{name:"iPhone 8", cant:3, color:"Black Glass", capac:"64 GB", descr:"regalo2"},
{name:"iPad", cant:8, color:"Blue Glass", capac:"256 GB", descr:"regalo3"}
];

localStorage.setItem('testObject', JSON.stringify(objectArray));
var retrievedObject = localStorage.getItem('testObject');

export const PEDIDOS: Pedido[]  = JSON.parse(retrievedObject);