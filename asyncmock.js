// const products = [
//     {
//         id: '1',
//         name: 'Audiotechnica AT2020',
//         price: 200000,
//         img: 'https://http2.mlstatic.com/D_NQ_NP_2X_692374-MLA50133461867_052022-F.webp',
//         description: "Ideal para aplicaciones de estudio doméstico, este robusto condensador de captación lateral está equipado con un diafragma ligero y de diseño personalizado para ofrecer una respuesta de frecuencia ampliada y una excelente respuesta a transitorios. El micrófono ofrece un amplio rango dinámico y soporta con facilidad altos niveles de presión sonora. Su salida XLR analógica se conecta fácilmente a un conversor digital o mezclador.",
//         section: 'microfonos',
//         cart: 0
//     },
//     {
//         id: '2',
//         name: 'Shure SM 7b',
//         price: 1230000,
//         img: 'https://http2.mlstatic.com/D_NQ_NP_2X_934636-MLU70036155317_062023-F.webp',
//         description: 'Ideal para transmisiones profesionales, podcasts o grabaciones de estudio, este micrófono dinámico proporciona voces suaves y cálidas. El SM7B captura y realza los detalles más finos de la voz mientras bloquea distracciones. Un icono del audio. Micrófono de estudio cardioide que ofrece una reproducción de audio suave y cálida en aplicaciones de captación cercana. Dispone de una amplia respuesta en frecuencia, supresión controlada de graves, realce de presencia de frecuencias medias y aislamiento antigolpes interno por suspensión de aire. El SM7B es ideal para aplicaciones de captación cercana, como emisoras de radio y locuciones para TV, y ha sido utilizado en la grabación de voces en muchos álbumes. El aislamiento de choque de la suspensión de aire y el filtro pop eliminan ruido mecánico y respiración pesada, permitiendo que las palabras se destaquen. Cuenta con blindaje electromagnético avanzado para eliminar el zumbido de monitores de computadora y otros equipos de estudio. El patrón cardioide está diseñado para rechazar el audio fuera de eje, permitiendo cantar o hablar en un ángulo cómodo y capturar el sonido deseado con coloración mínima',
//         section: 'microfonos',
//         cart: 0
//     },
//     {
//         id: '3',
//         name: 'Krk Rokit 5',
//         price: 850000,
//         img: 'https://http2.mlstatic.com/D_NQ_NP_830356-MLA52026900966_102022-O.webp',
//         description: 'KRK Classic 5 se trata de una reedición de los clásicos RP5 G3 con una serie de mejoras y en una versión limitada. Estos monitores de estudio son el resultado de más de 30 años de innovación del líder mundial en la fabricación de monitores de estudio. Tomando conceptos de uno de los monitores de estudio más utilizados en el mundo, el CLASSIC 5 propone una solución de frecuencia plana para una escucha más crítica, que se traduce en mezclas más precisas. Con el opcional +2dB KRK Bass Boost, el CLASSIC 5 mantiene la calidad sonora que los productores de todo el mundo han apreciado durante años. Siguiendo los pasos de uno de los monitores de estudio más utilizados en el mundo, el KRK CLASSIC 5 es una solución sólida para mezclas y producciones precisas.',
//         section: 'monitores',
//         cart: 0
//     },
//     {
//         id: '4',
//         name: 'SSL 2+',
//         price: 504000,
//         img: 'https://http2.mlstatic.com/D_NQ_NP_2X_628960-MLU73129425442_122023-F.webp',
//         description: 'Compacta y de precio competitivo, la interfaz de audio / MIDI USB 2x4 de escritorio Solid State Logic SSL 2+ pone el legendario carácter analógico SSL, la conversión impecable y el flujo de trabajo intuitivo estilo consola al alcance de productores, grabadores domésticos, músicos y compositores con un presupuesto ajustado. Sus dos preamplificadores de micrófono diseñados por SSL, accesibles a través de entradas combinadas XLR-1/4 ", cuentan con especificaciones de ruido, espacio libre y ganancia líderes en su clase para el seguimiento de micrófonos, instrumentos eléctricos o señales de nivel de línea con una definición ultralimpia. carácter agregado en una entrada, simplemente presione el botón Legacy 4K de ese canal para agregar un impulso de alta frecuencia y una dulce distorsión armónica, ambos inspirados en las consolas clásicas y anunciadas de la serie 4000 utilizadas en innumerables discos de éxito..',
//         section: 'placas',
//         cart: 0
//     },

// ]


// // funcion para simular la asincronia de los datos. 
// export const getFilteredProducts = (property, value) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // filtro los productos del array segun la propiedad y valor que se le asigne a la funcion
//             let filteredProducts = products.filter(product => product[property] === value)
//             // si se busca por id, que me devuelva un objeto (no un array)
//             if (property == 'id') {
//                 filteredProducts = filteredProducts[0]
//             }


//             resolve(filteredProducts)
//         }, 500)
//     })
// }

// export const getProducts = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(products)
//         }, 500)
//     })
// }
