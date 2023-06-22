const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// async function createCategory(name, link, handle) {
//   try {
//     await prisma.category.create({
//       data: {
//         link,
//         handle,
//         name,
//       },
//     });
//     console.log("Category created");
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// createCategory("Produits", "/produits/", "produits");

// const data = [
//   {
//     "name": "évier",
//     "category": "64930e06a58a7202f1dfcbf1",
//     "filter": "bathroom",
//     "source": "/images/img26.webp",
//     "description": "Bois de Tamarin, bleu turquoise transparent",
//     "dimensions": ""
//   },
// ];

// async function createProducts() {
//   for (const item of data) {
//     const { name, description, source, dimensions, category, filter } = item;

//     try {
//       await prisma.product.create({
//         data: {
//           name,
//           description,
//           source,
//           dimensions,
//           category: {
//             connect: {
//               id: category,
//             },
//           },
//           filter,
//         },
//       });
//       console.log('Produit créé :', name);
//     } catch (error) {
//       console.error('Erreur lors de la création du produit :', error);
//     }
//   }
// }

// async function main() {
//   try {
//     await createProducts();
//   } catch (error) {
//     console.error('Erreur principale :', error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// main();
