import { useState, createContext } from "react";

export const ItemsContext = createContext();

const itemsInStock = [
  {
    id: "1",
    nombre: "Motherboard Asus Prime A320M-K",
    imagen: "/src/assets/img/mother1.jpeg",
    precioAnterior: 87000,
    precio: 64000,
    descripcion: "AM4 - Asus Prime A320M-K",
    categoria: "Motherboards",
  },
  {
    id: "2",
    nombre: "Mouse Logitech G703",
    imagen: "/src/assets/img/Mouse1.jpeg",
    precioAnterior: 22000,
    precio: 19000,
    descripcion: "Mouse Gamer Logitech G703 inalambrico",
    categoria: "Mouses",
  },
  {
    id: "3",
    nombre: "Placa de video EVGA Nvidia RTX 3060",
    imagen: "/src/assets/img/nvidia3060.jpg",
    precioAnterior: 208000,
    precio: 168000,
    descripcion: "Placa de video EVGA Nvidia RTX 3060",
    categoria: "VideoCards",
  },
  {
    id: "4",
    nombre: "Placa de video EVGA Nvidia RTX 3080",
    imagen: "/src/assets/img/nvidia3060.jpg",
    precioAnterior: 340000,
    precio: 260000,
    descripcion: "Placa de video EVGA Nvidia RTX 3080",
    categoria: "VideoCards",
  },
  {
    id: "5",
    nombre: "Placa de video EVGA Nvidia RTX 3090",
    imagen: "/src/assets/img/nvidia3060.jpg",
    precioAnterior: 525000,
    precio: 425000,
    descripcion: "Placa de video EVGA Nvidia RTX 3090",
    categoria: "VideoCards",
  },
  {
    id: "6",
    nombre: "Fuente de poder EVGA 850W",
    imagen: "/src/assets/img/EVGA.png",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Fuente de poder EVGA 850 Watts 80 Plus Gold",
    categoria: "Fuentes de poder",
  },
  {
    id: "7",
    nombre: "Placa de video RTX 2060 6Gb",
    imagen: "/src/assets/img/Carousel/placadevideo2.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Placa De Video GeForce RTX 2060 6Gb Colorful",
    categoria: "VideoCards",
  },
  {
    id: "8",
    nombre: "Memoria Ram Kingston Fury DDR4 3200 Mhz",
    imagen: "/src/assets/img/Carousel/ram1.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Kingston Fury Rgb DDR4-8Gb 3200 Mhz",
    categoria: "Memorias Ram",
  },
  {
    id: "9",
    nombre: "Placa de video GeForce RTX 3090 24Gb",
    imagen: "/src/assets/img/Carousel/placadevideo3.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "GeForce RTX 3090 24Gb Evga Ultra",
    categoria: "VideoCards",
  },
  {
    id: "10",
    nombre: "Disco Solido Kingston Fury",
    imagen: "/src/assets/img/Carousel/disco1.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Disco SSD M.2 Pci-E 1Tb Kingston Fury Renegade",
    categoria: "Almacenamiento",
  },
  {
    id: "11",
    nombre: "Thermaltake TR2 600W",
    imagen: "/src/assets/img/Carousel/fuente1.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Fuente de poder Thermaltake TR2 600W ",
    categoria: "Fuentes de poder",
  },
  {
    id: "12",
    nombre: "Monitor Samsung  240Hz 27''",
    imagen: "/src/assets/img/Carousel/monitor 10.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Monitor 27''Samsung Plano G4 240Hz 1Ms",
    categoria: "Monitores",
  },
  {
    id: "13",
    nombre: "AMD Ryzen 7 5700G",
    imagen: "/src/assets/img/Carousel/cpu3.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Procesador Amd Ryzen 7 5700G 4.6 Ghz - AM4",
    categoria: "Procesadores",
  },
  {
    id: "14",
    nombre: "Radeon RX 6900 XT",
    imagen: "/src/assets/img/Carousel/placadevideo3.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Radeon RX 6900 XT 16Gb Gigabyte Gaming OC",
    categoria: "VideoCards",
  },
  {
    id: "15",
    nombre: "HyperX Cloud Flight",
    imagen: "/src/assets/img/Carousel/Auris1.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Auricular Gamer HyperX Cloud Flight Inalámbrico",
    categoria: "Auriculares",
  },
  {
    id: "16",
    nombre: "Redragon K552W Kumara",
    imagen: "/src/assets/img/Carousel/Teclado1.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Teclado Redragon Kumara Rgb Blanco Switch Azul",
    categoria: "Teclados",
  },
  {
    id: "17",
    nombre: "Mouse Gamer Galax Slider",
    imagen: "/src/assets/img/Carousel/mouse1.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Mouse Gamer Galax Slider 01 Rgb 7200 Dpi",
    categoria: "Mouses",
  },
  {
    id: "18",
    nombre: "Ryzen 5 5600g",
    imagen: "/src/assets/img/r55600g.jpg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion:
      "Procesador Ryzen 5 5600g el mejor procesador del mercado mundial",
    categoria: "Procesadores",
  },
  {
    id: "19",
    nombre: "Redragon M988 Rgb Storm Elite",
    imagen: "/src/assets/img/Carousel/mouse2.jpeg",
    precioAnterior: 35000,
    precio: 26000,
    descripcion: "Mouse Gamer Redragon M988 Rgb Storm Elite Negro",
    categoria: "Mouses",
  },
];
